// POE2 0.5 "Return of the Ancients" campaign leveling route.
//
// Consumed by `useLeveling` + `app/pages/leveling.vue` (the interactive
// leveling tracker, mirrors poeviethoa.net/leveling). Shape is machine-first:
// `clientName` is the EXACT in-game zone string POE writes to Client.txt on an
// English client (`… ] : You have entered <clientName>.`), so the Client.txt
// monitor can map a zone-entry line → a route position. Step text is the
// human surface: short imperative Vietnamese instructions that keep English
// game terms (skills/items/monsters/zones), overlay-checklist style.
//
// Data body (the `LEVELING_DATA` array) is authored from the wiki mirror
// (data/wiki/Act_N.md + zone/quest pages), Acts 1-4 (the live 0.5 campaign;
// Acts 5-6 are stubs).

export type LevelingStepType =
  | 'quest' // start / turn in a quest, talk to NPC
  | 'kill' // defeat a boss / required monster
  | 'pickup' // grab a chest, gem, item, skill point
  | 'waypoint' // activate the area waypoint
  | 'transition' // move to the next zone
  | 'trial' // Trial of the Sekhemas / Ascendancy
  | 'note' // free-form tip

export interface LevelingStep {
  /** Stable slug, unique within the dataset — used as the localStorage check key. */
  id: string
  /** Short Vietnamese instruction, English proper nouns kept. */
  text: string
  type: LevelingStepType
  optional: boolean
}

export interface LevelingZone {
  /** Stable slug e.g. `act1-the-riverbank`. */
  id: string
  /** Display name (English) e.g. `The Riverbank`. */
  name: string
  /**
   * EXACT in-game zone name (English client) as logged to Client.txt.
   * This is the auto-advance match key — copy character-for-character from
   * the wiki page title. Towns log their own name too.
   */
  clientName: string
  /** Area level, string to allow ranges e.g. `1` or `46-51`. */
  areaLevel: string
  /** Town hub / waypoint-only encampment (no combat route). */
  isTown: boolean
  /** Act/zone boss name (English) or undefined. */
  boss?: string
  steps: LevelingStep[]
}

export interface LevelingAct {
  id: number
  /** e.g. `Act 1`. */
  name: string
  /** Region the act takes place in, e.g. `Ogham`. */
  region: string
  zones: LevelingZone[]
}

// Full Acts 1-4 route, authored from the wiki mirror (data/wiki/Act_N.md +
// zone/quest pages). 70 zones, 306 steps.
export const LEVELING_DATA: LevelingAct[] = [
  {
    "id": 1,
    "name": "Act 1",
    "region": "Ogham",
    "zones": [
      {
        "id": "act1-the-riverbank",
        "name": "The Riverbank",
        "clientName": "The Riverbank",
        "areaLevel": "1",
        "isTown": false,
        "boss": "The Bloated Miller",
        "steps": [
          {
            "id": "act1-the-riverbank-s1",
            "text": "Nói chuyện với Wounded Man để nhận weapon khởi đầu",
            "type": "quest",
            "optional": false
          },
          {
            "id": "act1-the-riverbank-s2",
            "text": "Nhặt Large Chest chứa Skill Gem dọc bờ sông",
            "type": "pickup",
            "optional": false
          },
          {
            "id": "act1-the-riverbank-s3",
            "text": "Giết The Bloated Miller ở Besieged Encampment",
            "type": "kill",
            "optional": false
          },
          {
            "id": "act1-the-riverbank-s4",
            "text": "Vào Clearfell Encampment",
            "type": "transition",
            "optional": false
          }
        ]
      },
      {
        "id": "act1-clearfell-encampment",
        "name": "Clearfell Encampment",
        "clientName": "Clearfell Encampment",
        "areaLevel": "15",
        "isTown": true,
        "steps": [
          {
            "id": "act1-clearfell-encampment-s1",
            "text": "Nói chuyện với Renly để hoàn thành Reaching Clearfell + nhận Uncut Skill Gem",
            "type": "quest",
            "optional": false
          },
          {
            "id": "act1-clearfell-encampment-s2",
            "text": "Nhận quest Treacherous Ground từ Renly",
            "type": "quest",
            "optional": true
          },
          {
            "id": "act1-clearfell-encampment-s3",
            "text": "Lấy Waypoint",
            "type": "waypoint",
            "optional": false
          },
          {
            "id": "act1-clearfell-encampment-s4",
            "text": "Vào Clearfell",
            "type": "transition",
            "optional": false
          }
        ]
      },
      {
        "id": "act1-clearfell",
        "name": "Clearfell",
        "clientName": "Clearfell",
        "areaLevel": "2",
        "isTown": false,
        "boss": "Beira of the Rotten Pack",
        "steps": [
          {
            "id": "act1-clearfell-s1",
            "text": "Lấy Waypoint",
            "type": "waypoint",
            "optional": false
          },
          {
            "id": "act1-clearfell-s2",
            "text": "Giết Beira of the Rotten Pack ở Frostblood Ritual (drop Head of the Winter Wolf)",
            "type": "kill",
            "optional": false
          },
          {
            "id": "act1-clearfell-s3",
            "text": "Nhặt Abandoned Stash ở Mysterious Campsite (Uncut Skill Gem)",
            "type": "pickup",
            "optional": true
          },
          {
            "id": "act1-clearfell-s4",
            "text": "Vào Mud Burrow để làm Treacherous Ground",
            "type": "transition",
            "optional": true
          },
          {
            "id": "act1-clearfell-s5",
            "text": "Vào The Grelwood",
            "type": "transition",
            "optional": false
          }
        ]
      },
      {
        "id": "act1-mud-burrow",
        "name": "Mud Burrow",
        "clientName": "Mud Burrow",
        "areaLevel": "3",
        "isTown": false,
        "boss": "The Devourer",
        "steps": [
          {
            "id": "act1-mud-burrow-s1",
            "text": "Giết The Devourer ở Vile Nest (drop Uncut Skill Gem)",
            "type": "kill",
            "optional": true
          },
          {
            "id": "act1-mud-burrow-s2",
            "text": "Mở Hatchery để lấy đồ trong các egg sac",
            "type": "pickup",
            "optional": true
          },
          {
            "id": "act1-mud-burrow-s3",
            "text": "Quay về Clearfell talk Renly nhận Uncut Support Gem",
            "type": "quest",
            "optional": true
          }
        ]
      },
      {
        "id": "act1-the-grelwood",
        "name": "The Grelwood",
        "clientName": "The Grelwood",
        "areaLevel": "4",
        "isTown": false,
        "boss": "The Brambleghast",
        "steps": [
          {
            "id": "act1-the-grelwood-s1",
            "text": "Lấy Waypoint",
            "type": "waypoint",
            "optional": false
          },
          {
            "id": "act1-the-grelwood-s2",
            "text": "Giết The Brambleghast ở The Moving Bramble (drop Uncut Skill Gem)",
            "type": "kill",
            "optional": false
          },
          {
            "id": "act1-the-grelwood-s3",
            "text": "Tìm Tree of Souls, summon Una để bắt đầu Secrets in the Dark",
            "type": "quest",
            "optional": false
          },
          {
            "id": "act1-the-grelwood-s4",
            "text": "Giết Areagne, Forgotten Witch ở Areagne's Hut (Uncut Support Gem)",
            "type": "kill",
            "optional": true
          },
          {
            "id": "act1-the-grelwood-s5",
            "text": "Vào The Red Vale tìm Rune of Power",
            "type": "transition",
            "optional": false
          }
        ]
      },
      {
        "id": "act1-the-red-vale",
        "name": "The Red Vale",
        "clientName": "The Red Vale",
        "areaLevel": "5",
        "isTown": false,
        "boss": "The Rust King",
        "steps": [
          {
            "id": "act1-the-red-vale-s1",
            "text": "Lấy Waypoint",
            "type": "waypoint",
            "optional": false
          },
          {
            "id": "act1-the-red-vale-s2",
            "text": "Kích hoạt 3 Obelisk of Rust, giết pack để lấy Rune of Power",
            "type": "quest",
            "optional": false
          },
          {
            "id": "act1-the-red-vale-s3",
            "text": "Obelisk thứ 3 spawn The Rust King, giết để lấy rune cuối + Uncut Skill Gem",
            "type": "kill",
            "optional": false
          },
          {
            "id": "act1-the-red-vale-s4",
            "text": "Nhặt Abandoned Stash (martial weapon)",
            "type": "pickup",
            "optional": true
          },
          {
            "id": "act1-the-red-vale-s5",
            "text": "Quay về Tree of Souls ở The Grelwood, forge Runed Spikes giải phóng The Hooded One",
            "type": "quest",
            "optional": false
          }
        ]
      },
      {
        "id": "act1-the-grim-tangle",
        "name": "The Grim Tangle",
        "clientName": "The Grim Tangle",
        "areaLevel": "6",
        "isTown": false,
        "boss": "The Rotten Druid",
        "steps": [
          {
            "id": "act1-the-grim-tangle-s1",
            "text": "Lấy Waypoint",
            "type": "waypoint",
            "optional": false
          },
          {
            "id": "act1-the-grim-tangle-s2",
            "text": "Giết The Rotten Druid ở Den of the Druid (drop Uncut Support Gem)",
            "type": "kill",
            "optional": false
          },
          {
            "id": "act1-the-grim-tangle-s3",
            "text": "Revive The Hooded One để hoàn thành The Mysterious Shade",
            "type": "quest",
            "optional": false
          },
          {
            "id": "act1-the-grim-tangle-s4",
            "text": "Vào Cemetery of the Eternals",
            "type": "transition",
            "optional": false
          }
        ]
      },
      {
        "id": "act1-cemetery-of-the-eternals",
        "name": "Cemetery of the Eternals",
        "clientName": "Cemetery of the Eternals",
        "areaLevel": "7",
        "isTown": false,
        "boss": "Lachlann of Endless Lament",
        "steps": [
          {
            "id": "act1-cemetery-of-the-eternals-s1",
            "text": "Lấy Waypoint",
            "type": "waypoint",
            "optional": false
          },
          {
            "id": "act1-cemetery-of-the-eternals-s2",
            "text": "Nói chuyện với Lachlann the Lost để bắt đầu Sorrow Among Stones",
            "type": "quest",
            "optional": false
          },
          {
            "id": "act1-cemetery-of-the-eternals-s3",
            "text": "Vào Tomb of the Consort lấy key piece của Asinia",
            "type": "transition",
            "optional": false
          },
          {
            "id": "act1-cemetery-of-the-eternals-s4",
            "text": "Vào Mausoleum of the Praetor lấy key piece của Draven",
            "type": "transition",
            "optional": false
          },
          {
            "id": "act1-cemetery-of-the-eternals-s5",
            "text": "Mở Memorial Gate, giết Lachlann of Endless Lament ở Memorial of the Lost (Uncut Skill Gem)",
            "type": "kill",
            "optional": false
          },
          {
            "id": "act1-cemetery-of-the-eternals-s6",
            "text": "Vào Hunting Grounds",
            "type": "transition",
            "optional": false
          }
        ]
      },
      {
        "id": "act1-tomb-of-the-consort",
        "name": "Tomb of the Consort",
        "clientName": "Tomb of the Consort",
        "areaLevel": "8-9",
        "isTown": false,
        "boss": "Asinia, the Praetor's Consort",
        "steps": [
          {
            "id": "act1-tomb-of-the-consort-s1",
            "text": "Lấy Waypoint",
            "type": "waypoint",
            "optional": false
          },
          {
            "id": "act1-tomb-of-the-consort-s2",
            "text": "Giết Asinia, the Praetor's Consort ở Heart of the Tomb",
            "type": "kill",
            "optional": false
          },
          {
            "id": "act1-tomb-of-the-consort-s3",
            "text": "Nhặt Asinia's Memorial Key Piece",
            "type": "pickup",
            "optional": false
          },
          {
            "id": "act1-tomb-of-the-consort-s4",
            "text": "Mở Haunted Treasure",
            "type": "pickup",
            "optional": true
          }
        ]
      },
      {
        "id": "act1-mausoleum-of-the-praetor",
        "name": "Mausoleum of the Praetor",
        "clientName": "Mausoleum of the Praetor",
        "areaLevel": "8-9",
        "isTown": false,
        "boss": "Draven, the Eternal Praetor",
        "steps": [
          {
            "id": "act1-mausoleum-of-the-praetor-s1",
            "text": "Lấy Waypoint",
            "type": "waypoint",
            "optional": false
          },
          {
            "id": "act1-mausoleum-of-the-praetor-s2",
            "text": "Giết Draven, the Eternal Praetor ở Heart of the Mausoleum",
            "type": "kill",
            "optional": false
          },
          {
            "id": "act1-mausoleum-of-the-praetor-s3",
            "text": "Nhặt Draven's Memorial Key Piece",
            "type": "pickup",
            "optional": false
          },
          {
            "id": "act1-mausoleum-of-the-praetor-s4",
            "text": "Mở Forgotten Riches",
            "type": "pickup",
            "optional": true
          }
        ]
      },
      {
        "id": "act1-hunting-grounds",
        "name": "Hunting Grounds",
        "clientName": "Hunting Grounds",
        "areaLevel": "10",
        "isTown": false,
        "boss": "The Crowbell",
        "steps": [
          {
            "id": "act1-hunting-grounds-s1",
            "text": "Lấy Waypoint",
            "type": "waypoint",
            "optional": false
          },
          {
            "id": "act1-hunting-grounds-s2",
            "text": "Giết The Crowbell ở The Hunt Stone",
            "type": "kill",
            "optional": false
          },
          {
            "id": "act1-hunting-grounds-s3",
            "text": "Nói chuyện với Delwyn để làm The Hunt Begins",
            "type": "quest",
            "optional": true
          },
          {
            "id": "act1-hunting-grounds-s4",
            "text": "Hoàn thành Ritual ở Ritual Altar để mở khoá Ominous Altars (talk Finn)",
            "type": "quest",
            "optional": true
          },
          {
            "id": "act1-hunting-grounds-s5",
            "text": "Vào Freythorn",
            "type": "transition",
            "optional": true
          },
          {
            "id": "act1-hunting-grounds-s6",
            "text": "Vào Ogham Farmlands",
            "type": "transition",
            "optional": false
          }
        ]
      },
      {
        "id": "act1-freythorn",
        "name": "Freythorn",
        "clientName": "Freythorn",
        "areaLevel": "11",
        "isTown": false,
        "boss": "The King in the Mists",
        "steps": [
          {
            "id": "act1-freythorn-s1",
            "text": "Lấy Waypoint",
            "type": "waypoint",
            "optional": false
          },
          {
            "id": "act1-freythorn-s2",
            "text": "Hoàn thành 3 Ritual để tan màn sương quanh Ritual cuối",
            "type": "quest",
            "optional": true
          },
          {
            "id": "act1-freythorn-s3",
            "text": "Giết The King in the Mists ở Unnamed Ritual (hoàn thành Ominous Altars)",
            "type": "kill",
            "optional": true
          },
          {
            "id": "act1-freythorn-s4",
            "text": "Đổi Tribute lấy item ở Ritual altar",
            "type": "pickup",
            "optional": true
          }
        ]
      },
      {
        "id": "act1-ogham-farmlands",
        "name": "Ogham Farmlands",
        "clientName": "Ogham Farmlands",
        "areaLevel": "12",
        "isTown": false,
        "steps": [
          {
            "id": "act1-ogham-farmlands-s1",
            "text": "Lấy Waypoint",
            "type": "waypoint",
            "optional": false
          },
          {
            "id": "act1-ogham-farmlands-s2",
            "text": "Ghé Una's Home",
            "type": "note",
            "optional": true
          },
          {
            "id": "act1-ogham-farmlands-s3",
            "text": "Clear Crop Circle miniboss",
            "type": "kill",
            "optional": true
          },
          {
            "id": "act1-ogham-farmlands-s4",
            "text": "Vào Ogham Village",
            "type": "transition",
            "optional": false
          }
        ]
      },
      {
        "id": "act1-ogham-village",
        "name": "Ogham Village",
        "clientName": "Ogham Village",
        "areaLevel": "13",
        "isTown": false,
        "boss": "The Executioner",
        "steps": [
          {
            "id": "act1-ogham-village-s1",
            "text": "Lấy Waypoint",
            "type": "waypoint",
            "optional": false
          },
          {
            "id": "act1-ogham-village-s2",
            "text": "Giết The Executioner ở Executioner's Block (hoàn thành The Trail of Corruption, talk Leitis)",
            "type": "kill",
            "optional": false
          },
          {
            "id": "act1-ogham-village-s3",
            "text": "Tìm Smithing Tools ở Renly's Workshop cho Finding the Forge",
            "type": "quest",
            "optional": true
          },
          {
            "id": "act1-ogham-village-s4",
            "text": "Vào The Manor Ramparts",
            "type": "transition",
            "optional": false
          }
        ]
      },
      {
        "id": "act1-the-manor-ramparts",
        "name": "The Manor Ramparts",
        "clientName": "The Manor Ramparts",
        "areaLevel": "14",
        "isTown": false,
        "steps": [
          {
            "id": "act1-the-manor-ramparts-s1",
            "text": "Lấy Waypoint",
            "type": "waypoint",
            "optional": false
          },
          {
            "id": "act1-the-manor-ramparts-s2",
            "text": "Mở The Gallows",
            "type": "pickup",
            "optional": true
          },
          {
            "id": "act1-the-manor-ramparts-s3",
            "text": "Vào Ogham Manor",
            "type": "transition",
            "optional": false
          }
        ]
      },
      {
        "id": "act1-ogham-manor",
        "name": "Ogham Manor",
        "clientName": "Ogham Manor",
        "areaLevel": "15",
        "isTown": false,
        "boss": "Count Geonor",
        "steps": [
          {
            "id": "act1-ogham-manor-s1",
            "text": "Lấy Waypoint",
            "type": "waypoint",
            "optional": false
          },
          {
            "id": "act1-ogham-manor-s2",
            "text": "Nói chuyện với Leitis để bắt đầu The Mad Wolf of Ogham",
            "type": "quest",
            "optional": false
          },
          {
            "id": "act1-ogham-manor-s3",
            "text": "Kích hoạt Psalm of Madness ở Grotesque Altar, giết Candlemass lấy +20 max life Essence",
            "type": "kill",
            "optional": true
          },
          {
            "id": "act1-ogham-manor-s4",
            "text": "Giết Count Geonor ở Throne of the Wolf",
            "type": "kill",
            "optional": false
          },
          {
            "id": "act1-ogham-manor-s5",
            "text": "Nói chuyện với The Hooded One để hoàn thành act",
            "type": "quest",
            "optional": false
          }
        ]
      }
    ]
  },
  {
    "id": 2,
    "name": "Act 2",
    "region": "Vastiri Plains",
    "zones": [
      {
        "id": "act2-vastiri-outskirts",
        "name": "Vastiri Outskirts",
        "clientName": "Vastiri Outskirts",
        "areaLevel": "16",
        "isTown": false,
        "boss": "Rathbreaker",
        "steps": [
          {
            "id": "act2-vastiri-outskirts-s1",
            "text": "Nói chuyện với The Hooded One để bắt đầu Earning Passage",
            "type": "quest",
            "optional": false
          },
          {
            "id": "act2-vastiri-outskirts-s2",
            "text": "Tìm Maraketh caravan, nói chuyện với Zarka",
            "type": "quest",
            "optional": false
          },
          {
            "id": "act2-vastiri-outskirts-s3",
            "text": "Tiêu diệt đám Hyenic Raiders quấy phá trade route",
            "type": "kill",
            "optional": false
          },
          {
            "id": "act2-vastiri-outskirts-s4",
            "text": "Giết Rathbreaker ở Raider's Cliffs (cẩn thận Hyena Demons ambush)",
            "type": "kill",
            "optional": false
          },
          {
            "id": "act2-vastiri-outskirts-s5",
            "text": "Nhặt Raided Camp (rare chest + gold)",
            "type": "pickup",
            "optional": true
          },
          {
            "id": "act2-vastiri-outskirts-s6",
            "text": "Quay lại nói chuyện với Zarka nhận Uncut Skill Gem (Lv5)",
            "type": "quest",
            "optional": false
          },
          {
            "id": "act2-vastiri-outskirts-s7",
            "text": "Vào The Ardura Caravan",
            "type": "transition",
            "optional": false
          }
        ]
      },
      {
        "id": "act2-the-ardura-caravan",
        "name": "The Ardura Caravan",
        "clientName": "The Ardura Caravan",
        "areaLevel": "32",
        "isTown": true,
        "steps": [
          {
            "id": "act2-the-ardura-caravan-s1",
            "text": "Lấy Uncut Skill Gem (Lv5) từ Zarka nếu chưa nhận",
            "type": "pickup",
            "optional": false
          },
          {
            "id": "act2-the-ardura-caravan-s2",
            "text": "Nói chuyện với The Hooded One rồi Sekhema Asala để bắt đầu The Trail of Corruption",
            "type": "quest",
            "optional": false
          },
          {
            "id": "act2-the-ardura-caravan-s3",
            "text": "Mở Waypoint và bán đồ thừa",
            "type": "waypoint",
            "optional": false
          },
          {
            "id": "act2-the-ardura-caravan-s4",
            "text": "Dùng Desert Map để đi Mawdun Quarry",
            "type": "transition",
            "optional": false
          },
          {
            "id": "act2-the-ardura-caravan-s5",
            "text": "Quay về Ardura Caravan qua Desert Map giữa các nhánh để trả quest cho Zarka",
            "type": "note",
            "optional": true
          }
        ]
      },
      {
        "id": "act2-mawdun-quarry",
        "name": "Mawdun Quarry",
        "clientName": "Mawdun Quarry",
        "areaLevel": "17",
        "isTown": false,
        "steps": [
          {
            "id": "act2-mawdun-quarry-s1",
            "text": "Đi xuyên Mawdun Quarry tìm đường vào Mawdun Mine",
            "type": "transition",
            "optional": false
          },
          {
            "id": "act2-mawdun-quarry-s2",
            "text": "Mở Faridun War Cache nhặt Artificer's Orb",
            "type": "pickup",
            "optional": true
          },
          {
            "id": "act2-mawdun-quarry-s3",
            "text": "Vào Mawdun Mine",
            "type": "transition",
            "optional": false
          }
        ]
      },
      {
        "id": "act2-mawdun-mine",
        "name": "Mawdun Mine",
        "clientName": "Mawdun Mine",
        "areaLevel": "18",
        "isTown": false,
        "boss": "Rudja, the Dread Engineer",
        "steps": [
          {
            "id": "act2-mawdun-mine-s1",
            "text": "Giết Rudja, the Dread Engineer ở Munitions Bunker (rớt Uncut Skill Gem Lv6)",
            "type": "kill",
            "optional": false
          },
          {
            "id": "act2-mawdun-mine-s2",
            "text": "Nói chuyện với Risu (Faridun Defector)",
            "type": "quest",
            "optional": false
          },
          {
            "id": "act2-mawdun-mine-s3",
            "text": "Quay về Ardura Caravan hỏi Risu về Halani Gates đang đóng",
            "type": "quest",
            "optional": false
          },
          {
            "id": "act2-mawdun-mine-s4",
            "text": "Dùng Desert Map đi Traitor's Passage",
            "type": "transition",
            "optional": false
          }
        ]
      },
      {
        "id": "act2-traitors-passage",
        "name": "Traitor's Passage",
        "clientName": "Traitor's Passage",
        "areaLevel": "19",
        "isTown": false,
        "steps": [
          {
            "id": "act2-traitors-passage-s1",
            "text": "Leo xuyên Traitor's Passage để lên đỉnh The Halani Gates",
            "type": "transition",
            "optional": false
          },
          {
            "id": "act2-traitors-passage-s2",
            "text": "Đi theo dấu paper seals từ Decree of Imprisonment, giết Balbala, the Traitor ở Prison of the Disgraced — rớt Balbala's Barya + Uncut Skill Gem Lv6 (mở Ascendancy)",
            "type": "kill",
            "optional": true
          },
          {
            "id": "act2-traitors-passage-s3",
            "text": "Nhặt Bell Chest (cuối dead-end, có checkpoint, Uncut Skill Gem Lv6)",
            "type": "pickup",
            "optional": true
          },
          {
            "id": "act2-traitors-passage-s4",
            "text": "Vào The Halani Gates",
            "type": "transition",
            "optional": false
          }
        ]
      },
      {
        "id": "act2-the-halani-gates",
        "name": "The Halani Gates",
        "clientName": "The Halani Gates",
        "areaLevel": "20",
        "isTown": false,
        "boss": "Jamanra, the Risen King",
        "steps": [
          {
            "id": "act2-the-halani-gates-s1",
            "text": "Hỗ trợ Asala mở 3 cánh Gate, đánh xuyên Faridun",
            "type": "quest",
            "optional": false
          },
          {
            "id": "act2-the-halani-gates-s2",
            "text": "Giết miniboss L'im the Impaler ở Forward Command Tents (corpses rớt magic weapon)",
            "type": "kill",
            "optional": true
          },
          {
            "id": "act2-the-halani-gates-s3",
            "text": "Giết Jamanra, the Risen King ở Infested Tower",
            "type": "kill",
            "optional": false
          },
          {
            "id": "act2-the-halani-gates-s4",
            "text": "Gặp sandstorm chặn đường, quay về Ardura Caravan nói chuyện Zarka nhận Uncut Skill Gem Lv7",
            "type": "quest",
            "optional": false
          },
          {
            "id": "act2-the-halani-gates-s5",
            "text": "Nói chuyện Asala để mở 3 quest Orbala: City of Seven Waters, A Theft of Ivory, A Crown of Stone (làm thứ tự bất kỳ)",
            "type": "quest",
            "optional": false
          }
        ]
      },
      {
        "id": "act2-trial-of-the-sekhemas",
        "name": "Trial of the Sekhemas",
        "clientName": "Trial of the Sekhemas",
        "areaLevel": "22",
        "isTown": false,
        "boss": "Rattlecage, the Earthbreaker",
        "steps": [
          {
            "id": "act2-trial-of-the-sekhemas-s1",
            "text": "Cần Balbala's Barya (rớt từ Balbala ở Traitor's Passage) để bắt đầu Ascent to Power",
            "type": "note",
            "optional": true
          },
          {
            "id": "act2-trial-of-the-sekhemas-s2",
            "text": "Đặt Barya vào Relic Altar, hoàn thành gauntlet 1 floor (giữ Honour không cạn)",
            "type": "trial",
            "optional": true
          },
          {
            "id": "act2-trial-of-the-sekhemas-s3",
            "text": "Giết Rattlecage, the Earthbreaker (floor boss)",
            "type": "kill",
            "optional": true
          },
          {
            "id": "act2-trial-of-the-sekhemas-s4",
            "text": "Dùng Altar of Ascendancy để chọn Ascendancy + nhận Ascendancy points",
            "type": "quest",
            "optional": true
          }
        ]
      },
      {
        "id": "act2-keth",
        "name": "Keth",
        "clientName": "Keth",
        "areaLevel": "21",
        "isTown": false,
        "steps": [
          {
            "id": "act2-keth-s1",
            "text": "Nhánh Orbala 1 — dùng Desert Map đi Keth, tìm lối vào thành phố trong cát",
            "type": "transition",
            "optional": false
          },
          {
            "id": "act2-keth-s2",
            "text": "Giết Kabala, Constrictor Queen ở The Venom Pit (rớt Book of Specialisation + Uncut Skill Gem Lv6-7)",
            "type": "kill",
            "optional": true
          },
          {
            "id": "act2-keth-s3",
            "text": "Nhặt Sun/Kabala Clan Relic từ Serpent Clan cho quest Ancient Vows",
            "type": "pickup",
            "optional": true
          },
          {
            "id": "act2-keth-s4",
            "text": "Mở rare chest ở Abandoned Shrine (magic amulet)",
            "type": "pickup",
            "optional": true
          },
          {
            "id": "act2-keth-s5",
            "text": "Vào The Lost City",
            "type": "transition",
            "optional": false
          }
        ]
      },
      {
        "id": "act2-the-lost-city",
        "name": "The Lost City",
        "clientName": "The Lost City",
        "areaLevel": "22",
        "isTown": false,
        "steps": [
          {
            "id": "act2-the-lost-city-s1",
            "text": "Đi xuyên The Lost City tới Buried Shrines",
            "type": "transition",
            "optional": false
          },
          {
            "id": "act2-the-lost-city-s2",
            "text": "Giết miniboss The Ninth Treasure of Keth ở The Galleria (rớt magic jewel)",
            "type": "kill",
            "optional": true
          },
          {
            "id": "act2-the-lost-city-s3",
            "text": "Nhặt Golden Tomb (Uncut Spirit Gem Lv7, lần đầu loot, có checkpoint)",
            "type": "pickup",
            "optional": true
          },
          {
            "id": "act2-the-lost-city-s4",
            "text": "Vào Buried Shrines",
            "type": "transition",
            "optional": false
          }
        ]
      },
      {
        "id": "act2-buried-shrines",
        "name": "Buried Shrines",
        "clientName": "Buried Shrines",
        "areaLevel": "23",
        "isTown": false,
        "boss": "Azarian, the Forsaken Son",
        "steps": [
          {
            "id": "act2-buried-shrines-s1",
            "text": "Giết Azarian, the Forsaken Son ở The Heart of Keth (Vestibule of the Rains)",
            "type": "kill",
            "optional": false
          },
          {
            "id": "act2-buried-shrines-s2",
            "text": "Nói chuyện Halani, the Water Goddess rồi dùng Everburning Cinders để giải thoát bà — nhặt The Essence of Water",
            "type": "quest",
            "optional": false
          },
          {
            "id": "act2-buried-shrines-s3",
            "text": "Nhặt Suspicious Sarcophagus (Uncut Support Gem Lv2, spawn Terracotta Soldiers — cẩn thận hardcore)",
            "type": "pickup",
            "optional": true
          },
          {
            "id": "act2-buried-shrines-s4",
            "text": "Nhặt Elemental Offering (chọn Ruby/Sapphire/Topaz Ring + Lesser Rune)",
            "type": "pickup",
            "optional": true
          },
          {
            "id": "act2-buried-shrines-s5",
            "text": "Quay về Ardura Caravan đưa Essence of Water cho Zarka, nhận Uncut Support Gem Lv2 + 400 Gold",
            "type": "quest",
            "optional": false
          }
        ]
      },
      {
        "id": "act2-valley-of-the-titans",
        "name": "Valley of the Titans",
        "clientName": "Valley of the Titans",
        "areaLevel": "21-26",
        "isTown": false,
        "steps": [
          {
            "id": "act2-valley-of-the-titans-s1",
            "text": "Nhánh Orbala 2 — dùng Desert Map đi Valley of the Titans",
            "type": "transition",
            "optional": false
          },
          {
            "id": "act2-valley-of-the-titans-s2",
            "text": "Tìm và kích hoạt 3 Ancient Seals (Rajendra, Sundari, Shakti) để mở The Clasped Entry",
            "type": "quest",
            "optional": false
          },
          {
            "id": "act2-valley-of-the-titans-s3",
            "text": "Đặt cả 2 Clan Relic vào Statue of a Titan (Medallion) cho Ancient Vows — chọn thưởng +1 Charm Slot",
            "type": "quest",
            "optional": true
          },
          {
            "id": "act2-valley-of-the-titans-s4",
            "text": "Vào The Titan Grotto qua Clasped Entry",
            "type": "transition",
            "optional": false
          }
        ]
      },
      {
        "id": "act2-the-titan-grotto",
        "name": "The Titan Grotto",
        "clientName": "The Titan Grotto",
        "areaLevel": "22-27",
        "isTown": false,
        "boss": "Zalmarath, the Colossus",
        "steps": [
          {
            "id": "act2-the-titan-grotto-s1",
            "text": "Tìm Rite of Flame altar (cerulean altar) và kích hoạt",
            "type": "quest",
            "optional": false
          },
          {
            "id": "act2-the-titan-grotto-s2",
            "text": "Giết Zalmarath, the Colossus ở Dais of Reckoning, nhặt The Flame Ruby",
            "type": "kill",
            "optional": false
          },
          {
            "id": "act2-the-titan-grotto-s3",
            "text": "Tương tác Titan's Sword nhặt random Lesser Rune",
            "type": "pickup",
            "optional": true
          },
          {
            "id": "act2-the-titan-grotto-s4",
            "text": "Quay về Ardura Caravan đưa Flame Ruby cho Zarka, nhận Uncut Support Gem Lv2 + 400 Gold",
            "type": "quest",
            "optional": false
          }
        ]
      },
      {
        "id": "act2-mastodon-badlands",
        "name": "Mastodon Badlands",
        "clientName": "Mastodon Badlands",
        "areaLevel": "21-26",
        "isTown": false,
        "steps": [
          {
            "id": "act2-mastodon-badlands-s1",
            "text": "Nhánh Orbala 3 — dùng Desert Map đi Mastodon Badlands, tìm lối vào The Bone Pits",
            "type": "transition",
            "optional": false
          },
          {
            "id": "act2-mastodon-badlands-s2",
            "text": "Mở Fossilised Memorial (Bone Effigy chest, Uncut Support Gem Lv2)",
            "type": "pickup",
            "optional": true
          },
          {
            "id": "act2-mastodon-badlands-s3",
            "text": "Nhặt Sun Clan Relic từ Sun Clan Scavenger cho Ancient Vows",
            "type": "pickup",
            "optional": true
          },
          {
            "id": "act2-mastodon-badlands-s4",
            "text": "Vào The Bone Pits",
            "type": "transition",
            "optional": false
          },
          {
            "id": "act2-mastodon-badlands-s5",
            "text": "Vào Lightless Passage (mở Well of Souls / Abyss) nếu đã desecrate item bằng Preserved Bone",
            "type": "transition",
            "optional": true
          }
        ]
      },
      {
        "id": "act2-the-bone-pits",
        "name": "The Bone Pits",
        "clientName": "The Bone Pits",
        "areaLevel": "22-27",
        "isTown": false,
        "boss": "Ekbab, Ancient Steed",
        "steps": [
          {
            "id": "act2-the-bone-pits-s1",
            "text": "Giết Ekbab, Ancient Steed và Iktab, the Deathlord ở Blackrib Pit",
            "type": "kill",
            "optional": false
          },
          {
            "id": "act2-the-bone-pits-s2",
            "text": "Nhặt Mastodon Tusks",
            "type": "pickup",
            "optional": false
          },
          {
            "id": "act2-the-bone-pits-s3",
            "text": "Quay về Ardura Caravan đưa Mastodon Tusks cho Zarka, nhận Uncut Support Gem Lv2 + 400 Gold",
            "type": "quest",
            "optional": false
          }
        ]
      },
      {
        "id": "act2-deshar",
        "name": "Deshar",
        "clientName": "Deshar",
        "areaLevel": "28",
        "isTown": false,
        "steps": [
          {
            "id": "act2-deshar-s1",
            "text": "Sau khi gom đủ 3 vật phẩm, Zarka tạo Horn of the Vastiri — dùng Horn dẹp sandstorm ở Halani Gates, rồi nói Asala",
            "type": "quest",
            "optional": false
          },
          {
            "id": "act2-deshar-s2",
            "text": "Dùng Desert Map đi Deshar, leo lên các burial spires",
            "type": "transition",
            "optional": false
          },
          {
            "id": "act2-deshar-s3",
            "text": "Tương tác Abandoned Rhoa rồi tìm Final Letter ở Fallen Dekhara cho quest Tradition's Toll (đưa Shambrin nhận Book of Specialisation)",
            "type": "quest",
            "optional": true
          },
          {
            "id": "act2-deshar-s4",
            "text": "Giết 2 vulture miniboss ở Forgotten Corpses (rớt Djinn Barya cho Trial of the Sekhemas, chỉ lần đầu)",
            "type": "kill",
            "optional": true
          },
          {
            "id": "act2-deshar-s5",
            "text": "Tương tác The Forgotten Hollow nhặt Artificer's Orb",
            "type": "pickup",
            "optional": true
          },
          {
            "id": "act2-deshar-s6",
            "text": "Vào Path of Mourning",
            "type": "transition",
            "optional": false
          }
        ]
      },
      {
        "id": "act2-path-of-mourning",
        "name": "Path of Mourning",
        "clientName": "Path of Mourning",
        "areaLevel": "29",
        "isTown": false,
        "steps": [
          {
            "id": "act2-path-of-mourning-s1",
            "text": "Đi xuyên Path of Mourning tới The Spires of Deshar",
            "type": "transition",
            "optional": false
          },
          {
            "id": "act2-path-of-mourning-s2",
            "text": "Nhặt Hushed Urn (Shifting Vases — Urn spawn Urnwalkers, rớt Uncut Skill Gem Lv8)",
            "type": "pickup",
            "optional": true
          },
          {
            "id": "act2-path-of-mourning-s3",
            "text": "Vào The Spires of Deshar",
            "type": "transition",
            "optional": false
          }
        ]
      },
      {
        "id": "act2-the-spires-of-deshar",
        "name": "The Spires of Deshar",
        "clientName": "The Spires of Deshar",
        "areaLevel": "30",
        "isTown": false,
        "boss": "Tor Gul, the Defiler",
        "steps": [
          {
            "id": "act2-the-spires-of-deshar-s1",
            "text": "Tương tác Sisters of Garukhan nhận +10% Lightning Resistance vĩnh viễn (spawn Kinarha statues)",
            "type": "pickup",
            "optional": true
          },
          {
            "id": "act2-the-spires-of-deshar-s2",
            "text": "Đối đầu Jamanra, the Abomination trên đỉnh (cutscene, hắn bỏ chạy)",
            "type": "quest",
            "optional": false
          },
          {
            "id": "act2-the-spires-of-deshar-s3",
            "text": "Giết Tor Gul, the Defiler ở The Defiled Spire (rớt Uncut Skill Gem Lv8)",
            "type": "kill",
            "optional": false
          },
          {
            "id": "act2-the-spires-of-deshar-s4",
            "text": "Nói chuyện Asala rồi dùng Desert Map đi The Dreadnought",
            "type": "quest",
            "optional": false
          }
        ]
      },
      {
        "id": "act2-the-dreadnought",
        "name": "The Dreadnought",
        "clientName": "The Dreadnought",
        "areaLevel": "31",
        "isTown": false,
        "boss": "Jamanra, the Abomination",
        "steps": [
          {
            "id": "act2-the-dreadnought-s1",
            "text": "Đánh xuyên Faridun tới throne",
            "type": "quest",
            "optional": false
          },
          {
            "id": "act2-the-dreadnought-s2",
            "text": "Giết Jamanra, the Abomination (act boss — phase 2: hạ còn 1 life rồi tương tác Asala để chém đầu)",
            "type": "kill",
            "optional": false
          },
          {
            "id": "act2-the-dreadnought-s3",
            "text": "Đi bộ tới shrine phía tây bắc nói chuyện The Hooded One",
            "type": "quest",
            "optional": false
          },
          {
            "id": "act2-the-dreadnought-s4",
            "text": "Nói Asala để đi nam tới Sandswept Marsh (Act 3)",
            "type": "transition",
            "optional": false
          }
        ]
      }
    ]
  },
  {
    "id": 3,
    "name": "Act 3",
    "region": "Utzaal",
    "zones": [
      {
        "id": "act3-sandswept-marsh",
        "name": "Sandswept Marsh",
        "clientName": "Sandswept Marsh",
        "areaLevel": "33",
        "isTown": false,
        "boss": "Rootdredge",
        "steps": [
          {
            "id": "act3-sandswept-marsh-s1",
            "text": "Vào Sandswept Marsh, băng qua đầm lầy tìm Ziggurat",
            "type": "transition",
            "optional": false
          },
          {
            "id": "act3-sandswept-marsh-s2",
            "text": "Lấy waypoint",
            "type": "waypoint",
            "optional": false
          },
          {
            "id": "act3-sandswept-marsh-s3",
            "text": "Giết Rootdredge ở Foul Ritual, nhặt Uncut Skill Gem (Lv9)",
            "type": "kill",
            "optional": true
          },
          {
            "id": "act3-sandswept-marsh-s4",
            "text": "Nhặt Lesser Jeweller's Orb từ Orok Campfire",
            "type": "pickup",
            "optional": true
          },
          {
            "id": "act3-sandswept-marsh-s5",
            "text": "Đi tới Ziggurat Encampment",
            "type": "transition",
            "optional": false
          }
        ]
      },
      {
        "id": "act3-ziggurat-encampment",
        "name": "Ziggurat Encampment",
        "clientName": "Ziggurat Encampment",
        "areaLevel": "44",
        "isTown": true,
        "steps": [
          {
            "id": "act3-ziggurat-encampment-s1",
            "text": "Gặp đám treasure hunters (Oswald, Alva)",
            "type": "quest",
            "optional": false
          },
          {
            "id": "act3-ziggurat-encampment-s2",
            "text": "Nói chuyện với The Hooded One về việc rút nước Utzaal",
            "type": "quest",
            "optional": false
          },
          {
            "id": "act3-ziggurat-encampment-s3",
            "text": "Dùng Well hồi máu/mana, lấy waypoint",
            "type": "waypoint",
            "optional": false
          },
          {
            "id": "act3-ziggurat-encampment-s4",
            "text": "Vào Jungle Ruins để tìm The Matlan Waterways",
            "type": "transition",
            "optional": false
          }
        ]
      },
      {
        "id": "act3-jungle-ruins",
        "name": "Jungle Ruins",
        "clientName": "Jungle Ruins",
        "areaLevel": "34",
        "isTown": false,
        "boss": "Mighty Silverfist",
        "steps": [
          {
            "id": "act3-jungle-ruins-s1",
            "text": "Lấy waypoint",
            "type": "waypoint",
            "optional": false
          },
          {
            "id": "act3-jungle-ruins-s2",
            "text": "Giết Mighty Silverfist ở Temple Ruins, nhặt Book of Specialisation + Uncut Skill Gem (Lv9)",
            "type": "kill",
            "optional": true
          },
          {
            "id": "act3-jungle-ruins-s3",
            "text": "Triệu hồi Servi ở Jungle Grave để nhận belt (quest ẩn My Son)",
            "type": "pickup",
            "optional": true
          },
          {
            "id": "act3-jungle-ruins-s4",
            "text": "Đi tới Infested Barrens",
            "type": "transition",
            "optional": false
          }
        ]
      },
      {
        "id": "act3-the-venom-crypts",
        "name": "The Venom Crypts",
        "clientName": "The Venom Crypts",
        "areaLevel": "35",
        "isTown": false,
        "steps": [
          {
            "id": "act3-the-venom-crypts-s1",
            "text": "Vào The Venom Crypts (bắt đầu quest The Slithering Dead)",
            "type": "transition",
            "optional": true
          },
          {
            "id": "act3-the-venom-crypts-s2",
            "text": "Tìm Den of the Serpent Priestess, nhặt Corpse-snake Venom",
            "type": "pickup",
            "optional": true
          },
          {
            "id": "act3-the-venom-crypts-s3",
            "text": "Chạy Abyss encounter (guaranteed)",
            "type": "kill",
            "optional": true
          },
          {
            "id": "act3-the-venom-crypts-s4",
            "text": "Mang Venom về cho Servi ở town để hoàn thành The Slithering Dead",
            "type": "quest",
            "optional": true
          }
        ]
      },
      {
        "id": "act3-infested-barrens",
        "name": "Infested Barrens",
        "clientName": "Infested Barrens",
        "areaLevel": "35",
        "isTown": false,
        "steps": [
          {
            "id": "act3-infested-barrens-s1",
            "text": "Lấy waypoint",
            "type": "waypoint",
            "optional": false
          },
          {
            "id": "act3-infested-barrens-s2",
            "text": "Triệu hồi Alva ở Canal Mechanism (cần Large Soul Core để kích hoạt)",
            "type": "quest",
            "optional": false
          },
          {
            "id": "act3-infested-barrens-s3",
            "text": "Giết The Brood Queen ở Larva Hollow",
            "type": "kill",
            "optional": true
          },
          {
            "id": "act3-infested-barrens-s4",
            "text": "Đi tới Chimeral Wetlands tìm Soul Core",
            "type": "transition",
            "optional": false
          }
        ]
      },
      {
        "id": "act3-the-azak-bog",
        "name": "The Azak Bog",
        "clientName": "The Azak Bog",
        "areaLevel": "36",
        "isTown": false,
        "boss": "Ignagduk, the Bog Witch",
        "steps": [
          {
            "id": "act3-the-azak-bog-s1",
            "text": "Vào The Azak Bog (bắt đầu quest Tribal Vengeance)",
            "type": "transition",
            "optional": true
          },
          {
            "id": "act3-the-azak-bog-s2",
            "text": "Đốt 5 effigy ở Flameskin Ritual để nhận buff Ignagduk's Harvest (+25% Fire Res, +25% Rarity)",
            "type": "note",
            "optional": true
          },
          {
            "id": "act3-the-azak-bog-s3",
            "text": "Giết Ignagduk, the Bog Witch ở Gor-gor Mog",
            "type": "kill",
            "optional": true
          },
          {
            "id": "act3-the-azak-bog-s4",
            "text": "Nhặt Gemrot Skull (+30 Maximum Spirit) và Ignagduk's Ghastly Spear",
            "type": "pickup",
            "optional": true
          },
          {
            "id": "act3-the-azak-bog-s5",
            "text": "Nộp Ignagduk's Ghastly Spear cho Servi ở town",
            "type": "quest",
            "optional": true
          }
        ]
      },
      {
        "id": "act3-chimeral-wetlands",
        "name": "Chimeral Wetlands",
        "clientName": "Chimeral Wetlands",
        "areaLevel": "36",
        "isTown": false,
        "boss": "Xyclucian, the Chimeral",
        "steps": [
          {
            "id": "act3-chimeral-wetlands-s1",
            "text": "Lấy waypoint",
            "type": "waypoint",
            "optional": false
          },
          {
            "id": "act3-chimeral-wetlands-s2",
            "text": "Giết Xyclucian, the Chimeral ở Deadly Nest, nhặt Uncut Skill Gem (Lv9)",
            "type": "kill",
            "optional": false
          },
          {
            "id": "act3-chimeral-wetlands-s3",
            "text": "Nhặt Chimeral Inscribed Ultimatum (mở quest The Trials of Chaos)",
            "type": "pickup",
            "optional": true
          },
          {
            "id": "act3-chimeral-wetlands-s4",
            "text": "Giết The Noxious Behemoth ở Toxic Bloom",
            "type": "kill",
            "optional": true
          },
          {
            "id": "act3-chimeral-wetlands-s5",
            "text": "Đi tới Jiquani's Machinarium",
            "type": "transition",
            "optional": false
          }
        ]
      },
      {
        "id": "act3-the-temple-of-chaos",
        "name": "The Temple of Chaos",
        "clientName": "The Temple of Chaos",
        "areaLevel": "38",
        "isTown": false,
        "steps": [
          {
            "id": "act3-the-temple-of-chaos-s1",
            "text": "Mang Inscribed Ultimatum tới The Temple of Chaos",
            "type": "transition",
            "optional": true
          },
          {
            "id": "act3-the-temple-of-chaos-s2",
            "text": "Vào The Trial of Chaos để chạy Ascension Trial (lấy Ascendancy thứ 2)",
            "type": "trial",
            "optional": true
          }
        ]
      },
      {
        "id": "act3-jiquani-machinarium",
        "name": "Jiquani's Machinarium",
        "clientName": "Jiquani's Machinarium",
        "areaLevel": "37",
        "isTown": false,
        "boss": "Blackjaw, the Remnant",
        "steps": [
          {
            "id": "act3-jiquani-machinarium-s1",
            "text": "Lấy waypoint",
            "type": "waypoint",
            "optional": false
          },
          {
            "id": "act3-jiquani-machinarium-s2",
            "text": "Giết Blackjaw, the Remnant ở The Oubliette (cần Small Soul Core), nhặt The Flame Core (+10% Fire Res vĩnh viễn)",
            "type": "kill",
            "optional": true
          },
          {
            "id": "act3-jiquani-machinarium-s3",
            "text": "Mở Supply Room (cần Small Soul Core) lấy gold + 3 rương rare",
            "type": "pickup",
            "optional": true
          },
          {
            "id": "act3-jiquani-machinarium-s4",
            "text": "Đi tới Jiquani's Sanctum",
            "type": "transition",
            "optional": false
          }
        ]
      },
      {
        "id": "act3-jiquani-sanctum",
        "name": "Jiquani's Sanctum",
        "clientName": "Jiquani's Sanctum",
        "areaLevel": "38",
        "isTown": false,
        "boss": "Zicoatl, Warden of the Core",
        "steps": [
          {
            "id": "act3-jiquani-sanctum-s1",
            "text": "Lấy waypoint",
            "type": "waypoint",
            "optional": false
          },
          {
            "id": "act3-jiquani-sanctum-s2",
            "text": "Kích hoạt 2 Generator (mỗi cái cần Medium Soul Core nhặt trong khu)",
            "type": "quest",
            "optional": false
          },
          {
            "id": "act3-jiquani-sanctum-s3",
            "text": "Giết Zicoatl, Warden of the Core ở Grand Soul Core Nexus",
            "type": "kill",
            "optional": false
          },
          {
            "id": "act3-jiquani-sanctum-s4",
            "text": "Nhặt Large Soul Core + Uncut Skill Gem (Lv10)",
            "type": "pickup",
            "optional": false
          },
          {
            "id": "act3-jiquani-sanctum-s5",
            "text": "Dùng Paquate's Mechanism corrupt item (như Vaal Orb)",
            "type": "note",
            "optional": true
          },
          {
            "id": "act3-jiquani-sanctum-s6",
            "text": "Quay lại Infested Barrens",
            "type": "transition",
            "optional": false
          }
        ]
      },
      {
        "id": "act3-the-matlan-waterways",
        "name": "The Matlan Waterways",
        "clientName": "The Matlan Waterways",
        "areaLevel": "39",
        "isTown": false,
        "steps": [
          {
            "id": "act3-the-matlan-waterways-s1",
            "text": "Dùng Large Soul Core ở Canal Mechanism (Infested Barrens) để mở vào The Matlan Waterways",
            "type": "quest",
            "optional": false
          },
          {
            "id": "act3-the-matlan-waterways-s2",
            "text": "Vào The Matlan Waterways",
            "type": "transition",
            "optional": false
          },
          {
            "id": "act3-the-matlan-waterways-s3",
            "text": "Giết Narg of the Vile Word ở Shaman's Hut, nhặt Gargantuan Flask",
            "type": "kill",
            "optional": true
          },
          {
            "id": "act3-the-matlan-waterways-s4",
            "text": "Dùng Canal Lever để rút nước Utzaal",
            "type": "quest",
            "optional": false
          },
          {
            "id": "act3-the-matlan-waterways-s5",
            "text": "Quay lại town, đi tới The Drowned City qua waypoint mới mở",
            "type": "transition",
            "optional": false
          }
        ]
      },
      {
        "id": "act3-the-drowned-city",
        "name": "The Drowned City",
        "clientName": "The Drowned City",
        "areaLevel": "40",
        "isTown": false,
        "steps": [
          {
            "id": "act3-the-drowned-city-s1",
            "text": "Lấy waypoint",
            "type": "waypoint",
            "optional": false
          },
          {
            "id": "act3-the-drowned-city-s2",
            "text": "Mở các Foul Quarters (Shinies) lấy gold + rương rare",
            "type": "pickup",
            "optional": true
          },
          {
            "id": "act3-the-drowned-city-s3",
            "text": "Đi tới Apex of Filth",
            "type": "transition",
            "optional": false
          }
        ]
      },
      {
        "id": "act3-apex-of-filth",
        "name": "Apex of Filth",
        "clientName": "Apex of Filth",
        "areaLevel": "41",
        "isTown": false,
        "boss": "The Queen of Filth",
        "steps": [
          {
            "id": "act3-apex-of-filth-s1",
            "text": "Lấy waypoint",
            "type": "waypoint",
            "optional": false
          },
          {
            "id": "act3-apex-of-filth-s2",
            "text": "Đi theo vành ngoài khu vực để tới boss",
            "type": "note",
            "optional": false
          },
          {
            "id": "act3-apex-of-filth-s3",
            "text": "Giết The Queen of Filth ở Stenchpools",
            "type": "kill",
            "optional": false
          },
          {
            "id": "act3-apex-of-filth-s4",
            "text": "Nhặt Temple Door Idol (mở cửa vào Temple of Kopec)",
            "type": "pickup",
            "optional": false
          },
          {
            "id": "act3-apex-of-filth-s5",
            "text": "Bỏ 3 mushroom vào Cauldron ở Bubbling Respite đổi Gargantuan Flask",
            "type": "note",
            "optional": true
          },
          {
            "id": "act3-apex-of-filth-s6",
            "text": "Quay lại town nộp Temple Door Idol cho Alva",
            "type": "quest",
            "optional": false
          }
        ]
      },
      {
        "id": "act3-the-molten-vault",
        "name": "The Molten Vault",
        "clientName": "The Molten Vault",
        "areaLevel": "41",
        "isTown": false,
        "boss": "Mektul, the Forgemaster",
        "steps": [
          {
            "id": "act3-the-molten-vault-s1",
            "text": "Vào The Molten Vault từ The Drowned City (triệu hồi Oswald để mở quest Treasures of Utzaal)",
            "type": "transition",
            "optional": true
          },
          {
            "id": "act3-the-molten-vault-s2",
            "text": "Giết Mektul, the Forgemaster ở The Aureaduct (tránh chạm molten gold)",
            "type": "kill",
            "optional": true
          },
          {
            "id": "act3-the-molten-vault-s3",
            "text": "Nhặt The Hammer of Kamasa, mang về cho Oswald để mở Reforging Bench",
            "type": "quest",
            "optional": true
          }
        ]
      },
      {
        "id": "act3-temple-of-kopec",
        "name": "Temple of Kopec",
        "clientName": "Temple of Kopec",
        "areaLevel": "42",
        "isTown": false,
        "boss": "Ketzuli, High Priest of the Sun",
        "steps": [
          {
            "id": "act3-temple-of-kopec-s1",
            "text": "Dùng Temple Door Idol mở cửa vào Temple of Kopec (dưới town)",
            "type": "quest",
            "optional": false
          },
          {
            "id": "act3-temple-of-kopec-s2",
            "text": "Né debuff Ziggurat Sun bằng cách đứng trong bóng pillar/wall",
            "type": "note",
            "optional": false
          },
          {
            "id": "act3-temple-of-kopec-s3",
            "text": "Giết Ketzuli, High Priest of the Sun ở Altar of the Sun, nhặt Uncut Skill Gem (Lv11)",
            "type": "kill",
            "optional": false
          },
          {
            "id": "act3-temple-of-kopec-s4",
            "text": "Triệu hồi Alva, đi thang máy lên kích hoạt Time Portal ở town",
            "type": "quest",
            "optional": false
          }
        ]
      },
      {
        "id": "act3-utzaal",
        "name": "Utzaal",
        "clientName": "Utzaal",
        "areaLevel": "43",
        "isTown": false,
        "boss": "Viper Napuatzi",
        "steps": [
          {
            "id": "act3-utzaal-s1",
            "text": "Vào Time Portal ở Ziggurat Encampment để về quá khứ, đi tới Utzaal",
            "type": "transition",
            "optional": false
          },
          {
            "id": "act3-utzaal-s2",
            "text": "Lấy waypoint",
            "type": "waypoint",
            "optional": false
          },
          {
            "id": "act3-utzaal-s3",
            "text": "Giết Viper Napuatzi ở Legion Blockade, nhặt Uncut Support Gem (Lv3) + Uncut Skill Gem (Lv11)",
            "type": "kill",
            "optional": false
          },
          {
            "id": "act3-utzaal-s4",
            "text": "Lấy Inscribed Ultimatum (Lv43) từ tượng Trialmaster's Challenge",
            "type": "pickup",
            "optional": true
          },
          {
            "id": "act3-utzaal-s5",
            "text": "Lục Peculiar Fortunes (Napuatzi/Azcapa/Uromoti's Quarters) lấy Idol bán cho Oswald",
            "type": "pickup",
            "optional": true
          },
          {
            "id": "act3-utzaal-s6",
            "text": "Đi tới Aggorat",
            "type": "transition",
            "optional": false
          }
        ]
      },
      {
        "id": "act3-aggorat",
        "name": "Aggorat",
        "clientName": "Aggorat",
        "areaLevel": "44",
        "isTown": false,
        "steps": [
          {
            "id": "act3-aggorat-s1",
            "text": "Lấy waypoint",
            "type": "waypoint",
            "optional": false
          },
          {
            "id": "act3-aggorat-s2",
            "text": "Đặt Sacrificial Heart lên Sacrifical Altar (Blood Sacrifice) nhận 2 passive + 2 weapon set passive points",
            "type": "pickup",
            "optional": true
          },
          {
            "id": "act3-aggorat-s3",
            "text": "Lục Peculiar Fortunes (3 idol) ở nửa đầu khu vực bán cho Oswald",
            "type": "pickup",
            "optional": true
          },
          {
            "id": "act3-aggorat-s4",
            "text": "Đi tới The Black Chambers",
            "type": "transition",
            "optional": false
          }
        ]
      },
      {
        "id": "act3-the-black-chambers",
        "name": "The Black Chambers",
        "clientName": "The Black Chambers",
        "areaLevel": "45",
        "isTown": false,
        "boss": "Doryani, Royal Thaumaturge",
        "steps": [
          {
            "id": "act3-the-black-chambers-s1",
            "text": "Lấy waypoint",
            "type": "waypoint",
            "optional": false
          },
          {
            "id": "act3-the-black-chambers-s2",
            "text": "Giết Doryani, Royal Thaumaturge ở The Testing Pit (act boss)",
            "type": "kill",
            "optional": false
          },
          {
            "id": "act3-the-black-chambers-s3",
            "text": "Quay về Ziggurat Encampment, nói chuyện Doryani, dùng Gateway và sống sót Cataclysm",
            "type": "quest",
            "optional": false
          },
          {
            "id": "act3-the-black-chambers-s4",
            "text": "Đi tới Kingsmarch (Act 4)",
            "type": "transition",
            "optional": false
          }
        ]
      }
    ]
  },
  {
    "id": 4,
    "name": "Act 4",
    "region": "Ngamakanui",
    "zones": [
      {
        "id": "act4-kingsmarch",
        "name": "Kingsmarch",
        "clientName": "Kingsmarch",
        "areaLevel": "53",
        "isTown": true,
        "steps": [
          {
            "id": "act4-kingsmarch-s1",
            "text": "Nói chuyện với Doryani và Alva để bắt đầu The Search",
            "type": "quest",
            "optional": false
          },
          {
            "id": "act4-kingsmarch-s2",
            "text": "Lấy Boat Charter từ Rog",
            "type": "quest",
            "optional": false
          },
          {
            "id": "act4-kingsmarch-s3",
            "text": "Nói chuyện với Makoru để giương buồm tới các đảo",
            "type": "quest",
            "optional": false
          },
          {
            "id": "act4-kingsmarch-s4",
            "text": "Nhận quest Dark Mists từ Tujen",
            "type": "quest",
            "optional": true
          },
          {
            "id": "act4-kingsmarch-s5",
            "text": "Nhận quest Utopia từ Missionary Lorandis",
            "type": "quest",
            "optional": true
          },
          {
            "id": "act4-kingsmarch-s6",
            "text": "Dùng Waypoint và Well, ghé Dannig/Rog mua đồ",
            "type": "waypoint",
            "optional": false
          }
        ]
      },
      {
        "id": "act4-isle-of-kin",
        "name": "Isle of Kin",
        "clientName": "Isle of Kin",
        "areaLevel": "46",
        "isTown": false,
        "boss": "The Blind Beast",
        "steps": [
          {
            "id": "act4-isle-of-kin-s1",
            "text": "Vào Isle of Kin (quest Land of the Kin)",
            "type": "transition",
            "optional": false
          },
          {
            "id": "act4-isle-of-kin-s2",
            "text": "Bật Waypoint",
            "type": "waypoint",
            "optional": false
          },
          {
            "id": "act4-isle-of-kin-s3",
            "text": "Giết The Blind Beast ở Primal Arena lấy Blank Greater Rune",
            "type": "kill",
            "optional": true
          },
          {
            "id": "act4-isle-of-kin-s4",
            "text": "Giết Mimbok, the Enslaved ở Beast Pen lấy Uncut Skill Gem + Uncut Support Gem",
            "type": "kill",
            "optional": true
          },
          {
            "id": "act4-isle-of-kin-s5",
            "text": "Nhặt Torn Map Piece ở Wrecked Boat",
            "type": "pickup",
            "optional": true
          },
          {
            "id": "act4-isle-of-kin-s6",
            "text": "Mở Fossiled Formation ở Abandoned Delving Site lấy Lesser Jeweller's Orb",
            "type": "pickup",
            "optional": true
          }
        ]
      },
      {
        "id": "act4-volcanic-warrens",
        "name": "Volcanic Warrens",
        "clientName": "Volcanic Warrens",
        "areaLevel": "47",
        "isTown": false,
        "boss": "Krutog, Lord of Kin",
        "steps": [
          {
            "id": "act4-volcanic-warrens-s1",
            "text": "Vào Volcanic Warrens",
            "type": "transition",
            "optional": false
          },
          {
            "id": "act4-volcanic-warrens-s2",
            "text": "Bật Waypoint",
            "type": "waypoint",
            "optional": false
          },
          {
            "id": "act4-volcanic-warrens-s3",
            "text": "Giết Krutog, Lord of Kin ở The Tyrant's Throne để hoàn thành Land of the Kin",
            "type": "kill",
            "optional": false
          },
          {
            "id": "act4-volcanic-warrens-s4",
            "text": "Nếu Matiki bị nhốt ở đây, giải cứu khỏi lồng để mở Eye of Hinekora + Trial of the Ancestors",
            "type": "note",
            "optional": true
          },
          {
            "id": "act4-volcanic-warrens-s5",
            "text": "Giết Magmanore + Sulphirox ở Volcanic Nest lấy rare ring",
            "type": "kill",
            "optional": true
          }
        ]
      },
      {
        "id": "act4-kedge-bay",
        "name": "Kedge Bay",
        "clientName": "Kedge Bay",
        "areaLevel": "46",
        "isTown": false,
        "steps": [
          {
            "id": "act4-kedge-bay-s1",
            "text": "Vào Kedge Bay (quest Dark Mists)",
            "type": "transition",
            "optional": false
          },
          {
            "id": "act4-kedge-bay-s2",
            "text": "Bật Waypoint",
            "type": "waypoint",
            "optional": false
          },
          {
            "id": "act4-kedge-bay-s3",
            "text": "Đi xuyên qua Kedge Bay để tới Journey's End",
            "type": "transition",
            "optional": false
          },
          {
            "id": "act4-kedge-bay-s4",
            "text": "Nhặt Torn Map Piece ở Smuggler's Stash (Dead Man's Chest)",
            "type": "pickup",
            "optional": true
          }
        ]
      },
      {
        "id": "act4-journeys-end",
        "name": "Journey's End",
        "clientName": "Journey's End",
        "areaLevel": "47",
        "isTown": false,
        "boss": "Captain Hartlin",
        "steps": [
          {
            "id": "act4-journeys-end-s1",
            "text": "Vào Journey's End",
            "type": "transition",
            "optional": false
          },
          {
            "id": "act4-journeys-end-s2",
            "text": "Bật Waypoint",
            "type": "waypoint",
            "optional": false
          },
          {
            "id": "act4-journeys-end-s3",
            "text": "Triệu hồi Tujen ở lối vào, tìm Freya Hartlin bị nhốt trong rune cage",
            "type": "quest",
            "optional": false
          },
          {
            "id": "act4-journeys-end-s4",
            "text": "Giết Captain Hartlin ở The Captain's Chair, nhặt Verisium",
            "type": "kill",
            "optional": false
          },
          {
            "id": "act4-journeys-end-s5",
            "text": "Mang Verisium về cho Dannig đổi Verisium Spikes, quay lại giải thoát Freya",
            "type": "quest",
            "optional": false
          },
          {
            "id": "act4-journeys-end-s6",
            "text": "Sống sót qua màn Delirium, giết Omniphobia, Fear Manifest",
            "type": "kill",
            "optional": false
          }
        ]
      },
      {
        "id": "act4-whakapanu-island",
        "name": "Whakapanu Island",
        "clientName": "Whakapanu Island",
        "areaLevel": "46",
        "isTown": false,
        "boss": "Great White One",
        "steps": [
          {
            "id": "act4-whakapanu-island-s1",
            "text": "Vào Whakapanu Island (quest Whakapanu Island)",
            "type": "transition",
            "optional": false
          },
          {
            "id": "act4-whakapanu-island-s2",
            "text": "Bật Waypoint",
            "type": "waypoint",
            "optional": false
          },
          {
            "id": "act4-whakapanu-island-s3",
            "text": "Đi xuyên đảo tới Singing Caverns",
            "type": "transition",
            "optional": false
          }
        ]
      },
      {
        "id": "act4-singing-caverns",
        "name": "Singing Caverns",
        "clientName": "Singing Caverns",
        "areaLevel": "47",
        "isTown": false,
        "boss": "Diamora, Song of Death",
        "steps": [
          {
            "id": "act4-singing-caverns-s1",
            "text": "Vào Singing Caverns",
            "type": "transition",
            "optional": false
          },
          {
            "id": "act4-singing-caverns-s2",
            "text": "Bật Waypoint",
            "type": "waypoint",
            "optional": false
          },
          {
            "id": "act4-singing-caverns-s3",
            "text": "Giết Diamora, Song of Death ở Chamber of Echoes",
            "type": "kill",
            "optional": false
          },
          {
            "id": "act4-singing-caverns-s4",
            "text": "Nếu Matiki bị nhốt ở đây, giải cứu khỏi lồng để mở Eye of Hinekora + Trial of the Ancestors",
            "type": "note",
            "optional": true
          }
        ]
      },
      {
        "id": "act4-shrike-island",
        "name": "Shrike Island",
        "clientName": "Shrike Island",
        "areaLevel": "46",
        "isTown": false,
        "boss": "Scourge of the Skies",
        "steps": [
          {
            "id": "act4-shrike-island-s1",
            "text": "Vào Shrike Island (quest Shrike Island)",
            "type": "transition",
            "optional": false
          },
          {
            "id": "act4-shrike-island-s2",
            "text": "Bật Waypoint",
            "type": "waypoint",
            "optional": false
          },
          {
            "id": "act4-shrike-island-s3",
            "text": "Giết Scourge of the Skies ở Corrupted Nests lấy Uncut Spirit Gem",
            "type": "kill",
            "optional": false
          },
          {
            "id": "act4-shrike-island-s4",
            "text": "Nếu Matiki bị nhốt ở đây, giải cứu khỏi lồng để mở Eye of Hinekora + Trial of the Ancestors",
            "type": "note",
            "optional": true
          },
          {
            "id": "act4-shrike-island-s5",
            "text": "Nhặt rare Jade Club / Totemic Greatclub ở Impaled Karui",
            "type": "pickup",
            "optional": true
          },
          {
            "id": "act4-shrike-island-s6",
            "text": "Nhặt Torn Map Piece ở Corpse Nest",
            "type": "pickup",
            "optional": true
          }
        ]
      },
      {
        "id": "act4-abandoned-prison",
        "name": "Abandoned Prison",
        "clientName": "Abandoned Prison",
        "areaLevel": "46",
        "isTown": false,
        "steps": [
          {
            "id": "act4-abandoned-prison-s1",
            "text": "Vào Abandoned Prison (quest Abandoned Prison)",
            "type": "transition",
            "optional": false
          },
          {
            "id": "act4-abandoned-prison-s2",
            "text": "Bật Waypoint",
            "type": "waypoint",
            "optional": false
          },
          {
            "id": "act4-abandoned-prison-s3",
            "text": "Đi xuyên prison maze tới Solitary Confinement",
            "type": "transition",
            "optional": false
          },
          {
            "id": "act4-abandoned-prison-s4",
            "text": "Kéo lever mở The Armoury, giết Fallen Quartermaster lấy vũ khí",
            "type": "kill",
            "optional": true
          }
        ]
      },
      {
        "id": "act4-solitary-confinement",
        "name": "Solitary Confinement",
        "clientName": "Solitary Confinement",
        "areaLevel": "47",
        "isTown": false,
        "boss": "The Prisoner",
        "steps": [
          {
            "id": "act4-solitary-confinement-s1",
            "text": "Vào Solitary Confinement",
            "type": "transition",
            "optional": false
          },
          {
            "id": "act4-solitary-confinement-s2",
            "text": "Bật Waypoint",
            "type": "waypoint",
            "optional": false
          },
          {
            "id": "act4-solitary-confinement-s3",
            "text": "Mở Fortified Door rồi giết The Prisoner",
            "type": "kill",
            "optional": false
          },
          {
            "id": "act4-solitary-confinement-s4",
            "text": "Nếu Matiki bị nhốt ở đây, giải cứu khỏi lồng để mở Eye of Hinekora + Trial of the Ancestors",
            "type": "note",
            "optional": true
          },
          {
            "id": "act4-solitary-confinement-s5",
            "text": "Mở guaranteed Strongbox ở Warden's Chamber",
            "type": "pickup",
            "optional": true
          }
        ]
      },
      {
        "id": "act4-eye-of-hinekora",
        "name": "Eye of Hinekora",
        "clientName": "Eye of Hinekora",
        "areaLevel": "46",
        "isTown": false,
        "steps": [
          {
            "id": "act4-eye-of-hinekora-s1",
            "text": "Giương buồm tới Eye of Hinekora sau khi cứu Matiki (quest Trial of the Ancestors)",
            "type": "transition",
            "optional": true
          },
          {
            "id": "act4-eye-of-hinekora-s2",
            "text": "Bật Waypoint",
            "type": "waypoint",
            "optional": true
          },
          {
            "id": "act4-eye-of-hinekora-s3",
            "text": "Nói chuyện với Matiki + Navali ở Well of Passing, vượt 3 Tests of Mettle (Kaom, Maata, Rakiata)",
            "type": "trial",
            "optional": true
          },
          {
            "id": "act4-eye-of-hinekora-s4",
            "text": "Tỏ lòng kính trọng Navali ở The Silent Hall nhận +5% max Mana vĩnh viễn",
            "type": "pickup",
            "optional": true
          }
        ]
      },
      {
        "id": "act4-halls-of-the-dead",
        "name": "Halls of the Dead",
        "clientName": "Halls of the Dead",
        "areaLevel": "47",
        "isTown": false,
        "boss": "Yama The White",
        "steps": [
          {
            "id": "act4-halls-of-the-dead-s1",
            "text": "Vào Halls of the Dead",
            "type": "transition",
            "optional": true
          },
          {
            "id": "act4-halls-of-the-dead-s2",
            "text": "Bật Waypoint",
            "type": "waypoint",
            "optional": true
          },
          {
            "id": "act4-halls-of-the-dead-s3",
            "text": "Vượt 3 Trial thưởng stat vĩnh viễn",
            "type": "trial",
            "optional": true
          },
          {
            "id": "act4-halls-of-the-dead-s4",
            "text": "Giết Yama The White ở Yama's Test",
            "type": "kill",
            "optional": true
          }
        ]
      },
      {
        "id": "act4-trial-of-the-ancestors",
        "name": "Trial of the Ancestors",
        "clientName": "Trial of the Ancestors",
        "areaLevel": "47",
        "isTown": false,
        "steps": [
          {
            "id": "act4-trial-of-the-ancestors-s1",
            "text": "Vào Trial of the Ancestors hoàn tất ascendancy trial",
            "type": "trial",
            "optional": true
          }
        ]
      },
      {
        "id": "act4-plunders-point",
        "name": "Plunder's Point",
        "clientName": "Plunder's Point",
        "areaLevel": "53",
        "isTown": false,
        "steps": [
          {
            "id": "act4-plunders-point-s1",
            "text": "Mang đủ 4 Torn Map Piece cho Makoru mở Plunder's Point (quest Forgotten Bounty)",
            "type": "quest",
            "optional": true
          },
          {
            "id": "act4-plunders-point-s2",
            "text": "Bật Waypoint",
            "type": "waypoint",
            "optional": true
          },
          {
            "id": "act4-plunders-point-s3",
            "text": "Triệu hồi Dannig, kích nổ Expedition 18 explosives — chỉ 1 lần thử, chết là mất",
            "type": "quest",
            "optional": true
          }
        ]
      },
      {
        "id": "act4-arastas",
        "name": "Arastas",
        "clientName": "Arastas",
        "areaLevel": "52",
        "isTown": false,
        "boss": "Torvian, Hand of the Saviour",
        "steps": [
          {
            "id": "act4-arastas-s1",
            "text": "Giương buồm tới Arastas sau khi gom đủ 3 mảnh Precursor weapon (The Search)",
            "type": "transition",
            "optional": false
          },
          {
            "id": "act4-arastas-s2",
            "text": "Bật Waypoint",
            "type": "waypoint",
            "optional": false
          },
          {
            "id": "act4-arastas-s3",
            "text": "Theo dấu Preacher, phá forcefield rồi sống sót qua ambush của Benedictus",
            "type": "quest",
            "optional": false
          },
          {
            "id": "act4-arastas-s4",
            "text": "Giết Torvian, Hand of the Saviour",
            "type": "kill",
            "optional": false
          },
          {
            "id": "act4-arastas-s5",
            "text": "Mua rare caster weapon/foci/jewellery từ Servitor Marius trước khi Arastas hostile",
            "type": "note",
            "optional": true
          }
        ]
      },
      {
        "id": "act4-the-excavation",
        "name": "The Excavation",
        "clientName": "The Excavation",
        "areaLevel": "52",
        "isTown": false,
        "boss": "Benedictus, First Herald of Utopia",
        "steps": [
          {
            "id": "act4-the-excavation-s1",
            "text": "Vào The Excavation",
            "type": "transition",
            "optional": false
          },
          {
            "id": "act4-the-excavation-s2",
            "text": "Bật Waypoint",
            "type": "waypoint",
            "optional": false
          },
          {
            "id": "act4-the-excavation-s3",
            "text": "Đối đầu Kanu, giết Benedictus, First Herald of Utopia ở The Precursor Forge",
            "type": "kill",
            "optional": false
          },
          {
            "id": "act4-the-excavation-s4",
            "text": "Mở Excavated Cache (rare chest)",
            "type": "pickup",
            "optional": true
          }
        ]
      },
      {
        "id": "act4-ngakanu",
        "name": "Ngakanu",
        "clientName": "Ngakanu",
        "areaLevel": "53",
        "isTown": false,
        "steps": [
          {
            "id": "act4-ngakanu-s1",
            "text": "Về Kingsmarch nói chuyện với Rhodri, rồi truy đuổi Tavakai tới Ngakanu",
            "type": "quest",
            "optional": false
          },
          {
            "id": "act4-ngakanu-s2",
            "text": "Bật Waypoint",
            "type": "waypoint",
            "optional": false
          },
          {
            "id": "act4-ngakanu-s3",
            "text": "Giết Blood-fevered Brew-breather ở Medicine Circle, nói với Kaimana nhận Blood Salve",
            "type": "kill",
            "optional": false
          },
          {
            "id": "act4-ngakanu-s4",
            "text": "Đi xuyên Ngakanu tới Heart of the Tribe",
            "type": "transition",
            "optional": false
          },
          {
            "id": "act4-ngakanu-s5",
            "text": "Clear Abyss encounter",
            "type": "kill",
            "optional": true
          }
        ]
      },
      {
        "id": "act4-heart-of-the-tribe",
        "name": "Heart of the Tribe",
        "clientName": "Heart of the Tribe",
        "areaLevel": "53",
        "isTown": false,
        "boss": "Tavakai, the Chieftain",
        "steps": [
          {
            "id": "act4-heart-of-the-tribe-s1",
            "text": "Vào Heart of the Tribe",
            "type": "transition",
            "optional": false
          },
          {
            "id": "act4-heart-of-the-tribe-s2",
            "text": "Bật Waypoint",
            "type": "waypoint",
            "optional": false
          },
          {
            "id": "act4-heart-of-the-tribe-s3",
            "text": "Giết Tavakai, the Chieftain ở Sacred Interior (3 phase: Chieftain -> the Fallen -> the Consumed)",
            "type": "kill",
            "optional": false
          },
          {
            "id": "act4-heart-of-the-tribe-s4",
            "text": "Về Kingsmarch nói chuyện với The Hooded One để hoàn thành The Search",
            "type": "quest",
            "optional": false
          }
        ]
      }
    ]
  }
]
