import { ref, computed } from 'vue'

// Types for skill tree data
export interface SkillTreeNode {
  id: string
  x: number
  y: number
  name: string
  icon: string | null
  inactiveIcon: string | null
  isNotable: boolean
  isKeystone: boolean
  isMastery: boolean
  isJewelSocket: boolean
  isAscendancyStart: boolean
  ascendancyName: string | null
  classStartIndex?: number
  stats: string[]
  out: string[]
  group: string
  ascX?: number
  ascY?: number
  orbit?: number
  orbitIndex?: number
}

export interface SkillTreeGroup {
  x: number
  y: number
  orbits: number[]
  nodes: string[]
}

export interface SkillTreeClass {
  name: string
  base_str: number
  base_dex: number
  base_int: number
  ascendancies: Array<{
    id: string
    name: string
    flavourText?: string
    flavourTextColour?: string
  }>
}

export interface SkillTreeConstants {
  orbitRadii: number[]
  skillsPerOrbit: number[]
}

export interface SkillTreeData {
  tree: string
  classes: SkillTreeClass[]
  constants: SkillTreeConstants
  groups: Record<string, SkillTreeGroup>
  nodes: Record<string, any>
  min_x: number
  max_x: number
  min_y: number
  max_y: number
  alternate_ascendancies?: Array<{
    id: string
    name: string
  }>
}

export interface SpriteCoord {
  x: number
  y: number
  w: number
  h: number
}

export interface SpriteCoords {
  [key: string]: SpriteCoord
}

export interface SkillTreeConnection {
  x1: number
  y1: number
  x2: number
  y2: number
  id1: string
  id2: string
}

// Main composable
export function useSkillTree() {
  // State
  const treeData = ref<SkillTreeData | null>(null)
  const nodes = ref<SkillTreeNode[]>([])
  const nodeMap = ref<Record<string, number>>({})
  const connections = ref<SkillTreeConnection[]>([])
  const adjacencyMap = ref<Record<string, string[]>>({})
  const classStartPositions = ref<Record<number, { x: number; y: number }>>({})

  // Sprite coords
  const activeCoords = ref<SpriteCoords>({})
  const inactiveCoords = ref<SpriteCoords>({})
  const frameCoords = ref<SpriteCoords>({})
  const masteryCoords = ref<SpriteCoords>({})
  const masteryInactiveCoords = ref<SpriteCoords>({})
  const groupBgCoords = ref<SpriteCoords>({})
  const startNodeCoords = ref<SpriteCoords>({})

  // Sprite images
  const spriteImages = ref<Record<string, HTMLImageElement>>({})

  // User state
  const selectedClass = ref(-1)
  const allocatedSet = ref<Set<string>>(new Set())
  const highlightedNodes = ref<Set<string>>(new Set())
  const searchQuery = ref('')
  const searchMatchSet = ref<Set<number> | null>(null)

  // View state
  const vx = ref(0)
  const vy = ref(0)
  const vw = ref(0)
  const vh = ref(0)

  // Loading state
  const isLoading = ref(true)
  const loadedSprites = ref(0)
  const totalSprites = 6

  // UI state
  const hoveredNode = ref<SkillTreeNode | null>(null)
  const tooltipPosition = ref({ x: 0, y: 0 })

  const ORBIT_4_ANGLES = [
    0, 10, 20, 30, 40, 45, 50, 60, 70, 80, 90, 100, 110, 120, 130, 135, 140,
    150, 160, 170, 180, 190, 200, 210, 220, 225, 230, 240, 250, 260, 270, 280,
    290, 300, 310, 315, 320, 330, 340, 350
  ]

  // Calculate node position
  function calcPos(node: { orbit?: number; orbitIndex?: number }, group: { x: number; y: number }) {
    const orbitRadii = treeData.value?.constants.orbitRadii || []
    const skillsPerOrbit = treeData.value?.constants.skillsPerOrbit || []

    const orbit = node.orbit || 0
    const orbitIndex = node.orbitIndex || 0
    const radius = orbitRadii[orbit] || 0

    if (radius === 0) return { x: group.x, y: group.y }

    let angle: number
    if (orbit === 4) {
      angle = (ORBIT_4_ANGLES[orbitIndex] || 0) * Math.PI / 180
    } else {
      const totalPositions = skillsPerOrbit[orbit] || 1
      angle = (orbitIndex / totalPositions) * 2 * Math.PI
    }

    return {
      x: group.x + radius * Math.sin(angle),
      y: group.y - radius * Math.cos(angle)
    }
  }

  // Parse tree data
  function parseTreeData(data: SkillTreeData) {
    treeData.value = data

    const NODES: SkillTreeNode[] = []
    const nodeMapLocal: Record<string, number> = {}

    for (const gid in data.groups) {
      const group = data.groups[gid]
      if (!group) continue
      const gnodes = group.nodes || []
      for (const nid of gnodes) {
        const node = data.nodes[nid]
        if (!node) continue

        const pos = calcPos(node, group)
        const entry: SkillTreeNode = {
          id: nid,
          x: pos.x,
          y: pos.y,
          name: node.name || '',
          icon: node.icon || null,
          inactiveIcon: node.inactiveIcon || null,
          isNotable: !!node.isNotable,
          isKeystone: !!node.isKeystone,
          isMastery: !!node.isMastery,
          isJewelSocket: !!node.isJewelSocket,
          isAscendancyStart: !!node.isAscendancyStart,
          ascendancyName: node.ascendancyName || null,
          classStartIndex: node.classStartIndex,
          stats: node.stats || [],
          out: node.out || [],
          group: gid,
          orbit: node.orbit,
          orbitIndex: node.orbitIndex
        }
        nodeMapLocal[nid] = NODES.length
        NODES.push(entry)
      }
    }

    nodes.value = NODES
    nodeMap.value = nodeMapLocal

    // Calculate ascendancy positions
    const ascendancyStartNodes = NODES.filter(n => n.isAscendancyStart && n.ascendancyName)
    const groupAscPos: Record<string, { x: number; y: number }> = {}

    for (const ascStart of ascendancyStartNodes) {
      if (!ascStart.ascendancyName) continue
      const ascGroupId = ascStart.group
      const ascGroup = data.groups[ascGroupId]
      const classStart = NODES.find(n => n.classStartIndex !== undefined)
      if (!classStart) continue

      let classIdx = -1
      for (let c = 0; c < (data.classes || []).length; c++) {
        const cls = data.classes?.[c]
        if (cls?.ascendancies) {
          for (let a = 0; a < cls.ascendancies.length; a++) {
            if (cls.ascendancies[a]?.name === ascStart.ascendancyName) {
              classIdx = c
              break
            }
          }
        }
        if (classIdx >= 0) break
      }

      const baseAngle = classIdx * (2 * Math.PI / 7) + Math.PI
      const offsetRadius = 1500
      const ascOffsetX = offsetRadius * Math.sin(baseAngle)
      const ascOffsetY = -offsetRadius * Math.cos(baseAngle)

      if (ascGroup) {
        groupAscPos[ascGroupId] = {
          x: ascGroup.x + ascOffsetX,
          y: ascGroup.y + ascOffsetY
        }
      }
    }

    for (const n of NODES) {
      if (n.ascendancyName) {
        const grpId = n.group
        const grpAscPos = groupAscPos[grpId]
        if (grpAscPos) {
          const ascPos = calcPos({ orbit: n.orbit || 0, orbitIndex: n.orbitIndex || 0 }, grpAscPos)
          n.ascX = ascPos.x
          n.ascY = ascPos.y
        }
      }
    }

    // Build connections
    const CONNS: SkillTreeConnection[] = []
    const connSet: Record<string, boolean> = {}
    const adjacencyMapLocal: Record<string, string[]> = {}

    for (const n of NODES) {
      if (!adjacencyMapLocal[n.id]) adjacencyMapLocal[n.id] = []
      for (const outId of n.out) {
        if (nodeMapLocal[outId] === undefined) continue
        const target = NODES[nodeMapLocal[outId]]
        if (!target) continue

        if (n.ascendancyName && target.ascendancyName && n.ascendancyName !== target.ascendancyName) continue
        if (n.ascendancyName !== target.ascendancyName && !n.isAscendancyStart && !target.isAscendancyStart) continue
        if ((n.classStartIndex !== undefined && target.isAscendancyStart) || (target.classStartIndex !== undefined && n.isAscendancyStart)) continue

        const key = n.id < outId ? `${n.id}-${outId}` : `${outId}-${n.id}`
        if (connSet[key]) continue
        connSet[key] = true
        CONNS.push({ x1: n.x, y1: n.y, x2: target.x, y2: target.y, id1: n.id, id2: target.id })
        if (!adjacencyMapLocal[n.id]) adjacencyMapLocal[n.id] = []
        adjacencyMapLocal[n.id]!.push(target.id)
        if (!adjacencyMapLocal[outId]) adjacencyMapLocal[outId] = []
        adjacencyMapLocal[outId]!.push(n.id)
      }
    }

    connections.value = CONNS
    adjacencyMap.value = adjacencyMapLocal

    const positions: Record<number, { x: number; y: number }> = {}
    for (const n of NODES) {
      if (n.classStartIndex !== undefined) {
        positions[n.classStartIndex] = { x: n.x, y: n.y }
      }
    }
    classStartPositions.value = positions

    const padding = 1500
    vx.value = data.min_x - padding
    vy.value = data.min_y - padding
    vw.value = (data.max_x - data.min_x) + padding * 2
    vh.value = (data.max_y - data.min_y) + padding * 2

    return NODES
  }

  // Find class start node
  function classStartNodeId(classIdx: number): string | null {
    const n = nodes.value.find(n => n.classStartIndex === classIdx)
    return n ? n.id : null
  }

  // Node weight for pathfinding
  function nodeWeight(nodeId: string): number {
    const idx = nodeMap.value[nodeId]
    if (idx === undefined) return 1
    const n = nodes.value[idx]
    if (!n) return 1
    if (n.isNotable || n.isKeystone) return 0.3
    return 1
  }

  // Find shortest path using Dijkstra
  function findShortestPath(targetId: string): string[] | null {
    if (allocatedSet.value.has(targetId)) return null

    const dist: Record<string, number> = {}
    const parent: Record<string, string | null | undefined> = {}
    dist[targetId] = nodeWeight(targetId)
    parent[targetId] = null
    const pq = [{ id: targetId, d: dist[targetId] }]

    while (pq.length > 0) {
      pq.sort((a, b) => a.d - b.d)
      const cur = pq.shift()!
      if (cur.d > (dist[cur.id] || Infinity)) continue

      const neighbors = adjacencyMap.value[cur.id] || []
      for (const nb of neighbors) {
        if (allocatedSet.value.has(nb)) {
          const path: string[] = []
          let step: string | null | undefined = cur.id
          while (step !== null && step !== undefined) {
            if (!allocatedSet.value.has(step)) path.push(step)
            step = parent[step]
          }
          return path
        }
        const w = cur.d + nodeWeight(nb)
        if (dist[nb] === undefined || w < dist[nb]) {
          dist[nb] = w
          parent[nb] = cur.id
          pq.push({ id: nb, d: w })
        }
      }
    }
    return null
  }

  // Check if node can be allocated
  function canAllocate(nodeId: string): boolean {
    if (allocatedSet.value.has(nodeId)) return false
    if (allocatedSet.value.size === 0) {
      const idx = nodeMap.value[nodeId]
      if (idx === undefined) return false
      const n = nodes.value[idx]
      return n !== undefined && n.classStartIndex !== undefined
    }
    const neighbors = adjacencyMap.value[nodeId] || []
    return neighbors.some(nb => allocatedSet.value.has(nb))
  }

  // Deallocate with orphans removal
  function deallocateWithOrphans(nodeId: string): boolean {
    const idx = nodeMap.value[nodeId]
    if (idx === undefined) return false
    const n = nodes.value[idx]
    if (!n) return false
    if (n.classStartIndex !== undefined) return false

    const startId = classStartNodeId(selectedClass.value)
    if (!startId) return false

    allocatedSet.value.delete(nodeId)

    const reachable = new Set<string>()
    const queue = [startId]
    reachable.add(startId)

    while (queue.length > 0) {
      const cur = queue.shift()!
      const neighbors = adjacencyMap.value[cur] || []
      for (const nb of neighbors) {
        if (allocatedSet.value.has(nb) && !reachable.has(nb)) {
          reachable.add(nb)
          queue.push(nb)
        }
      }
    }

    allocatedSet.value.clear()
    reachable.forEach(id => allocatedSet.value.add(id))
    return true
  }

  // Allocate node with auto-pathfinding
  function allocateNode(nodeId: string) {
    if (allocatedSet.value.has(nodeId)) {
      deallocateWithOrphans(nodeId)
    } else {
      const path = findShortestPath(nodeId)
      if (path && path.length > 0) {
        path.forEach(id => allocatedSet.value.add(id))
      }
    }
  }

  // Select class
  function selectClass(classIdx: number) {
    selectedClass.value = classIdx
    allocatedSet.value.clear()
    const startId = classStartNodeId(classIdx)
    if (startId) allocatedSet.value.add(startId)

    const pos = classStartPositions.value[classIdx]
    if (pos) {
      const viewSize = 8000
      vx.value = pos.x - viewSize / 2
      vy.value = pos.y - viewSize / 2
      vw.value = viewSize
      vh.value = viewSize
    }
  }

  // Search
  function search(query: string) {
    searchQuery.value = query
    if (!query) {
      searchMatchSet.value = null
      return
    }

    const q = query.toLowerCase()
    const matches = new Set<number>()
    for (let i = 0; i < nodes.value.length; i++) {
      const n = nodes.value[i]
      if (!n) continue
      const name = (n.name || '').toLowerCase()
      const stats = (n.stats || []).join(' ').toLowerCase()
      if (name.includes(q) || stats.includes(q)) {
        matches.add(i)
      }
    }
    searchMatchSet.value = matches
  }

  // Reset allocated points
  function resetPoints() {
    if (selectedClass.value === -1) return
    allocatedSet.value.clear()
    const startId = classStartNodeId(selectedClass.value)
    if (startId) allocatedSet.value.add(startId)
  }

  // Load character passive hashes and set class
  function loadCharacterHashes(hashes: number[], classIdx: number) {
    selectedClass.value = classIdx
    allocatedSet.value.clear()
    const startId = classStartNodeId(classIdx)
    if (startId) allocatedSet.value.add(startId)

    for (const hash of hashes) {
      const id = String(hash)
      if (nodeMap.value[id] !== undefined) {
        allocatedSet.value.add(id)
      }
    }

    // Center on class start
    const pos = classStartPositions.value[classIdx]
    if (pos) {
      const viewSize = 8000
      vx.value = pos.x - viewSize / 2
      vy.value = pos.y - viewSize / 2
      vw.value = viewSize
      vh.value = viewSize
    }
  }

  // Set highlighted nodes
  function setHighlightedNodes(nodeIds: number[]) {
    highlightedNodes.value.clear()
    for (const id of nodeIds) {
      highlightedNodes.value.add(String(id))
    }
  }

  // Set sprite coords from parsed data
  function setSpriteCoords(coords: {
    active?: SpriteCoords
    inactive?: SpriteCoords
    frame?: SpriteCoords
    mastery?: SpriteCoords
    masteryInactive?: SpriteCoords
    groupBg?: SpriteCoords
    startNode?: SpriteCoords
  }) {
    if (coords.active) activeCoords.value = coords.active
    if (coords.inactive) inactiveCoords.value = coords.inactive
    if (coords.frame) frameCoords.value = coords.frame
    if (coords.mastery) masteryCoords.value = coords.mastery
    if (coords.masteryInactive) masteryInactiveCoords.value = coords.masteryInactive
    if (coords.groupBg) groupBgCoords.value = coords.groupBg
    if (coords.startNode) startNodeCoords.value = coords.startNode
  }

  // Add sprite image
  function addSpriteImage(key: string, img: HTMLImageElement) {
    spriteImages.value[key] = img
    loadedSprites.value++
    if (loadedSprites.value >= totalSprites) {
      isLoading.value = false
    }
  }

  // Computed values
  const pointsAllocated = computed(() => allocatedSet.value.size)

  const classes = computed(() => treeData.value?.classes || [
    { name: 'Scion', base_str: 20, base_dex: 20, base_int: 20, ascendancies: [] },
    { name: 'Marauder', base_str: 32, base_dex: 14, base_int: 14, ascendancies: [] },
    { name: 'Ranger', base_str: 14, base_dex: 32, base_int: 14, ascendancies: [] },
    { name: 'Witch', base_str: 14, base_dex: 14, base_int: 32, ascendancies: [] },
    { name: 'Duelist', base_str: 20, base_dex: 20, base_int: 14, ascendancies: [] },
    { name: 'Templar', base_str: 14, base_dex: 14, base_int: 32, ascendancies: [] },
    { name: 'Shadow', base_str: 14, base_dex: 20, base_int: 20, ascendancies: [] },
  ])

  // Groups for orbit rings
  const groupRings = computed(() => {
    if (!treeData.value) return []
    const orbitRadii = treeData.value.constants.orbitRadii
    const result: Array<{ x: number; y: number; r: number; orbits: number[] }> = []
    for (const gid in treeData.value.groups) {
      const group = treeData.value.groups[gid]
      if (!group || !group.orbits || group.orbits.length <= 1) continue
      const maxOrbit = Math.max(...group.orbits)
      const r = orbitRadii[maxOrbit] || 0
      if (r > 0) result.push({ x: group.x, y: group.y, r, orbits: group.orbits })
    }
    return result
  })

  return {
    // State
    treeData,
    nodes,
    connections,
    selectedClass,
    allocatedSet,
    highlightedNodes,
    searchQuery,
    searchMatchSet,
    isLoading,
    hoveredNode,
    tooltipPosition,
    vx,
    vy,
    vw,
    vh,
    spriteImages,

    // Sprite coords
    activeCoords,
    inactiveCoords,
    frameCoords,
    masteryCoords,
    masteryInactiveCoords,
    groupBgCoords,
    startNodeCoords,

    // Computed
    pointsAllocated,
    classes,
    groupRings,
    classStartPositions,

    // Methods
    parseTreeData,
    calcPos,
    canAllocate,
    allocateNode,
    selectClass,
    search,
    resetPoints,
    classStartNodeId,
    setSpriteCoords,
    addSpriteImage,
    loadCharacterHashes,
    setHighlightedNodes,
  }
}