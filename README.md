# bitbw 个人主页

基于 Next.js 15、React 19、TypeScript 和 Tailwind CSS 4 构建的个人主页/作品集网站，用于展示个人介绍、经历、联系方式、项目列表和中英文简历入口。

## 快速开始

```bash
npm install
npm run dev
```

开发服务默认运行在 `http://localhost:3000`。

生产构建和本地启动：

```bash
npm run build
npm run start
```

项目当前没有独立测试框架；涉及页面或交互的修改，至少运行 `npm run build`，并检查桌面端、移动端和中英文切换。

## 技术栈

- Next.js 15 App Router；
- React 19 + TypeScript；
- Tailwind CSS 4；
- Radix UI primitives；
- Motion 页面动画；
- Lucide React 图标；
- Next Font Geist / Geist Mono。

## 项目结构

```text
app/page.tsx                       主页及 Home、About、Contact、Projects 视图
app/login/page.tsx                 演示登录页
app/layout.tsx                     根布局、字体和 metadata
app/providers.tsx                  全局 LocaleProvider
app/globals.css                    Tailwind、主题变量和全局样式
components/locale-provider.tsx     中英文状态和 localStorage 持久化
components/locale-toggle.tsx       语言切换
components/flowing-wave-overlay.tsx 共用 SVG 流动背景
components/line-shadow-text.tsx     标题文字效果
components/shimmer-button.tsx       按钮动画效果
components/ui/button.tsx            基础按钮组件
lib/i18n/copy.ts                   en / zh 文案、简历地址和项目文案
public/                             静态资源
```

## 页面说明

- 主页使用单页面状态切换展示 Home、About、Contact 和 Projects，不通过路由切换这些区域；
- `/login` 是演示登录页，目前只做前端必填校验和模拟登录失败，不连接后端认证；
- 支持 `en` 和 `zh` 两种语言，默认语言为 `en`，语言选择保存在浏览器 `localStorage`；
- 项目卡片、项目地址和简历地址分别由 `app/page.tsx`、`lib/i18n/copy.ts` 维护。

## 视觉方向

网站保持黑色背景、白色文字、橙色强调、半透明玻璃卡片和流动 SVG 背景。页面使用响应式布局，桌面端显示顶部导航，移动端显示折叠菜单。

## 发布分支

| 分支 | 环境 |
|------|------|
| `preview` | 测试环境 |
| `main` | 正式环境（prod） |

完整发布步骤、工作区恢复方式和页面验证要求见 [AGENTS.md](./AGENTS.md)。