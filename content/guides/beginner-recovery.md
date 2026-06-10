---
template: templates/guide-template.md
document_type: guide
title: "Recovery: Life regen, ES recharge và Leech hoạt động thế nào"
status: draft
author: duocnv
created: '2026-06-10'
updated: '2026-06-10'
league: '0.5'
patch: 0.5.1
guide_type: fundamentals
tags:
  - poe2
  - 0-5
  - beginner
  - recovery
  - leech
  - energy-shield
  - defense
---

# Recovery: Life regen, ES recharge và Leech hoạt động thế nào

Life regen, ES recharge và Leech đều là recovery — nhưng ba thứ này hoạt động theo ba logic hoàn toàn khác nhau. Nhầm cách hoạt động của một trong ba là nguyên nhân phổ biến dẫn đến chết oan: nghĩ rằng Leech sẽ bù damage liên tục như regen, hoặc mong ES hồi trong khi đang đứng trong pack, hay cắm hết passive vào Leech mà không hiểu 0.5 đã thay đổi gì.

## Life regen tích lũy liên tục, không có điều kiện

:wiki-link{url="https://www.poe2wiki.net/wiki/Life_regeneration"} là recovery đơn giản nhất: một lượng Life cố định hồi mỗi giây, không cần đánh gì, không có delay, không bị reset bởi damage. Dù đang đứng yên hay đang hứng đòn liên tục, regen vẫn chạy.

Regen đến từ passive tree (nhiều node nhỏ cộng flat +X Life/s và % of max Life per second), gear, và một số flask suffix. Build Life thuần ở campaign thường có đủ regen để tự phục hồi giữa các combat — nhưng khi vào endgame và lượng damage per hit tăng cao, regen thường quá thấp để bù kịp nếu không đầu tư. Đây là lý do flask vẫn là nguồn recovery chính trong fight nặng dù regen luôn bật.

## ES recharge bắt đầu sau 4 giây không nhận damage

:wiki-link{url="https://www.poe2wiki.net/wiki/Energy_Shield_Recharge"} có cơ chế hai bước: delay rồi mới hồi. Sau 4 giây không nhận damage vào ES hoặc Life, ES bắt đầu recharge ở tốc độ 12.5% max ES mỗi giây. Bất kỳ hit nào làm giảm ES hoặc Life đều reset đồng hồ 4 giây từ đầu — phải đủ 4 giây liên tục không bị chạm mới bắt đầu được.

Hệ quả thực tế: trong boss fight có pattern liên tục thì ES gần như không hồi được giữa combat. ES phát huy giá trị trong kiểu đánh burst — nhảy vào, nhận đòn, thoát ra, chờ đủ 4 giây, ES về đầy rồi vào lại. Passive và gear có thể rút ngắn delay xuống (stat "X% faster start of Energy Shield Recharge"), nhưng base là 4 giây.

Cần phân biệt rõ: delay reset bởi **mọi hit làm giảm ES hoặc Life** — không phải chỉ hit vào ES. Nếu ES đã cạn mà Life đang bị hit thì đồng hồ ES vẫn reset. Đây là điều nhiều người mới bỏ qua khi họ nghĩ "ES về đầy rồi sao vẫn không recharge được."

## Leech hồi từ damage gây ra, không phải tức thì

:wiki-link{url="https://www.poe2wiki.net/wiki/Leech"} hoạt động theo công thức: damage hit gây ra × leech% = lượng Life (hoặc Mana, ES) sẽ được hồi — nhưng lượng đó không về tức thì mà được chia đều trong 1 giây. Tức là một hit 1,000 damage với 10% life leech tạo ra một Leech instance hồi 100 Life trong 1 giây, nghĩa là 100 Life/s từ instance đó.

Chỉ một Leech instance cho mỗi resource hoạt động tại một thời điểm. Khi nhiều instance cùng tồn tại — từ nhiều hit liên tiếp — chỉ instance có recovery rate cao nhất được áp dụng, các instance còn lại xếp hàng chờ. Khi instance đang chạy hết thời gian, instance tiếp theo tự động kích hoạt. Tất cả leech bị xóa ngay khi resource về đầy.

Monsters cũng có **Leech Resistance** tăng theo level — ở endgame late, monster Lv80+ có Leech Resistance đáng kể, làm giảm lượng thực tế recover được từ mỗi hit. Build phụ thuộc hoàn toàn vào Leech để sustain cần tính đến điều này.

## 0.5.0 đặt trần 40,000 damage per hit cho tính toán Leech

Đây là thay đổi quan trọng nhất trong 0.5 ảnh hưởng đến Leech build. Từ 0.5.0, nếu một hit gây ra hơn 40,000 total damage thì phần damage vượt 40,000 không được tính vào Leech. Hit 200,000 damage chỉ cho Leech tương đương hit 40,000 damage — các damage type trong hit được scale down đều để đạt giới hạn này.

Trước thay đổi này, damage cao hơn = leech nhiều hơn theo tuyến tính. Bây giờ thì không — một hit khổng lồ không cho nhiều leech hơn một hit 40,000 damage. Tuy nhiên tăng leech% vẫn cộng tuyến tính: 10% leech trên hit 40,000 cap cho 4,000 Life, 20% leech cho 8,000 Life. Muốn tăng leech thì tăng leech%, không phải tăng damage cao vô hạn.

Điều này có nghĩa là build one-shot cần thiết kế lại nếu phụ thuộc vào leech để bù damage nhận vào: leech cố định ở mức tối đa từ 40k damage trở lên, trong khi boss damage có thể vào cực lớn. Không thể lấy leech bù hit to — cần các layer phòng thủ khác.

## Vaal Pact là đánh đổi lớn, không phải buff thuần

:wiki-link{url="https://www.poe2wiki.net/wiki/Vaal_Pact"} là keystone passive ảnh hưởng mạnh đến cách Leech hoạt động. Trong 0.5.0, Vaal Pact có bốn hiệu ứng đồng thời:

**50% more amount of Life Leeched** — tăng tổng lượng Life recover được từ mỗi Leech instance lên 50%.

**67% less Life Leech speed** — tốc độ hồi giảm còn 33% bình thường. Kết hợp với 50% more amount ở trên, một instance thực tế mất khoảng 4.5 giây thay vì 1 giây để hoàn thành.

**Cannot Recover Life other than from Leech** — hoàn toàn khóa mọi nguồn recovery khác: Life flask, Life regen, on-kill recovery, mọi thứ. Life chỉ hồi từ Leech.

**Life Leech effects are not removed when Unreserved Life is Filled** — Leech không bị cắt ngay khi Life đầy, cho phép "overflow" vào buffer.

Tradeoff thực tế: Vaal Pact biến build thành hoàn toàn phụ thuộc Leech. Không có Leech trong một khoảnh khắc (không đánh được, miss liên tục, immune phase của boss) đồng nghĩa với Life không hồi gì cả. Build Vaal Pact cần hit rate cao, leech% đủ mạnh, và đặc biệt phải cẩn thận với boss phase không thể damage. Đây không phải keystone cho người mới — nó phù hợp với build attack speed cao, leech từ nhiều nguồn, và biết cách tránh phase nguy hiểm.

Kết hợp với trần 40,000 damage của 0.5, Vaal Pact build hiện tại cần đánh nhiều hit nhỏ-vừa liên tục hơn là dựa vào vài hit lớn.

## Runic Ward hồi theo cơ chế riêng, không liên quan leech hay regen

:wiki-link{url="https://www.poe2wiki.net/wiki/Runic_Ward"} là mechanic mới hoàn toàn trong 0.5.0. Ward không hoạt động như ES hay Life — nó là lớp bảo vệ cuối cùng chỉ kích hoạt khi Life sắp về 0.

Cụ thể: tất cả damage đều vào Life trước. Nếu một hit sẽ làm Life về 0, Ward hấp thụ phần damage còn thiếu và Life dừng ở 1. Nếu damage lớn hơn Life hiện tại cộng Ward thì vẫn chết. Ward không giảm damage thường như ES — nó chỉ can thiệp ở ngưỡng fatal.

Ward tự hồi ở tốc độ cố định 5% max Ward mỗi giây, hoàn toàn độc lập với mọi recovery mechanic khác. Không bị ảnh hưởng bởi life flask, leech, regen, hay bất cứ thứ gì dùng để hồi Life hay ES. Muốn tăng Ward regeneration thì phải lấy stat "increased Runic Ward Regeneration Rate" từ Charging Rune hay passive.

Ward không phải lớp phòng thủ mặc định — chỉ character dùng Kalguuran gear (weapon hoặc armour có Augment slot phù hợp) mới có Ward đáng kể. Với character thông thường không đầu tư vào Ward, nó gần như không ảnh hưởng đến combat trừ những pha sát tử hiếm gặp.

## Relationships

- **related** [Ba pool tài nguyên: Life, Energy Shield và Mana](/guides/beginner-life-es-mana) — pool cơ bản và cách chúng phân tầng với nhau, đọc trước khi đào sâu recovery
- **related** [Các layer phòng thủ trong POE2](/guides/beginner-defence-layers) — recovery là một trong nhiều layer, hiểu toàn bộ hệ thống phòng thủ để đặt recovery đúng chỗ
- **related** [Spirit: tài nguyên reservation của POE2](/guides/beginner-spirit) — aura hỗ trợ recovery (Vitality, Clarity) đều tiêu Spirit để bật
