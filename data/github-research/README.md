# POE2 OSS Research Clones

Shallow clones (`--depth 1`) của các dự án **Path of Exile 2** open-source đáng học, kéo về để đào sâu kiến trúc/kỹ thuật. Clone bị gitignored — chỉ file README này tracked. Refresh một repo: `cd <name> && git pull`. Thêm repo: sửa `tmp/clone-poe-research.sh` rồi chạy lại (idempotent, skip cái đã có).

Chỉ giữ repo work với POE2 (verified 2026-06-09 từ source). Bỏ qua vì đã có chỗ khác: **PathOfBuilding-PoE2** (clone ở `data/pob-source/`), **poe2-skilltree-export** (pin ở `data/passive-tree/`), và data game POE2 (`data/poedb/`, `data/wiki/`).

## Trade / pricing

- **Exiled-Exchange-2** — TypeScript (163M). Fork POE2 của Awakened PoE Trade — price-check qua clipboard/OCR + trade2 API. Đào: parse item clipboard text POE2, rate-limit `/api/trade2/`, data pipeline item/mod POE2. Sát nhất với transport `poe-trade/ggg/` + skill `/trade` của workspace.
- **poe2scout** — TypeScript. Full website + service market data POE2; skill `/poe2scout` gọi API site này. Đào: data model họ expose, đối chiếu cách skill đang parse.
- **poe2stash** — TypeScript. Monitor stash + tính currency/hour POE2. Đào: stash-diff + valuation loop.

## Stash search / filter

- **poe2.re** — TypeScript. Thuật toán generate regex cho stash search POE2; chính cái skill `/map-mod-filter` tham chiếu. Đào: mod→regex mapping + compression.

## Compute / simulation

- **pob-web** — TypeScript/WASM. Port PoB engine sang WASM chạy thẳng trong browser, chọn được version PoB2. Đào: cách nhúng Lua VM + bundle engine vào web (giá trị cao — workspace cũng chạy PoB calc qua `data/pob-source/`).
- **POE2_HTC** — Java. Solver tìm đường craft deterministic nhất cho POE2 (search problem). Đào: thuật toán search craft path + cost model. Trùng ý tưởng skill `/craftofexile` (T-029).

## Asset / file-format (đọc game file POE2)

- **ggpk-explorer** — Rust. Explorer GGPK standalone + Steam Bundles2 (POE2 ship cả hai); active. Đào: bundle decompression + cấu trúc container bằng Rust.
- **LibGGPK3** — C#. Lib Content.ggpk/bundle, dùng rộng cho datamining POE2; active. Đào: format-level đọc asset, đối chiếu cách tiếp cận Rust của ggpk-explorer.

## Overlay / companion (tham khảo kiến trúc)

- **Sidekick** — C# (929M — bundle nặng). Companion trade tool, dual POE1+POE2, active POE2 (`poe2-data-update`). Đào: kiến trúc overlay + trade integration. Tham khảo, không phải stack mình.

## Trạng thái clone

9 repo POE2, ~1.1G (2026-06-09). Nặng nhất: Sidekick 929M, Exiled-Exchange-2 163M, poe2stash 15M, ggpk-explorer 11M. Còn lại < 6M.
