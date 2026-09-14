# T-061: POE2 price tracking CI/CD
> Làm lại pipeline track giá theo poe1, dùng nguồn poe2scout và league cấu hình của poe2.
- **priority**: high
- **effort**: M

## Criteria
- [x] Workflow chạy mỗi 3 giờ, có manual run và test cho PR thay đổi pipeline.
- [x] Collector lấy mọi giá dương từ category pages, kiểm tra pagination/unit/currency tham chiếu trước khi ghi.
- [x] Snapshot theo UTC; intraday cập nhật cùng key, giữ lịch sử ngày cũ và league cũ.
- [x] Builder chỉ nhận snapshot hôm nay đúng league; lỗi giữ nguyên index.
- [x] Scoped TypeScript check, collector tests và builder tests pass.
- [x] Chạy live API rồi build index thành công; kiểm tra lịch sử cũ không mất.

## Verification (2026-09-11)

HIGH: `bun run test:prices` — 12 Python + 12 Bun tests pass.
HIGH: `bun run build:prices`, `bun run typecheck:prices`, `actionlint .github/workflows/collect-prices.yml` pass.
HIGH: `bun install --frozen-lockfile --ignore-scripts` pass, TypeScript pinned 5.9.3.
HIGH: live crawl Runes of Aldur → 1,092 quotes / 24 categories; 5,978 existing record keys retained in 11,062 merged records.

HIGH: follow-up theo lựa chọn user — live Forbidden Rites → 635 quotes / 17 categories; builder + typecheck + 24 tests + actionlint pass. Snapshot chỉ có Forbidden Rites, league_day=7; giữ đủ 11,062 records trước khi chuyển league, master mới 15,463 records. API category manifest hiện chưa có UniqueCategories cho Forbidden Rites.

## Decisions

- User chọn Forbidden Rites. `nuxt.config.ts` và generated index đã chuyển sang league này. Ngày bắt đầu 2026-09-04 xác minh từ GGG: https://www.pathofexile.com/forum/view-thread/4000430. Runes of Aldur tiếp tục được giữ trong master history.
- Category pages có current quotes + dated PriceLogs; scheduled job không fan-out DailyStatsHistory. `--history` vẫn cho backfill riêng, merge lịch sử.
- Bỏ destructive `--force`; không cần để refresh vì mỗi run luôn fetch mới.
- POE2 giữ tên field legacy `price_chaos`/`divine_chaos`, giá trị Exalted; records mới có `price_unit` để kiểm tra.
- main thay đổi khi collect → fail và chạy lại, không rebase giá đã tính lên config mới.

## Publication (2026-09-14)

User đã yêu cầu push. Chuẩn bị từ origin/main để giữ các commit build snapshot đã có trên remote. Live refresh Forbidden Rites: 826 quotes / 20 categories, master 17,748 records. API đã có thêm Accessories, Armour và Weapons. 24 tests, scoped typecheck, actionlint và `bun run generate` pass. GitHub workflow chạy sau khi push sẽ xác minh bước tự commit snapshot.
