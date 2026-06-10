---
template: templates/guide-template.md
document_type: guide
title: "Stun: Light Stun và Heavy Stun khác nhau như thế nào"
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
  - stun
  - crowd-control
  - melee
---

# Stun: Light Stun và Heavy Stun khác nhau như thế nào

POE2 có hai loại stun hoàn toàn khác nhau về cơ chế — Light Stun và Heavy Stun — và hiểu rõ cả hai giải thích tại sao build hammer/mace được khuyến khích cho crowd control, tại sao physical damage ăn bonus stun, và tại sao đôi khi enemy bỗng đứng cứng hẳn thay vì chỉ bị giật nhẹ một cái.

## Light Stun xảy ra ngay lập tức dựa trên damage

Mỗi hit đều có xác suất gây :wiki-link{url="https://www.poe2wiki.net/wiki/Light_Stun"}. Cơ chế tính chance rất trực tiếp: chance bằng damage gây ra chia cho maximum life của target, tính theo phần trăm. Hit gây 100% life của địch thì chance là 100%; hit gây 50% life thì chance là 50%.

Điểm quan trọng cần nhớ: chance dưới 15% bị xử lý như 0. Tức là những hit nhỏ lẻ không đủ mạnh sẽ không bao giờ gây Light Stun — có floor cứng ở đây. Một hit gây 14% life vẫn = không stun; phải đạt đủ 15% mới bắt đầu có cơ hội.

Light Stun kéo dài 0.53 giây — gần nửa giây. Ngắn, nhưng đủ để interrupt cast đang thực hiện và reset hành động của địch. Với build attack speed cao, Light Stun liên tục có thể giữ địch trong trạng thái bị gián đoạn thường xuyên mà không cần đến Heavy Stun.

## Heavy Stun tích lũy qua nhiều hit và giữ địch đứng yên lâu hơn

:wiki-link{url="https://www.poe2wiki.net/wiki/Heavy_Stun"} hoạt động theo cơ chế buildup — mỗi hit cộng một lượng vào Stun bar của địch, tỷ lệ thuận với damage gây ra. Thanh Stun bar hiện ra dưới thanh máu của địch trong game. Khi bar đầy, địch bị Heavy Stun: đứng im hoàn toàn, tính là Immobilised, không thể làm gì trong vài giây.

Heavy Stun buildup có hai điểm cần hiểu để tận dụng hiệu quả. Buildup rút dần nếu không có hit mới sau một khoảng thời gian — đánh rải rác thưa thớt sẽ không bao giờ điền đầy bar. Sau khi địch vừa bị Heavy Stun xong, sẽ khó Heavy Stun lại ngay lập tức — có immunity window ngắn sau khi thoát stun, khiến việc lock liên tục một boss là không thực tế.

Duration của Heavy Stun không cố định mà phụ thuộc vào damage của hit vượt quá Stun Threshold bao nhiêu — hit càng mạnh, địch đứng yên càng lâu.

## Physical damage và Melee damage được bonus stun cùng lúc

Cả :wiki-link{url="https://www.poe2wiki.net/wiki/Physical_Damage"} lẫn player Melee damage đều cho 50% more Light Stun chance và 50% more Heavy Stun buildup. Hai bonus này multiplicative với nhau, không additive.

Một hit vừa physical vừa melee (ví dụ đập mace trực tiếp vào mặt địch) nhận cả hai cùng lúc: 1.5 × 1.5 = 2.25 — tức 125% hiệu quả hơn so với hit không phải physical lẫn không phải melee. Đây là lý do cốt lõi tại sao các build mace/hammer physical có crowd control tốt tự nhiên mà không cần mod stun riêng trên gear.

Lưu ý quan trọng: bonus melee chỉ áp dụng cho player, không áp dụng cho monster. Khi địch đập mình bằng melee physical, chúng không nhận double bonus theo cách player nhận — monster melee chỉ cho 33% more (trong khi physical của monster cho 100% more). Con số nghe có vẻ tương tự nhưng hướng áp dụng khác nhau hoàn toàn, và đây cũng là lý do tại sao boss melee physical có thể rất nguy hiểm nếu không có đủ Stun Threshold.

## Player thường không bị Heavy Stun

Đây là khác biệt quan trọng nhất giữa player và enemy: player và minion thông thường không thể bị Heavy Stun trực tiếp từ hit thường. Không có thanh Stun bar trên character của mình theo cách địch có.

Tuy nhiên, có ba trường hợp player tích lũy Heavy Stun buildup: đang dùng :wiki-link{url="https://www.poe2wiki.net/wiki/Raise_Shield"} để giơ shield lên block tất cả hit, đang dùng :wiki-link{url="https://www.poe2wiki.net/wiki/Parry"} với Buckler, hoặc nhận hit trong lúc đang sprint. Nếu buildup đó đầy, player bị Heavy Stun 3 giây — không thể evade hay block trong suốt thời gian đó. Evasion rating không giúp tránh hit trong lúc block/parry, nhưng giúp tránh phần Stun buildup tương ứng với xác suất bằng evasion chance.

## Tăng stun chance lên enemy

Cách đơn giản nhất là tăng damage per hit — vì cả Light Stun chance lẫn Heavy Stun buildup đều tính theo damage gây ra. Build với hit damage lớn tự nhiên stun tốt hơn, không cần mod đặc biệt.

:wiki-link{url="https://www.poe2wiki.net/wiki/Daze"} là debuff làm target nhận 50% more Stun buildup từ mọi hit. Áp Daze lên địch trước rồi mới hit là cách đẩy Stun bar nhanh hơn đáng kể, đặc biệt hữu ích với rare và boss có Stun Threshold cao.

:wiki-link{url="https://www.poe2wiki.net/wiki/Primed_for_Stun"} là trạng thái khi địch đã tích đủ một phần Heavy Stun buildup — normal enemy Primed khi đạt 40% bar, magic 50%, rare 60%, unique 70%. Mechanic :wiki-link{url="https://www.poe2wiki.net/wiki/Crushing_Blows"} là cơ chế cho phép hit tự động Heavy Stun ngay những địch đang ở trạng thái Primed for Stun, thay vì phải kiên nhẫn điền đầy 100% bar. Titan ascendancy passive Crushing Impacts cho "Your Hits are Crushing Blows" — đây là lý do Warrior/Titan là class stun mạnh nhất trong game.

Stun Threshold của địch quyết định bao nhiêu buildup cần để stun. Giảm Stun Threshold của enemy qua mod gear hoặc passive tree giúp stun dễ hơn; tăng Stun Threshold của bản thân giúp khó bị Light Stun hơn khi bị đánh.

## Relationships

- **related** [Damage types trong POE2](/guides/beginner-damage-types) — physical damage là loại damage duy nhất bị giảm bởi Armour và cũng là loại được bonus stun đặc biệt.
- **related** [Defence layers trong POE2](/guides/beginner-defence-layers) — Heavy Stun buildup trên player khi dùng Raise Shield hoặc Parry là phần của trade-off giữa active block và passive defense.
- **related** [Ailments trong POE2](/guides/beginner-ailments) — Light Stun và Heavy Stun không phải ailment, nhưng cơ chế on-hit của chúng liên quan chặt với nhiều ailment như Freeze và Electrocution vốn cũng thuộc nhóm Immobilise.
