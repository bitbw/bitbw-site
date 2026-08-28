export type Locale = "en" | "zh";

export const STORAGE_KEY = "locale";

export const DEFAULT_LOCALE: Locale = "en";

const RESUME_EN =
  "https://bitbw.notion.site/Bowen-Zhang-s-Resume-4a147165710948efa83f23ffd61303ec";

const RESUME_ZH = "https://bitbw.notion.site/2eebad4eb3af4e1997aa53fe61cbcc34";

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
    roleBadge: "Bowen Zhang · AI Application & Forward-Deployed Engineer",
    heroTitleLine1: "Turning Complex Workflows",
    heroTitleLine2Prefix: "into",
    heroAccent: "Working Systems",
    homeIntro:
      "I'm Bowen, a full-stack engineer with {years}+ years of experience delivering AI applications and complex system integrations. I turn ambiguous requirements into working workflows—from discovery and prototyping to production validation.",
    viewGithub: "View GitHub",
    viewGithubAria: "Visit Bowen's GitHub profile",
    aboutBadge: "About Bowen",
    aboutTitle: "AI applications that reach the real workflow.",
    aboutLead:
      "I work across AI Agents, model gateways, enterprise integrations, and in-vehicle systems. My focus is not only building a prototype, but connecting it to real data, permissions, devices, and users so it can be evaluated, deployed, and improved in production.",
    cardCoreTitle: "Core Focus",
    cardCoreBody:
      "AI application delivery, Agent workflows, system integration, and production reliability—from the first useful prototype to a reusable platform capability.",
    cardRecentTitle: "Recent Highlights",
    cardRecent1: "• Built an AI Agent workbench for smart-chassis engineering workflows",
    cardRecent2:
      "• Implemented model fallback, retries, and circuit breakers for reliable AI delivery",
    cardRecent3:
      "• Delivered Feishu long-connection chat, chart cards, and Web/Android IVI integrations",
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
      "A selection of AI applications, vehicle platforms, visualization tools, and integration experiments built around real users, data, and devices.",
    projectsVisit: "Visit Project",
    projectsViewAll: "View all on GitHub",
    proj1Name: "English Reading App",
    proj1Desc:
      "An English reading practice tool designed to improve reading comprehension and vocabulary through curated articles.",
    proj2Name: "AI Chatbox",
    proj2Desc:
      "An AI application exploring streaming conversations, multi-turn context, model integration, and a minimal path from prompt to usable workflow.",
    proj3Name: "Editable Table Demo",
    proj3Desc:
      "An interactive Ant Design Pro editable table component showcasing inline editing, validation, and row operations.",
    proj4Name: "Personal Blog",
    proj4Desc:
      "My personal tech blog covering frontend development, tooling, engineering insights, and side-project write-ups.",
    proj5Name: "Smart Chassis Domain Control UI",
    proj5Desc:
      "A vehicle domain-control UI for the Fuxi smart-driving platform, integrating real-time signals, subsystem state, and interactive engineering visuals.",
    proj6Name: "Smart Chassis Preview Info",
    proj6Desc:
      "A Web + Android IVI application integrating CarProperty signals to visualize preview road features, vertical acceleration, and chassis data in interactive 3D.",
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
    roleBadge: "张博文 · AI 应用与 Forward-Deployed Engineer",
    heroTitleLine1: "把复杂工作流",
    heroTitleLine2Prefix: "变成",
    heroAccent: "可运行的系统",
    homeIntro:
      "我是博文，一名拥有 {years}+ 年经验的全栈工程师，专注于 AI 应用交付和复杂系统集成。我擅长把不清晰的需求转化为可运行的工作流，从需求澄清、快速原型到生产验证形成完整闭环。",
    viewGithub: "查看 GitHub",
    viewGithubAria: "访问博文的 GitHub 主页",
    aboutBadge: "关于博文",
    aboutTitle: "让 AI 应用真正进入业务现场。",
    aboutLead:
      "我长期工作在 AI Agent、模型网关、企业系统集成和车载应用的交汇处。关注的不只是做出原型，而是让它接入真实数据、权限、设备和用户，经过评估、部署和迭代后成为可持续使用的系统。",
    cardCoreTitle: "核心方向",
    cardCoreBody:
      "AI 应用交付、Agent 工作流、复杂系统集成和生产可靠性，从第一个可用原型到可复用的平台能力。",
    cardRecentTitle: "近期亮点",
    cardRecent1: "• 为智能底盘工程工作流建设 AI Agent 工作台",
    cardRecent2: "• 实现模型自动降级、重试和熔断，提升 AI 交付稳定性",
    cardRecent3: "• 交付飞书长连接聊天、图表卡片与 Web/Android 车机集成",
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
      "AI 应用、车载平台、数据可视化和系统集成实践精选，围绕真实用户、数据与设备展开。",
    projectsVisit: "访问项目",
    projectsViewAll: "在 GitHub 查看全部",
    proj1Name: "英语阅读应用",
    proj1Desc:
      "一款英语阅读练习工具，通过精选文章帮助提升阅读理解能力与词汇量。",
    proj2Name: "AI 聊天应用",
    proj2Desc:
      "探索流式对话、多轮上下文和模型接入的 AI 应用，关注从 Prompt 到可用工作流的最短路径。",
    proj3Name: "可编辑表格 Demo",
    proj3Desc:
      "基于 Ant Design Pro 的交互式可编辑表格示例，展示行内编辑、数据校验与行操作。",
    proj4Name: "个人技术博客",
    proj4Desc:
      "分享前端开发、工程实践与技术洞察的个人博客，包含各类项目复盘。",
    proj5Name: "智能底盘域控 UI",
    proj5Desc:
      "用于伏羲智能驾驶平台的车端域控 UI，集成实时信号、子系统状态和工程数据可视化。",
    proj6Name: "智能底盘预瞄信息",
    proj6Desc:
      "基于 Capacitor 的 Web + Android 车机应用，对接 CarProperty 信号，交互式展示预瞄路面特征、垂向加速度和底盘数据。",
  },
};

export function isLocale(value: string | null): value is Locale {
  return value === "en" || value === "zh";
}
