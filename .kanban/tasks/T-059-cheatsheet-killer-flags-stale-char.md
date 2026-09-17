# T-059: Cheatsheet `killer` flags còn calibrate theo char cũ (Spirit Walker), sai với main mới

> Ba component cheatsheet đánh dấu map mod nào "giết build của mình" dựa trên profile thủ của ThaoCamVienSaiGon (chaos ~25 uncapped, thủ thuần evasion). Main mới là Gemling skeleton: chaos đã cap 75, có armour + ES. Flag hiện tại đưa lời khuyên sai ngay trong lúc chơi.

- **priority**: high
- **effort**: S

## Problem

`killer: true` trong các cheatsheet không phải nhãn trang trí — nó là "mod này cấm, skip map" đọc lúc đang chơi. Cả ba component ghi rõ trong comment là chúng calibrate theo char cũ:

- `app/components/RitualCheatsheet.vue:9-10` — "a row that hits the character being played (Spirit Walker companion pack: defence is pure EVASION, Chaos res is not capped ~25)"
- `app/components/OmenFarmCheatsheet.vue:11-12` — "(Spirit Walker companion pack: phys EHP thin, Chaos res ~25 uncapped)"
- `app/components/ExpeditionCheatsheet.vue:9-10` — "(Spirit Walker companion pack: companions deal PHYSICAL, defence is pure EVASION, Chaos res ...)"
- `app/components/RitualCheatsheet.vue:51` — blurb "Tag BUILD = giết đúng build companion của mình."

Main hiện tại là **OneMoreMinionMamy** (Gemling Legionnaire, Lv89, snapshot 2026-07-15, model 10). Đối chiếu từng giả định:

| giả định trong code | char cũ | main mới |
|---|---|---|
| Chaos res ~25 uncapped | đúng lúc đó | **SAI** — chaos cap 75 (overcap +9) |
| thủ thuần evasion, armour 0 | đúng | **SAI** — armour 1,987 + ES 2,284 + evasion 4,168 |
| phys EHP mỏng | đúng | **vẫn đúng** — phys max hit 4,565 vs ele 15,723 |
| minion/companion đánh phys | đúng | **phần lớn vẫn đúng** — Unearth + skeleton là phys; riêng Skeletal Sniper explosion convert 100% phys→fire |

Nên hiện có hai loại lỗi ngược chiều: cảnh báo **thừa** (mod chaos giờ vô hại vì đã cap → skip map không cần thiết, mất tiền) và cảnh báo **thiếu** (không có row nào bắt riêng phys, mà phys mới là kênh one-shot thật của main mới).

Chi tiết số: `content/characters/one-more-minion-mamy.md`, nguồn thô `data/character-exports/export-OneMoreMinionMamy.json`.

## Goal

Cheatsheet cảnh báo đúng theo profile thủ của main đang chơi, để lúc chơi đọc flag là tin được.

## Requirements

- Re-calibrate `killer` theo profile mới: phys là lỗ số một; chaos đã cap nên hạ cấp/bỏ flag chaos; thủ là armour + ES + evasion chứ không phải evasion thuần.
- Sửa luôn comment đầu file — comment hiện tại là nguồn của sự nhầm; đừng để lại dấu vết char cũ (clean-slate: viết lại theo trạng thái hiện tại, không `~~cũ~~ → mới`).
- Xét việc tách giả định thủ ra **một chỗ khai báo duy nhất** (dùng chung cho cả ba component) thay vì lặp trong từng file — đây chính là lý do một lần đổi char làm sai cả ba. Chỉ làm nếu không phình scope.
- Non-goal: đổi layout/UI, đổi data mod không liên quan tới `killer`.

## Criteria

- [ ] Không còn chuỗi "Spirit Walker" / "companion pack" / "Chaos res ~25" / "pure EVASION" trong `app/components/*Cheatsheet.vue` (`rg -i "spirit walker|chaos res.*25|pure evasion" app/components/` → 0 hit).
- [ ] Mỗi `killer: true` còn lại trace được về một con số thật trong `content/characters/one-more-minion-mamy.md` (phys max hit 4,565 / res đã cap / EHP 19,202).
- [ ] Có ít nhất một row phản ánh phys là kênh yếu nhất của main mới.
- [ ] `bun run generate` xanh, 0 error.
