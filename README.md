# 赵天琦 · AI Product Portfolio

面向中国大陆招聘 HR 与业务面试官的 AI 产品经理个人作品集。站点提供通用 AI 产品、游戏 AI、AI Agent、智能汽车 AI 四种定向首页，并用统一数据生成项目列表与七个项目详情页。

## 技术栈

- Astro（静态生成）
- TypeScript（严格模式）
- Tailwind CSS 4 + 原生 CSS
- Markdown（项目复盘补充内容）
- ESLint + Prettier
- Astro Sitemap

站点不需要数据库、后端、登录或 API Key；构建结果位于 `dist/`，可直接部署到 Cloudflare Pages。

## 本地运行

需要 Node.js 22 或与当前 Astro 版本兼容的更新 LTS 版本。

```bash
npm install
npm run dev
```

开发服务器启动后，访问终端输出的本地地址。

常用命令：

```bash
npm run dev          # 本地开发
npm run check        # Astro / TypeScript 检查
npm run lint         # ESLint
npm run format       # Prettier 格式化
npm run build        # 生产构建到 dist
npm run preview      # 本地预览生产构建
```

## 内容修改位置

### 个人与站点信息

编辑 `src/config/site.ts`：

- 姓名、站点标题、描述与域名
- GitHub、邮箱、求职状态
- 导航与简历路径
- 项目外部链接
- 四个定向首页的标题、标签和简介

个人介绍正文位于：

- `src/components/AboutPreview.astro`：首页简介
- `src/pages/about.astro`：完整关于我页面
- `src/pages/resume.astro`：在线简历

### 邮箱

当前使用占位邮箱 `your-email@example.com`。在 `src/config/site.ts` 中修改 `email` 后，页脚联系区、在线简历和复制邮箱功能会同步更新。

### 项目数据

- `src/data/projects.ts`：七个项目的结构化数据、状态、职责、AI 方案、评测指标、迭代与排序。
- `src/types/project.ts`：`Project`、`IterationItem` 等 TypeScript 接口。
- `src/content/project-notes/*.md`：项目详情页中的 Markdown 设计复盘。

新增项目时：

1. 在 `src/data/projects.ts` 增加一个符合 `Project` 接口的对象。
2. 为 `general`、`game`、`agent`、`auto` 填写排序值和适用方向。
3. 将外部链接先加入 `src/config/site.ts` 的 `projectLinks`，再从项目数据引用。
4. 在 `src/content/project-notes/` 添加同名 slug 的 Markdown 文件。
5. 将封面和截图放入 `public/images/projects/<slug>/`，并在项目数据中填写本地路径。

动态路由会自动生成 `/projects/<slug>/`，无需复制页面模板。

### 技能数据

编辑 `src/data/skills.ts`。每项能力都应关联实际项目证据，不建议添加无法证明的百分比熟练度。

## 图片、头像和插画

图片统一放在 `public/images/`：

- `public/images/avatar.webp`：个人头像（可选）
- `public/images/anime-assistant.webp`：首页原创 AI 助手立绘（可选）
- `public/images/og-cover.webp`：社交分享封面（建议 1200 × 630）
- `public/images/projects/<slug>/`：项目封面与截图

当图片不存在时，页面自动使用 CSS 几何占位图，不会出现破图。替换图片时保持 `src/data/projects.ts` 中的路径一致，并为重要图片保留明确宽高。

建议优先使用 WebP 或 AVIF：

- 项目封面建议 1440 × 900，单张尽量小于 250 KB。
- 项目截图按实际展示宽度导出，单张尽量小于 400 KB。
- 首屏插画建议小于 300 KB。
- 压缩后检查中文界面文字是否清晰，避免为了体积损失可读性。

## 简历 PDF

将简历文件放在 `public/resume/` 并保持文件名：

- `resume-general.pdf`
- `resume-game.pdf`
- `resume-auto.pdf`

文件不存在时，下载按钮会显示“简历文件待补充”，不会产生 404。

## SEO 与域名

上线前在以下位置替换 `https://your-domain.com`：

- `src/config/site.ts`
- `astro.config.mjs`
- `public/robots.txt`

站点已配置页面 title、description、canonical、Open Graph、Twitter Card、favicon、sitemap、robots.txt，以及 Person / CreativeWork 结构化数据。`public/images/og-cover.webp` 不存在时不会输出无效图片链接。

## Cloudflare Pages 部署

1. 将项目推送到 GitHub，生产分支使用 `main`。
2. 在 Cloudflare Dashboard 打开 **Workers & Pages**，创建 Pages 项目。
3. 连接 GitHub 仓库。
4. 使用以下构建参数：

```text
Framework preset: Astro
Build command: npm run build
Build output directory: dist
Production branch: main
```

5. 保存并部署。之后推送到 `main` 会触发生产部署，Pull Request 会生成预览部署。

### 绑定自定义域名

在 Cloudflare Pages 项目的 **Custom domains** 中选择添加域名：

- 域名已托管在同一 Cloudflare 账号时，可按向导自动添加 DNS 记录。
- 域名使用其他 DNS 服务时，按 Pages 提示添加 CNAME 或所需记录。
- 域名生效后，同时更新上文三个站点 URL 配置并重新构建，确保 canonical、sitemap 与分享链接一致。

## 中国大陆访问优化

- 不使用 Google Fonts、海外图片站、GitHub Raw 图片或第三方图片 CDN。
- 中文字体使用系统字体栈，不额外加载大字体文件。
- 所有关键图片、图标和简历均为本地资源。
- 站点静态生成，页面主体不依赖客户端 JavaScript。
- 图片支持宽高约束与懒加载，首屏默认使用轻量 CSS 插画。
- 动画失败不影响文字和项目入口，并支持 `prefers-reduced-motion`。

Cloudflare Pages 的中国大陆可达性会受具体网络与域名线路影响；如需正式面向大陆用户提供稳定商业服务，请另外评估域名备案、合规要求和境内 CDN 方案。

## 常见问题

### 构建提示找不到依赖文件

先执行：

```bash
npm install
```

如果安装曾被网络或进程中断，关闭仍占用项目的开发进程后重新安装，再运行 `npm run build`。

### 简历按钮显示待补充

确认三份 PDF 位于 `public/resume/`，文件名与本 README 完全一致。

### 项目显示占位图

确认 `src/data/projects.ts` 中的 `coverImage` / `screenshots` 路径与 `public/images/` 下的实际文件一致，注意大小写。

### 部署后页面 URL 或分享信息仍是占位域名

同步修改 `src/config/site.ts`、`astro.config.mjs` 和 `public/robots.txt`，然后重新构建部署。

### Cloudflare 构建失败

确认构建命令为 `npm run build`、输出目录为 `dist`，并使用与本地兼容的 Node.js 版本。先在本地运行 `npm run check` 和 `npm run build` 获取更清晰的错误信息。
