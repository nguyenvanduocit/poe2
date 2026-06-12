// Leveling tracker state + Client.txt monitor + Picture-in-Picture control.
//
// Three responsibilities, kept separate inside one composable because they
// share the route pointer:
//   1. Route position + checklist state (persisted to localStorage).
//   2. Client.txt auto-advance via the File System Access API (Chromium only).
//   3. Pop-out overlay via the Document Picture-in-Picture API (Chromium only).
//
// Everything that touches `window`/`navigator`/IndexedDB runs only on the
// client (guarded by `import.meta.client` or inside user-gesture handlers /
// onMounted) so `nuxt generate` can prerender /leveling to static HTML.

import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import { LEVELING_DATA, type LevelingAct, type LevelingZone } from '~/composables/data/leveling-poe2-0-5'
import { latestEnteredZone, pickForwardIndex, pickLatestIndex } from '~/composables/leveling-match'
import { usePictureInPicture } from '~/composables/usePictureInPicture'

const STORAGE_KEY = 'poe2-leveling-0-5'
const IDB_NAME = 'poe2-leveling'
const IDB_STORE = 'handles'
const IDB_KEY = 'client-txt'
const POLL_MS = 1200
// Only the tail of Client.txt is scanned on first connect — the log grows to
// hundreds of MB over a league, so reading the whole file would freeze the tab.
const TAIL_BYTES = 4 * 1024 * 1024

interface PersistShape {
  checked: string[]
  currentZoneId: string | null
  furthestZoneId: string | null
}

interface FlatZone {
  act: LevelingAct
  zone: LevelingZone
  globalIdx: number
}

// ---- IndexedDB: persist the FileSystemFileHandle across reloads ----
// Handles are structured-cloneable, so they survive in IDB. Permission does
// NOT persist — re-granting requires a user gesture (the Reconnect button).
function idbOpen(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    const req = indexedDB.open(IDB_NAME, 1)
    req.onupgradeneeded = () => req.result.createObjectStore(IDB_STORE)
    req.onsuccess = () => resolve(req.result)
    req.onerror = () => reject(req.error)
  })
}

async function idbSetHandle(handle: FileSystemFileHandle): Promise<void> {
  const db = await idbOpen()
  await new Promise<void>((resolve, reject) => {
    const tx = db.transaction(IDB_STORE, 'readwrite')
    tx.objectStore(IDB_STORE).put(handle, IDB_KEY)
    tx.oncomplete = () => resolve()
    tx.onerror = () => reject(tx.error)
  })
  db.close()
}

async function idbGetHandle(): Promise<FileSystemFileHandle | null> {
  const db = await idbOpen()
  const handle = await new Promise<FileSystemFileHandle | null>((resolve, reject) => {
    const tx = db.transaction(IDB_STORE, 'readonly')
    const req = tx.objectStore(IDB_STORE).get(IDB_KEY)
    req.onsuccess = () => resolve((req.result as FileSystemFileHandle) ?? null)
    req.onerror = () => reject(req.error)
  })
  db.close()
  return handle
}

export function useLeveling() {
  const data = LEVELING_DATA

  // Flips true only after the client mounts. Feature-detection computeds key
  // off this (not `import.meta.client`) so the first client render matches the
  // SSR HTML — otherwise the support flags would resolve true at hydration but
  // false during prerender, tripping a hydration mismatch.
  const mounted = ref(false)

  // Flattened route + lookups -------------------------------------------------
  const flat = computed<FlatZone[]>(() => {
    const out: FlatZone[] = []
    let g = 0
    for (const act of data) for (const zone of act.zones) out.push({ act, zone, globalIdx: g++ })
    return out
  })
  const total = computed(() => flat.value.length)

  // clientName (lower-cased) -> sorted global indices. Multiple indices only
  // happen if a zone name repeats (Cruel); we resolve forward-only at match.
  const idxByClientName = computed(() => {
    const m = new Map<string, number[]>()
    flat.value.forEach((f, i) => {
      const k = f.zone.clientName.trim().toLowerCase()
      if (!m.has(k)) m.set(k, [])
      m.get(k)!.push(i)
    })
    return m
  })
  const idxByZoneId = computed(() => {
    const m = new Map<string, number>()
    flat.value.forEach((f, i) => m.set(f.zone.id, i))
    return m
  })

  // Position ------------------------------------------------------------------
  const currentIdx = ref(0)
  const furthestIdx = ref(0)
  const checked = ref<Set<string>>(new Set())

  const current = computed<FlatZone | null>(() => flat.value[currentIdx.value] ?? null)
  const currentAct = computed(() => current.value?.act ?? null)
  const currentZone = computed(() => current.value?.zone ?? null)

  const totalSteps = computed(() => {
    let n = 0
    for (const f of flat.value) n += f.zone.steps.length
    return n
  })
  const checkedCount = computed(() => checked.value.size)
  const overallPct = computed(() =>
    totalSteps.value === 0 ? 0 : Math.round((checkedCount.value / totalSteps.value) * 100),
  )
  const zoneDone = computed(() => {
    const z = currentZone.value
    if (!z || z.steps.length === 0) return false
    return z.steps.every(s => checked.value.has(s.id))
  })

  // Persistence ---------------------------------------------------------------
  function persist(): void {
    if (!import.meta.client) return
    try {
      const payload: PersistShape = {
        checked: Array.from(checked.value),
        currentZoneId: current.value?.zone.id ?? null,
        furthestZoneId: flat.value[furthestIdx.value]?.zone.id ?? null,
      }
      localStorage.setItem(STORAGE_KEY, JSON.stringify(payload))
    }
    catch {
      // localStorage unavailable (private mode) — in-memory state still works.
    }
  }

  function restore(): void {
    if (!import.meta.client) return
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      if (!raw) return
      const p = JSON.parse(raw) as Partial<PersistShape>
      if (Array.isArray(p.checked)) checked.value = new Set(p.checked)
      if (p.currentZoneId && idxByZoneId.value.has(p.currentZoneId))
        currentIdx.value = idxByZoneId.value.get(p.currentZoneId)!
      if (p.furthestZoneId && idxByZoneId.value.has(p.furthestZoneId))
        furthestIdx.value = idxByZoneId.value.get(p.furthestZoneId)!
      furthestIdx.value = Math.max(furthestIdx.value, currentIdx.value)
    }
    catch {
      // corrupt payload — ignore, start fresh.
    }
  }

  // Navigation ----------------------------------------------------------------
  function goTo(idx: number): void {
    if (idx < 0 || idx >= total.value) return
    currentIdx.value = idx
    furthestIdx.value = Math.max(furthestIdx.value, idx)
    persist()
  }
  function next(): void {
    goTo(currentIdx.value + 1)
  }
  function prev(): void {
    goTo(currentIdx.value - 1)
  }

  function toggleStep(stepId: string): void {
    const s = new Set(checked.value)
    if (s.has(stepId)) s.delete(stepId)
    else s.add(stepId)
    checked.value = s
    persist()
  }

  // Tick = mark every step in the current zone done, then advance. Mirrors the
  // big ✓ Tick button on poeviethoa.net.
  function tick(): void {
    const z = currentZone.value
    if (z) {
      const s = new Set(checked.value)
      for (const step of z.steps) s.add(step.id)
      checked.value = s
    }
    if (currentIdx.value < total.value - 1) next()
    else persist()
  }

  function resetProgress(): void {
    if (import.meta.client && !window.confirm('Reset toàn bộ tiến độ leveling?')) return
    checked.value = new Set()
    currentIdx.value = 0
    furthestIdx.value = 0
    persist()
  }

  // Forward-only auto-advance from a detected zone name (live poll). Re-entering
  // a zone behind the pointer (town trips, hideout, relog) is ignored.
  function advanceToZone(clientName: string): boolean {
    const idxs = idxByClientName.value.get(clientName.trim().toLowerCase())
    const fwd = pickForwardIndex(idxs, currentIdx.value)
    if (fwd === null || fwd === currentIdx.value) return false
    currentIdx.value = fwd
    furthestIdx.value = Math.max(furthestIdx.value, fwd)
    lastDetectedZone.value = flat.value[fwd]?.zone.name ?? clientName
    persist()
    return true
  }

  // First-connect jump: land on where the player actually IS (latest entered
  // zone), even if it is behind the furthest zone reached — bypasses the
  // forward-only gate so reconnecting after backtracking is accurate.
  function jumpToZone(clientName: string): void {
    const idxs = idxByClientName.value.get(clientName.trim().toLowerCase())
    const idx = pickLatestIndex(idxs)
    if (idx === null) return
    currentIdx.value = idx
    furthestIdx.value = Math.max(furthestIdx.value, idx)
    lastDetectedZone.value = flat.value[idx]?.zone.name ?? clientName
    persist()
  }

  // ---- Client.txt monitor (File System Access API) ----
  const fsSupported = computed(() => mounted.value && 'showOpenFilePicker' in window)
  const connected = ref(false) // monitor running
  const hasStoredHandle = ref(false) // handle in IDB but not yet (re)connected
  const monitorError = ref<string | null>(null)
  const lastDetectedZone = ref<string | null>(null)

  let handle: FileSystemFileHandle | null = null
  let byteOffset = 0
  let lastMod = 0
  let timer: ReturnType<typeof setTimeout> | null = null
  // Generation token: every stop bumps it so an in-flight poll() suspended on an
  // await cannot re-arm the loop after the component unmounts or a new monitor
  // supersedes it. This is what makes the loop actually die on cleanup.
  let epoch = 0

  function stopMonitor(): void {
    epoch++
    if (timer) clearTimeout(timer)
    timer = null
    handle = null
    connected.value = false
  }

  async function readChunk(file: File): Promise<string> {
    // Read appended bytes [byteOffset, EOF), keep only up to the last newline,
    // and advance the offset by the EXACT byte count consumed (work on bytes,
    // not the decoded string, so an offset never lands mid-codepoint). A
    // half-written trailing line stays unread until its newline arrives.
    if (file.size < byteOffset) byteOffset = 0 // file rotated/truncated
    const bytes = new Uint8Array(await file.slice(byteOffset).arrayBuffer())
    let lastNL = -1
    for (let i = bytes.length - 1; i >= 0; i--) {
      if (bytes[i] === 0x0A) { lastNL = i; break }
    }
    if (lastNL === -1) return '' // no complete line yet
    const usable = bytes.subarray(0, lastNL + 1)
    byteOffset += usable.byteLength
    return new TextDecoder().decode(usable)
  }

  async function poll(): Promise<void> {
    const myEpoch = epoch
    if (!handle) return
    try {
      const file = await handle.getFile()
      if (file.lastModified !== lastMod || byteOffset < file.size) {
        lastMod = file.lastModified
        const chunk = await readChunk(file)
        if (chunk) {
          const zone = latestEnteredZone(chunk)
          if (zone) advanceToZone(zone)
        }
      }
    }
    catch (e) {
      monitorError.value = e instanceof Error ? e.message : 'Đọc Client.txt thất bại'
      stopMonitor()
      return
    }
    // Only re-arm if this generation is still the live one and we weren't stopped.
    if (myEpoch === epoch && handle) timer = setTimeout(poll, POLL_MS)
  }

  async function startMonitor(h: FileSystemFileHandle): Promise<void> {
    stopMonitor() // cancel any live loop first (bumps epoch, clears handle)
    handle = h
    monitorError.value = null
    connected.value = true // disable the connect button immediately
    const myEpoch = epoch
    try {
      const file = await h.getFile()
      // First connect: scan only the tail for the LATEST entered zone and jump
      // straight there (where the player actually is), then read incrementally.
      const text = await file.slice(Math.max(0, file.size - TAIL_BYTES)).text()
      const zone = latestEnteredZone(text)
      if (zone) jumpToZone(zone)
      byteOffset = file.size
      lastMod = file.lastModified
    }
    catch (e) {
      stopMonitor() // resets connected + epoch so the error state is clean
      throw e
    }
    if (myEpoch === epoch && handle) timer = setTimeout(poll, POLL_MS)
  }

  // showOpenFilePicker + requestPermission both need a user gesture (a click).
  async function connectClientTxt(): Promise<void> {
    if (!fsSupported.value) return
    try {
      const [h] = await (window as unknown as {
        showOpenFilePicker: (o?: object) => Promise<FileSystemFileHandle[]>
      }).showOpenFilePicker({
        types: [{ description: 'POE Client log', accept: { 'text/plain': ['.txt'] } }],
        multiple: false,
      })
      if (!h) return
      await idbSetHandle(h)
      hasStoredHandle.value = true
      await startMonitor(h)
    }
    catch (e) {
      // AbortError = user cancelled the picker; not an error worth surfacing.
      if (e instanceof DOMException && e.name === 'AbortError') return
      monitorError.value = e instanceof Error ? e.message : 'Không mở được file'
    }
  }

  // Re-attach a handle stored from a previous session. Must be called from a
  // click (permission re-grant needs transient activation).
  async function reconnect(): Promise<void> {
    if (!fsSupported.value) return
    try {
      const h = handle ?? (await idbGetHandle())
      if (!h) {
        await connectClientTxt()
        return
      }
      const perm = (h as unknown as {
        queryPermission: (o: object) => Promise<PermissionState>
        requestPermission: (o: object) => Promise<PermissionState>
      })
      let state = await perm.queryPermission({ mode: 'read' })
      if (state !== 'granted') state = await perm.requestPermission({ mode: 'read' })
      if (state !== 'granted') {
        monitorError.value = 'Bạn cần cấp quyền đọc Client.txt'
        return
      }
      await startMonitor(h)
    }
    catch (e) {
      monitorError.value = e instanceof Error ? e.message : 'Reconnect thất bại'
    }
  }

  function disconnect(): void {
    stopMonitor() // clears the timer, nulls the handle, flips connected off
  }

  // ---- Picture-in-Picture: pop the overlay over the game (shared engine) ----
  // The relocate-node + clone-style + lifecycle plumbing lives in
  // usePictureInPicture; here we only feed it the leveling-specific bits:
  // the PiP-fill overrides and routing PiP errors into the same monitorError
  // banner. The page still wires pipHost/pipAnchor and calls togglePip.
  const {
    supported: pipSupported,
    active: pipActive,
    host: pipHost,
    anchor: pipAnchor,
    toggle: togglePip,
  } = usePictureInPicture({
    width: 380,
    height: 520,
    bodyClass: 'leveling-pip-body',
    // On the page the frame hugs its content (auto height, capped max-height);
    // inside PiP it must fill the whole window instead.
    onOpen: (el) => {
      Object.assign(el.style, { height: '100vh', maxHeight: 'none', border: '0', boxShadow: 'none' })
    },
    onClose: (el) => {
      Object.assign(el.style, { height: '', maxHeight: '', border: '', boxShadow: '' })
    },
    onError: (message) => { monitorError.value = `Không mở được overlay: ${message}` },
  })

  // ---- Lifecycle ----
  onMounted(async () => {
    mounted.value = true
    restore()
    if (fsSupported.value) {
      try {
        hasStoredHandle.value = !!(await idbGetHandle())
      }
      catch {
        hasStoredHandle.value = false
      }
    }
  })

  onBeforeUnmount(() => {
    stopMonitor()
    // PiP teardown is handled by usePictureInPicture's own onBeforeUnmount.
  })

  return {
    // data
    data,
    flat,
    // position
    currentIdx,
    furthestIdx,
    total,
    current,
    currentAct,
    currentZone,
    checked,
    zoneDone,
    checkedCount,
    totalSteps,
    overallPct,
    // nav
    goTo,
    next,
    prev,
    tick,
    toggleStep,
    resetProgress,
    // client.txt
    fsSupported,
    connected,
    hasStoredHandle,
    monitorError,
    lastDetectedZone,
    connectClientTxt,
    reconnect,
    disconnect,
    // pip
    pipSupported,
    pipActive,
    pipHost,
    pipAnchor,
    togglePip,
  }
}
