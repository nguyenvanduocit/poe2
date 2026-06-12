---
template: templates/mechanic-template.md
document_type: mechanic
title: Spirit và Spirit Reservation
status: published
author: duocnv
created: '2026-06-12'
updated: '2026-06-12'
league: '0.5'
patch: 0.5.0
tags:
  - spirit
  - reservation
  - reservation-efficiency
  - companion
  - minion
  - aura
  - poe2
  - mechanic
---

# Spirit và Spirit Reservation

:wiki-link{url="https://www.poe2wiki.net/wiki/Spirit"} là resource thứ ba cạnh Life và Mana: mọi persistent skill (minion, companion, aura, herald, persistent buff) chiếm một phần Spirit chừng nào còn bật. Character bắt đầu với 0 Spirit, quest cho tối đa 110 permanent, phần còn lại phải moi từ gear, passive, ascendancy và augment. Ledger 347 Spirit của ThaoCamVienSaiGon đang chạy all-on không dư một giọt, nên từng dòng mod dưới đây là thứ quyết định đàn companion thở bằng gì.

## Công thức reservation và bốn luật nền

Mọi tối ưu Spirit quy về một phép chia:

```
Spirit Reserved = Base Reservation / (1 + Tổng Reservation Efficiency / 100)
```

Mọi `% increased/reduced Reservation Efficiency` cộng additive vào MỘT pool rồi mới chia. 100% res eff nghĩa là cost còn một nửa. Các multiplier dạng `less/more` đứng ngoài pool và nhân multiplicative sau công thức: :wiki-link{url="https://www.poe2wiki.net/wiki/Matsya"} "Skills reserve 50% less Spirit", A Solid Plan "Persistent Buffs have 50% less Reservation", :wiki-link{url="https://www.poe2wiki.net/wiki/Trusted_Kinship"} "30% more Reservation Efficiency of Companion Skills".

Ví dụ bằng số thật của build mình: :wiki-link{url="https://www.poe2wiki.net/wiki/Wolf_Pack"} base 60 Spirit. Với anoint Gigantic Following (−25% minion res eff) cộng rune helm +8%, pool = −17% → 60 / 0.83 ≈ 72 Spirit. Đổi sang Lord of Horrors (+12%), pool = +20% → 60 / 1.20 = 50 Spirit. Cùng một gem, lệch 22 Spirit chỉ vì dấu của pool.

Bốn luật nền đi kèm công thức:

1. **Skill granted từ item hoặc ascendancy không reserve Spirit.** Discipline + Azmerian Wolf từ :wiki-link{url="https://www.poe2wiki.net/wiki/Sylvan's_Effigy"}, ba Herald từ :wiki-link{url="https://www.poe2wiki.net/wiki/The_Coming_Calamity" trade="https://www.pathofexile.com/trade2/search/poe2/Runes%20of%20Aldur?q=%7B%22query%22%3A%7B%22status%22%3A%7B%22option%22%3A%22online%22%7D%2C%22name%22%3A%22The%20Coming%20Calamity%22%7D%2C%22sort%22%3A%7B%22price%22%3A%22asc%22%7D%7D"}, Purity từ Guiding Palm, Spirit Vessel từ Forgotten Warden: tất cả chạy 0 Spirit. Support gem socket vào granted skill VẪN cộng Additional Reservation bình thường.
2. **Mỗi weapon set có pool Spirit riêng.** Sceptre nằm set 2 chỉ cho Spirit khi set 2 active; 24 điểm weapon-set passive mỗi set allocate khác nhau được, nên park được node res eff theo từng tình huống. Swap set có thể tắt buff nếu pool mới không gánh nổi.
3. **Persistent reservation không tắt khi chết.** Respawn không phải re-cast, ledger giữ nguyên.
4. **Reservation Efficiency chỉ đụng reservation đến từ skill.** Life reserved của :wiki-link{url="https://www.poe2wiki.net/wiki/Widow's_Reign" trade="https://www.pathofexile.com/trade2/search/poe2/Runes%20of%20Aldur?q=%7B%22query%22%3A%7B%22status%22%3A%7B%22option%22%3A%22online%22%7D%2C%22name%22%3A%22Widow's%20Reign%22%7D%2C%22sort%22%3A%7B%22price%22%3A%22asc%22%7D%7D"} hay debuff của :wiki-link{url="https://www.poe2wiki.net/wiki/Blood_Price" trade="https://www.pathofexile.com/trade2/search/poe2/Runes%20of%20Aldur?q=%7B%22query%22%3A%7B%22status%22%3A%7B%22option%22%3A%22online%22%7D%2C%22name%22%3A%22Blood%20Price%22%7D%2C%22sort%22%3A%7B%22price%22%3A%22asc%22%7D%7D"} miễn nhiễm res eff, đừng stack res eff mong giảm chúng.

## Spirit permanent từ quest

Toàn bộ Spirit "miễn phí" trong game là 110, đến từ 4 nguồn một lần:

- :wiki-link{url="https://www.poe2wiki.net/wiki/Gembloom_Skull"} +30, drop từ The King in the Mists, Freythorn (optional boss Act 1).
- :wiki-link{url="https://www.poe2wiki.net/wiki/Gemrot_Skull"} +30, drop từ Ignagduk, the Bog Witch, The Azak Bog (Act 3).
- :wiki-link{url="https://www.poe2wiki.net/wiki/Gemcrust_Skull"} +40, drop từ Lythara, the Wayward Spear, Kriar Village (Interlude 3).
- Uhtred's Boon +10, phần thưởng chain The Grand Expedition của Ocean Exploring, right-click để dùng; nền chạy logbook mình đã viết ở [Cách chơi Ocean Exploring](/guides/0-5-ocean-exploring).

Act 4–6 chưa có quest Spirit nào (Skull of the Titan chưa release), và atlas passive tree zero node đụng player Spirit. Mọi chữ "spirit" trong atlas là Azmeri Spirit entity, khác hệ hoàn toàn; waystone và tablet mod pool cũng không có dòng Spirit nào.

## Gear base và mod craft được

Sceptre là weapon duy nhất có Spirit base: mọi base đều 100 Spirit implicit. Trên sceptre roll được hai họ prefix local: % Spirit thuần Lord's → King's từ (20-26)% tới (61-65)%, và hybrid % Spirit + flat Mana Advisor's → Chancellor's từ (10-14)% tới (35-38)%. Corruption chồng thêm: Vaal trực tiếp (15-25)%, double-corrupt Intrinsic (35-60)%. Một rare sceptre King's + Intrinsic max chạm ~125% local trên base 100, tức khoảng 225 Spirit từ một item.

Ngoài sceptre, flat Spirit roll ở hai slot:

- **Body armour**: prefix Lady's → Queen's đủ 8 tier, từ +(30-33) ilvl 16 tới +(57-61) ilvl 78; ba tier chót Duchess'/Princess'/Queen's chỉ roll trên body. Hai base Corvus Mantle và Conjurer Mantle có sẵn implicit +(20-30), runeforged/runemastered variant giữ nguyên implicit.
- **Amulet**: cùng họ prefix nhưng chỉ tier 1–5 (max Countess' +(47-50)); :wiki-link{url="https://www.poe2wiki.net/wiki/Solar_Amulet" trade="https://www.pathofexile.com/trade2/search/poe2/Runes%20of%20Aldur?q=%7B%22query%22%3A%7B%22status%22%3A%7B%22option%22%3A%22online%22%7D%2C%22type%22%3A%22Solar%20Amulet%22%7D%2C%22sort%22%3A%7B%22price%22%3A%22asc%22%7D%7D"} có implicit +(10-15) riêng. Base đặc biệt Lament Amulet đổi 1 prefix slot lấy implicit "Grants Skill", cho một trong 37 persistent skill chạy free.

Reservation efficiency trên gear đến từ desecration và corruption:

- **Abyss desecrated suffix of Amanamu**: `% increased Spirit Reservation Efficiency of Skills`, helmet (4-8)%, body armour (6-12)%, weapon (5-10)%.
- **Of Ulaman**: body armour (12-18)% companion skills; amulet (10-20)% herald skills.
- **Of Coherence**: (7-10)% minion skills trên amulet/ring, chỉ spawn qua Breach desecration.
- **Corruption helmet**: flat +(20-30) Corrupted, +(40-60) Intrinsic double-corrupt.
- **Amanamu's prefix**: +(35-50) flat trên staff.
- **Soul-influenced Medved's**: (1-20)% increased Spirit, kèm 6 variant hybrid defence + flat +(1-24) trên body.

Abyss jewel là slot dày Spirit nhất tính trên một socket: suffix watcher (12-16)% res eff toàn skill, và prefix đặc biệt hệ Kulemak gộp +(40-60) flat cộng (6-10)% res eff trong MỘT mod.

## Unique định hình Spirit

Flat lớn nhất nằm ở :wiki-link{url="https://www.poe2wiki.net/wiki/Enfolding_Dawn" trade="https://www.pathofexile.com/trade2/search/poe2/Runes%20of%20Aldur?q=%7B%22query%22%3A%7B%22status%22%3A%7B%22option%22%3A%22online%22%7D%2C%22name%22%3A%22Enfolding%20Dawn%22%7D%2C%22sort%22%3A%7B%22price%22%3A%22asc%22%7D%7D"} và :wiki-link{url="https://www.poe2wiki.net/wiki/Alpha's_Howl" trade="https://www.pathofexile.com/trade2/search/poe2/Runes%20of%20Aldur?q=%7B%22query%22%3A%7B%22status%22%3A%7B%22option%22%3A%22online%22%7D%2C%22name%22%3A%22Alpha's%20Howl%22%7D%2C%22sort%22%3A%7B%22price%22%3A%22asc%22%7D%7D"}: mỗi cái +100, một body một helm. :wiki-link{url="https://www.poe2wiki.net/wiki/Soul_Mantle" trade="https://www.pathofexile.com/trade2/search/poe2/Runes%20of%20Aldur?q=%7B%22query%22%3A%7B%22status%22%3A%7B%22option%22%3A%22online%22%7D%2C%22name%22%3A%22Soul%20Mantle%22%7D%2C%22sort%22%3A%7B%22price%22%3A%22asc%22%7D%7D"} sau rework 0.5.0 cho +75 (bỏ hẳn dòng reduced Totem Life, bản cũ không được update). Tầng +50 có :wiki-link{url="https://www.poe2wiki.net/wiki/Prism_Guardian" trade="https://www.pathofexile.com/trade2/search/poe2/Runes%20of%20Aldur?q=%7B%22query%22%3A%7B%22status%22%3A%7B%22option%22%3A%22online%22%7D%2C%22name%22%3A%22Prism%20Guardian%22%7D%2C%22sort%22%3A%7B%22price%22%3A%22asc%22%7D%7D"} (shield, kèm 1% Buff res eff per 100 max Life), :wiki-link{url="https://www.poe2wiki.net/wiki/Pariah's_Embrace" trade="https://www.pathofexile.com/trade2/search/poe2/Runes%20of%20Aldur?q=%7B%22query%22%3A%7B%22status%22%3A%7B%22option%22%3A%22online%22%7D%2C%22name%22%3A%22Pariah's%20Embrace%22%7D%2C%22sort%22%3A%7B%22price%22%3A%22asc%22%7D%7D"} (Lv26, đồ leveling) và :wiki-link{url="https://www.poe2wiki.net/wiki/Chober_Chaber" trade="https://www.pathofexile.com/trade2/search/poe2/Runes%20of%20Aldur?q=%7B%22query%22%3A%7B%22status%22%3A%7B%22option%22%3A%22online%22%7D%2C%22name%22%3A%22Chober%20Chaber%22%7D%2C%22sort%22%3A%7B%22price%22%3A%22asc%22%7D%7D"} (2H mace hiếm hoi có Spirit, +2-3 Level minion skills).

Phía % increased, :wiki-link{url="https://www.poe2wiki.net/wiki/Sylvan's_Effigy" trade="https://www.pathofexile.com/trade2/search/poe2/Runes%20of%20Aldur?q=%7B%22query%22%3A%7B%22status%22%3A%7B%22option%22%3A%22online%22%7D%2C%22name%22%3A%22Sylvan's%20Effigy%22%7D%2C%22sort%22%3A%7B%22price%22%3A%22asc%22%7D%7D"} đứng một mình: (50-75)% increased Spirit trên base Spirit (150-175) cao hơn chuẩn sceptre 100, cộng "any number of Companions of different types" và Discipline free. :wiki-link{url="https://www.poe2wiki.net/wiki/Font_of_Power" trade="https://www.pathofexile.com/trade2/search/poe2/Runes%20of%20Aldur?q=%7B%22query%22%3A%7B%22status%22%3A%7B%22option%22%3A%22online%22%7D%2C%22name%22%3A%22Font%20of%20Power%22%7D%2C%22sort%22%3A%7B%22price%22%3A%22asc%22%7D%7D"} là bản Lv16: base (130-150) + (30-50)%. :wiki-link{url="https://www.poe2wiki.net/wiki/Grand_Spectrum" trade="https://www.pathofexile.com/trade2/search/poe2/Runes%20of%20Aldur?q=%7B%22query%22%3A%7B%22status%22%3A%7B%22option%22%3A%22online%22%7D%2C%22name%22%3A%22Grand%20Spectrum%22%7D%2C%22sort%22%3A%7B%22price%22%3A%22asc%22%7D%7D"} Emerald socketed đủ 3 viên cho tổng 18% increased. Jewel :wiki-link{url="https://www.poe2wiki.net/wiki/Against_the_Darkness" trade="https://www.pathofexile.com/trade2/search/poe2/Runes%20of%20Aldur?q=%7B%22query%22%3A%7B%22status%22%3A%7B%22option%22%3A%22online%22%7D%2C%22name%22%3A%22Against%20the%20Darkness%22%7D%2C%22sort%22%3A%7B%22price%22%3A%22asc%22%7D%7D"} có thể roll "Notable trong radius grant +(8-12) Spirit".

Phía reservation, bốn cái đáng nhớ. :wiki-link{url="https://www.poe2wiki.net/wiki/Matsya" trade="https://www.pathofexile.com/trade2/search/poe2/Runes%20of%20Aldur?q=%7B%22query%22%3A%7B%22status%22%3A%7B%22option%22%3A%22online%22%7D%2C%22name%22%3A%22Matsya%22%7D%2C%22sort%22%3A%7B%22price%22%3A%22asc%22%7D%7D"} "Skills reserve 50% less Spirit", multiplier mạnh nhất game, weapon Lv20 dùng được từ Act 2. :wiki-link{url="https://www.poe2wiki.net/wiki/The_Raven's_Flock" trade="https://www.pathofexile.com/trade2/search/poe2/Runes%20of%20Aldur?q=%7B%22query%22%3A%7B%22status%22%3A%7B%22option%22%3A%22online%22%7D%2C%22name%22%3A%22The%20Raven's%20Flock%22%7D%2C%22sort%22%3A%7B%22price%22%3A%22asc%22%7D%7D"} (30-50)% res eff toàn skill kèm Minions (80-120)% increased Damage, drop từ Delirium pinnacle boss và không chance được. :wiki-link{url="https://www.poe2wiki.net/wiki/Bones_of_Ullr" trade="https://www.pathofexile.com/trade2/search/poe2/Runes%20of%20Aldur?q=%7B%22query%22%3A%7B%22status%22%3A%7B%22option%22%3A%22online%22%7D%2C%22name%22%3A%22Bones%20of%20Ullr%22%7D%2C%22sort%22%3A%7B%22price%22%3A%22asc%22%7D%7D"} (20-30)% cho skill tạo undead minion (wording "Undead" nhưng thực tế áp mọi minion reserve flat Spirit). :wiki-link{url="https://www.poe2wiki.net/wiki/The_Hollow_Mask" trade="https://www.pathofexile.com/trade2/search/poe2/Runes%20of%20Aldur?q=%7B%22query%22%3A%7B%22status%22%3A%7B%22option%22%3A%22online%22%7D%2C%22name%22%3A%22The%20Hollow%20Mask%22%7D%2C%22sort%22%3A%7B%22price%22%3A%22asc%22%7D%7D"} (80-100)% riêng cho Remnant Skills.

Hai chiều ngược lại cũng có unique. Payoff scale từ Spirit ra stat khác: :wiki-link{url="https://www.poe2wiki.net/wiki/Threaded_Light" trade="https://www.pathofexile.com/trade2/search/poe2/Runes%20of%20Aldur?q=%7B%22query%22%3A%7B%22status%22%3A%7B%22option%22%3A%22online%22%7D%2C%22name%22%3A%22Threaded%20Light%22%7D%2C%22sort%22%3A%7B%22price%22%3A%22asc%22%7D%7D"} (8-12)% Spell Damage per 10 Spirit, :wiki-link{url="https://www.poe2wiki.net/wiki/Amanamu's_Gaze" trade="https://www.pathofexile.com/trade2/search/poe2/Runes%20of%20Aldur?q=%7B%22query%22%3A%7B%22status%22%3A%7B%22option%22%3A%22online%22%7D%2C%22name%22%3A%22Amanamu's%20Gaze%22%7D%2C%22sort%22%3A%7B%22price%22%3A%22asc%22%7D%7D"} convert +2 Armour per 1 Spirit (body) hoặc 1% MS per 15 Spirit cap 40% (boots). Xóa sổ thì có :wiki-link{url="https://www.poe2wiki.net/wiki/Kaom's_Heart" trade="https://www.pathofexile.com/trade2/search/poe2/Runes%20of%20Aldur?q=%7B%22query%22%3A%7B%22status%22%3A%7B%22option%22%3A%22online%22%7D%2C%22name%22%3A%22Kaom's%20Heart%22%7D%2C%22sort%22%3A%7B%22price%22%3A%22asc%22%7D%7D"} "You have no Spirit" đổi +1500 Life.

Mấy unique roll-pool cũng chứa Spirit: Ventor's Gamble +(0-20), :wiki-link{url="https://www.poe2wiki.net/wiki/Morior_Invictus" trade="https://www.pathofexile.com/trade2/search/poe2/Runes%20of%20Aldur?q=%7B%22query%22%3A%7B%22status%22%3A%7B%22option%22%3A%22online%22%7D%2C%22name%22%3A%22Morior%20Invictus%22%7D%2C%22sort%22%3A%7B%22price%22%3A%22asc%22%7D%7D"} +(10-14) per socket filled (max +56), còn :wiki-link{url="https://www.poe2wiki.net/wiki/Grip_of_Kulemak" trade="https://www.pathofexile.com/trade2/search/poe2/Runes%20of%20Aldur?q=%7B%22query%22%3A%7B%22status%22%3A%7B%22option%22%3A%22online%22%7D%2C%22name%22%3A%22Grip%20of%20Kulemak%22%7D%2C%22sort%22%3A%7B%22price%22%3A%22asc%22%7D%7D"}, Loreweave và The Unborn Lich roll desecrated pool có cả flat conditional theo attribute lẫn (6-10)% res eff.

## Passive tree và ascendancy

Tree chính khá keo kiệt với Spirit pool: notable duy nhất cho % Spirit là Profane Commander 4% (kèm 30% Presence AoE). Phần hào phóng nằm ở reservation efficiency theo skill type, tất cả đều anoint được:

- **Herald**: 7 small node (4 node 6%, 3 node 8%) + notable Fate Finding 20%.
- **Companion**: 2 small node 8% + notable Easy Going 25%, không lock ascendancy.
- **Minion**: Lord of Horrors 12% (xuất hiện ở 2 vị trí trên tree); notable Oracle-gated Self Sacrificing đổi −20% res eff toàn skill lấy +40% minion, net lời cho build thuần minion.
- **Meta skill**: Efficient Inscriptions 20%.
- **Penalty cần biết**: Gigantic Following là notable −25% minion res eff đổi lấy Gigantic; nó là anoint damage/life, không phải anoint tiết kiệm Spirit.

Ba keystone định hình hẳn archetype: Trusted Kinship (rework 0.5.0: hai companion khác type, 30% more companion res eff, 20% less mọi skill khác; build mix companion + aura bị lỗ phần aura), Lord of the Wilds (equip sceptre cùng Talisman, giá là 50% less Spirit và non-minion skill 50% less res eff), Ancestral Bond (totem chuyển sang model reserve 75 Spirit mỗi totem, limit double, không cost).

Mỗi ascendancy có hướng Spirit riêng:

- **Spirit Walker (Huntress)**: small +10 flat; Idolatry cho 2% res eff + companions 10% increased damage per Idol, phạt −4% all ele res mỗi augment không phải Idol. Chi tiết hệ companion ở [Spirit Walker companion beast hunt](/mechanics/spirit-walker-companion-beast-hunt).
- **Tactician (Mercenary)**: small 8% increased Spirit; A Solid Plan "Persistent Buffs have 50% less Reservation", multiplier aura/herald mạnh nhất từ tree.
- **Smith of Kitava (Warrior)**: Tribute to Utula "Body Armour grants 30% increased Spirit", nhân thẳng với Enfolding Dawn +100 → +130.
- **Infernalist (Witch)**: Beidat's Will reserve 25% Life, +1 Spirit per 25 max Life; 4.000 Life là +160 Spirit.
- **Shaman (Druid)**: Sacred Flow +40 Spirit mỗi charm slot trống, max +160 với 4 slot.
- **Invoker (Monk)**: Lead me through Grace chặn MỌI Spirit từ equipment (kể cả sceptre), thay bằng +1 per 20 Evasion / +1 per 8 ES trên body; The Soul Springs Eternal cho Meta Skills 50% increased res eff.
- **Ritualist (Huntress)**: small bắt buộc 25% reduced Spirit trên đường tới Unfurled Finger, giảm thẳng pool, tính vào giá của ring slot thứ ba.
- **Acolyte of Chayula (Monk)**: Embrace the Darkness bỏ Spirit hoàn toàn, thay bằng Darkness; mọi modifier Spirit vô hiệu với Darkness.
- **Abyssal Lich (Witch alt)**: small 6% minion res eff; phía Abyss tree còn Confined Exaltation 1% res eff per 20 Tribute và notable Spiritkeeper từ jewel Undying Hate cho 8% increased Spirit khi ≥100 Tribute.

Liquid Emotions instil đem được bất kỳ notable nào ở trên lên amulet (Easy Going, Lord of Horrors, Fate Finding…), nhưng không stack với node đã allocate trên tree. Riêng The Soul Meridian có discrepancy: GGG tree export không có dòng res eff, poedb live lại ghi thêm "10% increased Reservation Efficiency of Minion Skills". Đọc tooltip in-client trước khi tính node này vào ledger.

## Rune, soul core và hệ Idol

Augment socket là chỗ Spirit ít người soi nhất:

- :wiki-link{url="https://www.poe2wiki.net/wiki/Soul_Core_of_Azcapa" trade="https://www.pathofexile.com/trade2/search/poe2/Runes%20of%20Aldur?q=%7B%22query%22%3A%7B%22status%22%3A%7B%22option%22%3A%22online%22%7D%2C%22type%22%3A%22Soul%20Core%20of%20Azcapa%22%7D%2C%22sort%22%3A%7B%22price%22%3A%22asc%22%7D%7D"}: martial weapon +15 Spirit.
- Rune of the Blossom: body +50 Spirit nhưng −1 per 2 level; ở Lv94 còn +3 net, đồ leveling chứ không phải endgame.
- Greater Rune of Alacrity: Bonded martial weapon 15% res eff Herald Skills.
- :wiki-link{url="https://www.poe2wiki.net/wiki/Mystic_Alloy" trade="https://www.pathofexile.com/trade2/search/poe2/Runes%20of%20Aldur?q=%7B%22query%22%3A%7B%22status%22%3A%7B%22option%22%3A%22online%22%7D%2C%22type%22%3A%22Mystic%20Alloy%22%7D%2C%22sort%22%3A%7B%22price%22%3A%22asc%22%7D%7D"}: league-exclusive Runes of Aldur, remove 1 mod random rồi add +(10-15) Spirit guaranteed lên boots. Đây là flat Spirit duy nhất tồn tại trên boots.

Hệ Idol vừa cho số vừa là biến của Idolatry:

- Rabbit Idol: 15% increased Spirit khi socket trong sceptre, Limit 1 (buff từ 10% ở 0.5.0). Bonded modifier của nó là gold quantity, không phải Spirit.
- Bear Idol: Bonded helmet 12% companion res eff.
- Idol of Ralakesh: helmet 8% minion res eff ngay base stat, không cần Bonded.
- Idol of Grold: Bonded sceptre 15% companion res eff.
- Idol of Eeshta: Bonded helmet 15% meta-skill res eff.
- Penalty: Idol of the Pharisee (Bonded sceptre −25% minion res eff đổi +2 temporary minion limit), Idol of the Martyr (−25% Spirit đổi Meta Energy).
- Carved Majesty (Ancient Augment, Limit 1): body +3 Spirit per Idol socketed toàn equipment, Bonded thêm 5% increased Spirit.

Với Spirit Walker, mỗi augment không phải Idol trả −4% all ele res qua Idolatry, nên swap rune/soul core nào cũng phải khai delta resistance trước.

## Gem level, quality và support can thiệp vào cost

Base reservation chia ba tier: 30 Spirit (35 gems — mọi Herald, :wiki-link{url="https://www.poe2wiki.net/wiki/Ghost_Dance"}, Grim Feast, banners, Arctic Armour, Remnants of Kalguur…), 60 Spirit (Wolf Pack, Blink, Elemental Conflux), 100 Spirit (Trinity, Eternal Rage, Rhoa Mount).

Minion gem đi ngược trực giác POE1: **level càng cao reservation càng rẻ**. Skeletal Brute từ 165 xuống 48 Spirit L1→L20, Skeletal Warrior 60→20, và 2 Skeletal Warrior đầu tiên hoàn toàn free. Aura/herald thì base đứng yên theo tier. Hệ quả: đừng bao giờ park minion gem ở level thấp để "tiết kiệm", và mọi nguồn +Level to Minion Skills tăng damage-per-Spirit miễn phí.

Quality cho res eff trực tiếp trên nhiều persistent gem, cap khác nhau: 20% (Ghost Dance, Soul Crystal, Bind Spectre, Skeletal Frost Mage), 40% (Cast on Elemental Ailment, Feral Invocation, Lingering Illusion, Mirage Archer), 30% (Rhoa Mount), 10% (banners, companion gems, :wiki-link{url="https://www.poe2wiki.net/wiki/Blasphemy"}, Archmage). Với companion, quality copy từ gem Tame Beast lúc capture và nâng tiếp được sau đó bằng :wiki-link{url="https://www.poe2wiki.net/wiki/Gemcutter's_Prism"} áp thẳng lên companion gem — đã test in-client trên gem Q0, res eff tăng đúng theo quality. Q20 là 10% res eff, cỡ 4-5 spirit mỗi con tính trên base 39-47%. Thứ cần cảnh giác lúc tame là corrupt: có report 0.5 gem Tame Beast 20+1 rớt về 20 khi capture, đừng trả tiền cho +1 corrupt để đi tame.

Support gem can thiệp hai chiều. Giảm: :wiki-link{url="https://www.poe2wiki.net/wiki/Dialla's_Desire" trade="https://www.pathofexile.com/trade2/search/poe2/Runes%20of%20Aldur?q=%7B%22query%22%3A%7B%22status%22%3A%7B%22option%22%3A%22online%22%7D%2C%22type%22%3A%22Dialla's%20Desire%22%7D%2C%22sort%22%3A%7B%22price%22%3A%22asc%22%7D%7D"} (Lineage) Cost & Reservation Multiplier 90% + 1 level; :wiki-link{url="https://www.poe2wiki.net/wiki/Atziri's_Communion" trade="https://www.pathofexile.com/trade2/search/poe2/Runes%20of%20Aldur?q=%7B%22query%22%3A%7B%22status%22%3A%7B%22option%22%3A%22online%22%7D%2C%22type%22%3A%22Atziri's%20Communion%22%7D%2C%22sort%22%3A%7B%22price%22%3A%22asc%22%7D%7D"} (Lineage) chuyển hẳn reservation sang Life với tỉ lệ 66% base Spirit. Atziri's Communion không support được skill tạo minion, và từ 0.5.1 Lich cũng dùng được vì Eternal Life hết block Life Reservation. Luật một bản mỗi build của hệ Lineage mình đã viết ở [Lineage Support Gems](/mechanics/lineage-support-gems). Tăng: Hulking Minions ×1.3 reservation, và cả họ support aura-style cộng flat Additional Reservation +10 tới +40 (Precision/Clarity +10/+20, Vitality +20/+40, Direstrike/Thornskin +20/+40, Mysticism/Upwelling/Herbalism/Cannibalism +15/+30…). Invocation thì cấm cửa: không support được skill có Reservation.

## Trick xếp hạng theo impact

1. **Granted skill = Spirit free**: Sylvan's Effigy, The Coming Calamity, Guiding Palm… mua 60–90 Spirit hiệu dụng bằng một item slot.
2. **Matsya**: 50% less mọi skill, multiplicative sau res eff, từ Act 2.
3. **A Solid Plan (Tactician)**: halve mọi persistent buff bằng một notable ascendancy.
4. **Trusted Kinship cho build thuần companion**: 30% more companion res eff; mix herald/aura thì ăn 20% less, chỉ lấy khi roster sạch.
5. **Atziri's Communion**: đẩy buff sang Life reservation 66% base, giải phóng nguyên pool Spirit cho minion.
6. **Idol stacking trên Spirit Walker**: Idolatry + Carved Majesty + Rabbit Idol scale cùng một biến đếm Idol.
7. **Level minion gem LÊN để giảm cost**: Brute 165→48; first-2-free của Skeletal Warrior.
8. **Quality persistent gems**: 20-40% res eff chỉ tốn Gemcutter.
9. **Sceptre stacking**: King's + double-corrupt Intrinsic ≈ 225 Spirit một item; Smith of Kitava amplify body thêm 30%.
10. **Sacred Flow charm-less**: 4 slot trống = +160 Spirit.
11. **Beidat's Will**: +1 per 25 Life, đi kèm Vaal Pact / Enduring Elixirs để sống với Life pool bị reserve.
12. **Weapon-set passive points**: 24 điểm mỗi set allocate node res eff khác nhau, pool Spirit tách theo set.

## Áp vào ThaoCamVienSaiGon

Ledger hiện tại 347 Spirit chạy all-on vừa khít, build chi tiết ở [Tame Beast Companion Pack](/builds/huntress/0-5-spirit-walker-companion-pack). Thứ tự múc theo lời-trên-giá:

**Làm ngay, gần như free:**

- **Easy Going + 2 small companion 8% bằng weapon-set-1 points**: build ở lì set 1 nên 24 điểm set-1 là điểm sống; +41pp res eff lên ~300 Spirit companion reservation, ước giải phóng 55–80 Spirit. Đã lấy Easy Going trên tree thì không instil trùng nó nữa.
- **Idol of Grold vào socket Sylvan's Effigy** thay idol Attack Speed hiện tại. Body rune của Forgotten Warden đã mở Bonded cho Idol, 15% companion res eff ≈ 25–35 Spirit freed, idol đổi idol nên Idolatry không đổi.
- **Check Uhtred's Boon**: nếu 347 chưa gồm nó thì +10 permanent chỉ tốn thời gian chạy nốt chain Grand Expedition.

**Tầng kế, tốn currency:**

- **Abyss jewel hệ Kulemak**: +(40-60) flat cộng (6-10)% res eff trong một mod, thay 1 trong 5 Sapphire. Đổi lại Zekoa mất 21-25% crit damage từ viên bị thay, cân với DPS trước khi xuống tay.
- **Mystic Alloy lên boots**: +(10-15) flat, bắn vào boots base mới đã roll đủ life/res/MS, đừng bắn vào Eagle League đang gánh res.
- **Helm rune → Idol of Ralakesh hoặc Bear Idol Bonded**: res eff giữ nguyên hoặc nhỉnh hơn, xóa một non-Idol augment nên lấy lại 4% all ele res, đổi lại mất Minions 15% max Life.

**Situational, khai delta trước:**

- **Anoint Gigantic Following ↔ Lord of Horrors**: swap sang Lord of Horrors là +37pp minion res eff (≈ 60–90 Spirit freed), nhưng mất Gigantic 20% more damage + 20% more life toàn đàn; build đã chốt giữ Gigantic và cắt Bramble Hulk thay vì nhả anoint.
- **Divine Sylvan's Effigy** nếu roll % Spirit chưa max: mỗi 10pp ≈ +15-17 Spirit, nhưng Divine roll lại cả hai dòng.
- **Soul Core of Azcapa vào Tyranny's Grip**: +15 flat nhưng chiếm socket rune phys đang nuôi Catha, và thêm một non-Idol augment.
- **Gemcutter's Prism lên companion gem nào còn Q0**: 4 viên ra Q20 = 10% res eff, ~4-5 spirit mỗi con. Trio active đã Q20 sẵn; chỉ còn bản backup ở set 2 cần vá. Không bao giờ cần re-tame vì quality.

**Bỏ qua:** Rune of the Blossom (+3 net ở Lv94), Vaal/double-corrupt Skull Corona (brick risk trên helm đã curate), Carved Majesty đặt body (+6-15 Spirit nhưng Limit 1 đã dành cho gloves lấy Onslaught).

## Cái không hoạt động

- **Gemling Legionnaire "Integrated Efficiency"**: icon nội bộ tên `GemlingBuffSkillsReserveLessSpirit` là legacy; node 0.5 không có một stat Spirit/reservation nào. "Skills have 30% less cost" của Gem Studded Blue là mana/life cost, chưa có bằng chứng áp lên Spirit.
- **Res eff với reservation ngoài skill**: Widow's Reign, Blood Price đứng ngoài công thức, stack res eff không giảm được chúng.
- **Spirit mods dưới Embrace the Darkness**: Acolyte of Chayula vô hiệu mọi modifier Spirit; không có cách nào gain Spirit khi allocate.
- **Rabbit Idol Bonded**: dòng Bonded của nó là gold quantity; phần Spirit 15% nằm ở base stat sceptre, đừng kỳ vọng double-dip.

## Tổng kết

Pool Spirit của một build = 110 quest + sceptre/body/amulet + unique, còn cost của từng skill = base gem / (1 + res eff pool) × các multiplier less/more. Ba nhóm lever lớn nhất theo thứ tự: granted skill free (mua bằng item slot), multiplier less (Matsya / A Solid Plan / Trusted Kinship), rồi mới tới đám % res eff cộng additive từ tree, desecrated suffix, idol và quality. Flat Spirit trên gear đắt hơn res eff trong đa số trường hợp: một suffix of Amanamu (6-12)% trên body thường rẻ hơn nhiều so với prefix Queen's +(57-61) cùng slot.

Ba điểm còn phải tự kiểm trong client: dòng minion res eff của The Soul Meridian (tree export với poedb đang vênh nhau), Atziri's Communion có thực sự drop trong league chưa (wiki scrape còn flag "Not in game"), và giá thị trường của đường nâng Masterwork Rune so với mua Perfect thẳng.

## Version History

### Patch 0.5.2

Bear Spirit (Wild Protector) presence radius 4m → 8m; companion granted vẫn 0 Spirit, 0 limit slot.

### Patch 0.5.1

Eternal Life của Lich hết block Life Reservation, mở Atziri's Communion và Beidat's Will cho archetype này.

### Patch 0.5.0 (Return of the Ancients)

Trusted Kinship rework (bỏ 30% less Defences, thêm cặp 30% more / 20% less res eff); Ancestral Bond chuyển totem sang reserve 75 Spirit; Soul Mantle đổi reduced Totem Life thành +75 Spirit; Rabbit Idol 10%→15% kèm Limit 1, Bear Idol 10%→12%; prefix Lord's fix về 20-26% (trước overlap 30-36%); The Hollow Mask rework sang (80-100)% Remnant res eff; Idol of Uldurn thêm 10-15% increased Spirit; Tame Beast summon ngay khi đủ Spirit; Dialla's Desire fix bug disabled-vẫn-ăn-hiệu-ứng, quality bonus 10%→5%.

## Relationships

- **related** [Spirit Walker companion beast hunt](/mechanics/spirit-walker-companion-beast-hunt) — Idolatry và hệ companion ăn trực tiếp vào ledger Spirit.
- **related** [Tame Beast Companion Pack](/builds/huntress/0-5-spirit-walker-companion-pack) — build đang áp toàn bộ thứ tự múc ở trên.
- **related** [Lineage Support Gems](/mechanics/lineage-support-gems) — Dialla's Desire và Atziri's Communion là hai lineage can thiệp reservation.
- **related** [Cách chơi Ocean Exploring](/guides/0-5-ocean-exploring) — chain The Grand Expedition trả Uhtred's Boon +10 Spirit.
