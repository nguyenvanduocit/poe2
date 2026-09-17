---
template: templates/character-progress-template.md
document_type: character-progress
title: OneMoreMinionMamy — Progress Tracker
status: retired
author: duocnv
created: '2026-07-16'
updated: '2026-09-17'
character_name: OneMoreMinionMamy
character_class: Mercenary
ascendancy: Gemling Legionnaire
league: '0.5'
patch: 0.5.3
current_progress: t16-farming
---

# OneMoreMinionMamy — Progress Tracker

**Retired 2026-09-17.** Account đã bỏ char này để chuyển sang [i_hate_minion_fmfr](/characters/i-hate-minion-fmfr) (Frostbolt Mirror CI, không còn liên quan đến minion). File giữ nguyên làm log lịch sử của char và của phase minion-Unearth; snapshot dưới là snapshot cuối lúc còn chơi (Lv89, 2026-07-15), không phản ánh trạng thái account hiện tại.

Mercenary / Gemling Legionnaire Lv89 chạy đàn skeleton cộng Bone Construct từ :wiki-link{url="https://www.poe2wiki.net/wiki/Unearth"}, cơ chế đầy đủ nằm ở [build doc](/builds/mercenary/0-5-gemling-unearth-skeleton-army). Char này thay ThaoCamVienSaiGon làm main và thừa hưởng luôn phần lớn gear đắt của nó. Res đã cap sạch cả bốn kênh nên việc còn lại chỉ có một: phys max hit 4,565 đang thấp hơn ba kênh elemental 3.4 lần, và đó là thứ giết mình chứ không phải thiếu damage.

## Snapshot

*Last fetch: 2026-07-16 — poe.ninja model 10, snapshot `updatedUtc` 2026-07-15T21:49Z. Đây là snapshot, không phải live: poe.ninja chỉ cập nhật khi bấm "Refresh character", nên số dưới đúng tới thời điểm đó. Fetch bằng `.claude/skills/pob/scripts/scripts/fetch-poeninja.sh` với URL profile của char.*

- **Life / ES / Mana:** 1,654 / 2,284 / 1,210
- **Spirit:** 353
- **Armour / Evasion / Deflection:** 1,987 (phys damage reduction 17%) / 4,168 (evade 40%, max 95%) / 1,083 (deflect 12%, max 95%)
- **EHP:** 19,202
- **Resistances:** Fire **75** (overcap +50) / Cold **75** (+60) / Lightning **75** (+107) / Chaos **75** (+9) — cap sạch cả bốn, max res vẫn ở mốc 75 mặc định
- **Max hit chịu được:** Phys **4,565** (thấp nhất) / Fire 15,723 / Cold 15,723 / Lightning 15,723 / Chaos 12,446
- **Item Rarity:** 104%
- **Attributes:** Str 117 / Dex 91 / Int 145
- **Charges:** Endurance 3 / Frenzy 3 / Power 3
- **Movement Speed:** 132%
- **Life regen:** 130/s
- **Main DPS:** skeleton cộng Bone Construct là minion chuẩn nên PoB2 model được — con số và derivation nằm ở [build doc](/builds/mercenary/0-5-gemling-unearth-skeleton-army), không lặp lại ở đây

Overcap lightning +107 và cold +60 là phần dư không mua thêm sức chịu đựng nào ở trạng thái bình thường; nó chỉ có giá khi gặp map mod Elemental Weakness hoặc curse giảm res. Nếu cần chỗ cho mod khác trên slot rare thì đây là chỗ cắt rẻ nhất, không phải fire (+50) hay chaos (+9).

## Mọi dòng Bonded trên gear đều chết

Model trả `enableBondedMods = False`: Bonded (`ShamanOnlyMods`) chỉ sống trên Shaman/Druid, mà đây là Gemling. Đếm ra **12 trong 24 dòng rune là Bonded và đang chết** — đúng một nửa ngân sách rune không làm gì. Phân bổ: boots 3, body 2, helm 2, gloves 2, weapon 1, offhand 1, sceptre set 2 thêm 1. Đau nhất là boots, vì ba dòng chết ở đó (`+32 max Life`, `+32 max Mana`, `+1 Maximum Endurance Charges`) đúng là thứ build đang thiếu để vá phys; body thì hứa `+8% Chaos Resistance` với `+5% Quality of all Skills`. Không dòng nào trong số đó đang chạy.

Chỗ này nguy hiểm vì nó lặp lại đúng cái bẫy đã dính ở char cũ: đọc tooltip gear rồi cộng nhẩm vào res. Khi tính bất kỳ stat nào trên char này, bỏ qua toàn bộ dòng có tiền tố `Bonded:`. Con số ở Snapshot đã trừ chúng ra rồi vì lấy thẳng từ model.

## Current Goals

Res xong thì đừng đụng vào res nữa — đó là bài học ngược với char cũ, nơi cold âm 53 gánh mọi ưu tiên suốt nhiều tuần. Ở char này thứ duy nhất còn thủng là phys: max hit 4,565 so với 15,723 của ba kênh elemental, tức một đòn phys lớn giết mình trong khi cùng lượng damage đó ở dạng fire chỉ xước. Armour 1,987 quá mỏng để cắt phys, life 1,654 cũng mỏng, và bộ này thủ bằng ES 2,284 cộng evasion/deflection chứ không phải armour — nên cộng thêm armour lẻ sẽ không cứu được, phải chọn hướng: gom armour đủ nhiều để phần trăm DR có nghĩa, hay đẩy endurance charge và phys-taken-as. Boots đã sẵn rune 24% chance ăn thêm endurance charge nên hướng charge rẻ hơn.

Song song là một khoảng damage chưa lấy, lộ ra khi so với build tham khảo Ghazzy: mình chỉ đeo 2 viên jewel unique trong khi cùng archetype chạy 6 viên rare Sapphire toàn minion damage cộng all ele res cộng attack/cast speed. Damage hiện tại đủ chạy nên việc này xếp sau phys, nhưng jewel là thứ mua thẳng bằng currency, không cần đổi bộ gear.

Bốn slot limb mà Ghazzy có mà mình không thì đừng đuổi theo: đó là **Transcendent Limb**, buff tạm nhận ở phòng Flesh Surgeon T3+ trong Atziri's Temple, mất sạch khi chết hoặc respawn. Không mua được, không giữ được qua một cái chết. Nó cũng có nghĩa là con evasion 8,393 trong snapshot của Ghazzy đang cộng phần buff sẽ bay mất, nên so evasion hai bộ thì phải trừ chỗ đó ra.

## Priority Actions

1. **Chốt hướng bù phys trước khi mua gì.** Sim trong PoB2 hai kịch bản trên chính char: gom armour trên slot rare so với đẩy endurance charge tối đa cộng phys-taken-as. Số nào nâng phys max hit 4,565 nhiều hơn trên mỗi exalt thì đi hướng đó. Đừng mua lẻ trước khi có số — armour 1,987 hiện tại nằm ở vùng phần trăm DR rất thấp nên vài trăm armour lẻ có thể gần như không đổi gì.
2. **Mua rare Sapphire jewel minion.** Cùng archetype chạy 6 viên với `Minions deal 10-18% increased Damage` + `Minions have +10-17% to all Elemental Resistances` + `Minions have 7% increased Attack and Cast Speed`. Đây là damage rẻ nhất chưa lấy và không đụng slot thủ. Search `status: securable`, rank top-10 theo minion damage.
3. **Gỡ rune Bonded ở boots khi craft lại slot.** Ba dòng chết ở đó là `+32 max Life`, `+32 max Mana` và `+1 Maximum Endurance Charges` — đúng hướng vá phys. Đổi sang rune sống là lấy lại chỗ đó mà không tốn slot nào.
4. **Socket một curse vào Blasphemy.** Cả 5 socket gem của nó đang rỗng nên "Reserves 60 Spirit per socketed Curse" nhân 0 ra 0: gem không tốn gì và cũng không cho gì. Đọc spirit free thật trong client trước khi cắm — PoB2 báo 53 free nhưng số đó sai ở cả hai đầu (nhân đôi Wolf Pack, bỏ sót Purity of Lightning).
5. **Cắt overcap thừa nếu cần chỗ.** Lightning +107 và cold +60 là dư; khi cần suffix cho armour/life trên slot rare thì lấy từ hai kênh đó, giữ nguyên fire (+50) và chaos (+9).

## Gear Summary

Bộ này thừa hưởng gần hết phần đắt từ char cũ. Belt là :wiki-link{url="https://www.poe2wiki.net/wiki/Mageblood"} với Legacy of Gold ×2 cộng Amethyst cộng Bismuth — vì có hai Gold trùng nên dòng "50% increased effect per duplicate" kích hoạt, và Bismuth cộng Amethyst là lý do chính res cap sạch mà không tốn suffix gear. Amulet **Brood Rosary** giữ fractured +4 Level of all Minion Skills nhờ quality minion-mod 40% cộng anoint The Soul Meridian, chi tiết craft đã viết ở [+4 minion amulet](/crafting/0-5-plus4-minion-amulet). Helm **Skull Corona** cho thêm +2 minion levels.

Phần mới so với char cũ nằm ở hai tay: wand **Brood Edge** với +5 Level of all Physical Spell Skills cộng hai dòng +1 all Spell (một crafted, một rune) và desecrated `Minions deal 58% increased Damage`, đồng thời grant luôn Bone Blast lvl18; offhand **Cataclysm Crusher** cho +3 Level of all Minion Skills cộng rune `Allies in your Presence deal 40% increased Damage`. Jewel chỉ có hai viên unique: :wiki-link{url="https://www.poe2wiki.net/wiki/Split_Personality"} mở đường allocate passive từ điểm xuất phát Sorceress, nhờ nó một Mercenary mới với tới cụm Int/ES; và [Prism of Belief](/guides/prism-of-belief) cho +3 Level of all Unearth Skills.

**Biggest upgrade path:** phys mitigation. Res, damage và rarity đều ổn ở mức hiện tại; phys max hit 4,565 là con số duy nhất lệch hẳn khỏi phần còn lại của bộ thủ.

## Progress Log

### 2026-09-17

Retired. Account bỏ hướng minion, roll char mới [i_hate_minion_fmfr](/characters/i-hate-minion-fmfr) chạy Frostbolt Mirror CI. Không phải respec — char khác hoàn toàn, gear khác, tree khác. Snapshot dưới đóng băng ở Lv89 2026-07-15, mọi số về sau không cập nhật thêm.

### 2026-07-16

Snapshot đầu tiên của char sau khi đổi main từ ThaoCamVienSaiGon. Gear đắt đã chuyển sang gần hết: Mageblood rời khỏi char cũ trước 2026-07-15 03:26 (snapshot char cũ lúc đó đã tụt về Hypnotic Cord), còn Brood Rosary, Skull Corona và Havoc Goad thì sang muộn hơn — snapshot char cũ 03:26 vẫn còn liệt kê chúng, snapshot char này lúc 21:49 đã có đủ. Nghĩa là trang poe.ninja của char cũ đang stale và không tự sửa được; nó vẫn vẽ một bộ gear không còn tồn tại.

So bộ số với build tham khảo cùng archetype thì hướng thủ đã tách hẳn chứ không phải chỉ chậm 8 level: Ghazzy chạy Life 3,235 với Armour 8,417 và ES 0, max res 80 cả ba kênh; mình chạy Life 1,654 với ES 2,284, Armour 1,987, res 75. Đổi lại chaos max hit của mình 12,446 so với 5,217 của Ghazzy, và phys max hit 4,565 so với 4,298 — tức bộ mình chịu phys nhỉnh hơn dù armour kém 4 lần, vì EHP của Ghazzy dồn vào life. Không phải cứ theo streamer là hơn, nhưng EHP tổng 19,202 so với 29,700 thì vẫn là khoảng cách thật cần thu hẹp.

## Relationships

- **references** [i_hate_minion_fmfr — Progress Tracker](/characters/i-hate-minion-fmfr) — char kế tiếp của account sau khi retire char này; Frostbolt CI, không liên quan minion.
- **related_builds** [Gemling Unearth Skeleton Army](/builds/mercenary/0-5-gemling-unearth-skeleton-army) — build doc đầy đủ của chính character này: cơ chế, gem, tree, DPS, failure modes.
- **references** [Prism of Belief](/guides/prism-of-belief) — jewel cho +3 Level of all Unearth Skills, một trong hai viên đang đeo.
- **references** [+4 minion amulet](/crafting/0-5-plus4-minion-amulet) — cách craft Brood Rosary đang đeo, quality truncate nên phải đủ 40%.
- **related_guides** [Spirit và spirit reservation](/guides/spirit-and-spirit-reservation) — quản pool 353 Spirit cho đàn skeleton.
