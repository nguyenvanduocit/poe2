---
template: templates/mechanic-template.md
document_type: mechanic
title: Twister
status: published
author: duocnv
created: '2026-05-19'
updated: '2026-06-09'
league: '0.5'
patch: 0.5.0
sub_class: skills
tags:
  - twister
  - whirling-slash
  - spear
  - projectile
  - wind
  - huntress
  - spirit-walker
  - poe2
  - mechanic
---

# Twister

:wiki-link{url="https://www.poe2wiki.net/wiki/Twister"} là spear attack skill tag Attack, AoE, Projectile, Duration, Barrageable, Wind — Tier 1, dùng được từ Act 1. Skill không tự đứng được: damage thật đến từ việc consume :wiki-link{url="https://www.poe2wiki.net/wiki/Whirlwind"} mà :wiki-link{url="https://www.poe2wiki.net/wiki/Whirling_Slash"} dựng lên. Không có Whirlwind, Twister chỉ là một projectile tầm thường với 80-232% base attack damage; đủ 3-stage Whirlwind, cùng một cast nhân lên gần 12× damage qua cơ chế consume compound.

Hai điểm quyết định output nhưng hay bị hiểu sai nhất: chữ **Gain** trong dòng elemental ground (không phải Convert — đây là added damage trên base, không mất physical), và throttle 0.66 giây same-target (khoá cứng tốc độ hit lên boss bất kể có bao nhiêu projectile trong batch).

## Engine hai tầng: Whirling Slash rồi mới Twister

:wiki-link{url="https://www.poe2wiki.net/wiki/Whirling_Slash"} tạo ra một Whirlwind xoáy quanh bạn, tích lũy tối đa 3 stage — mỗi lần cast thêm 1 stage. Whirlwind có radius 1.8m, nở thêm 0.3m mỗi stage, kéo dài đến khi bạn rời vùng hoặc Twister consume. Khi Twister di chuyển vào Whirlwind, nó consume toàn bộ để tạo thêm twister bổ sung: mỗi stage Whirlwind cho một twister thêm, và twister đó nhận 80% more damage nhân theo stage.

Với 3-stage Whirlwind:

- Base twister (không consume): 1× base damage
- Twister từ stage 1: 1.80× base damage
- Twister từ stage 2: 1.80² = 3.24× base damage
- Twister từ stage 3: 1.80³ = 5.83× base damage
- **Tổng một cast đủ 3-stage: ~11.87× base damage**

Đây là số nhân per cast trước crit, accuracy, và enemy resistance. Số nhân này là lý do Twister endgame mạnh không tỷ lệ tuyến tính với gem level: gem level 20 mới cho 232% base attack damage, nhưng chính hệ số consume 11.87× mới gánh phần lớn damage thực. Nếu một Twister đơn của spear endgame đánh ~300 raw, thì một cast đủ 3-stage consume ra ~3.560 raw (300 × 11.87) trước mọi modifier khác — cơ chế consume, không phải gem level, mới là trục damage chính.

Rotation bắt buộc: spin Whirling Slash 3 lần trước, Whirlwind đứng đủ 3-stage trên ground, rồi mới cast Twister. Twister consume Whirlwind đang tồn tại trên ground — nếu cast Twister khi chưa có Whirlwind, không có consume nào xảy ra và chỉ ra 1 base twister. Đây là lý do Act 1 feel chậm: chưa có support gem giúp Whirling Slash spin nhanh, mỗi lần chuẩn bị mất 1.5-2 giây.

Whirling Slash giữ ở level 1 suốt endgame. Nó chỉ làm nhiệm vụ dựng Whirlwind 3-stage, không đóng góp damage trực tiếp. Level cao chỉ tăng mana cost và cast time mà không có giá trị gì thêm cho engine.

## Elemental ground: Gain là added damage, không phải Convert

Dòng gem text Twister:

> Elemental twisters Gain 50% of damage as damage of the corresponding Type

Chữ **Gain** ở đây cùng class modifier với "Gain X% of Damage as extra Y" trong game — đây là added damage, không phải conversion. Physical base không bị cắt; 50% cold được cộng thêm trên đó như một pool riêng. Trên :wiki-link{url="https://www.poe2wiki.net/wiki/Chilled_Ground"}, mỗi twister có effective damage = 100% physical (nguyên vẹn) + 50% cold (added) = 150% total per twister.

Nếu là Convert, physical sẽ mất 50% trước khi chuyển sang cold, và passive physical damage trở nên kém hiệu quả. Vì là Gain, cả physical damage node lẫn cold damage node trên passive tree đều scale Twister trên elemental ground — không phải chọn một. Stack physical damage vẫn có giá trị đầy đủ trong cold Twister build.

Nguồn Chilled Ground ổn định nhất cho Twister là :wiki-link{url="https://www.poe2wiki.net/wiki/Fangs_of_Frost"} — spear attack tier 3, convert 80% physical → cold, và khi hit target đang bị Parried thì consume Parried Debuff để tạo frost explosion + Chilled Ground 8 giây. Huntress có :wiki-link{url="https://www.poe2wiki.net/wiki/Parry"} sẵn từ đầu game, nên chain Parry → Fangs of Frost → Chilled Ground → Twister là rotation campaign chạy được từ sớm mà không cần gear đặc biệt.

:wiki-link{url="https://www.poe2wiki.net/wiki/Wake_of_Destruction"} unique boots hay xuất hiện trong build guide Twister cũ nhưng spawn Shocked Ground (lightning ailment), không phải Chilled Ground. Twister trên Shocked Ground gain 50% lightning — vô nghĩa nếu đang scale cold. Không cắm Wake of Destruction vào gear plan cold Twister.

## Throttle 0.66 giây và tại sao projectile count không scale boss DPS tuyến tính

Gem text Twister:

> Twisters fired at the same time can Hit the same target no more than once every 0.66 seconds

Một batch twister từ cùng một cast — dù có 4, 10, hay nhiều hơn trong batch — chỉ có thể hit cùng một boss nhiều nhất 1/0.66 ≈ 1.515 lần mỗi giây. Với cast rate 0.8 cast/giây (attack speed 80% base), mỗi giây sinh ra ~0.8 batch. Mỗi batch hit boss tối đa 1.515 lần, nhưng vì batch rate thấp hơn, effective hit rate trần là ~0.8 × 1.515 ≈ 1.2 lần/giây lên boss — không phụ thuộc projectile count.

Projectile count tăng mạnh clear speed vì mỗi enemy trong map là target độc lập, không chung throttle. Nhiều twister bay nhiều hướng phủ diện tích rộng hơn, mỗi enemy trong radius bị hit riêng biệt. Boss là một target duy nhất nên throttle khoá cứng hit rate bất kể count.

Hệ quả thiết kế: boss DPS Twister scale theo damage per twister (flat damage weapon, crit chance/multi, curse, exposure, consume multiplier), không theo projectile count. Đầu tư :wiki-link{url="https://www.poe2wiki.net/wiki/Salvo_Support"} và owl feather có giá trị rõ rệt cho clear; với boss, những gì tăng damage per hit mới tạo ra sự khác biệt.

## Salvo Support sau rework 0.5.0

Patch 0.5.0 rework toàn bộ hệ Seal cho Salvo, Unleash, Expand, và Freezing Salvo về cùng một nền tảng. Cơ chế Salvo đổi như sau:

**Trước 0.5.0:** 1 seal mỗi 2 giây, tối đa 3 seals, +2 projectile mỗi seal. Không thể earn seal trong khi đang cast skill được support.

**Từ 0.5.0:** 1 seal mỗi 1 giây, tối đa 6 seals, +1 projectile mỗi seal. Có thể earn seal trong khi đang cast.

Max projectile cộng thêm từ Salvo vẫn là +6 (6 seals × 1 proj). Điểm thay đổi quan trọng là bỏ restriction "không earn seal khi casting" — seal tích liên tục ngay cả khi bạn đang spin Whirling Slash hay cast Twister. Trong combat liên tục, điều này có nghĩa seal không bị "freeze" giữa chừng mỗi khi dùng skill, khiến Salvo nhất quán hơn trong rotation.

Projectile từ Salvo bay random direction — không nhắm được boss. Contribution của Salvo lên boss là nhỏ hơn nhiều so với clear, phù hợp với phân tích throttle ở trên.

## Spirit Walker owl feather với Twister

:wiki-link{url="https://www.poe2wiki.net/wiki/Primal_Bounty_(passive)"} là notable Ascendancy Spirit Walker, grant skill Primal Bounty: định kỳ cho 1 Primal Owl Feather, tích tối đa 3 feathers. Khi dodge roll, consume 1 feather để empower next projectile attack với thêm projectile và tăng projectile speed.

:wiki-link{url="https://www.poe2wiki.net/wiki/The_Mhacha%27s_Gift"} là notable tiếp theo trong Spirit Walker tree, enhance Primal Bounty: cho phép consume tới 3 feathers cùng một dodge roll để tăng empower effect, và tăng tốc độ earn feather từ 4 giây xuống còn 2.67 giây.

Với Mhacha, full stack cycle: 3 feathers × 2.67 giây = ~8 giây. Dodge roll consume cả 3 → next Twister cast empowered tối đa. Empower trigger là dodge roll, không phải skill use — nếu không dodge đều đặn, feather tích đến cap 3 rồi ngừng sinh. Boss fight cần cadence dodge khớp với cycle ~8 giây để maintain empower window. Nhiều boss có telegraph ~8-10 giây giữa các attack pattern nên feather cycle fit tự nhiên vào spacing dodge.

Owl feather là lý do Spirit Walker là ascendancy tự nhiên nhất cho Twister — empower trực tiếp vào projectile count và speed, trong khi dodge roll là tương tác vốn có trong mọi boss fight.

## Những gì không scale Twister

Attack speed tăng cast rate nhưng không tăng damage per cast. Weapon set phân chia rõ: main-hand (slot Twister) ưu tiên flat physical + flat cold + crit; Whirling Slash socket ưu tiên attack speed để spin 3 stage nhanh hơn. Nhầm lẫn hai bộ support gem sang nhau làm rotation không smooth mà không tăng output.

Twister trên elemental ground không tạo ailment riêng từ phần 50% Gain. Gain là added damage trên hit, không phải separate ailment source. Freeze build-up cần nguồn riêng: Fangs of Frost, :wiki-link{url="https://www.poe2wiki.net/wiki/Frost_Nexus"} support gem, hoặc Freezing Mark curse.

Modifier "Gain X% of Damage as extra Y" không double-dip với Gain layer của Twister. Class modifier này apply on base hit và không phủ thêm lên phần Gain trong gem text. Tránh cắm :wiki-link{url="https://www.poe2wiki.net/wiki/Xoph%27s_Pyre"} vào socket Twister với mục đích nhân cold gain.

## Lỗi hay gặp

Cast Twister trước khi Whirling Slash dựng đủ Whirlwind trên ground là lỗi phổ biến nhất ở Act 1-2. Không có Whirlwind = không có consume = 1 base twister. Cần spin Whirling Slash ít nhất 3 lần trước mỗi cast Twister để đạt tối đa.

Giữ Whirling Slash level cao endgame chỉ đốt mana và tăng cast time mà không thay đổi gì — Whirling Slash là tool spawn Whirlwind, không phải damage dealer. Level 1 là chuẩn.

Dùng Wake of Destruction để có Chilled Ground không hoạt động — boots đó spawn Shocked Ground. Nếu cần cold Gain, dùng Fangs of Frost consume Parried Debuff hoặc Frost Nexus chain freeze.

Stack projectile count để tăng boss DPS không hiệu quả vì throttle 0.66 giây. Đầu tư damage per twister (flat damage weapon, crit, curse, exposure) hiệu quả hơn nhiều cho boss.

Không dodge đều trong boss fight khiến feather tích đến cap 3 rồi dừng. Feather không earn khi đã full stack — duy trì cadence dodge ~8 giây để cycle liên tục.

## Version History

### Patch 0.5.0 (Return of the Ancients)

- Salvo Support rework: 1 proj/seal, max 6 seals, 1 seal/giây; bỏ restriction không earn seal khi casting (trước: 2 proj/seal, max 3 seals, 1 seal/2 giây, không earn khi casting).
- Primal Bounty và The Mhacha's Gift (Spirit Walker Ascendancy) introduced — owl feather cycle empower next projectile attack on dodge roll, max 3 feather × 2.67s/feather với Mhacha.

### Patch 0.4.0

- Wind tag thêm vào Twister và Whirling Slash — synergy với Spirit Walker notables nhắm Wind skills.
- Whirlwind giữ element từ elemental ground 8 giây (trước 4 giây).

### Patch 0.3.0

- Twister damage buff: 80-232% attack damage ở gem level 1-20 (trước 72-190%).

### Patch 0.2.0b

- Hotfix bug "Gain 50% per projectile": element gain từng scale per projectile thay vì 1 lần per cast — một projectile gain 50%, projectile khác 100%, v.v. Từ hotfix, Gain áp đúng 1 lần mỗi cast bất kể projectile count.

### Patch 0.2.0

- Twister và Whirling Slash introduced.

## Relationships

- **used_by** [Twister Huntress](/builds/huntress/0-5-twister-huntress-starter) — build chạy Twister làm primary damage với Spirit Walker ascendancy; DPS chain phụ thuộc vào Whirlwind consume engine và owl feather empower.
