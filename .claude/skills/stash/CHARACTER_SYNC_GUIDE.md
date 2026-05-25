# Character Sync Guide

## POE API Structure (Learned from TheLeader_A sync)

### Key Discovery
**Field name:** `socketedItems` (lowercase camelCase), NOT `SocketedItems`

### API Endpoints

1. **Get Characters List**
   ```
   GET /character-window/get-characters?accountName={name}&realm={realm}
   ```

2. **Get Passive Tree**
   ```
   GET /character-window/get-passive-skills?accountName={name}&character={char}&realm={realm}
   ```

3. **Get Items & Socketed Gems**
   ```
   GET /character-window/get-items?accountName={name}&character={char}&realm={realm}
   ```

### Item Structure
```json
{
  "items": [
    {
      "inventoryId": "Body",
      "typeLine": "Simple Robe",
      "sockets": [...],
      "socketedItems": [        // ← LOWERCASE!
        {
          "typeLine": "Absolution",
          "socket": 0,
          "support": false,
          "properties": [
            {"name": "Level", "values": [["20", 0]]},
            {"name": "Quality", "values": [["+20", 1]]}
          ]
        }
      ]
    }
  ]
}
```

### Key Fields in socketedItem
- `typeLine` - Gem name
- `socket` - Socket index (0-based)
- `support` - Boolean (true if support gem)
- `properties` - Array with Level, Quality, Cost, Duration, etc.
- `abyssJewel` - Boolean (true if abyss jewel)
- `hybrid` - Object with transfigured/dual-skill data

### Reference
- Source: Path of Building `/src/Classes/ImportTab.lua` lines 1110-1187
- Field name verified in `ImportSocketedItems()` function
