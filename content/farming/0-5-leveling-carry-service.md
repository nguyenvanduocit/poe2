---
template: templates/farming-template.md
document_type: farming-strategy
title: Leveling Carry Service
status: draft
created: '2026-06-09'
updated: '2026-06-23'
strategy_tier: B
investment_tier: Low
league: '0.5'
patch: 0.5.1
league_phase: Mid
confidence_level: Medium
---

# Leveling Carry Service

Kéo carry là bán thời gian map nhanh cho buyer: họ vào party, đứng gần soak XP từ kill của mình, trả div theo level. Map vẫn chạy như bình thường, phí carry dán thêm lên loot sẵn có — gần như passive income. Tier B, investment Low: không cần build riêng, chỉ cần một bộ movement speed gear để cho mượn (act rush) và một bộ resist + HP (XP carry). Giá chợ ngày 2026-06-09, softcore EU/NA.

## Strategy Overview

Hai mô hình khác nhau: **act rush** kéo nhân vật mới qua campaign Act 1-7 (ra lò Lv55+, đủ passive point, 100 Spirit, resist từ quest) và **XP carry** kéo level trong map từ 55 đến 90+. Act rush ăn tiền nhất mấy ngày đầu league rồi tụt nhanh khi người ta đã qua campaign; ở giữa league này cửa đó đang khép. XP carry bền hơn vì XP mỗi level ở khúc 88-90 phình khủng khiếp, nên luồng buyer kéo dài nhiều tuần. Nếu chỉ làm một thứ ở giai đoạn này, làm XP carry trong map đang farm, không cược vào act rush.

Buyer tự đăng nhập nhân vật của họ vào party, không ai chơi hộ. Trong campaign, quest reward (passive point, Spirit, respec, resist) ghi vào nhân vật **có mặt trong instance** lúc boss chết — buyer chỉ cần đứng trong phòng. Trong map, buyer soak XP từ kill của mình; party member thêm vào nhân loot mỗi người gần đó lúc quái chết (~gấp đôi currency và ring/amulet, ~28% item thêm/người) — loot đó vẫn về tay mình nếu allocation để Permanent. XP của buyer bị phạt theo chênh lệch level với quái: buyer 55-80 cần map tier thấp; buyer 85-90 cần tier cao hơn nhưng cũng mong manh hơn, nên giá nhảy vọt ở khúc cuối.

## Setup

Giữ nguyên atlas và build đang farm — carry không bắt đổi tree. Thêm vào: một :wiki-link{url="https://www.poe2wiki.net/wiki/Precursor_Tablet"} Elevated có dòng `increased Experience gain in Map` và một density tablet (:wiki-link{url="https://www.poe2wiki.net/wiki/Breach"}, :wiki-link{url="https://www.poe2wiki.net/wiki/Abyss"}, hoặc :wiki-link{url="https://www.poe2wiki.net/wiki/Ritual"}) để dày quái — nhiều kill hơn nghĩa là nhiều XP hơn cho buyer. Set party allocation về Permanent Allocation hướng về mình trước khi mời ai. Chuẩn bị gear cho mượn: bộ movement speed cho act rush, bộ resist + HP cho XP carry — nhân lên nếu kéo nhiều buyer cùng lúc.

## Gameplay

Mời buyer vào party, trade bộ gear phù hợp (movement cho act, resist cho map), dặn họ đứng gần và không lao lên trước. Chạy map như bình thường, mình clear, họ soak. Theo dõi level của buyer để biết khi nào chạm target, thu tiền, đòi lại gear, kick. Kéo nhóm 3-5 ghế cùng lúc là chỗ thu nhập nhân lên — cùng thời gian map mà mỗi ghế trả một phí; gom buyer cùng khoảng level để map tier khớp cho cả nhóm.

## Loot Breakdown & Economic Analysis

Giá chợ 2026-06-09, softcore EU/NA: act rush full run 40-100 div cho 2h30-3h; lẻ từng act 9-15 div. XP carry: ~1 div/level khúc 55-80, 2-3 div khúc 80-85, 5-8 div/level khúc 88-90.

Derivation: kéo 3 buyer act rush cùng một run, mỗi người ~50 div → 150 div/2h30 ≈ 60 div/giờ (campaign loot gần bằng không nên số này gần thuần phí). Kéo một buyer lẻ ~20 div/giờ. XP carry trong map đang farm: `lãi/giờ = (loot farm sẵn có) + (số buyer × phí/level × level/giờ) − (giá tablet exp + tablet density)`; mỗi buyer là div cộng thêm chứ không đánh đổi loot.

## Failure Modes

- **Scam hai chiều.** Buyer biến mất không trả, hoặc ôm gear cho mượn không trả lại. Mới vào không có vouch thì buyer không dám giao dịch — chạy vài run "free for vouch" trước.
- **Gear cho mượn là vốn hở.** Kéo nhóm 5 người thì rủi ro nhân lên; không cho mượn nhiều bộ hơn số mình có.
- **Buyer chết mất 10% XP của level hiện tại.** Map cao trên level buyer tăng xác suất one-shot; đừng đẩy tier quá cao chỉ để nhanh.
- **Demand co theo league.** Act rush qua đỉnh giữa league; XP carry nhạt dần cuối league — nghề này front-loaded, không phải thu nhập vĩnh viễn.
- **Ranh giới tài khoản.** Mô hình party (buyer tự chơi nhân vật của họ) là hợp lệ. Chuyển sang chơi hộ bằng mật khẩu buyer vi phạm điều khoản và ban tài khoản buyer.

## Version History

- **2026-06-09** — Viết mới giữa league 0.5 (Runes of Aldur). Giá chợ snapshot softcore EU/NA ngày này. Cơ chế party loot, tablet experience và phạt XP theo level đã verify; tốc độ level/giờ theo tier map cần đo trong client khi chạy ca thật để chốt.

## Relationships

- **related_builds** [Tame Beast Companion Pack Spirit Walker](/builds/huntress/0-5-spirit-walker-companion-pack) — nhân vật map đang chạy, nền của một carry service nếu clear đủ nhanh.
- **related_guides** [Leveling Tracker](/leveling) — bám route campaign theo Client.txt, công cụ chị em của bảng party này.
- **synergizes_with** [Ritual Belt Hunting](/farming/0-5-ritual-belt-hunting) — farm endgame chạy song song, loot vẫn về mình khi kéo carry trong cùng map.
