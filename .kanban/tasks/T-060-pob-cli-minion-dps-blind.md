# T-060: `/pob` CLI báo DPS player cho build minion — mù hoàn toàn với minion output

> `pob-cli.sh calc` chỉ đọc `build.calcsTab.mainOutput`, nên build minion trả về DPS của cú cast player thay vì DPS đàn minion.

- **priority**: high
- **effort**: M

## Problem

Chạy `data/pob-source/pob-cli.sh calc @<pob-code>` trên character OneMoreMinionMamy (Gemling Unearth minion build) trả `totalDPS: 8307.27`. Con số đó là DPS của **chính cú cast Unearth của player** (main socket group 4), không phải DPS của Bone Crawler — con minion mang toàn bộ damage của build. DPS thật mỗi Bone Crawler là **48,588**, tức CLI báo thiếu ~6 lần cho một con minion, và không hề đả động tới 36 con.

Root cause: `pob-cli.lua:77` → `local output = build.calcsTab.mainOutput or {}`. `mainOutput` là output của actor **player**. PoB2 tính minion ở một actor riêng: `env.minion.output.TotalDPS` (xem `src/Modules/Calcs.lua:188`). CLI không đọc actor đó bao giờ.

Hệ quả kèm theo — CLI cũng không dump được:
- `ActiveMinionLimit` per skill (Unearth = 36; cần để ra DPS đàn)
- reservation ledger (`breakdown.SpiritReserved.reservations`)
- Full DPS (`calcs.calcFullDPS`) — mọi socket group trong export poe.ninja đều `includeInFullDPS="nil"` nên tính năng này tắt sẵn

Ngoài ra `gemLinks[].supports` luôn trả `{}` dù XML có đủ support (`pob-cli.sh` không walk `gemList`), làm người đọc tưởng import mất support.

## Goal

`/pob` trả đúng DPS cho build minion mà không cần ai viết script Lua tay.

## Requirements

- `calc` (hoặc lệnh mới `minions`) dump per-socket-group: tên skill, tên minion, `env.minion.output.TotalDPS`, `ActiveMinionLimit`.
- Không tự nhân `perMinionDPS × limit` rồi trình bày như một con số chắc chắn — limit của PoB **không đáng tin cho mọi minion** (xem Notes), phải in cả hai số để người đọc tự nhân.
- Fix `gemLinks[].supports` walk `sg.gemList` để hiện support thật.
- Dedupe socket group do item-granted skill sinh ra (PoB tự tạo group thứ 2 từ `grantedSkills`, làm `calcFullDPS` cộng đôi).
- SKILL.md ghi rõ giới hạn của limit modelling để lần sau không ai quote nhầm.

## Notes — cạm bẫy đã verify (2026-07-16, PoB fork v0.20.0)

PoB **không** nhân minion DPS với minion limit; `ActiveMinionLimit` là stat rời (`CalcOffence.lua:1263`). Và limit đó chỉ đúng cho một số minion:

- **Unearth = 36 → đúng.** `base_number_of_skeletal_constructs_allowed` ở gem level 40 = 34, cộng Expendable Army +2. Map stat nhất quán (`Minions.lua:559` ↔ `SkillStatMap.lua:2556` cùng `ActiveUnearthBoneConstructLimit`).
- **Wolf Pack = 2 → SAI.** Data bug: minion đọc `limit = "WolfLimit"` (`Minions.lua:854`) nhưng skill grant `number_of_wolves_allowed` → `ActiveWolfLimit` (`SkillStatMap.lua:2568`). **Không gì trong repo grant `WolfLimit`** (`rg '"WolfLimit"'` → đúng 1 hit, chính là dòng đọc nó). Base rơi về 0, số 2 hiện ra chỉ là Expendable Army +2 cộng lên 0. Gem text thật: "Summons 6 Wolves".
- **Skeletal Warrior/Cleric/Sniper/Frost Mage = 0.** Số lượng skeleton POE2 gate bằng spirit reservation chứ không bằng limit stat → PoB để trống.

Reservation ledger cũng lệch hai đầu: PoB nhân đôi Wolf Pack (character thật chỉ có 1 skill Wolf Pack, PoB tự tạo thêm group từ amulet grant → thừa ~57 spirit) đồng thời **bỏ sót hẳn reservation của Purity of Lightning**. Nên `SpiritReserved 300 / SpiritUnreserved 53` không quote được.

Script tay đã dùng để lấy số (tham chiếu khi implement, không phải để giữ lại): `tmp/minion-dps.lua`, `tmp/minion-detail.lua`, `tmp/gem-detail.lua`, `tmp/spirit-ledger.lua`. Contract chạy: cwd = `data/pob-source/src`, `dofile("HeadlessWrapper.lua")`, đọc `arg` TRƯỚC khi dofile (HeadlessWrapper ghi đè global `arg`), load qua `loadBuildFromXML(Inflate(common.base64.decode(b64)))`, module calcs lấy ở `build.calcsTab.calcs`.

## Criteria

- [ ] `pob-cli.sh calc @tmp/mamy-pob-code.txt` in ra dòng Unearth → minion `Bone Crawler`, `perMinionDPS ≈ 48588`, `ActiveMinionLimit = 36`.
- [ ] Cùng lệnh in `Wolf Companion ≈ 10958` kèm cảnh báo limit không đáng tin (không im lặng trả 2).
- [ ] `gemLinks[]` của group Unearth liệt kê đủ 5 support (Feeding Frenzy II, Rage III, Rapid Attacks II, Heavy Swing, Uul-Netol's Embrace).
- [ ] Skill có granted duplicate (Wolf Pack, Bone Blast, Purity of Lightning, Skeletal Warrior, Virtuous Barrier) chỉ hiện MỘT group.
- [ ] `.claude/skills/pob/SKILL.md` có section ghi limit-modelling caveat + `WolfLimit` bug.
- [ ] Build không-minion (vd `content/builds/mercenary/0-5-arc-spell-totem-gemling.md`) vẫn ra DPS như trước — không regress.
