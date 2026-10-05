# Project Overview & PRD — Portfolio cá nhân

**Trạng thái:** Draft  
**Ngày:** 2026-09-29  
**Phiên bản:** MVP  

## 1. Tổng quan sản phẩm

- **Tên sản phẩm:** Portfolio cá nhân
- **Mô tả một câu:** Website portfolio cá nhân dành cho graphic designer, giúp người xem khám phá các project tiêu biểu, hiểu năng lực, phong cách và cách giải quyết bài toán thiết kế.
- **Đối tượng người dùng:** Khách hàng tiềm năng và recruiter / Creative Director.
- **Hành động quan trọng nhất:** Xem project → hiểu năng lực, phong cách và cách tư duy giải quyết brief → liên hệ để thuê hoặc đánh giá mức độ phù hợp cho một vị trí design.

## 2. Câu định vị MVP

> Tôi tạo ra **Portfolio cá nhân** dành cho **những người đang tìm kiếm một graphic designer** để giúp họ **hiểu năng lực, phong cách và cách tôi giải quyết các bài toán thiết kế qua những project tiêu biểu**.

## 3. Người dùng và bối cảnh

- **Người dùng chính:** Khách hàng tiềm năng và recruiter / Creative Director.
- **Tình huống sử dụng:** Người xem truy cập portfolio để tìm hiểu designer, xem các project tiêu biểu và đánh giá mức độ phù hợp trước khi liên hệ, thuê hoặc cân nhắc cho một cơ hội công việc.
- **Động lực:** Tìm hiểu chất lượng thiết kế, phong cách, năng lực và cách designer giải quyết brief.
- **Rào cản:** Project hiện nằm rải rác ở Behance, Instagram, Google Drive và các nơi khác; có nhiều sản phẩm nhưng chưa có cách sắp xếp/showcase thành một câu chuyện rõ ràng; portfolio hiện tại chưa thể hiện đúng năng lực cá nhân.

## 4. Vấn đề cần giải quyết

- **Nỗi đau chính:** Designer có nhiều sản phẩm nhưng chưa có một nơi thống nhất để chọn lọc, sắp xếp và showcase chúng theo cách thể hiện rõ năng lực cá nhân và câu chuyện phía sau project.
- **Cách làm hiện tại:** Sản phẩm nằm rải rác trên nhiều nền tảng và designer gửi từng project riêng khi có người hỏi.
- **Vì sao cách hiện tại chưa tốt:** Người xem phải đi qua nhiều nơi hoặc nhận từng project riêng lẻ, khiến trải nghiệm khám phá portfolio không thống nhất và khó thể hiện đầy đủ cách designer tư duy và giải quyết brief.
- **Bằng chứng:** `CHƯA ĐỦ DỮ LIỆU` — đây là mô tả từ người tạo sản phẩm; chưa có dữ liệu phỏng vấn hoặc feedback từ người xem mục tiêu để xác nhận mức độ ảnh hưởng.

## 5. Job To Be Done

> Khi cần đánh giá một graphic designer cho một dự án hoặc cơ hội công việc, tôi muốn xem các project tiêu biểu cùng cách designer giải quyết brief, để hiểu năng lực, phong cách và mức độ phù hợp trước khi liên hệ hoặc đưa ra quyết định tiếp theo.

## 6. Giá trị sản phẩm

- **Giá trị cốt lõi:** Tập trung các project tiêu biểu vào một trải nghiệm thống nhất, kết hợp showcase với case study để người xem hiểu cả thành phẩm và cách tư duy phía sau.
- **Điểm khác biệt có thể kiểm chứng:** Portfolio không chỉ trưng bày sản phẩm mà mỗi project quan trọng có thể trình bày bối cảnh/brief, cách tiếp cận và kết quả ở mức phù hợp với nội dung thực tế.
- **Giả định quan trọng nhất:** Việc kể rõ cách giải quyết brief sẽ giúp người xem hiểu năng lực cá nhân tốt hơn việc chỉ xem hình ảnh thành phẩm.

## 7. Core user flow

1. Người dùng mở portfolio và nhanh chóng hiểu designer là ai, làm gì.
2. Người dùng duyệt các project tiêu biểu và chọn một project quan tâm.
3. Hệ thống hiển thị case study với thông tin về brief/bối cảnh, cách tiếp cận, sản phẩm thiết kế và kết quả phù hợp với dữ liệu được cung cấp.
4. Người dùng hiểu rõ hơn về năng lực, phong cách và cách designer giải quyết bài toán.
5. Người dùng chuyển sang thông tin liên hệ để tiếp tục trao đổi hoặc quay lại xem project khác.

## 8. Functional requirements

### P0 — Bắt buộc cho MVP

- **FR-01 — Giới thiệu designer:** Khi mở website, hệ thống phải hiển thị phần giới thiệu ngắn giúp người xem hiểu designer là ai và định hướng công việc chính.
- **FR-02 — Showcase project:** Hệ thống phải hiển thị khoảng 8–10 project tiêu biểu theo một cấu trúc nhất quán để người xem có thể duyệt và chọn project.
- **FR-03 — Project detail / case study:** Khi người dùng chọn một project, hệ thống phải cho phép xem nội dung case study của project đó, bao gồm các thông tin được cung cấp như brief/bối cảnh, cách tiếp cận và sản phẩm thiết kế.
- **FR-04 — About:** Hệ thống phải có khu vực giới thiệu bản thân và thông tin liên quan cần thiết để người xem hiểu thêm về designer.
- **FR-05 — Contact:** Hệ thống phải cung cấp một cách rõ ràng để người xem liên hệ với designer.
- **FR-06 — Responsive:** Core user flow phải sử dụng được trên mobile và desktop.
- **FR-07 — Animation cơ bản:** Hệ thống có thể dùng animation/transition đơn giản để hỗ trợ việc khám phá nội dung, nhưng không được cản trở core user flow.
- **FR-08 — Navigation:** Người dùng phải có thể đi từ showcase tới project detail và quay lại danh sách project hoặc tới contact.

### P1 — Có thể làm sau khi P0 ổn định

- **FR-09 — Lọc hoặc phân loại project:** Cho phép lọc project theo loại công việc nếu số lượng project hoặc nhu cầu thực tế cho thấy cần thiết.
- **FR-10 — Animation nâng cao:** Bổ sung interaction/transition phức tạp hơn nếu có lý do trải nghiệm rõ ràng.
- **FR-11 — Quản lý nội dung:** Cân nhắc CMS nếu việc cập nhật project thủ công trở thành trở ngại thực tế.

## 9. Scope

### IN — MVP làm

- Website portfolio responsive.
- Khoảng 8–10 project tiêu biểu.
- Giới thiệu bản thân.
- Showcase project.
- Project detail / case study.
- Thông tin liên hệ.
- Animation/transition đơn giản, có chủ đích.
- Nội dung và cấu trúc ưu tiên thể hiện năng lực, phong cách và cách tư duy.

### OUT — Chưa làm

- CMS.
- Blog.
- Animation phức tạp.
- 3D/WebGL hoặc trải nghiệm tương tác nặng.
- Các tính năng không phục vụ core user flow.
- Hệ thống quản trị nội dung riêng.
- Các tính năng lọc/phân loại nâng cao khi chưa có nhu cầu thực tế.

### Non-goals — Cố tình không giải quyết

- Không biến portfolio thành một nền tảng quản lý toàn bộ kho thiết kế.
- Không xây hệ thống xuất bản nội dung phức tạp.
- Không tối ưu portfolio cho số lượng project lớn ngay từ phiên bản đầu.
- Không dùng animation như mục tiêu chính thay cho việc showcase và kể câu chuyện project.

## 10. Success criteria và validation

| Success criterion | Cách kiểm chứng | Tín hiệu đạt |
|---|---|---|
| Người xem hiểu designer là ai và làm gì | Cho người thuộc nhóm mục tiêu xem trang đầu mà không giải thích trước, sau đó hỏi lại họ hiểu gì | Người xem mô tả đúng vai trò/định hướng chính của designer |
| Người xem tìm và mở được project quan tâm | Quan sát một lượt sử dụng trên mobile và desktop | Người xem hoàn thành từ entry → project detail mà không cần hướng dẫn |
| Người xem hiểu cách designer giải quyết brief | Sau khi xem case study, hỏi họ tóm tắt ngắn bối cảnh và cách tiếp cận | Người xem có thể mô tả được cách designer xử lý project ở mức cơ bản |
| Người xem biết cách liên hệ | Quan sát core flow hoặc test với người dùng mục tiêu | Người xem tìm được contact mà không cần chỉ dẫn |
| Portfolio hoạt động tốt trên mobile và desktop | Manual responsive test | Core user flow hoàn thành được trên cả hai nhóm thiết bị |
| Animation hỗ trợ thay vì cản trở trải nghiệm | Manual test trên các màn hình chính | Không có animation làm mất khả năng đọc, điều hướng hoặc hoàn thành hành động chính |

**Lưu ý:** Các ngưỡng số cụ thể chưa được xác định vì hiện chưa có dữ liệu baseline hoặc nghiên cứu người dùng. Cần kiểm chứng bằng feedback thực tế thay vì tự đặt số liệu.

## 11. Edge cases quan trọng

- Khi project chưa có đủ nội dung case study: hiển thị phần nội dung hiện có theo cấu trúc nhất quán, không bịa thông tin.
- Khi một project thiếu kết quả định lượng: không tạo số liệu giả; dùng mô tả kết quả thực tế nếu có.
- Khi project không có hình ảnh phù hợp ở một số kích thước: layout phải vẫn giữ được hierarchy và không làm vỡ trang.
- Khi không có dữ liệu project: hiển thị trạng thái phù hợp thay vì tạo nội dung giả.
- Khi thao tác chuyển trang hoặc tải nội dung thất bại: có feedback rõ ràng và cách quay lại/tiếp tục.
- Khi dùng trên màn hình nhỏ: ưu tiên nội dung project, điều hướng và contact; animation phải giảm hoặc đơn giản hóa nếu cần.

## 12. Ràng buộc và dependency

- **Nền tảng:** Website responsive; stack cụ thể chưa được chốt ở giai đoạn PRD.
- **Thời gian/ngân sách/kỹ năng:** Ưu tiên MVP nhỏ, phù hợp với vibecode; chưa có ngân sách hoặc deadline cụ thể được cung cấp.
- **Dữ liệu:** Nội dung và hình ảnh của khoảng 8–10 project do designer cung cấp. Không bịa số liệu, testimonial hoặc kết quả kinh doanh.
- **Tích hợp:** Không yêu cầu CMS hoặc tích hợp phức tạp trong MVP. Hình thức contact cụ thể cần được chốt ở giai đoạn thiết kế/triển khai.
- **Bảo mật hoặc quyền riêng tư:** Chỉ công khai những thông tin và tài sản mà designer có quyền sử dụng. Thông tin liên hệ cần được chủ động lựa chọn trước khi publish.

## 13. Rủi ro và giả định

| Loại | Nội dung | Cách giảm rủi ro/kiểm chứng |
|---|---|---|
| Giả định | Case study giúp người xem hiểu năng lực tốt hơn showcase đơn thuần | Test với người xem mục tiêu và hỏi lại họ hiểu gì sau khi xem |
| Giả định | 8–10 project là số lượng phù hợp để thể hiện năng lực mà không gây quá tải | Cho người dùng mục tiêu duyệt thử và thu feedback |
| Giả định | Animation đơn giản làm portfolio có cá tính hơn mà không gây phân tâm | Test usability trên mobile/desktop và kiểm tra tốc độ/khả năng đọc |
| Rủi ro | Có quá nhiều project hoặc nội dung khiến người xem khó chọn | Chọn lọc project và ưu tiên hierarchy rõ ràng |
| Rủi ro | Case study dài làm giảm khả năng đọc | Chia nội dung thành các phần ngắn, ưu tiên hình ảnh và thông tin quan trọng |
| Rủi ro | Visual design lấn át project | Đánh giá UI dựa trên khả năng showcase sản phẩm trước khi thêm decoration |
| Rủi ro | Nội dung chưa đủ để viết case study cho 8–10 project | Kiểm kê nội dung từng project trước khi triển khai toàn bộ |

## 14. Câu hỏi còn mở

- [ ] Tên hiển thị chính thức của portfolio/designer là gì?
- [ ] 8–10 project cụ thể nào sẽ được chọn cho MVP?
- [ ] Mỗi project hiện có những tài liệu nào: hình ảnh, brief, process, outcome?
- [ ] Mức độ chi tiết mong muốn cho case study của từng project là bao nhiêu?
- [ ] Hình thức contact chính là email, form, social profile hay kết hợp?
- [ ] Có domain, logo, font hoặc visual identity cá nhân sẵn có không?
- [ ] Stack triển khai cụ thể sẽ là gì? `<Cần xác nhận ở development plan / repository discovery>`

## 15. Điều kiện sẵn sàng sang Design

- [x] Một nhóm người dùng chính đã được xác định: khách hàng tiềm năng và recruiter / Creative Director.
- [x] Một hành động chính đã được chốt: xem project để hiểu năng lực, phong cách và cách tư duy, sau đó có thể liên hệ/đánh giá mức độ phù hợp.
- [x] P0 và OUT scope không mâu thuẫn ở cấp PRD.
- [x] Mỗi success criterion có cách kiểm chứng.
- [x] Các giả định chưa có bằng chứng đã được đánh dấu.
