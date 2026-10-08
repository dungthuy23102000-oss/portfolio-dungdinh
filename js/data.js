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
    showcaseImage: "assets/the-ton-journal-showcase.jpg",
    aspectRatio: "1920 / 6120",
    showcaseBg: "#ffffff",
    showcaseMarquees: [
      {
        id: "marquee-about-ton",
        top: "0%",
        height: "1.552288%",
        text: "ABOUT TON",
        icon: "assets/ton-diamond-v2.png",
        speed: "25s"
      },
      {
        id: "marquee-brand-identity",
        top: "14.215686%",
        height: "1.552288%",
        text: "BRAND IDENTITY",
        icon: "assets/ton-diamond-v2.png",
        speed: "28s"
      },
      {
        id: "marquee-social-post",
        top: "52.826797%",
        height: "1.552288%",
        text: "SOCIAL POST",
        icon: "assets/ton-diamond-v2.png",
        speed: "25s"
      }
    ],
    summary: "Xây dựng hệ thống nhận diện thương hiệu số và định hướng visual toàn diện cho The Ton Journal — nền tảng truyền thông chuyên sâu cung cấp tin tức, phân tích và câu chuyện thị trường trong hệ sinh thái TON Ecosystem. Dự án tích hợp trọn vẹn từ Thetonjournal.ai Brand Presentation: Key Visual kim cương pha lê 3D phát sáng, bảng màu chuẩn mực (Deep Navy, Royal Blue, Electric Sky, Vibrant Cyan, Crystal Ice), định chuẩn typography hiện đại cùng thư viện template Social Post đa định dạng.",
    brief: {
      clientIntro: "The TON Journal is a media platform dedicated to covering and curating information across the TON Ecosystem, providing the community with timely, accessible, and valuable insights into its ongoing development. Our content focuses on key areas such as TON Blockchain, the Telegram ecosystem, DeFi, GameFi, Mini Apps, emerging projects, incentive programs, market updates, and the latest trends shaping the TON ecosystem. Beyond reporting news, The TON Journal aims to become an information hub for the TON community — a place where users can stay informed about important developments, discover promising projects, and gain a deeper understanding of the growth and evolution of the TON Ecosystem.",
      challenge: "Lĩnh vực Web3 và hệ sinh thái TON có tốc độ dòng chảy tin tức liên tục và cực nhanh; các ấn phẩm thường bị khô khan hoặc lặp lại khuôn mẫu tech chung chung. Thách thức là xây dựng bản sắc thị giác độc bản, cao cấp, vừa phản ánh đúng tinh thần minh bạch, công nghệ cao của The Open Network, vừa tạo hiệu ứng thị giác dừng mắt (feed-stopping) mạnh mẽ trên Telegram và X/Twitter.",
      objective: "Định hình visual identity nhất quán theo tuyên ngôn 'News, Insights & Stories from the TON Ecosystem'; phát triển hệ thống Key Visual 3D pha lê kim cương đại diện cho tính minh bạch và công nghệ phi tập trung; chuẩn hóa Color Palette 5 cấp độ và hệ thống typography; thiết kế template Social Post đa nền tảng tối ưu tốc độ sản xuất nội dung hàng ngày."
    },
    concept: {
      bigIdea: "Crystalline Clarity — Sự tinh khiết, minh bạch và chiều sâu của tri thức công nghệ Web3.",
      approach: "Sử dụng khối pha lê kim cương xanh 3D phát sáng lơ lửng trên mặt sóng biển làm Key Visual cốt lõi, kết hợp hệ thống dải màu chuyển tiếp (linear gradient #073CA5 đến #01ECF6), typography Space Grotesk chuẩn mực và bảng màu cyan điện tử tạo cảm giác tương lai, uy tín và chuyên nghiệp.",
      designPrinciples: [
        { title: "Crystalline Precision", desc: "Đường nét chuẩn xác, cấu trúc đa diện biểu trưng cho góc nhìn sâu sắc và đa chiều của báo chí công nghệ." },
        { title: "Feed-Stopping Contrast", desc: "Độ tương phản cao giữa sắc xanh đại dương thẳm sâu (#00103C) và ánh sáng cyan (#00FFFF) rực rỡ nổi bật ngay trong 2 giây đầu lướt feed." },
        { title: "Modular Scalability", desc: "Hệ thống khung layout linh hoạt cho phép đội ngũ biên tập tạo ấn phẩm nhanh chóng mà vẫn giữ trọn vẹn bản sắc thương hiệu." }
      ]
    },
    designSystem: {
      colors: [
        { name: "Deep Ton Navy", hex: "#00103C", role: "Primary Background (RGB: 0, 16, 60)" },
        { name: "TON Royal Blue", hex: "#0071EC", role: "Brand Signature (RGB: 0, 113, 230)" },
        { name: "Electric Sky Blue", hex: "#0191EE", role: "Gradient Midtone (RGB: 1, 145, 238)" },
        { name: "Vibrant Cyan", hex: "#00FFFF", role: "Accent Highlight (RGB: 0, 255, 255)" },
        { name: "Crystal Ice", hex: "#C8E1FF", role: "Light Card Tint (RGB: 200, 225, 255)" }
      ],
      typography: {
        headline: "Space Grotesk / Plus Jakarta Sans — Hiện đại, sắc nét và mang hơi thở công nghệ",
        body: "Inter Tight — Rõ ràng, tối ưu cho các bảng tin tức và bài phân tích social"
      }
    },
    deliverables: [
      "Bộ nhận diện thương hiệu số hoàn chỉnh (Logo, Typography, 5-Tone Color Palette, Brand Rules)",
      "Hệ thống 3D Crystal Diamond Key Visual & Render assets độc quyền chất lượng cao",
      "Thư viện Template Social Post đa nền tảng (X/Twitter, Telegram, News Cards)",
      "Thetonjournal.ai Brand Presentation toàn diện với các dải phân cách tiêu đề động lặp vô tận"
    ],
    outcome: {
      summary: "Bộ nhận diện và chuỗi ấn phẩm social media đã giúp The Ton Journal định vị vững chắc vai trò cổng thông tin hàng đầu của cộng đồng TON toàn cầu.",
      metrics: [
        { label: "Lượt tiếp cận Social", value: "650K+" },
        { label: "Tăng trưởng Followers", value: "+210%" },
        { label: "Tỷ lệ tương tác", value: "4.8x" }
      ],
      detail: "Hệ thống template mạng xã hội đồng bộ giúp rút ngắn 60% thời gian thiết kế mỗi ngày, nâng cao độ tin cậy và thẩm mỹ trong mắt các đối tác quỹ đầu tư và dự án Web3 lớn."
    },
    coverGradient: "linear-gradient(135deg, #00103c 0%, #0071ec 50%, #00ffff 100%)",
    svgVisual: "the-ton-journal"
  },
  {
    id: "viking",
    title: "Viking",
    tagline: "AI System for Degens & Prediction Markets — Hệ thống Nhận diện Thương hiệu, UI/UX & Social Visual Ecosystem",
    category: "digital",
    categoryLabel: "Social & Nhận diện thương hiệu",
    client: "Viking — AI System for Degens & Prediction Markets",
    role: "Lead Brand & Social Media Designer",
    duration: "5 tuần",
    services: ["Brand Identity", "Web3 UI/UX Design", "Trading Bot & Mobile UI", "Social Post & PnL Meme Ecosystem", "Tokenomics & Campaign"],
    featured: true,
    accentColor: "#22C55E",
    showcaseImage: "assets/Slide 9@4x.jpg",
    aspectRatio: "5303 / 32768",
    showcaseBg: "#000000",
    summary: "Hệ sinh thái thiết kế toàn diện cho VIKING — Hệ thống AI thông minh tối ưu hóa giao dịch dành cho giới đầu tư Web3 và thị trường dự đoán (Prediction Markets). Dự án chuẩn hóa và tích hợp trọn vẹn từ Slide 9 Presentation: Nhận diện thương hiệu công nghệ & Mascot chiến binh neon; Giao diện Web App & Mobile App với tính năng giao dịch 1 chạm (ONE click), tối ưu hóa lệnh bằng AI và dữ liệu chuyên sâu; Cấu trúc $VIKING Tokenomics tổng cung 1 tỷ token (60% IPO Presale, 20% Liquidity, 20% Team Reserve); Hệ thống tính năng thưởng Viking Spin to Earn (lên tới 40 SOL mỗi ngày), chương trình Referral Rewards đa cấp (hoa hồng trực tiếp 25% trọn đời, tổng 36% qua 5 tầng với điểm Viking Point); Thông báo ra mắt Viking Trading Bot & Viking Tribe Bot trên Telegram/Web; Chuỗi ấn phẩm truyền thông Viking Beacon ('Trade smarter - Copy faster - Win harder') và ma trận thẻ chia sẻ PnL meme cộng đồng (+2,887.72% / -2,387.72% cùng ưu đãi giảm 10% phí giao dịch).",
    brief: {
      clientIntro: "VIKING là hệ thống AI chuyên sâu được xây dựng cho các nhà giao dịch crypto, Web3 và thị trường dự đoán (Prediction Markets) với thông điệp: 'An AI system built for those who want to stay ahead of the market. VIKING helps users track signals, analyze market sentiment, assess probabilities, and uncover potential opportunities across crypto, Web3, and prediction markets — faster, more systematically, and with less reliance on emotion.' Cam kết cộng đồng: 'Active, loyal, and supportive members will always be appreciated - at any cost.'",
      challenge: "Thị trường bot giao dịch và tiền mã hóa đòi hỏi tốc độ thực thi tức thì (Near-Instant Execution) và khả năng xử lý mở rộng quy mô. Thách thức lớn là phải số hóa lượng dữ liệu phức tạp (tín hiệu AI, tối ưu hóa lệnh, phân bổ 1 tỷ tokenomics, cơ chế referral 5 cấp và văn hóa meme PnL) thành một ngôn ngữ thị giác sắc bén, cuốn hút, đậm chất cyberpunk và kích thích lan truyền cộng đồng tự nhiên.",
      objective: "Thiết kế trọn vẹn toàn bộ hệ thống thị giác từ Slide 9: Định hình Key Visual chiến binh neon phát sáng trên nền đen công nghệ; hoàn thiện giao diện người dùng cho Web App và ứng dụng di động; trực quan hóa biểu đồ $VIKING Tokenomics 1 tỷ token; xây dựng chuỗi ấn phẩm quảng bá tính năng Spin to Earn (40 SOL/ngày), Referral Rewards 25%-36%, Viking Trading Bot; thiết kế banner Viking Beacon ('Trade smarter - Copy faster - Win harder') và thư viện thẻ flex PnL meme cộng đồng (TRENCHER/SOL, -2,387.72% / +2,887.72%)."
    },
    concept: {
      bigIdea: "The AI Raider — Tinh thần chiến binh viễn chinh trong kỷ nguyên giao dịch thuật toán AI và thị trường dự đoán phi tập trung.",
      approach: "Sử dụng phông nền đen tuyệt đối (Stealth Void Black #000000) làm nền tảng, bừng sáng bởi sắc xanh Toxic Neon (#22C55E / #39FF14) đại diện cho tín hiệu nến xanh tăng trưởng và xung lực trí tuệ nhân tạo. Kết hợp typography góc cạnh tương lai, phong cách pixel art retro ở Viking Beacon, bánh xe số 3D Spin to Earn và linh vật chiến binh Viking giàu cảm xúc trong các thẻ PnL meme cộng đồng.",
      designPrinciples: [
        { title: "AI-Powered Speed & Precision", desc: "Tối ưu hóa thị giác 1 chạm (ONE click), khớp lệnh gần như tức thì (Near-Instant Execution) và phân tích tín hiệu token chuyên sâu." },
        { title: "Bullish Neon Signal", desc: "Sắc xanh Toxic Bull Neon phát sáng nổi bật trên nền đen sâu thẳm, kích thích tinh thần chinh phục và thị giác người dùng." },
        { title: "Degen Culture & Viral Social Mechanics", desc: "Ma trận thẻ PnL meme (+2,887.72% / -2,387.72%) và banner Viking Beacon được thiết kế kích hoạt chia sẻ tự nhiên trên Telegram và X/Twitter." },
        { title: "Transparent Gamified Economy", desc: "Minh bạch hóa biểu đồ $VIKING Tokenomics (60/20/20) và cấu trúc hoa hồng 5 cấp độ trực quan với hệ thống điểm thưởng Viking Point." }
      ]
    },
    designSystem: {
      colors: [
        { name: "Stealth Void Black", hex: "#000000", role: "Primary Canvas & Deep Background" },
        { name: "Toxic Bull Neon", hex: "#22C55E", role: "AI Core, Bullish Glow & Signals" },
        { name: "Cyber Lime", hex: "#84CC16", role: "Button Accent & Highlight" },
        { name: "Viking Gold", hex: "#EAB308", role: "Token Coins & Reward Accents" },
        { name: "Bearish Alert Red", hex: "#EF4444", role: "PnL Loss Meme & Stat Badges" },
        { name: "Carbon Slate", hex: "#18181B", role: "Cards & Data Containers" }
      ],
      typography: {
        headline: "Orbitron / Space Grotesk / Bitmap Pixel (Viking Beacon) — Tương lai, đanh thép và đậm chất văn hóa Web3",
        body: "Inter Tight / Roboto Mono — Tối ưu hóa việc hiển thị dữ liệu giao dịch, tỷ lệ phần trăm hoa hồng và biểu đồ Tokenomics"
      }
    },
    deliverables: [
      "Bản thiết kế đại cảnh Artboard Slide 9 siêu phân giải (5303 × 32768 px) với tỷ lệ hiển thị tràn viền Edge-to-Edge chuẩn xác",
      "Hệ thống giao diện Web App & Mobile App: Dashboard giao dịch 1 chạm, AI-Powered Order Optimization, Token Insights và Tribe Bot",
      "Thiết kế cấu trúc biểu đồ $VIKING Tokenomics tổng cung 1 tỷ token (60% IPO Presale, 20% Liquidity, 20% Team Reserve)",
      "Bộ ấn phẩm tính năng hệ sinh thái: Viking Spin to Earn (lên tới 40 SOL/ngày), Referral Rewards Program (25% Direct, 36% qua 5 tầng)",
      "Hệ thống banner truyền thông: Viking Beacon ('Trade smarter - Copy faster - Win harder') và Viking Trading Bot Launching Soon",
      "Ma trận thẻ PnL meme cộng đồng (TRENCHER/SOL, +2,887.72% / -2,387.72%, ưu đãi giảm 10% phí) với linh vật Viking biến hóa đa dạng"
    ],
    outcome: {
      summary: "Hệ thống nhận diện thương hiệu, giao diện số và chuỗi ấn phẩm social media toàn diện đã giúp VIKING xây dựng vị thế tiên phong trong cộng đồng degen Web3 và các thị trường dự đoán.",
      metrics: [
        { label: "Lợi nhuận PnL đỉnh cao", value: "+2,887%" },
        { label: "Hoa hồng Giới thiệu", value: "25% - 36%" },
        { label: "Tổng cung Tokenomics", value: "1B $VIKING" }
      ],
      detail: "Hệ thống template mạng xã hội đồng bộ và thẻ PnL meme giúp dự án lan tỏa tự nhiên trên các hội nhóm Telegram và X/Twitter, kết hợp tốc độ giao dịch tức thì tạo nên sự bùng nổ tương tác của cộng đồng."
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
    tagline: "Bộ Cẩm nang Quy chuẩn Thương hiệu & Hệ thống Thiết kế Giao diện UI/UX Toàn diện",
    category: "digital",
    categoryLabel: "Website UI/UX & Brand Identity",
    client: "Sweeper",
    role: "Lead UI/UX & Brand Designer",
    duration: "6 tuần",
    services: ["Website UI/UX", "Brand Guidelines", "UI Design System", "Responsive Web & Mobile App"],
    featured: true,
    accentColor: "#E9C31E",
    showcaseImage: "assets/sweeper-showcase.jpg",
    showcaseImages: Array.from({ length: 27 }, (_, i) => "assets/sweeper/page-" + String(i + 1).padStart(2, "0") + ".jpg"),
    pdfGuideline: "assets/Sweeper.pdf",
    aspectRatio: "1600 / 25704",
    showcaseBg: "#ffffff",
    summary: "Bộ cẩm nang nhận diện thương hiệu & Thiết kế giao diện số toàn diện 27 trang cho Sweeper (Sweeper Intro Book) — thương hiệu dịch vụ chăm sóc, vệ sinh và phục hồi giày thể thao thủ công chuyên nghiệp, kết hợp phân phối sản phẩm Crep Protect cao cấp. Dự án chuẩn hóa trọn vẹn 4 phần: 01. Giới thiệu thương hiệu & Triết lý vệ sinh giày thủ công 100% trong phòng chuyên biệt; 02. Logo & Quy chuẩn tỷ lệ lưới 14x × 2x, khoảng cách an toàn safezone 2x, màu sắc (#E9C31E, #9A712A) và Typography Never Better; 03. Hướng dẫn UI Guide với hệ màu Web, icon & button, phân cấp Typography Poppins (18px - 56px); 04. Bố cục Layout, Wireframe sitemap, hệ thống lưới chuẩn (Web 1920px 12 cột & Mobile App 414px) và thiết kế giao diện đa thiết bị Desktop, Tablet, Mobile.",
    brief: {
      clientIntro: "Sweeper là thương hiệu dịch vụ vệ sinh và phục hồi giày thể thao uy tín với 100% thao tác thủ công, sử dụng công nghệ hút ẩm và hong khô phòng chuyên biệt, đồng thời phân phối các dòng sản phẩm làm sạch giày cao cấp Crep Protect.",
      challenge: "Cần xây dựng bộ cẩm nang nhận diện thương hiệu kết hợp chuẩn hóa toàn diện thiết kế trải nghiệm số (UI/UX) cho cả website thương mại điện tử và ứng dụng di động, giải quyết bài toán đặt lịch dịch vụ và mua sắm sản phẩm mượt mà, đồng bộ nhận diện đa nền tảng.",
      objective: "Thiết kế hoàn thiện bộ tài liệu Sweeper Intro Book 27 trang: Quy chuẩn logo & font chữ; Hệ thống UI Guide (Web Color, Icons, Buttons, Typography Poppins); Sơ đồ cấu trúc Sitemap; Wireframe lưới chuẩn và hệ thống màn hình hoàn chỉnh cho Web (Home, Services, Services Details, Products, Shop, Contact, Cleaning Locations, Checkout, Cart) cùng giao diện Mobile App."
    },
    concept: {
      bigIdea: "Let Us Make Your Shoes Fresher — Vẻ đẹp tinh tế của kỹ thuật chăm sóc giày thủ công kết hợp trải nghiệm mua sắm số hiện đại.",
      approach: "Logo Sweeper với đường nét chắc chắn, xếp lớp vững chãi thể hiện quy trình chăm sóc tỉ mỉ từng bước. Kết hợp sắc vàng tươi (#E9C31E), nâu vàng (#9A712A), xanh navy đậm (#1E293B) và nền trắng tối giản. Giao diện trực quan với hình ảnh giày sneaker 3D nổi bật, hệ thống lưới chuẩn 12 cột và luồng đặt dịch vụ siêu tốc.",
      designPrinciples: [
        { title: "Chăm sóc thủ công & Tin cậy", desc: "Đường nét logo và layout thể hiện sự vững chắc, kỹ lưỡng và an tâm tuyệt đối cho khách hàng gửi gắm những đôi giày đắt giá." },
        { title: "Trực quan & Hiện đại", desc: "Hình ảnh sản phẩm sneaker 3D sống động, phân cấp thông tin rõ ràng theo tỷ lệ typography Poppins từ 18px đến 56px." },
        { title: "Đồng bộ đa nền tảng (Responsive)", desc: "Hệ thống lưới chuẩn xác: Grid Web 1920px (12 cột, width 100px, gutter 30px) và Mobile App 414px (margin 16px, gutter 20px) đảm bảo trải nghiệm liền mạch trên mọi thiết bị." }
      ]
    },
    designSystem: {
      colors: [
        { name: "Sweeper Yellow", hex: "#E9C31E", role: "Primary Brand & Nút bấm CTA (CMYK: 10-20-100-0)" },
        { name: "Dark Ochre", hex: "#9A712A", role: "Logo Shadow & Chiều sâu nhận diện (CMYK: 34-52-100-16)" },
        { name: "Midnight Navy", hex: "#1E293B", role: "Web Primary & Khối Dark Surface" },
        { name: "Clean White", hex: "#FFFFFF", role: "Nền giao diện & Khoảng thở tinh sạch" },
        { name: "Support Accent", hex: "#EF4444", role: "Màu bổ trợ cảnh báo & Điểm nhấn Flash Sale" }
      ],
      typography: {
        headline: "NEVER BETTER — Font chữ hiển thị mạnh mẽ, góc cạnh và đậm chất thể thao",
        body: "Poppins (18px - 56px) — Hiện đại, hình học chuẩn mực cho giao diện số Web & Mobile"
      }
    },
    deliverables: [
      "01. INTRODUCE: Giới thiệu thương hiệu, sứ mệnh bảo vệ và chăm sóc giày thủ công cao cấp",
      "02. LOGO & GUIDELINES: Ý nghĩa cấu trúc logo, tỷ lệ lưới 14x × 2x, khoảng cách an toàn 2x, hệ màu quy chuẩn & Font Never Better",
      "03. UI GUIDE: Bảng màu Web (Primary, Variants, Support, Grayscales), Web Icons, Buttons & Thang Typography Poppins (18px - 56px)",
      "04. LAYOUT & RESPONSIVE: Cấu trúc Sitemap toàn diện, Wireframe & Grid (Web 1920px 12 cột & Mobile 414px), Màn hình UI chi tiết (Home, Services, Shop, Contact, Locations, Checkout, Cart) & Thiết kế Responsive Desktop, Tablet, Mobile"
    ],
    outcome: {
      summary: "Bộ tài liệu Sweeper Intro Book 27 trang chuẩn hóa toàn diện từ nhận diện thương hiệu đến hệ thống UI/UX Web và Mobile App, tạo tiền đề bứt phá doanh số bán lẻ trực tuyến và tối ưu hóa vận hành dịch vụ.",
      metrics: [
        { label: "Quy chuẩn Guideline", value: "27 trang" },
        { label: "Màn hình UI chuẩn hóa", value: "12+ screens" },
        { label: "Nền tảng hỗ trợ", value: "Web & Mobile" }
      ],
      detail: "Cẩm nang hướng dẫn đầy đủ từ wireframe, grid system đến giao diện tương tác thực tế, giúp đội ngũ lập trình và vận hành triển khai chính xác 100% tinh thần thiết kế."
    },
    coverGradient: "linear-gradient(135deg, #18181b 0%, #27272a 50%, #e9c31e 100%)",
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
    title: "Taiyo tea",
    tagline: "Cẩm nang Quy chuẩn Thương hiệu & Hệ thống Nhận diện Trà Nhật Bản Toàn diện",
    category: "packaging",
    categoryLabel: "Packaging & Brand Identity",
    client: "Taiyo Tea Co.",
    role: "Lead Brand Identity & Packaging Designer",
    duration: "5 tuần",
    services: ["Brand Guidelines", "Bộ nhận diện thương hiệu", "Thiết kế bao bì trà", "Ấn phẩm văn phòng & Quà tặng"],
    featured: true,
    accentColor: "#D91C24",
    showcaseImage: "assets/taiyo-showcase.jpg",
    showcaseImages: Array.from({ length: 43 }, (_, i) => "assets/taiyo/page-" + String(i + 1).padStart(2, "0") + ".jpg").filter(p => !p.endsWith("page-02.jpg")),
    pdfGuideline: "assets/Taiyotea-Brand-guideline.pdf",
    aspectRatio: "1600 / 39984",
    showcaseBg: "#ffffff",
    summary: "Hệ thống quy chuẩn nhận diện thương hiệu toàn diện (Brand Guideline 43 trang) cho Taiyo tea (太陽のお茶) — thương hiệu trà Nhật Bản cao cấp mang tinh thần Hòa - Kính - Thanh - Tịnh với thông điệp 'Bình thản uống trà, bình thản sống'. Dự án bao gồm đầy đủ 6 phần: Giới thiệu thương hiệu & Triết lý trà đạo; Quy chuẩn Logo kết hợp lá trà - chữ Hán 太陽 - quốc kỳ Nhật & Typeface UTM AKASHI; Bộ nhận diện văn phòng Stationery; Thiết kế bao bì hộp thiếc và hộp túi lọc (Genmaicha, Sencha, Hojicha); Ấn phẩm quảng cáo POSM và Hệ thống quà tặng cao cấp.",
    brief: {
      clientIntro: "Taiyo tea (太陽のお茶) là thương hiệu trà đạo Nhật Bản cao cấp với thông điệp 'Bình thản uống trà, bình thản sống', hội tụ 4 giá trị cốt lõi: Hòa - Kính - Thanh - Tịnh.",
      challenge: "Cần xây dựng cẩm nang thương hiệu toàn diện dày 43 trang, chuẩn hóa từ cấu trúc hình học logo, font chữ UTM AKASHI, màu sắc quy chuẩn, bộ nhận diện văn phòng đến hệ thống bao bì hộp thiếc kim loại, túi lọc và ấn phẩm truyền thông thực tế.",
      objective: "Thiết kế trọn vẹn bộ cẩm nang Brand Guideline 43 trang: chuẩn hóa logo biểu trưng kết hợp lá trà - chữ Hán 太陽 - mặt trời cờ Nhật Bản; bao bì sản phẩm (Genmaicha, Sencha, Hojicha) và bộ quà tặng doanh nghiệp."
    },
    concept: {
      bigIdea: "Bình thản uống trà, bình thản sống — Tinh hoa trà đạo và thiền định Nhật Bản.",
      approach: "Kết hợp biểu tượng lá trà tự nhiên, chữ Hán 太陽 (Thái Dương - Mặt trời) và hình tượng vòng tròn đỏ quốc kỳ Nhật Bản tạo nên dấu ấn thị giác độc bản. Sử dụng font chữ UTM AKASHI góc cạnh kết hợp nét cong mềm mại, bảng màu truyền thống đỏ mặt trời (#D91C24), xanh lá trà đậm (#234032), nâu trà sấy (#3D2314) và màu mực đen truyền thống.",
      designPrinciples: [
        { title: "Hòa - Kính - Thanh - Tịnh", desc: "Bốn giá trị cốt lõi của trà đạo định hướng mọi tỷ lệ, khoảng cách và chi tiết thiết kế." },
        { title: "Văn hóa & Đương đại", desc: "Dung hòa mỹ thuật truyền thống Nhật Bản với bố cục layout tối giản, chuẩn mực quốc tế." },
        { title: "Ứng dụng đa chiều", desc: "Quy chuẩn đồng bộ trên mọi chất liệu: dập nổi trên giấy mỹ thuật, in ấn bao bì hộp thiếc kim loại, túi lọc và ấn phẩm quảng cáo." }
      ]
    },
    designSystem: {
      colors: [
        { name: "Taiyo Red", hex: "#D91C24", role: "Biểu trưng Mặt trời & Con dấu" },
        { name: "Tea Leaf Dark Green", hex: "#234032", role: "Sắc xanh trà & Bao bì Genmaicha" },
        { name: "Midnight Navy", hex: "#152238", role: "Bao bì Sencha cao cấp" },
        { name: "Roasted Hojicha Brown", hex: "#3D2314", role: "Bao bì Hojicha sấy" },
        { name: "Pure Paper White", hex: "#FFFFFF", role: "Nền giấy & Khoảng thở tinh khiết" }
      ],
      typography: {
        headline: "UTM AKASHI — Hội tụ mềm mại, góc cạnh và vững chắc",
        body: "Roboto & Plus Jakarta Sans — Tối giản, rõ ràng cho thông tin quy chuẩn"
      }
    },
    deliverables: [
      "01. INTRODUCE: Giới thiệu thương hiệu & Triết lý Hòa - Kính - Thanh - Tịnh",
      "02. LOGO'S BRAND: Ý nghĩa logo, tỷ lệ lưới, khoảng cách an toàn, bảng màu & Typeface UTM AKASHI",
      "03. STATIONERY: Namecard, tiêu đề thư, phong bì A4/A5, kẹp file, thẻ nhân viên, đồng phục",
      "04. PRODUCTS: Thiết kế bao bì hộp thiếc & hộp túi lọc (Genmaicha, Sencha, Hojicha), bản vẽ kỹ thuật dieline",
      "05. ADVERTISING: Poster truyền thông, Standee, Billboard ngoài trời",
      "06. GIFT: Hộp quà tặng cao cấp, túi giấy, bộ ấm tách trà đạo"
    ],
    outcome: {
      summary: "Bộ Brand Guideline 43 trang được hoàn thiện chuẩn mực, tạo nền tảng vững chắc cho việc triển khai sản xuất hàng loạt bao bì và đồng bộ hóa truyền thông thương hiệu Taiyo tea.",
      metrics: [
        { label: "Quy chuẩn Guideline", value: "43 trang" },
        { label: "Dòng sản phẩm bao bì", value: "6 SKU" },
        { label: "Độ chuẩn hóa ấn phẩm", value: "100%" }
      ],
      detail: "Hệ thống thiết kế nhận được đánh giá cao về tính ứng dụng thực tế và tính mỹ thuật đậm đà bản sắc văn hóa Nhật Bản."
    },
    coverGradient: "linear-gradient(135deg, #1c1917 0%, #234032 50%, #d91c24 100%)",
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
