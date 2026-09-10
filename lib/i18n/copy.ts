export type Locale = "en" | "zh";

export const STORAGE_KEY = "locale";

export const DEFAULT_LOCALE: Locale = "en";

const RESUME_EN =
  "https://bitbw.notion.site/Bowen-Zhang-AI-Application-Full-Stack-Engineer-3d699b010fa481a08a88d367cc9563df";

const RESUME_ZH = "https://bitbw.notion.site/AI-3d699b010fa481d1bc2efcc1bcf38340";

export type Copy = {
  ariaHome: string;
  navHome: string;
  navAbout: string;
  navContact: string;
  navBlog: string;
  navProjects: string;
  viewResume: string;
  localeEn: string;
  localeZh: string;
  roleBadge: string;
  heroTitleLine1: string;
  heroTitleLine2Prefix: string;
  heroAccent: string;
  /** 使用 `{years}` 占位 */
  homeIntro: string;
  viewGithub: string;
  viewGithubAria: string;
  aboutBadge: string;
  aboutTitle: string;
  aboutLead: string;
  cardCoreTitle: string;
  cardCoreBody: string;
  cardRecentTitle: string;
  cardRecent1: string;
  cardRecent2: string;
  cardRecent3: string;
  cardDrivesTitle: string;
  cardDrivesBody: string;
  cardToolboxTitle: string;
  cardToolboxBody: string;
  contactBadge: string;
  contactTitle: string;
  contactLead: string;
  emailMe: string;
  linkGithub: string;
  linkBlog: string;
  resumeUrl: string;
  projectsBadge: string;
  projectsTitle: string;
  projectsLead: string;
  projectsVisit: string;
  projectsViewAll: string;
  proj1Name: string;
  proj1Desc: string;
  proj2Name: string;
  proj2Desc: string;
  proj3Name: string;
  proj3Desc: string;
  proj4Name: string;
  proj4Desc: string;
  proj5Name: string;
  proj5Desc: string;
  proj6Name: string;
  proj6Desc: string;
};

export const copy: Record<Locale, Copy> = {
  en: {
    ariaHome: "Home",
    navHome: "Home",
    navAbout: "About",
    navContact: "Contact",
    navBlog: "Blog",
    navProjects: "Projects",
    viewResume: "View Resume",
    localeEn: "EN",
    localeZh: "中文",
    roleBadge: "Bowen Zhang · AI Application Engineer · Full-Stack Engineer · FDE",
    heroTitleLine1: "Turning Complex Workflows",
    heroTitleLine2Prefix: "into",
    heroAccent: "Working Systems",
    homeIntro:
      "I'm Bowen, a full-stack engineer with {years}+ years of experience delivering AI applications across Web, Feishu/Lark, and Android in-vehicle systems. I turn ambiguous requirements into working workflows from discovery and prototyping to production validation.",
    viewGithub: "View GitHub",
    viewGithubAria: "Visit Bowen's GitHub profile",
    aboutBadge: "About Bowen",
    aboutTitle: "AI applications that reach the real workflow.",
    aboutLead:
      "I work across AI Agents, model gateways, enterprise integrations, and Android in-vehicle systems. My focus is not only building a prototype, but connecting it to real data, permissions, devices, and users so it can be evaluated, deployed, and improved in production.",
    cardCoreTitle: "Core Focus",
    cardCoreBody:
      "AI application delivery, Agent workflows, system integration, and production reliability—from the first useful prototype to a reusable platform capability.",
    cardRecentTitle: "Recent Highlights",
    cardRecent1: "• Built an AI Agent workbench for smart-chassis engineering workflows",
    cardRecent2:
      "• Implemented model fallback, retries, and circuit breakers for reliable AI delivery",
    cardRecent3:
      "• Delivered Feishu long-connection chat, chart cards, and Web/Android in-vehicle integrations",
    cardDrivesTitle: "What Drives Me",
    cardDrivesBody:
      "I enjoy working at the boundary between product intent and engineering reality—making complex systems useful, observable, and easier to operate.",
    cardToolboxTitle: "Toolbox",
    cardToolboxBody:
      "Next.js, Vercel AI SDK, TypeScript, React, Vue, Node.js, RAG, BM25, Feishu/Lark SDK, WebSocket, MySQL, CarProperty, BLE, CAN, ECharts, Three.js, VChart.",
    contactBadge: "Contact",
    contactTitle: "Let's put complex ideas into production.",
    contactLead:
      "Whether you're exploring AI application delivery, need help integrating a complex workflow, or want to discuss a Forward-Deployed Engineering challenge, my inbox is open.",
    emailMe: "Email Me",
    linkGithub: "GitHub",
    linkBlog: "Blog",
    resumeUrl: RESUME_EN,
    projectsBadge: "My Projects",
    projectsTitle: "Systems delivered to real workflows.",
    projectsLead:
      "Selected AI applications, Android in-vehicle products, visualization tools, and integration work built around real users, data, and devices.",
    projectsVisit: "Visit Project",
    projectsViewAll: "View all on GitHub",
    proj1Name: "Smart Chassis AI Assistant",
    proj1Desc:
      "An AI workbench for engineering workflows, combining streaming chat, tool calling, knowledge retrieval, model reliability, and Feishu/Lark integration.",
    proj2Name: "AI Chatbox",
    proj2Desc:
      "A Web and Android in-vehicle application that visualizes preview road features, vertical acceleration, and chassis signals in an interactive 3D scene.",
    proj3Name: "Smart Chassis Domain-Control UI",
    proj3Desc:
      "A vehicle HMI platform connecting BLE and ESP32 to CAN signals, evolving from a browser experience into a deployable Android in-vehicle application.",
    proj4Name: "English Reading App",
    proj4Desc:
      "An English reading practice tool designed to improve reading comprehension and vocabulary through curated articles.",
    proj5Name: "Editable Table Demo",
    proj5Desc:
      "An interactive Ant Design Pro editable table component showcasing inline editing, validation, and row operations.",
    proj6Name: "Personal Blog",
    proj6Desc:
      "My personal tech blog covering frontend development, tooling, engineering insights, and side-project write-ups.",
  },
  zh: {
    ariaHome: "首页",
    navHome: "首页",
    navAbout: "关于",
    navContact: "联系",
    navBlog: "博客",
    navProjects: "项目",
    viewResume: "查看简历",
    localeEn: "EN",
    localeZh: "中文",
    roleBadge: "张博文 · AI 应用工程师 · 全栈工程师 · FDE",
    heroTitleLine1: "把复杂工作流",
    heroTitleLine2Prefix: "变成",
    heroAccent: "可运行的系统",
    homeIntro:
      "我是博文，一名拥有 {years}+ 年经验的全栈工程师，专注于 Web、飞书与 Android 车机上的 AI 应用交付和复杂系统集成。我擅长把不清晰的需求转化为可运行的工作流，从需求澄清、快速原型到生产验证形成完整闭环。",
    viewGithub: "查看 GitHub",
    viewGithubAria: "访问博文的 GitHub 主页",
    aboutBadge: "关于博文",
    aboutTitle: "让 AI 应用真正进入业务现场。",
    aboutLead:
      "我长期工作在 AI Agent、模型网关、企业系统集成和 Android 车机应用的交汇处。关注的不只是做出原型，而是让它接入真实数据、权限、设备和用户，经过评估、部署和迭代后成为可持续使用的系统。",
    cardCoreTitle: "核心方向",
    cardCoreBody:
      "AI 应用交付、Agent 工作流、复杂系统集成和生产可靠性，从第一个可用原型到可复用的平台能力。",
    cardRecentTitle: "近期亮点",
    cardRecent1: "• 为智能底盘工程工作流建设 AI Agent 工作台",
    cardRecent2: "• 实现模型自动降级、重试和熔断，提升 AI 交付稳定性",
    cardRecent3: "• 交付飞书长连接聊天、图表卡片与 Web/Android 车机应用",
    cardDrivesTitle: "动力来源",
    cardDrivesBody:
      "我喜欢站在产品意图与工程现实的交界处，把复杂系统变得真正可用、可观测、可持续运营。",
    cardToolboxTitle: "技术栈",
    cardToolboxBody:
      "Next.js、Vercel AI SDK、TypeScript、React、Vue、Node.js、RAG、BM25、飞书/Lark SDK、WebSocket、MySQL、CarProperty、BLE、CAN、ECharts、Three.js、VChart。",
    contactBadge: "联系",
    contactTitle: "一起把复杂想法落到生产环境。",
    contactLead:
      "无论你想探讨 AI 应用交付、复杂业务工作流集成，还是 Forward-Deployed Engineering 方向的合作，都欢迎来信。",
    emailMe: "发邮件",
    linkGithub: "GitHub",
    linkBlog: "博客",
    resumeUrl: RESUME_ZH,
    projectsBadge: "我的项目",
    projectsTitle: "真正接入工作流的系统。",
    projectsLead:
      "AI 应用、Android 车机产品、数据可视化和系统集成实践精选，围绕真实用户、数据与设备展开。",
    projectsVisit: "访问项目",
    projectsViewAll: "在 GitHub 查看全部",
    proj1Name: "智能底盘 AI 助手",
    proj1Desc:
      "面向工程工作流的 AI 工作台，整合流式对话、工具调用、知识检索、模型可靠性和飞书入口。",
    proj2Name: "智能底盘预瞄信息",
    proj2Desc:
      "支持 Web 与 Android 车机的实时数据应用，以交互式 3D 场景展示预瞄路面特征、垂向加速度和底盘信号。",
    proj3Name: "智能底盘域控 UI",
    proj3Desc:
      "连接 BLE、ESP32 与 CAN 信号的车端 HMI 平台，从浏览器体验演进为可部署的 Android 车机应用。",
    proj4Name: "英语阅读应用",
    proj4Desc:
      "一款英语阅读练习工具，通过精选文章帮助提升阅读理解能力与词汇量。",
    proj5Name: "可编辑表格 Demo",
    proj5Desc:
      "基于 Ant Design Pro 的交互式可编辑表格示例，展示行内编辑、数据校验与行操作。",
    proj6Name: "个人技术博客",
    proj6Desc:
      "分享前端开发、工程实践与技术洞察的个人博客，包含各类项目复盘。",
  },
};

export function isLocale(value: string | null): value is Locale {
  return value === "en" || value === "zh";
}
