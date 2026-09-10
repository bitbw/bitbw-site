# AGENTS.md

## 规则来源

本文件是项目级 AI 编程助手规则的唯一来源。开始工作前先阅读完整内容；`CLAUDE.md` 只作为 Claude Code 入口，不重复维护规则。

## 项目定位

这是 `bitbw` 的个人主页/作品集网站，不是 Serverless API 项目。使用 Next.js App Router 构建，展示个人介绍、经历、联系方式、项目列表和中英文简历入口。

## 技术栈

- Next.js 15 App Router；
- React 19 + TypeScript；
- Tailwind CSS 4；
- Radix UI primitives（当前主要通过 `components/ui/button.tsx` 使用）；
- `motion`：页面切换、登录页和动画效果；
- `lucide-react`：图标；
- Next Font：`Geist` 和 `Geist_Mono`。

## 项目结构

- `app/page.tsx`：主页四个视图（Home、About、Contact、Projects）及项目链接；
- `app/login/page.tsx`：演示登录页，当前只做前端校验和模拟失败，不连接后端认证；
- `app/layout.tsx`：根布局、字体和页面 metadata；
- `app/providers.tsx`：全局 `LocaleProvider`；
- `app/globals.css`：Tailwind、主题变量、动画和全局基础样式；
- `components/locale-provider.tsx`：中英文状态、localStorage 持久化和文案切换；
- `components/locale-toggle.tsx`：语言切换控件；
- `components/flowing-wave-overlay.tsx`：主页和登录页共用的 SVG 流动背景；
- `components/line-shadow-text.tsx`、`components/shimmer-button.tsx`：视觉效果组件；
- `components/ui/button.tsx`：按钮基础组件；
- `lib/i18n/copy.ts`：`en` / `zh` 文案、简历地址和项目文案；
- `public/`：静态图标和图片；
- `next.config.ts`、`postcss.config.mjs`、`components.json`：框架、样式和组件配置。

## 页面和状态约定

- 主页是单页面交互，不通过路由切换 About、Contact 和 Projects；使用 `activeSection` 控制内容视图；
- 桌面端使用顶部导航，移动端使用折叠菜单；新增导航项时需要同时更新桌面和移动菜单；
- 语言只有 `en` 和 `zh` 两种，默认语言为 `en`，存储键为 `locale`；
- 所有用户可见文案必须进入 `lib/i18n/copy.ts`，组件中不要直接写中英文业务文案；
- 项目卡片数据维护在 `app/page.tsx` 的 `PROJECTS`，新增项目时同步增加中英文 `name` 和 `desc` 文案；
- 简历地址维护在 `lib/i18n/copy.ts` 的 `resumeUrl`，不要散落在页面组件中；
- `careerYears` 根据 `CAREER_START` 动态计算，不要把年数写死在文案中；
- 主页和登录页共用 `FlowingWaveOverlay`，修改背景动画时确认两个页面的视觉和性能。

## UI 和可访问性约定

- 保持现有黑色背景、白色文字、橙色强调和半透明玻璃卡片的视觉方向；
- 保持桌面端和移动端布局，样式修改至少检查窄屏菜单、按钮和卡片是否溢出；
- 交互元素使用真实的 `button`、`a`、`Link` 和表单控件，不用普通 `div` 冒充按钮；
- 新增按钮、图标和表单控件需要提供可理解的文字或 `aria-label`；
- 外部链接保留 `target="_blank"` 时，同时保留 `rel="noreferrer"`；
- 动画修改要考虑 `prefers-reduced-motion`，登录页已经使用 `useReducedMotion`；
- 不新增 CSS 框架、图标库或动画库，优先复用现有 Tailwind、motion 和 lucide 组件。

## 开发命令

```bash
npm install
npm run dev       # Next.js Turbopack 开发服务，默认 http://localhost:3000
npm run build     # 生产构建
npm run start     # 启动生产构建
npm run lint      # 当前 package.json 中未配置此脚本，除非先补充脚本，否则不要假定可用
```

当前仓库没有独立测试框架。涉及页面或交互的改动，至少运行 `npm run build`，并用浏览器检查主页、登录页、中英文切换、移动端菜单和外部链接。

## 配置和安全

- 当前页面没有数据库、API route、Pusher、Blob、Sentry 或服务端认证实现；不要把其他项目的后端规则复制到这里；
- `next.config.ts`、`postcss.config.mjs` 和 `components.json` 修改前先确认对 Next.js/Tailwind 现有构建的影响；
- Notion 简历地址、项目 URL 和公开邮箱属于页面内容，修改前确认中英文版本是否需要同步；
- 不提交 `.env*`、密钥、调试截图和本地生成目录；`.playwright-mcp` 必须加入 `.gitignore`。

## 发布流程

项目采用双分支发布：

| 分支 | 环境 | 用途 |
|------|------|------|
| `preview` | 测试环境 | 日常开发联调，功能验证 |
| `main` | 正式环境（prod） | 稳定版本，对外发布 |

- **上测试环境**：将代码合并到 `preview` 分支并提交；
- **上正式环境**：将代码合并到 `main` 分支并提交。

操作规范：

1. 合并之前检查当前分支是否有未提交内容；如有，先执行 `git stash` 暂存，合并期间保持工作区干净，完成后再执行 `git stash pop` 恢复；
2. 先切换到目标分支并拉取最新代码：`git checkout <分支> && git pull`；
3. 合并并推送成功后，切回原开发分支，恢复暂存内容，并推送开发分支：`git push origin <开发分支>`；
4. 发布前运行 `npm run build`，确认测试环境页面正常后，再将 `preview` 合并到 `main`；
5. 正式发布后检查首页、`/login`、中英文切换、简历链接、项目链接和移动端菜单。

## 文档输出规范

方案、实施或输出类文档统一写入当前项目 `docs/<分类>/` 目录；优先复用已有分类，仅在确有必要时新建分类。同一主题的相关文档集中在同一分类目录下。

## 修改边界

- 只修改完成用户请求所需的最少文件；
- 不把演示登录页改造成真实认证系统，除非用户明确提出；
- 不为了补充“架构”而新增 API、数据库、状态管理库或目录；
- 修改页面内容时，优先复用现有组件和文案类型，避免引入新的抽象层。