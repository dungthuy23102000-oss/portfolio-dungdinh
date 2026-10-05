/**
 * Portfolio Projects Data
 * Detailed Case Studies for Graphic Design MVP
 */

const PROJECTS_DATA = [
  {
    id: "chickcoop",
    title: "Chickcoop",
    tagline: "Chiến dịch thiết kế Social truyền thông & Bộ ấn phẩm Visual tương tác",
    category: "digital",
    categoryLabel: "Social & Campaign",
    client: "Chickcoop",
    role: "Lead Graphic Designer, Social Creative",
    duration: "4 tuần",
    services: ["Thiết kế Social", "Key Visual", "Ấn phẩm truyền thông", "Digital Content"],
    featured: true,
    accentColor: "#F97316",
    showcaseImage: "assets/Slide 7@4x.jpg",
    showcaseVideo: {
      src: "assets/may-con-ga.mp4",
      top: "10.95%",
      left: "3.62%",
      width: "92.76%",
      height: "8.45%",
      borderRadius: "clamp(12px, 1.56vw, 24px)"
    },
    summary: "Xây dựng hệ thống thiết kế social truyền thông và các Key Visual độc đáo cho thương hiệu Chickcoop, khai thác hình tượng nhân vật không gian sáng tạo nhằm tối ưu độ phủ sóng và tương tác trên mạng xã hội năm 2024.",
    brief: {
      clientIntro: "Chickcoop là thương hiệu sáng tạo với phong cách trẻ trung, năng động và hóm hỉnh, hướng tới nhóm đối tượng người dùng trẻ trên các nền tảng mạng xã hội và phương tiện số.",
      challenge: "Các kênh truyền thông mạng xã hội của thương hiệu trước đây thiếu một hệ thống visual nhất quán; bài đăng rời rạc và chưa làm nổi bật được cá tính độc bản của dàn nhân vật biểu trưng để bứt phá lượt tiếp cận tự nhiên.",
      objective: "Thiết kế bộ Key Visual không gian vũ trụ ấn tượng; chuẩn hoá hệ thống template social media đa nền tảng (Facebook, Instagram, TikTok); tạo nhịp truyền thông hấp dẫn, giữ chân người dùng ngay từ 3 giây đầu tiên lướt newsfeed."
    },
    concept: {
      bigIdea: "Cosmic Chick Adventures — Cuộc phiêu lưu vũ trụ tràn đầy năng lượng tích cực của biệt đội Chickcoop.",
      approach: "Đưa dàn nhân vật phi hành gia với biểu cảm hài hước vào bối cảnh vũ trụ kỳ thú. Sử dụng bảng màu tương phản rực rỡ giữa nền xanh không gian sâu thẳm và sắc cam - vàng năng động của nhân vật, kết hợp custom wordmark hoạt họa tạo nên một tổng thể vui nhộn, bắt mắt.",
      designPrinciples: [
        { title: "Character-First", desc: "Tập trung khai thác biểu cảm nhân vật để khơi gợi cảm xúc vui tươi và tính lan tỏa tự nhiên." },
        { title: "Feed Harmony", desc: "Quy chuẩn khung hình, hệ thống typography và điểm nhấn màu sắc giúp grid trang mạng xã hội luôn nhất quán." },
        { title: "Engagement Focus", desc: "Tối ưu tương tác thị giác trong 3 giây đầu tiên lướt qua bảng tin số." }
      ]
    },
    designSystem: {
      colors: [
        { name: "Cosmic Navy", hex: "#0E2442", role: "Primary Deep Background" },
        { name: "Chickcoop Orange", hex: "#F97316", role: "Character Hero Color" },
        { name: "Solar Amber", hex: "#FBBF24", role: "Wordmark Accent" },
        { name: "Atmosphere Cyan", hex: "#38BDF8", role: "Secondary Highlight" },
        { name: "Starlight White", hex: "#FFFFFF", role: "Typography & Clean Details" }
      ],
      typography: {
        headline: "Custom Cartoon Display — Nét chữ vẽ tay sinh động, giàu tính biểu cảm",
        body: "Plus Jakarta Sans — Hiện đại, sắc nét và dễ đọc trên mọi thiết bị di động",
        numbers: "Space Grotesk — Đậm nét, chuẩn xác cho các số liệu truyền thông và ngày tháng"
      }
    },
    deliverables: [
      "Bộ Key Visual chiến dịch không gian vũ trụ đa định dạng",
      "Hệ thống 30+ Template bài đăng mạng xã hội (Single Post, Carousel, Story)",
      "Thiết kế Cover Banner, Avatar và bộ ấn phẩm sự kiện trực tuyến",
      "Quy chuẩn Visual Style Guide hướng dẫn ứng dụng nội dung social truyền thông"
    ],
    outcome: {
      summary: "Chiến dịch truyền thông mạng xã hội đạt hiệu ứng tương tác vượt bậc trong tháng đầu triển khai năm 2024.",
      metrics: [
        { label: "Tăng trưởng tương tác", value: "+145%" },
        { label: "Ấn phẩm hoàn thiện", value: "35+ Post" },
        { label: "Lượt tiếp cận tự nhiên", value: "180K+" }
      ],
      detail: "Hệ thống thiết kế social truyền thông mới giúp đồng bộ nhận diện kênh fanpage và các trang mạng xã hội, tăng tỷ lệ chia sẻ tự nhiên lên 145% và được cộng đồng đón nhận nồng nhiệt."
    },
    coverGradient: "linear-gradient(135deg, #0e2442 0%, #1a3c68 50%, #f97316 100%)",
    svgVisual: "chickcoop"
  },
  {
    id: "the-ton-journal",
    title: "The Ton Journal",
    tagline: "Chiến dịch Social Media & Hệ thống Nhận diện Thương hiệu Web3",
    category: "brand",
    categoryLabel: "Social & Nhận diện thương hiệu",
    client: "The Ton Journal",
    role: "Lead Visual Designer & Art Director",
    duration: "6 tuần",
    services: ["Brand Identity", "Social Media Design", "3D Key Visual", "Content Strategy"],
    featured: true,
    accentColor: "#0098EA",
    summary: "Xây dựng hệ thống nhận diện thương hiệu số và định hướng visual toàn diện cho các ấn phẩm truyền thông mạng xã hội của The Ton Journal, kết hợp hình tượng pha lê 3D với ngôn ngữ đồ họa Web3 hiện đại.",
    brief: {
      clientIntro: "The Ton Journal là ấn phẩm thông tin và kênh truyền thông uy tín trong hệ sinh thái TON (The Open Network), chuyên phân tích chuyên sâu và cập nhật nhịp đập công nghệ blockchain cho cộng đồng toàn cầu.",
      challenge: "Lĩnh vực Web3 có tốc độ dòng chảy tin tức cực nhanh; các ấn phẩm thường bị khô khan hoặc lặp lại khuôn mẫu tech chung chung. Thách thức là tạo ra bản sắc thị giác độc bản, cao cấp, vừa giữ vững tính minh bạch vừa kích thích thị giác mạnh mẽ trên newsfeed mạng xã hội.",
      objective: "Định hình visual identity nhất quán, phát triển hệ thống Key Visual 3D pha lê đại diện cho tính minh bạch và công nghệ, thiết kế template đa định dạng (X/Twitter, Telegram, Facebook) tối ưu tốc độ sản xuất nội dung hàng ngày."
    },
    concept: {
      bigIdea: "Crystalline Clarity — Sự tinh khiết, minh bạch và chiều sâu của tri thức công nghệ.",
      approach: "Sử dụng khối pha lê kim cương phát sáng lơ lửng trên mặt nước tĩnh lặng làm Key Visual cốt lõi, kết hợp hệ thống lưới vi mô (micro-grid), typography chuẩn mực và bảng màu cyan điện tử tạo cảm giác tương lai và uy tín.",
      designPrinciples: [
        { title: "Crystalline Precision", desc: "Đường nét chuẩn xác, cấu trúc đa diện biểu trưng cho góc nhìn đa chiều của báo chí công nghệ." },
        { title: "Feed-Stopping Contrast", desc: "Độ tương phản cao giữa màu xanh đại dương sâu thẳm và ánh sáng pha lê cyan nổi bật ngay trong 2 giây đầu lướt feed." },
        { title: "Modular Scalability", desc: "Hệ thống khung layout linh hoạt cho phép đội ngũ biên tập tạo ấn phẩm nhanh chóng mà vẫn giữ trọn vẹn bản sắc thương hiệu." }
      ]
    },
    designSystem: {
      colors: [
        { name: "Abyssal Navy", hex: "#06152B", role: "Primary Deep" },
        { name: "Electric Cyan", hex: "#0098EA", role: "TON Signature" },
        { name: "Pure Crystal", hex: "#E0F2FE", role: "Highlight Light" },
        { name: "Slate Grid", hex: "#64748B", role: "Technical Metric" }
      ],
      typography: {
        headline: "Plus Jakarta Sans / Space Grotesk — Hiện đại, sắc nét và mang hơi thở công nghệ",
        body: "Inter Tight — Rõ ràng, tối ưu cho các bảng tin tức và bài phân tích social"
      }
    },
    deliverables: [
      "Bộ nhận diện thương hiệu số hoàn chỉnh (Logo, Typography, Color System, Grid Guidelines)",
      "Hệ thống 3D Key Visual & Render assets độc quyền chất lượng cao",
      "50+ Template thiết kế social media đa nền tảng (X/Twitter, Telegram, Facebook)",
      "Brand Guidelines chi tiết phục vụ vận hành sản xuất nội dung số tốc độ cao"
    ],
    outcome: {
      summary: "Bộ nhận diện và chuỗi ấn phẩm social media đã giúp The Ton Journal tăng trưởng vượt bậc về nhận thức thương hiệu và gắn kết cộng đồng Web3 toàn cầu.",
      metrics: [
        { label: "Lượt tiếp cận Social", value: "650K+" },
        { label: "Tăng trưởng Followers", value: "+210%" },
        { label: "Tỷ lệ tương tác", value: "4.8x" }
      ],
      detail: "Hệ thống template mạng xã hội đồng bộ giúp rút ngắn 60% thời gian thiết kế mỗi ngày, nâng cao độ tin cậy và thẩm mỹ trong mắt các đối tác quỹ đầu tư và dự án Web3 lớn."
    },
    coverGradient: "linear-gradient(135deg, #06152b 0%, #0c2d54 50%, #0098ea 100%)",
    svgVisual: "the-ton-journal"
  },
  {
    id: "viking",
    title: "Viking",
    tagline: "Bộ Nhận diện Thương hiệu & Hệ sinh thái Ấn phẩm Social Media Web3 Token",
    category: "digital",
    categoryLabel: "Social & Nhận diện thương hiệu",
    client: "Viking Token / Web3 Ecosystem",
    role: "Lead Brand & Social Media Designer",
    duration: "5 tuần",
    services: ["Brand Identity", "Social Media Design", "Token Branding", "Visual Key Visual"],
    featured: true,
    accentColor: "#22C55E",
    summary: "Thiết kế bộ nhận diện thương hiệu số và hệ sinh thái ấn phẩm social media toàn diện cho Viking — dự án Web3 Token phi tập trung, kết hợp biểu tượng chiến binh dũng mãnh và ánh sáng neon green công nghệ cao nhằm thúc đẩy tương tác cộng đồng và định hình vị thế trên thị trường tiền mã hóa.",
    brief: {
      clientIntro: "Viking là dự án Web3 Token thế hệ mới hướng tới cộng đồng phi tập trung (DeFi & Utility token), nổi bật với tinh thần tiên phong chinh phục và gắn kết holder toàn cầu.",
      challenge: "Thị trường tiền mã hóa tràn ngập các dự án thiếu chiều sâu thị giác, hình ảnh rời rạc và kém uy tín. Viking cần một biểu tượng chiến binh vừa mang tính biểu tượng văn hóa vừa toát lên tính công nghệ hiện đại, đồng thời đòi hỏi hệ thống ấn phẩm social media cập nhật liên tục 24/7 theo biến động thị trường.",
      objective: "Xây dựng bộ nhận diện token Viking sắc nét, định hình Key Visual mũ chiến binh neon green nhận diện tức thì; thiết kế thư viện template bài đăng social media (X/Twitter, Telegram) phục vụ các chiến dịch airdrop, cập nhật roadmap, niêm yết sàn (listing) và tương tác cộng đồng."
    },
    concept: {
      bigIdea: "The Crypto Raider — Tinh thần chiến binh viễn chinh trong kỷ nguyên tài chính phi tập trung.",
      approach: "Tạo hình mũ giáp chiến binh Viking bằng những đường vát sắc gọn và góc cạnh tối giản, phát sáng neon xanh lá cây (Toxic Green) trên nền đen bóng đêm công nghệ (Stealth Void). Kết hợp cùng typography cơ bắp, đường nét vi mạch số và biểu đồ tokenomics trực quan.",
      designPrinciples: [
        { title: "Ruthless Precision", desc: "Đường nét dứt khoát, góc cạnh không khoan nhượng phản ánh sự kiên định của cộng đồng holder." },
        { title: "Bullish Neon Signal", desc: "Sắc xanh neon green biểu trưng cho nến xanh tăng trưởng và năng lượng bứt phá của dự án." },
        { title: "Raid-Ready Layouts", desc: "Cấu trúc template xã hội tối ưu hóa thị giác trong 2 giây đầu, tạo hiệu ứng viral mạnh mẽ khi cộng đồng chia sẻ." }
      ]
    },
    designSystem: {
      colors: [
        { name: "Obsidian Void", hex: "#0B0D10", role: "Primary Canvas" },
        { name: "Toxic Bull Green", hex: "#22C55E", role: "Token Glow & Accent" },
        { name: "Cyber Lime", hex: "#84CC16", role: "Secondary Highlight" },
        { name: "Graphite Carbon", hex: "#27272A", role: "Data Grid" }
      ],
      typography: {
        headline: "Orbitron / Space Grotesk — Đanh thép, tương lai và thể hiện sức mạnh Web3",
        body: "Inter Tight — Tối ưu hóa việc hiển thị biểu đồ giá, địa chỉ ví và chỉ số tokenomics"
      }
    },
    deliverables: [
      "Bộ nhận diện thương hiệu Web3 Token (Logo Mascot, Token Icon, Typography & Color Guidelines)",
      "Hệ thống Key Visual Vector Neon phát sáng chất lượng cao phục vụ truyền thông",
      "Bộ ấn phẩm Social Media đa định dạng: Listing sàn, Roadmap, Tokenomics, Milestones, Meme templates",
      "Hệ thống đồ họa kênh truyền thông: Banner Telegram, Header X/Twitter, Discord Assets và DexScreener/CoinMarketCap banner"
    ],
    outcome: {
      summary: "Chiến dịch nhận diện và hệ thống ấn phẩm social media đã giúp Viking xây dựng cộng đồng token trung thành và tạo sức hút bùng nổ khi ra mắt thị trường.",
      metrics: [
        { label: "Lượt hiển thị Social", value: "1.5M+" },
        { label: "Tăng trưởng Holders", value: "+280%" },
        { label: "Tỷ lệ tương tác", value: "5.2x" }
      ],
      detail: "Hệ thống template social media giúp đội ngũ truyền thông của token phản ứng linh hoạt với các biến động thị trường chỉ trong vài phút, giữ vững nhịp đập thảo luận liên tục của cộng đồng."
    },
    coverGradient: "linear-gradient(135deg, #090c0a 0%, #131c15 50%, #22c55e 100%)",
    svgVisual: "viking"
  },
  {
    id: "mindx-school",
    title: "MindX Technology School",
    tagline: "Bộ Nhận diện Thương hiệu, Hệ thống Hình ảnh & Chuỗi Ấn phẩm Truyền thông Giáo dục Công nghệ",
    category: "brand",
    categoryLabel: "Nhận diện & Truyền thông",
    client: "MindX Technology School",
    role: "Senior Brand & Communication Designer",
    duration: "8 tuần",
    services: ["Brand Identity", "Photography & Visuals", "Marketing Collaterals", "Social Media Design"],
    featured: true,
    accentColor: "#E02B20",
    summary: "Tái định vị và chuẩn hóa toàn diện hệ thống nhận diện thương hiệu cho MindX Technology School — hệ sinh thái giáo dục công nghệ và AI hàng đầu tại Việt Nam. Xây dựng ngôn ngữ thị giác hiện đại, bộ xử lý hình ảnh nhiếp ảnh thực tế và hệ thống ấn phẩm truyền thông đa kênh tiếp cận hàng triệu học viên.",
    brief: {
      clientIntro: "MindX Technology School là hệ thống trường học công nghệ và AI tiên phong, đào tạo từ lập trình viên nhí đến kỹ sư phần mềm chuyên nghiệp với mạng lưới hơn 40 cơ sở trên toàn quốc.",
      challenge: "Khi mở rộng quy mô với các chương trình đào tạo chuyên sâu về AI và Robotics, nhận diện cũ cần một bước chuyển mình mạnh mẽ hơn để thể hiện tinh thần công nghệ bứt phá, xóa bỏ cảm giác khô khan của code và truyền cảm hứng sáng tạo công nghệ tới phụ huynh lẫn thế hệ trẻ.",
      objective: "Chuẩn hóa hệ thống nhận diện thương hiệu MindX với tinh thần Tech & AI; xây dựng bộ quy chuẩn hình ảnh nhiếp ảnh học viên năng động, thực tế; phát triển thư viện ấn phẩm truyền thông toàn diện từ online (social, banner, landing page) đến offline (standee, brochure, đồng phục và không gian campus)."
    },
    concept: {
      bigIdea: "Code Your Future — Mở khóa tiềm năng số và kiến tạo tương lai cùng công nghệ AI.",
      approach: "Khai thác sắc đỏ thương hiệu rực cháy kết hợp cùng họa tiết mã nhị phân số (binary code patterns), đường nét typography hiện đại và phong cách nhiếp ảnh cận cảnh giàu cảm xúc, làm nổi bật ánh mắt say mê sáng tạo của thế hệ học viên công nghệ mới.",
      designPrinciples: [
        { title: "Human & Tech Balance", desc: "Hòa quyện giữa yếu tố con người ấm áp (học viên, giảng viên) với sự chính xác, sắc nét của mã nguồn và thuật toán số." },
        { title: "Bold Signature Red", desc: "Sắc đỏ năng lượng đặc trưng của MindX tạo sự thôi thúc, quyết tâm bứt phá và tính nhận diện vượt trội trên mọi điểm chạm." },
        { title: "High-Velocity Modular Grid", desc: "Hệ thống bố cục module linh hoạt giúp các cơ sở trên toàn quốc dễ dàng đồng bộ các ấn phẩm tuyển sinh mà vẫn giữ đúng quy chuẩn thương hiệu." }
      ]
    },
    designSystem: {
      colors: [
        { name: "MindX Primary Red", hex: "#E02B20", role: "Brand Signature" },
        { name: "Tech Charcoal", hex: "#18181B", role: "Primary Canvas" },
        { name: "Binary Slate", hex: "#475569", role: "Sub-data Grid" },
        { name: "Pure Canvas White", hex: "#FFFFFF", role: "Crisp Foreground" }
      ],
      typography: {
        headline: "Plus Jakarta Sans Bold — Hiện đại, thân thiện, tràn đầy tinh thần công nghệ đổi mới",
        body: "Inter Tight — Rõ ràng, tối ưu cho thông tin khóa học, lộ trình học và học phí"
      }
    },
    deliverables: [
      "Bộ quy chuẩn Nhận diện Thương hiệu toàn diện (Brand Guidelines, Color Palette, Typography & Graphic Motifs)",
      "Bộ quy chuẩn nhiếp ảnh thương hiệu (Brand Photography Direction & Image Processing Presets)",
      "Hệ thống ấn phẩm truyền thông tuyển sinh đa kênh (Facebook Ads, Carousel, Key Visual chiến dịch mùa hè/khai giảng)",
      "Bộ ấn phẩm in ấn & trải nghiệm cơ sở: Brochure khóa học, Standee, Balo, Áo đồng phục và Biển bảng campus"
    ],
    outcome: {
      summary: "Hệ thống nhận diện thương hiệu và ấn phẩm truyền thông mới đã tạo nên bước ngoặt lớn trong chiến dịch tuyển sinh toàn quốc năm 2024, củng cố vị thế số 1 của MindX trong đào tạo công nghệ thế hệ mới.",
      metrics: [
        { label: "Lượt tiếp cận tuyển sinh", value: "3.2M+" },
        { label: "Tăng trưởng học viên mới", value: "+165%" },
        { label: "Cơ sở đồng bộ nhận diện", value: "40+ Campus" }
      ],
      detail: "Quy chuẩn thiết kế và hình ảnh mới giúp giảm 45% thời gian thiết kế của phòng Marketing, đồng thời nâng cao độ tin tưởng từ phụ huynh và đối tác công nghệ lớn."
    },
    coverGradient: "linear-gradient(135deg, #1f0808 0%, #8b1515 50%, #e02b20 100%)",
    svgVisual: "mindx"
  },
  {
    id: "frenz",
    title: "Frenz",
    tagline: "Thiết kế Landing Page và Bộ ấn phẩm truyền thông cho AI Frenz Brainband",
    category: "digital",
    categoryLabel: "Landing Page & Truyền thông",
    client: "Frenz",
    role: "Lead UI/UX & Digital Creative",
    duration: "4 tuần",
    services: ["Landing Page", "Ấn phẩm truyền thông", "UI/UX Design", "Social Assets"],
    featured: true,
    accentColor: "#38BDF8",
    summary: "Thiết kế giao diện Landing Page và hệ thống ấn phẩm truyền thông đa kênh cho Frenz Brainband — thiết bị đeo đầu thông minh ứng dụng AI theo dõi sóng não và chăm sóc giấc ngủ hàng đầu thế giới.",
    brief: {
      clientIntro: "Frenz (Earable Neuroscience) là thương hiệu công nghệ đột phá với sản phẩm vòng đeo đầu thông minh tích hợp AI hỗ trợ giấc ngủ và tăng cường tập trung.",
      challenge: "Sản phẩm công nghệ phức tạp cần một ngôn ngữ thị giác hiện đại, dễ hiểu nhưng vẫn thể hiện được tính khoa học, độ tin cậy và sự sang trọng của thiết bị.",
      objective: "Thiết kế giao diện Landing Page tối ưu tỷ lệ chuyển đổi (CRO), trực quan hóa dữ liệu sóng não và chuẩn hóa bộ ấn phẩm truyền thông đa nền tảng số."
    },
    concept: {
      bigIdea: "Futuristic Wellness — Trải nghiệm giấc ngủ và sự tập trung đỉnh cao bằng sức mạnh công nghệ AI.",
      approach: "Phong cách thiết kế vị lai tối giản (Futuristic Minimalism), kết hợp sắc trắng xám công nghệ cao cùng điểm nhấn xanh cyan đặc trưng của logo Frenz, tôn vinh đường cong tinh tế của sản phẩm.",
      designPrinciples: [
        { title: "Tech-Simplicity", desc: "Đơn giản hóa các thông số kỹ thuật phức tạp thành các biểu đồ và visual tương tác trực quan." },
        { title: "Premium Hardware Focus", desc: "Khai thác tối đa hình ảnh render 3D của sản phẩm làm điểm nhấn trung tâm ở mọi điểm chạm." },
        { title: "Conversion Flow", desc: "Hành trình khách hàng được tối ưu hóa mượt mà từ khám phá tính năng đến nút hành động Pre-order." }
      ]
    },
    designSystem: {
      colors: [
        { name: "Frenz Cyan", hex: "#38BDF8", role: "Brand Signature Color" },
        { name: "Deep Tech Navy", hex: "#0F172A", role: "Deep Contrast Background" },
        { name: "Hardware Slate", hex: "#64748B", role: "Secondary Details" },
        { name: "Clean White", hex: "#FFFFFF", role: "Pure Base" }
      ],
      typography: {
        headline: "Space Grotesk & Plus Jakarta Sans — Hiện đại, chuẩn mực công nghệ",
        body: "Plus Jakarta Sans — Thân thiện, tối ưu khả năng đọc trên màn hình số"
      }
    },
    deliverables: [
      "Giao diện Landing Page Responsive (Desktop, Tablet, Mobile) trên Figma",
      "Hệ thống ấn phẩm truyền thông đa kênh: Banner Facebook, Instagram, Google Ads",
      "Bộ Key Visual và tài liệu giới thiệu sản phẩm (Digital Product Brochure)",
      "Standee và ấn phẩm POSM trưng bày tại sự kiện triển lãm công nghệ"
    ],
    outcome: {
      summary: "Giao diện Landing Page và bộ ấn phẩm mới giúp Frenz ghi nhận lượng đặt hàng trước kỷ lục và gia tăng độ nhận diện thương hiệu trên thị trường quốc tế.",
      metrics: [
        { label: "Tăng trưởng Pre-order", value: "+45%" },
        { label: "Thời gian trên trang", value: "3m 48s" },
        { label: "Tỷ lệ chuyển đổi CTA", value: "5.2%" }
      ],
      detail: "Thiết kế nhận được đánh giá cao tại triển lãm công nghệ CES và các trang tin công nghệ hàng đầu, củng cố vị thế tiên phong của Frenz."
    },
    coverGradient: "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #38bdf8 100%)",
    svgVisual: "frenz"
  },
  {
    id: "sweeper",
    title: "Sweeper",
    tagline: "Thiết kế Website UI/UX & Hệ thống Design System trải nghiệm số",
    category: "digital",
    categoryLabel: "Website UI/UX",
    client: "Sweeper",
    role: "Lead UI/UX Designer",
    duration: "6 tuần",
    services: ["Website UI/UX", "UI Design System", "E-commerce Experience", "Interactive Prototype"],
    featured: true,
    accentColor: "#F59E0B",
    summary: "Thiết kế hệ sinh thái website UI/UX thương mại điện tử và dịch vụ chăm sóc giày thể thao cho Sweeper, xây dựng trải nghiệm mua sắm sản phẩm và đặt lịch dịch vụ mượt mà, đậm chất văn hóa sneaker streetwear.",
    brief: {
      clientIntro: "Sweeper là thương hiệu cung cấp dịch vụ vệ sinh, phục hồi giày và phân phối các bộ sản phẩm chăm sóc giày thể thao cao cấp (Crep Protect).",
      challenge: "Trải nghiệm mua hàng trực tuyến trước đây còn đơn điệu, luồng đặt dịch vụ vệ sinh giày phức tạp khiến tỷ lệ rơi rớt đơn hàng cao và chưa tạo được dấu ấn phong cách giới trẻ.",
      objective: "Tái thiết kế toàn diện UI/UX trang web: Trang chủ, danh mục sản phẩm, bộ kit vệ sinh và quy trình booking dịch vụ nhanh gọn trong 3 bước."
    },
    concept: {
      bigIdea: "Keep Kicks Fresh — Trải nghiệm số tràn đầy năng lượng tươi mới dành riêng cho cộng đồng yêu giày sneaker.",
      approach: "Bố cục UI thoáng đãng, hiện đại với hiệu ứng 3D sneaker floating nổi bật. Kết hợp sắc vàng năng động thương hiệu trên nền trắng - xám thanh lịch, nút bấm CTA lớn và luồng thao tác siêu tốc.",
      designPrinciples: [
        { title: "Streetwear Energy", desc: "Đưa tinh thần sneakerhead phóng khoáng và tươi trẻ vào từng khối nội dung và chuyển động giao diện." },
        { title: "Seamless Checkout", desc: "Tối giản quy trình thêm giỏ hàng và đặt dịch vụ vệ sinh giày chỉ với vài cú nhấp chuột." },
        { title: "Design System Scalability", desc: "Hệ thống component tái sử dụng cao trên Figma, sẵn sàng mở rộng cho ứng dụng di động trong tương lai." }
      ]
    },
    designSystem: {
      colors: [
        { name: "Sweeper Yellow", hex: "#F59E0B", role: "Primary Brand Signature" },
        { name: "Carbon Ink", hex: "#111827", role: "Typography & Bold Elements" },
        { name: "Sneaker White", hex: "#F9FAFB", role: "Card & Surface Base" },
        { name: "Cool Slate", hex: "#64748B", role: "Supporting Neutral" }
      ],
      typography: {
        headline: "Plus Jakarta Sans & Space Grotesk — Khỏe khoắn, đậm nét hiện đại",
        body: "Plus Jakarta Sans — Rõ ràng, tối ưu trải nghiệm thương mại điện tử"
      }
    },
    deliverables: [
      "Thiết kế UI/UX toàn diện: Trang chủ, Shop, Dịch vụ, Giỏ hàng, Booking Flow",
      "Bản mẫu tương tác Interactive Prototype trên Figma (Responsive Desktop & Mobile)",
      "UI Kit & Design System với 120+ Components, Variants và Auto-layout",
      "Bộ hướng dẫn quy chuẩn giao diện (UI Guideline Documentation)"
    ],
    outcome: {
      summary: "Website UI/UX mới giúp Sweeper bứt phá doanh số bán lẻ trực tuyến và tối ưu hóa vận hành dịch vụ chăm sóc giày.",
      metrics: [
        { label: "Tăng trưởng doanh thu online", value: "+54%" },
        { label: "Giảm tỷ lệ bỏ giỏ hàng", value: "-35%" },
        { label: "Điểm đánh giá trải nghiệm UI", value: "4.9/5" }
      ],
      detail: "Giao diện mới mang lại trải nghiệm đặt hàng cực kỳ thuận tiện, nâng cao uy tín thương hiệu trong cộng đồng sneakerhead và đối tác."
    },
    coverGradient: "linear-gradient(135deg, #18181b 0%, #27272a 50%, #f59e0b 100%)",
    svgVisual: "sweeper"
  },
  {
    id: "bong-sen",
    title: "Bông Sen Global Admired",
    tagline: "Thiết kế Logo & Hệ thống Nhận diện Thương hiệu Nhà máy Sản xuất Thực phẩm",
    category: "brand",
    categoryLabel: "Logo & Nhận diện thương hiệu",
    client: "Bông Sen Global Admired Food Manufacturing",
    role: "Lead Brand Identity Designer",
    duration: "6 tuần",
    services: ["Thiết kế Logo", "Quy chuẩn nhận diện thương hiệu", "Nhãn mác & Bao bì", "Brand Guidelines"],
    featured: false,
    accentColor: "#15803D",
    summary: "Xây dựng biểu trưng logo và hệ thống nhận diện thương hiệu toàn diện cho Bông Sen Global Admired — nhà máy chế biến và sản xuất thực phẩm xuất khẩu quy mô lớn, kết hợp giữa biểu tượng hoa sen truyền thống và bánh răng công nghiệp hiện đại.",
    brief: {
      clientIntro: "Bông Sen Global Admired là nhà máy sản xuất và chế biến thực phẩm định hướng xuất khẩu, áp dụng quy trình công nghệ cao và tiêu chuẩn vệ sinh an toàn thực phẩm quốc tế.",
      challenge: "Thương hiệu cần một bộ nhận diện vừa toát lên tính hiện đại, quy chuẩn nhà máy công nghiệp quốc tế, vừa lưu giữ được vẻ đẹp bản sắc văn hóa Việt Nam nhằm tạo ấn tượng mạnh mẽ với các đối tác thương mại toàn cầu.",
      objective: "Sáng tạo logo biểu trưng kết hợp tinh tế giữa búp sen và bánh răng chuyển động; chuẩn hóa hệ thống ấn phẩm nhận diện từ biển hiệu nhà máy, đồng phục kỹ sư đến tem nhãn bao bì thực phẩm xuất khẩu."
    },
    concept: {
      bigIdea: "Tinh hoa Sen Việt vươn tầm thế giới — Sự giao thoa giữa nguồn nông sản sạch và năng lực công nghiệp chế biến hiện đại.",
      approach: "Biểu tượng hoa sen 8 cánh tỏa rạng hòa quyện cùng bánh răng cơ khí công nghiệp và giọt nước tinh túy, sử dụng sắc xanh lục bảo tượng trưng cho thiên nhiên, độ tươi ngon và sự phát triển bền vững.",
      designPrinciples: [
        { title: "Industrial Harmony", desc: "Đường nét cân đối, chuẩn xác theo tỷ lệ hình học tạo cảm giác vững chãi và quy mô công nghiệp." },
        { title: "National Essence", desc: "Hình tượng hoa sen cách điệu gợi nhắc nguồn gốc nông sản Việt Nam thuần khiết và thanh cao." },
        { title: "Export Scalability", desc: "Dễ dàng in ấn dập nổi, khắc laser trên máy móc, bao bì carton và các phương tiện vận tải lớn." }
      ]
    },
    designSystem: {
      colors: [
        { name: "Lotus Emerald Green", hex: "#15803D", role: "Primary Brand Signature" },
        { name: "Deep Factory Green", hex: "#14532D", role: "Industrial Contrast" },
        { name: "Purity White", hex: "#FFFFFF", role: "Clean Packaging Base" },
        { name: "Slate Silver", hex: "#64748B", role: "Technical Specification" }
      ],
      typography: {
        headline: "Montserrat & Be Vietnam Pro — Cứng cáp, hiện đại, chuẩn hóa quốc tế",
        body: "Plus Jakarta Sans — Rõ ràng, tối ưu cho thông tin dinh dưỡng và thành phần"
      }
    },
    deliverables: [
      "Hệ thống biểu trưng Logo chính thức, Logo âm bản và biến thể màu đơn sắc",
      "Bộ Brand Guidelines 50 trang hướng dẫn quy chuẩn ứng dụng nhận diện",
      "Thiết kế biển hiệu nhà xưởng, hệ thống bảng chỉ dẫn nội bộ & đồng phục kỹ sư",
      "Quy chuẩn bao bì thùng carton xuất khẩu và tem nhãn chứng nhận chất lượng"
    ],
    outcome: {
      summary: "Bộ nhận diện mới giúp Bông Sen khẳng định vị thế nhà sản xuất thực phẩm uy tín, tạo dấu ấn mạnh mẽ tại các hội chợ triển lãm nông sản quốc tế.",
      metrics: [
        { label: "Ký kết hợp đồng xuất khẩu", value: "+45%" },
        { label: "Mức độ hài lòng đối tác", value: "98%" },
        { label: "Nhận diện đồng bộ nhà xưởng", value: "100%" }
      ],
      detail: "Thiết kế nhận được phản hồi tích cực từ các đối tác thu mua quốc tế tại châu Âu và châu Á về mức độ chỉn chu và tính chuyên nghiệp."
    },
    coverGradient: "linear-gradient(135deg, #052e16 0%, #14532d 50%, #15803d 100%)",
    svgVisual: "bong-sen"
  },
  {
    id: "9bana",
    title: "9bana",
    tagline: "Thiết kế Landing Page & Bộ Ấn phẩm Truyền thông Thực phẩm Dinh dưỡng",
    category: "digital",
    categoryLabel: "Landing Page & Ấn phẩm truyền thông",
    client: "9bana Nutrition Foods",
    role: "Lead UI/UX & Visual Communication Designer",
    duration: "5 tuần",
    services: ["Thiết kế Landing Page", "Bộ ấn phẩm Social Media", "Banner E-commerce", "Visual Communication"],
    featured: false,
    accentColor: "#0284C7",
    summary: "Thiết kế giao diện Landing Page bán hàng tối ưu chuyển đổi và chuỗi ấn phẩm truyền thông đa kênh cho 9bana — thương hiệu thực phẩm dinh dưỡng chuyên về tinh bột kháng, bột chuối tiêu xanh và ngũ cốc nguyên chất tốt cho hệ vi sinh đường ruột.",
    brief: {
      clientIntro: "9bana là thương hiệu tiên phong phát triển các sản phẩm dinh dưỡng tự nhiên từ chuối tiêu xanh và ngũ cốc giàu tinh bột kháng giúp phục hồi hệ tiêu hóa và tăng cường sức khỏe cả gia đình.",
      challenge: "Khái niệm 'tinh bột kháng' (resistant starch) còn khá mới mẻ với số đông người tiêu dùng. Cần truyền tải các kiến thức khoa học sức khỏe phức tạp thành thông điệp trực quan, dễ hiểu và thúc đẩy hành động mua hàng.",
      objective: "Xây dựng Landing Page giới thiệu sản phẩm với luồng trải nghiệm khách hàng tối ưu CRO; thiết kế hệ thống banner, khung sản phẩm Shopee/Lazada và visual chạy chiến dịch khuyến mãi Flash Sale đồng bộ."
    },
    concept: {
      bigIdea: "Sống Khỏe Tự Nhiên Từ Ruột Khỏe — Nguồn năng lượng lành sạch nuôi dưỡng hệ vi sinh đường ruột.",
      approach: "Ngôn ngữ thị giác tươi sáng, sử dụng tone xanh lam đại dương kết hợp xanh lá mạ của chuối non thiên nhiên. Bố cục trực quan với các hình ảnh mockup sản phẩm thực tế, infographic minh họa đường ruột và các chứng chỉ an toàn thực phẩm.",
      designPrinciples: [
        { title: "Scientific Clarity", desc: "Trực quan hóa cơ chế hoạt động của tinh bột kháng bằng infographic sinh động, dễ tiếp thu." },
        { title: "High Conversion Flow", desc: "Tập trung vào các nút CTA săn deal, đếm ngược giờ vàng và quà tặng để tối ưu hóa quyết định mua sắm." },
        { title: "Omnichannel Consistency", desc: "Đồng bộ nhận diện từ Landing Page web đến gian hàng Shopee, TikTok Shop và ấn phẩm mạng xã hội." }
      ]
    },
    designSystem: {
      colors: [
        { name: "9bana Ocean Blue", hex: "#0284C7", role: "Primary Vitality Color" },
        { name: "Green Banana Leaf", hex: "#16A34A", role: "Natural Nutrition Accent" },
        { name: "Fresh White", hex: "#FFFFFF", role: "Clean Medical Canvas" },
        { name: "Energy Amber", hex: "#F59E0B", role: "Deal & Promotion Callout" }
      ],
      typography: {
        headline: "Plus Jakarta Sans — Tươi tắn, hiện đại và chuẩn mực thị giác số",
        body: "Inter — Tối ưu tuyệt đối cho việc đọc công dụng, thành phần dinh dưỡng trên mobile"
      }
    },
    deliverables: [
      "Thiết kế UI/UX Landing Page Responsive (Desktop, Tablet, Mobile) trên Figma",
      "Hệ thống Key Visual chiến dịch 'Đếm ngược giờ vàng — Săn deal siêu đỉnh'",
      "Bộ banner quảng cáo Facebook Ads, Google Display Network và TikTok Shop",
      "Bộ template frame sản phẩm cho sàn thương mại điện tử Shopee & Lazada"
    ],
    outcome: {
      summary: "Landing Page và chiến dịch truyền thông giúp 9bana bùng nổ doanh số bán hàng trực tuyến và định vị rõ nét dòng sản phẩm tinh bột kháng trên thị trường.",
      metrics: [
        { label: "Tăng trưởng đơn hàng online", value: "+180%" },
        { label: "Tỷ lệ chuyển đổi Landing Page", value: "4.8%" },
        { label: "Lượt tiếp cận chiến dịch", value: "1.2M+" }
      ],
      detail: "Lượng khách hàng đặt combo sản phẩm bột chuối tiêu xanh và tinh bột kháng tăng vọt trong 3 ngày diễn ra chiến dịch Flash Sale."
    },
    coverGradient: "linear-gradient(135deg, #0369a1 0%, #0284c7 50%, #16a34a 100%)",
    svgVisual: "9bana"
  },
  {
    id: "tayo-tea",
    title: "Tayo tea",
    tagline: "Bộ Nhận diện Thương hiệu & Thiết kế Bao bì Trà Cao cấp",
    category: "packaging",
    categoryLabel: "Nhận diện thương hiệu & Bao bì",
    client: "Tayo Tea Co.",
    role: "Brand Identity & Packaging Designer",
    duration: "5 tuần",
    services: ["Bộ nhận diện thương hiệu", "Thiết kế bao bì túi trà", "Dập nổi & Gia công in ấn", "Brand Guidelines"],
    featured: false,
    accentColor: "#C29B38",
    summary: "Thiết kế bộ nhận diện thương hiệu và bao bì túi trà thủ công cao cấp cho Tayo tea. Khai thác vẻ đẹp mộc mạc của chất liệu giấy mỹ thuật tự nhiên kết hợp kỹ thuật dập nổi khuôn tròn tối giản, mang lại trải nghiệm thưởng trà thanh tao và đậm đà phong vị văn hóa trà đạo.",
    brief: {
      clientIntro: "Tayo tea là thương hiệu trà thủ công thượng hạng, tuyển chọn những búp trà cổ thụ thuần khiết từ các vùng núi cao, hướng tới những người yêu thích nghệ thuật trà đạo và lối sống an yên.",
      challenge: "Thị trường trà quà tặng cao cấp đòi hỏi sự khác biệt sâu sắc: không sa đà vào các chi tiết trang trí rườm rà mà phải toát lên được chiều sâu văn hóa, sự tinh khiết và trải nghiệm xúc giác cao cấp khi cầm nắm sản phẩm trên tay.",
      objective: "Sáng tạo logo biểu trưng Tayo tea tối giản với cấu trúc hình tròn thiền định (Enso/Tea seal); thiết kế quy chuẩn bao bì túi trà giấy kraft/mỹ thuật dập nổi blind emboss và hệ thống nhận diện thương hiệu toàn diện."
    },
    concept: {
      bigIdea: "Chạm Vào Tĩnh Lặng — Thưởng trọn vị trà nguyên bản trong sự tĩnh tại của tâm hồn.",
      approach: "Triết lý thiết kế tối giản tôn vinh chất liệu tự nhiên. Sử dụng biểu tượng con dấu tròn dập nổi chìm trên nền giấy sần xúc giác, kết hợp tông màu trắng tinh khiết, vàng hổ phách của nước trà và nâu mộc mạc của lá trà khô.",
      designPrinciples: [
        { title: "Tactile Minimalism", desc: "Tận dụng kỹ thuật dập nổi không mực (Blind Embossing) trên giấy mỹ thuật để tạo cảm giác sang trọng từ xúc giác." },
        { title: "Zen Harmony", desc: "Bố cục cân bằng tĩnh tại, lược bỏ mọi chi tiết thừa để hướng sự tập trung vào hương vị tinh túy của búp trà." },
        { title: "Sustainable Craft", desc: "Lựa chọn chất liệu giấy thân thiện môi trường, tái hiện trọn vẹn tinh thần tôn trọng thiên nhiên của trà đạo." }
      ]
    },
    designSystem: {
      colors: [
        { name: "Amber Tea Gold", hex: "#C29B38", role: "Tea Brew Essence" },
        { name: "Raw Paper White", hex: "#F8F6F0", role: "Tactile Paper Pouch" },
        { name: "Tea Leaf Charcoal", hex: "#292524", role: "Refined Typography" },
        { name: "Warm Ochre", hex: "#9A7B38", role: "Seal Accent" }
      ],
      typography: {
        headline: "Cormorant Garamond & Cinzel — Cổ điển, thanh lịch và đậm chất thi ca",
        body: "Plus Jakarta Sans — Tối giản, rõ ràng cho hướng dẫn pha trà và nguồn gốc xuất xứ"
      }
    },
    deliverables: [
      "Bộ biểu trưng Logo dấu ấn tròn Tayo tea (Primary Logo, Sub-marks, Stamp Seal)",
      "Hệ thống quy chuẩn bao bì: Túi zip trà giấy mỹ thuật, nhãn dán thủ công, hộp quà cao cấp",
      "File khuôn kỹ thuật dập nổi đa tầng (Blind Emboss Dielines & Tooling Files)",
      "Bộ ấn phẩm nhận diện thương hiệu: Danh thiếp, thẻ câu chuyện trà (Story Card), túi quà tặng"
    ],
    outcome: {
      summary: "Bộ nhận diện và bao bì Tayo tea nhận được sự tán thưởng nhiệt liệt từ giới sành trà và giúp thương hiệu hiện diện tại các phòng trà, resort cao cấp.",
      metrics: [
        { label: "Đơn hàng quà tặng cao cấp", value: "+120%" },
        { label: "Tỷ lệ khách hàng mua lại", value: "85%" },
        { label: "Đánh giá thiết kế bao bì", value: "5.0/5" }
      ],
      detail: "Bao bì dập nổi trên chất liệu giấy thủ công tạo hiệu ứng lan tỏa tự nhiên trên mạng xã hội khi khách hàng thưởng trà chia sẻ trải nghiệm unboxing."
    },
    coverGradient: "linear-gradient(135deg, #1c1917 0%, #44403c 50%, #c29b38 100%)",
    svgVisual: "tayo-tea"
  }
];

// Profile & Designer Information (Updated to match CV 100%)
const DESIGNER_PROFILE = {
  name: "Đinh Dũng",
  fullName: "Đinh Tiến Dũng",
  title: "Thiết kế đồ họa",
  tagline: "Thiết kế đồ họa, hình ảnh 3D, nhiếp ảnh và tư duy sáng tạo tại Thành phố Hà Nội.",
  location: "Thành phố Hà Nội, Việt Nam",
  email: "dinhtiendung0987@gmail.com",
  behance: "https://behance.net/dungdinh",
  status: "Sẵn sàng nhận dự án mới",
  bio: "Mình là Đinh Dũng. Hiện tại, mình đang làm thiết kế đồ họa tại Thành phố Hà Nội. Mục đích của mình khi tạo ra những danh sách này là để cung cấp cho bạn cái nhìn trực quan hơn về mình. Mình có khả năng thiết kế đồ họa, hình ảnh 3D, nhiếp ảnh và tư duy sáng tạo, có khả năng làm việc độc lập, làm việc nhóm và chịu được áp lực công việc. Hy vọng bạn sẽ có trải nghiệm tốt và thích những sản phẩm này của mình. Cảm ơn bạn rất nhiều và hy vọng sớm nhận được phản hồi từ bạn!",
  bioParagraphs: [
    "Mình là Đinh Dũng.",
    "Hiện tại, mình đang làm thiết kế đồ họa tại Thành phố Hà Nội.",
    "Mục đích của mình khi tạo ra những danh sách này là để cung cấp cho bạn cái nhìn trực quan hơn về mình.",
    "Mình có khả năng thiết kế đồ họa, hình ảnh 3D, nhiếp ảnh và tư duy sáng tạo, có khả năng làm việc độc lập, làm việc nhóm và chịu được áp lực công việc.",
    "Hy vọng bạn sẽ có trải nghiệm tốt và thích những sản phẩm này của mình.",
    "Cảm ơn bạn rất nhiều và hy vọng sớm nhận được phản hồi từ bạn!"
  ],
  socials: {
    behance: "https://behance.net/dungdinh",
    email: "mailto:dinhtiendung0987@gmail.com"
  },
  stats: [
    { value: "09+", label: "Dự án chọn lọc" },
    { value: "06+", label: "Năm kinh nghiệm thực chiến" },
    { value: "05", label: "Tổ chức & Công ty từng gắn bó" },
    { value: "100%", label: "Tập trung & Tận tâm" }
  ],
  experience: [
    {
      period: "2018 - 2019",
      company: "Kienviet AFA",
      role: "Thiết kế nội thất, kiến trúc."
    },
    {
      period: "2019 - 2021",
      company: "NEA MODELS",
      role: "Thiết kế 3d mô hình kiến trúc, sa bàn."
    },
    {
      period: "2021 - 2022",
      company: "MP Group",
      role: "Thiết kế các ấn phẩm truyền thông sự kiện."
    },
    {
      period: "2022 - HIỆN TẠI",
      company: "MindX Technology School",
      role: "Thiết kế các ấn phẩm truyền thông, quảng cáo và nhận diện thương hiệu."
    },
    {
      period: "2023 - HIỆN TẠI",
      company: "VOLCANOLABS",
      role: "Thiết kế làm việc từ xa. Thiết kế nhận diện thương hiệu."
    }
  ],
  education: [
    {
      period: "2018 - 2022",
      institution: "Đại học Kiến trúc",
      major: "Kiến trúc"
    },
    {
      period: "2019 - 2021",
      institution: "Arena Multimedia",
      major: "Thiết kế đồ họa"
    }
  ],
  languages: [
    { name: "Tiếng Việt", level: "Tự nhiên" },
    { name: "Tiếng Anh", level: "Cơ bản" }
  ],
  designSkills: [
    { code: "Ai", name: "Adobe Illustrator", level: "100%", progress: 100 },
    { code: "Ps", name: "Adobe Photoshop", level: "100%", progress: 100 },
    { code: "Pr", name: "Adobe Premiere Pro", level: "90%", progress: 90 },
    { code: "Figma", name: "Figma", level: "90%", progress: 90 },
    { code: "Ae", name: "After Effects", level: "85%", progress: 85 },
    { code: "Blender", name: "Blender", level: "85%", progress: 85 }
  ],
  softSkills: [
    "Khả năng làm việc nhóm",
    "Làm việc độc lập",
    "Chủ động trong công việc",
    "Có kỹ năng chụp ảnh"
  ]
};
