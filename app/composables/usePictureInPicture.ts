// Generic Document Picture-in-Picture engine.
//
// One reusable surface that any feature can pop a piece of its own DOM into an
// always-on-top PiP window — a checklist, a cheatsheet, a price ticker, whatever
// lives inside the `host` node. The whole approach is physical node relocation:
// the host stays a Vue-managed node in the main JS realm, we just reparent it
// into the same-origin PiP document, so it keeps full reactivity while it floats
// over the game. On close it goes back in front of `anchor`.
//
// Everything that touches `window`/`document` runs client-side only — the
// support flag is gated on `mounted` (not `import.meta.client`) so the first
// client render matches the prerendered HTML and `nuxt generate` stays clean.

import { ref, computed, onMounted, onBeforeUnmount } from 'vue'

export interface PipOptions {
  // PiP window initial size. The browser remembers user resizes afterwards.
  width?: number
  height?: number
  // Copy the page's stylesheets into the PiP document. PiP windows inherit no
  // CSS, so this is on by default — turn it off only for fully inline-styled
  // content that needs nothing from the page.
  copyStyles?: boolean
  // Class set on the PiP document <body> (theme hook / reset target).
  bodyClass?: string
  // Title shown in the PiP window chrome.
  title?: string
  // Fired right after the host lands in the PiP window — use it to apply
  // PiP-only layout (e.g. stretch the host to fill the window).
  onOpen?: (host: HTMLElement, win: Window) => void
  // Fired just before the host returns to the page — revert anything onOpen did.
  onClose?: (host: HTMLElement) => void
  // Fired when requestWindow rejects (lost user gesture, dismissed prompt).
  onError?: (message: string) => void
}

export function usePictureInPicture(options: PipOptions = {}) {
  // Gated on mount so support-detection computeds resolve identically during
  // prerender and first hydration (avoids a hydration mismatch on the button).
  const mounted = ref(false)
  const supported = computed(() => mounted.value && 'documentPictureInPicture' in window)
  const active = ref(false)
  const error = ref<string | null>(null)

  // The page wires these: `host` is the node to relocate, `anchor` is an empty
  // placeholder it gets re-inserted before when PiP closes. Both must be static
  // (no v-if) so the refs survive across the relocation.
  const host = ref<HTMLElement | null>(null)
  const anchor = ref<HTMLElement | null>(null)
  let pipWindow: Window | null = null

  function cloneStyles(target: Window): void {
    // Copy same-origin rules into a <style>, and clone <link>/<style> nodes for
    // anything whose cssRules can't be read (cross-origin) or that carries
    // @font-face/@import.
    for (const sheet of Array.from(document.styleSheets)) {
      try {
        const css = Array.from(sheet.cssRules).map(r => r.cssText).join('\n')
        const style = target.document.createElement('style')
        style.textContent = css
        target.document.head.appendChild(style)
      }
      catch {
        const node = sheet.ownerNode
        if (node) target.document.head.appendChild(node.cloneNode(true))
      }
    }
  }

  async function open(): Promise<void> {
    if (!supported.value || !host.value || active.value) return
    error.value = null
    try {
      pipWindow = await (window as unknown as {
        documentPictureInPicture: { requestWindow: (o?: object) => Promise<Window> }
      }).documentPictureInPicture.requestWindow({
        width: options.width ?? 380,
        height: options.height ?? 520,
      })
      if (options.copyStyles !== false) cloneStyles(pipWindow)
      if (options.title) pipWindow.document.title = options.title
      if (options.bodyClass) pipWindow.document.body.className = options.bodyClass
      Object.assign(pipWindow.document.body.style, { margin: '0', height: '100vh', overflow: 'hidden' })
      pipWindow.document.body.appendChild(host.value)
      options.onOpen?.(host.value, pipWindow)
      active.value = true
      // Fires when the user closes the PiP window via its own chrome.
      pipWindow.addEventListener('pagehide', close, { once: true })
    }
    catch (e) {
      active.value = false
      pipWindow = null
      const message = e instanceof Error ? e.message : 'Không mở được cửa sổ Picture-in-Picture'
      error.value = message
      options.onError?.(message)
    }
  }

  function close(): void {
    // Return the host to the page before the PiP document tears down.
    if (host.value) {
      options.onClose?.(host.value)
      if (anchor.value?.parentNode) {
        anchor.value.parentNode.insertBefore(host.value, anchor.value)
      }
    }
    active.value = false
    if (pipWindow && !pipWindow.closed) pipWindow.close()
    pipWindow = null
  }

  function toggle(): void {
    if (active.value) close()
    else void open()
  }

  onMounted(() => { mounted.value = true })
  onBeforeUnmount(() => { if (active.value) close() })

  return { supported, active, error, host, anchor, open, close, toggle }
}
