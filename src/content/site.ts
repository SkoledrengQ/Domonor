export type Locale = "en" | "th";

export const locales: Record<Locale, { path: string; label: string; htmlLang: string }> = {
  en: { path: "/", label: "English", htmlLang: "en" },
  th: { path: "/th/", label: "ไทย", htmlLang: "th" },
};

export const siteContent = {
  en: {
    meta: {
      title: "Domonor | Software Solutions",
      description:
        "Domonor is a modern software solutions company focused on practical IT systems, custom software, automation, and technology consulting.",
    },
    nav: [
      { label: "Solutions", href: "#solutions" },
      { label: "Partner", href: "#partner" },
      { label: "About us", href: "#founder" },
      { label: "Contact", href: "#contact" },
    ],
    language: {
      label: "ภาษาไทย",
      href: locales.th.path,
    },
    hero: {
      eyebrow: "",
      headline: "Software solutions for businesses ready to move smarter.",
      subline:
        "Custom software, business systems, automation, and technical consulting for companies that want better workflows.",
      primary: "Discuss a project",
      secondary: "Explore solutions",
      status: "",
    },
    intro: {
      kicker: "Built for work that needs to become clearer.",
      title:
        "Domonor turns business workflows and digital ideas into software that works.",
      body:
        "Understand the business, design the right technical path, and build software that feels clean, useful, and maintainable.",
    },
    solutions: {
      eyebrow: "Solutions",
      title: "Software built around the way your business works.",
      body:
        "Domonor is shaped for practical business problems, including slow workflows, disconnected systems, desktop tools that need modernization, and teams that need better software.",
      items: [
        {
          title: "Custom software",
          text: "Desktop tools, internal systems, admin software, workflow applications, and interfaces built around real business operations.",
        },
        {
          title: "Automation and integrations",
          text: "Reduce repetitive work by connecting systems, structuring data, and turning manual processes into reliable digital flows.",
        },
        {
          title: "Websites and applications",
          text: "Presentational websites, customer-facing applications, portals, dashboards, and digital services with a polished user experience.",
        },
        {
          title: "Technical consulting",
          text: "Architecture, stack decisions, modernization planning, implementation support, and clear technical guidance.",
        },
      ],
    },
    partner: {
      eyebrow: "Partner with Domonor",
      title: "Looking for someone to solve IT challenges inside your business?",
      body:
        "If your company needs a practical technology partner, Domonor can help clarify the problem, shape the right solution, and build software that supports the way your business actually works.",
      cta: "Go to contact",
      points: ["Clear project scoping", "Custom software across desktop, web, and internal tools", "Automation and system integrations", "Practical technical consulting"],
    },
    founder: {
      eyebrow: "Founder",
      title: "Dominique Desmond Borchert",
      role: "Computer Science graduate from University College of Northern Denmark, Europe.",
      body:
        "Domonor is built around practical engineering, clear communication, and software that makes business operations smoother.",
      email: "ddb@domonor.net",
      details: [],
    },
    contact: {
      eyebrow: "Contact",
      title: "Tell me what you want to improve.",
      body:
        "If your business needs a clearer system, custom software, automation, or a practical technology partner, start here.",
      email: "hello@domonor.net",
      fields: {
        name: "Name",
        company: "Company",
        email: "Email",
        interest: "What can Domonor help with?",
        message: "Short message",
        submit: "Send",
      },
      options: ["Custom software", "Automation", "Website or application", "Technical consulting", "Other"],
    },
    footer:
      "Domonor is an early-stage software solutions company concept.",
  },
  th: {
    meta: {
      title: "Domonor | โซลูชันซอฟต์แวร์",
      description:
        "Domonor คือบริษัทโซลูชันซอฟต์แวร์สมัยใหม่สำหรับระบบไอที ซอฟต์แวร์เฉพาะทาง ออโตเมชัน และที่ปรึกษาด้านเทคโนโลยี",
    },
    nav: [
      { label: "โซลูชัน", href: "#solutions" },
      { label: "พาร์ตเนอร์", href: "#partner" },
      { label: "เกี่ยวกับเรา", href: "#founder" },
      { label: "ติดต่อ", href: "#contact" },
    ],
    language: {
      label: "English",
      href: locales.en.path,
    },
    hero: {
      eyebrow: "",
      headline: "ซอฟต์แวร์โซลูชันสำหรับธุรกิจที่พร้อมทำงานอย่างชาญฉลาดขึ้น",
      subline:
        "ซอฟต์แวร์เฉพาะทาง ระบบธุรกิจ ออโตเมชัน และที่ปรึกษาด้านเทคโนโลยีสำหรับบริษัทที่ต้องการเวิร์กโฟลว์ที่ดีขึ้น",
      primary: "คุยเรื่องโปรเจกต์",
      secondary: "ดูโซลูชัน",
      status: "",
    },
    intro: {
      kicker: "สำหรับงานที่ต้องการความชัดเจนมากขึ้น",
      title:
        "Domonor เปลี่ยนเวิร์กโฟลว์ธุรกิจและไอเดียดิจิทัลให้เป็นซอฟต์แวร์ที่ใช้งานได้จริง",
      body:
        "เข้าใจธุรกิจ ออกแบบเส้นทางเทคนิคที่เหมาะสม และสร้างซอฟต์แวร์ที่สะอาด ใช้งานได้จริง และดูแลต่อได้",
    },
    solutions: {
      eyebrow: "โซลูชัน",
      title: "ซอฟต์แวร์ที่สร้างจากวิธีทำงานจริงของธุรกิจ",
      body:
        "Domonor ถูกออกแบบสำหรับปัญหาธุรกิจที่จับต้องได้ เช่น เวิร์กโฟลว์ที่ใช้เวลานาน ระบบที่แยกจากกัน เครื่องมือเดสก์ท็อปที่ต้องปรับปรุง และทีมที่ต้องการซอฟต์แวร์ที่ดีขึ้น",
      items: [
        {
          title: "ซอฟต์แวร์เฉพาะทาง",
          text: "เครื่องมือเดสก์ท็อป ระบบภายใน ซอฟต์แวร์แอดมิน แอปเวิร์กโฟลว์ และอินเทอร์เฟซที่สร้างจากการทำงานจริงของธุรกิจ",
        },
        {
          title: "ออโตเมชันและการเชื่อมต่อระบบ",
          text: "ลดงานซ้ำด้วยการเชื่อมระบบ จัดโครงสร้างข้อมูล และเปลี่ยนขั้นตอนแมนนวลเป็นกระบวนการดิจิทัลที่เชื่อถือได้",
        },
        {
          title: "เว็บไซต์และแอปพลิเคชัน",
          text: "เว็บไซต์นำเสนอธุรกิจ แอปสำหรับลูกค้า พอร์ทัล แดชบอร์ด และบริการดิจิทัลที่ให้ประสบการณ์ใช้งานที่ดูดีและชัดเจน",
        },
        {
          title: "ที่ปรึกษาด้านเทคนิค",
          text: "สถาปัตยกรรม การเลือกเทคโนโลยี แผนปรับปรุงระบบ การสนับสนุนการพัฒนา และคำแนะนำทางเทคนิคที่ชัดเจน",
        },
      ],
    },
    partner: {
      eyebrow: "ร่วมงานกับ Domonor",
      title: "กำลังมองหาคนช่วยแก้ปัญหาไอทีในธุรกิจของคุณอยู่ไหม?",
      body:
        "หากบริษัทของคุณต้องการพาร์ตเนอร์ด้านเทคโนโลยีที่ใช้งานได้จริง Domonor สามารถช่วยทำให้ปัญหาชัดขึ้น วางรูปแบบโซลูชัน และสร้างซอฟต์แวร์ที่สนับสนุนวิธีทำงานของธุรกิจคุณจริงๆ",
      cta: "ไปที่ติดต่อ",
      points: ["กำหนดขอบเขตโปรเจกต์ชัดเจน", "ซอฟต์แวร์เฉพาะทางสำหรับเดสก์ท็อป เว็บ และเครื่องมือภายใน", "ออโตเมชันและการเชื่อมต่อระบบ", "ที่ปรึกษาด้านเทคนิคที่ใช้งานได้จริง"],
    },
    founder: {
      eyebrow: "ผู้ก่อตั้ง",
      title: "Dominique Desmond Borchert",
      role: "จบ Computer Science จาก University College of Northern Denmark, Europe",
      body:
        "Domonor สร้างขึ้นจากวิศวกรรมที่ใช้งานได้จริง การสื่อสารที่ชัดเจน และซอฟต์แวร์ที่ทำให้การดำเนินงานของธุรกิจราบรื่นขึ้น",
      email: "ddb@domonor.net",
      details: [],
    },
    contact: {
      eyebrow: "ติดต่อ",
      title: "บอกฉันว่าคุณอยากปรับปรุงอะไร",
      body:
        "หากธุรกิจของคุณต้องการระบบที่ชัดขึ้น ซอฟต์แวร์เฉพาะทาง ออโตเมชัน หรือพาร์ตเนอร์ด้านเทคโนโลยีที่ใช้งานได้จริง เริ่มต้นตรงนี้ได้เลย",
      email: "hello@domonor.net",
      fields: {
        name: "ชื่อ",
        company: "บริษัท",
        email: "อีเมล",
        interest: "Domonor ช่วยเรื่องอะไรได้บ้าง?",
        message: "ข้อความสั้นๆ",
        submit: "ส่ง",
      },
      options: ["ซอฟต์แวร์เฉพาะทาง", "ออโตเมชัน", "เว็บไซต์หรือแอปพลิเคชัน", "ที่ปรึกษาด้านเทคนิค", "อื่นๆ"],
    },
    footer: "Domonor คือแนวคิดบริษัทโซลูชันซอฟต์แวร์ระยะเริ่มต้น",
  },
} as const;
