# 赵天琦 AI 产品作品集

基于 Mizuki 布局语言重建的浅色游戏 AI 产品作品集：保留悬浮导航、Banner、三栏内容、明暗主题、Swup 页面过渡与 Pagefind 本地搜索。项目使用 Astro 7、TypeScript、MDX Content Collections、Tailwind 构建能力与组件级 CSS，可静态构建并部署到 Cloudflare Pages。

## 页面

- `/`：Mizuki 三栏作品集首页
- `/game`：游戏体验与 AI 产品观察
- `/moments`：真实随想的空状态与后续入口
- `/stack`：工具链与实践记录
- `/archive`：项目与成长归档
- `/projects`：七个真实项目的可访问展览
- `/projects/[slug]`：MDX 案例详情
- `/about`、`/resume`、`/credits`、`/404`

首页由 `HeroBanner`、`MainGridLayout`、`ProfileCard`、`ProjectCard` 与 `RightSidebar` 组成；图片缺失时使用本地安全回退。

## 本地开发

```bash
npm install
npm run dev
```

生产检查：

```bash
npm run validate
```

该命令依次执行格式检查、ESLint、Astro 类型检查和生产构建。输出目录为 `dist/`。

## 替换个人信息

编辑 `src/config/site.ts`：

- `email`：当前为空，补充前不生成邮件链接
- GitHub、所在地、求职状态
- 正式域名：构建或部署时通过 `SITE_URL` 环境变量提供

真实链接缺失时不要填写 `#`。项目 Frontmatter 的 `demoUrl`、`githubUrl`、`documentUrl`、`videoUrl` 均为可选字段，缺失时页面不会显示按钮。

## 编辑项目

项目位于 `src/content/projects/*.mdx`，Schema 位于 `src/content.config.ts`。状态限定为：

- `LIVE`
- `TESTED`
- `ITERATING`
- `ARCHIVED`

定向首页限定为 `general | game | agent | auto`。新增项目时填写职责、用户、目标、AI 必要性、工作流、人工节点、异常、安全、评测、失败与迭代，不虚构指标或成果。

## 角色与图片

资源路径与尺寸见 `public/images/README.md` 和 `ASSET_CHECKLIST.md`。组件在构建时检测本地文件：

1. Banner 的桌面、1440、960 与移动版本分别检查，只有存在的文件会进入 `srcset`。
2. 头像缺失时显示 `TQ` 文字占位。
3. Banner 全部缺失时显示浅色 CSS 渐变；看板娘缺失时不创建图片节点。

项目真实截图缺失时使用不同的浅色 CSS 概念封面；不会请求外链或输出破图。计划中的正式资源在 `src/data/assetCredits.ts` 登记，并由 `/credits` 展示当前状态。

生成四张品牌 OG：

```bash
node scripts/generate-og.mjs
```

## 简历

固定文件名和检测逻辑见 `public/resume/README.md`。在线简历支持浏览器打印为黑白 A4；打印时会隐藏导航、角色、动画与非必要按钮。

## Cloudflare Pages

推荐设置：

- Framework preset：Astro
- Build command：`npm run build`
- Build output directory：`dist`
- Node.js：22 或当前 Astro 7 支持版本

`public/_headers` 提供安全响应头与分层缓存；`public/_redirects` 处理兼容路由。部署时设置 `SITE_URL` 后，构建会生成 Canonical、Sitemap 与绝对社交分享链接；未设置时不会输出占位域名。

## 中国大陆访问与性能

- 不依赖 Google Fonts、海外图片 CDN、统计、评论、音乐或视频服务。
- 中文与英文字体均使用本地系统字体栈。
- 首屏背景使用 CSS 光影；角色图本地托管并提供 AVIF/WebP。
- 非首屏图片懒加载，动效遵循 `prefers-reduced-motion`。

## 中断恢复

1. 阅读 `CODEX_PROGRESS.md` 与 `ASSET_CHECKLIST.md`。
2. 运行 `git status`，不要重新初始化或覆盖已有修改。
3. 旧站基线位于 `backup-before-rebuild` 分支与提交 `2e189c4`；科技主题备份位于 `backup-tech-theme`，Mizuki 迁移前检查点为 `634f4ef`。
4. 继续当前未完成阶段，完成后更新进度并提交。

## 常见排错

- `spawn EPERM`：这是受限环境创建子进程的问题，可在允许的本机终端运行 `npm run build`。
- Content Collection 未更新：运行 `npx astro sync` 后重试。
- 图片不显示：确认文件位于 `public/` 且路径大小写一致；缺失时应看到 CSS 回退而非破图。
- 简历按钮显示待补充：文件名必须与 `public/resume/README.md` 完全一致。

资源待办以 `ASSET_CHECKLIST.md` 为准。
