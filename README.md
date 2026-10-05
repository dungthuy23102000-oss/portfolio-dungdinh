# Portfolio Cá Nhân — Đinh Dũng (Graphic Designer)

Website Portfolio cá nhân được thiết kế lại toàn diện dựa trên **CV gốc** và tài liệu **Project Overview & PRD (MVP)**, sử dụng thuần túy **HTML5, CSS3, JavaScript (ES6+)** không phụ thuộc framework cồng kềnh, tối ưu tốc độ tải tức thì và hoàn hảo trên mọi thiết bị.

---

## 🌟 Cấu trúc website & Bố cục giàn trải tự nhiên:

1. **Phân bổ thông tin đồng đều, chuyên nghiệp (Không đóng khung CV):**
   - **Mục Về tôi / Hero (`#about`):** Bố cục 2 cột hiện đại, ảnh chân dung thật (`assets/avatar.png`) kèm huy hiệu trạng thái nhận dự án, tiêu đề lời chào "XIN CHÀO!" đồng bộ với font title website (`Space Grotesk`) kết hợp ngôi sao thương hiệu cam xoay 360° mượt mà, bio năng lực thực tế, nút liên hệ email/Behance và các chỉ số đo lường (6+ Năm kinh nghiệm, 9 Dự án, 5 Đơn vị).
   - **Mục Dự án chọn lọc (`#projects`):** 9 Case Study đồ họa chất lượng cao với bộ lọc theo danh mục, tìm kiếm trực tiếp và cửa sổ xem chi tiết (Modal).
   - **Mục Kinh nghiệm & Kỹ năng (`#experience`):** Bố cục Dashboard thống nhất, thu gọn trong một section duy nhất:
     - *Cột trái:* Dòng thời gian 5 mốc kinh nghiệm thực tế (VOLCANOLABS, MindX, MP Group, NEA MODELS, Kienviet AFA).
     - *Cột phải:* Hệ sinh thái công cụ thiết kế (Ai, Ps, Pr, Figma, Ae, Blender) + Học vấn (Đại học Hòa Bình, Arena Multimedia) + Ngôn ngữ giao tiếp (Tiếng Việt, Tiếng Anh) + Kỹ năng mềm & Tác phong làm việc.
   - **Mục Liên hệ (`#contact`):** Phương thức kết nối trực tiếp (sao chép email 1 chạm, Behance, LinkedIn) và biểu mẫu gửi brief nhanh.

2. **Màu sắc chủ đạo & Nhận diện thương hiệu (Signature Orange):**
   - Màu nhấn chủ đạo: **Màu Cam Điện Tử rực rỡ (`#F95208`)** đồng bộ chuẩn xác với Logo cá nhân (`assets/logo.png`).
   - Nền xám than mờ cao cấp (`#0d0f11` Dark Matte) kết hợp cùng hiệu ứng phát sáng màu cam (Orange Ambient Glow) và phong cách Neo-Brutalist / Editorial tinh tế.
   - Hỗ trợ đầy đủ chế độ Giao diện Sáng (Light Theme) và Tối (Dark Theme).

- **FR-06 — Responsive Đa nền tảng:**
  - Tối ưu hoàn chỉnh từ màn hình Desktop siêu rộng, Laptop, iPad/Tablet đến Smartphone cỡ nhỏ (< 480px).
  - Menu điều hướng Drawer trượt mượt mà trên Mobile.

- **FR-07 — Animation & Trải nghiệm thị giác tinh tế:**
  - Chuyển đổi giao diện Sáng / Tối (Dark / Light Theme Toggle) lưu tự động vào `localStorage`.
  - Hiệu ứng hover nổi bật thẻ dự án, làm mờ hậu cảnh khi xem modal (Glassmorphism backdrop-blur).
  - Thông báo nổi (Toast Notification) khi sao chép email hoặc gửi biểu mẫu.

- **FR-08 — Điều hướng linh hoạt (Navigation & Routing):**
  - Thanh header cố định làm mờ nền theo dõi vị trí cuộn trang (Scroll Spy).
  - Nút "Lên đầu trang" (Back to Top) mượt mà.

### 2. P1 — Bổ sung nâng cao
- **FR-09 — Bộ lọc & Tìm kiếm dự án:**
  - Bộ lọc theo danh mục: *Tất cả*, *Brand Identity*, *Packaging*, *Editorial & Print*, *Digital & Motion*.
  - Ô tìm kiếm tức thời (Live Search) theo tên dự án, tên khách hàng hoặc kỹ năng.

---

## 📁 Cấu trúc thư mục

```
Portfolio/
├── index.html              # Trang chủ hoàn chỉnh, cấu trúc HTML5 chuẩn SEO & Accessibility
├── css/
│   ├── style.css           # Design tokens, màu sắc, font chữ, bố cục Swiss grid, giao diện Dark/Light
│   └── responsive.css      # Tối ưu giao diện trên Tablet, Mobile và thiết bị màn hình nhỏ
├── js/
│   ├── data.js             # Dữ liệu 09 Case Study đầy đủ thông tin bối cảnh, concept, outcome
│   ├── visuals.js          # Bộ tạo đồ hoạ Vector SVG chất lượng cao cho từng dự án
│   └── main.js             # Điều khiển render dự án, lọc, tìm kiếm, modal case study, hash link, theme
├── project-overview-prd(1).md # Tài liệu PRD gốc
└── README.md               # Hướng dẫn sử dụng và tuỳ biến
```

---

## 🚀 Cách mở và xem website

### Cách 1: Mở trực tiếp (Không cần cài đặt gì thêm)
Chỉ cần nhấp đúp vào file `index.html` trong trình duyệt web của bạn (Chrome, Safari, Firefox, Edge).

### Cách 2: Chạy qua Local Web Server (Khuyên dùng)
Mở Terminal tại thư mục này và chạy lệnh:
```bash
python3 -m http.server 8000
```
Sau đó truy cập: [http://localhost:8000](http://localhost:8000)

---

## 🎨 Hướng dẫn tuỳ biến thông tin cá nhân

1. **Thay đổi thông tin liên hệ / Tên của bạn:**
   - Mở file `js/data.js`, chỉnh sửa đối tượng `DESIGNER_PROFILE` ở cuối file (Tên, email, số điện thoại, mạng xã hội).
   - Hoặc chỉnh sửa trực tiếp các thẻ văn bản trong file `index.html`.

2. **Thêm hoặc sửa đổi Case Study:**
   - Mở file `js/data.js`, chỉnh sửa hoặc thêm mới các đối tượng trong mảng `PROJECTS_DATA`.
   - Mỗi dự án có đầy đủ các trường: `title`, `tagline`, `category`, `client`, `brief`, `concept`, `designSystem`, `deliverables`, `outcome`.

3. **Thay ảnh thật từ máy:**
   - Bạn có thể đặt ảnh vào thư mục `assets/projects/` và thay thế phần SVG bằng thẻ `<img>` với thuộc tính `src="assets/projects/ten_anh.jpg"`.
