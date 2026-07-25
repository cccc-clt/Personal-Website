# 赵天琦 AI 产品作品集

基于 Mizuki 布局语言重建的游戏 AI 产品作品集：以深海二次元动态 Hero、三个代表项目、产品方法和职业入口组成精简首页，同时保留悬浮导航、明暗主题、Swup 页面过渡与 Pagefind 本地搜索。项目使用 Astro 7、TypeScript、MDX Content Collections、Tailwind 构建能力与组件级 CSS，可静态构建并部署到 Cloudflare Pages。

## 页面

- `/`：沉浸式 Hero 与精简作品集首页
- `/game`：游戏体验与 AI 产品观察
- `/moments`：真实随想的空状态与后续入口
- `/stack`：工具链与实践记录
- `/archive`：项目与成长归档
- `/projects`：七个真实项目的可访问展览
- `/projects/[slug]`：MDX 案例详情
- `/about`、`/resume`、`/credits`、`/404`

首页由 `HeroBanner`、三个复用 Content Collection 数据的 `ProjectCard`、四步产品方法和职业 CTA 组成。原有 `MainGridLayout`、`ProfileCard` 与 `RightSidebar` 仍保留供其他页面或后续迭代使用，但不再挂载到首页；图片缺失时继续使用本地安全回退。

## 首页体验与动效

- Hero 使用唯一 H1 `TIANQI.Z`，背景为用户提供并转码的本地深海二次元 WebP；桌面端把人物留在左侧、信息区置于右侧，900px 以下改为底部信息布局并调整人物裁切中心。
- 首次访问通过 `tianqi-home-hero-seen-v1` 会话键播放约 1.6 秒分段入场；同一会话返回首页使用快速淡入。
- 背景图使用 16 秒 CSS 微缩放与轻微上移，光效缓慢呼吸，六个低权重 CSS 气泡提供水下层次；不引入动画或粒子库。
- 桌面端使用 passive scroll、`requestAnimationFrame` 和 CSS 自定义变量提供文字上移淡出与背景轻微放大；移动端不注册滚动视差，`prefers-reduced-motion` 同时关闭入场、背景循环、气泡、呼吸光与滚动联动。
- Hero 内容在无 JavaScript 时默认可见，脚本只负责选择完整、快速或静态状态。
- 首页固定展示 `ai-game-content-copilot`、`elysia-ai-character-agent` 与 `ai-game-growth-workflow`；其余项目继续保留在 `/projects/`。
- 当前没有已发布的 AI 随想或非草稿游戏观察，因此首页不渲染 Latest Writing，也不创建占位文章。

## 本地开发

```bash
npm ci
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

## 字体与自托管

- 全站正文与 UI 使用 `Inter Variable` + `Noto Sans SC Variable`，两者来自 Fontsource 5.3，并随构建产物同源托管；字体文件许可证为 OFL-1.1。
- 首页 Hero 的 `TIANQI.Z` 复用 Inter Variable 作为 display 字体，不额外加载 Manrope。
- Noto Sans SC 由 `unicode-range` 切分为 WOFF2 分片，浏览器只请求当前页面出现的字形；站点不预加载全部中文字体。
- 所有字体使用 `font-display: swap`，并保留 `PingFang SC`、`Microsoft YaHei` 与通用 sans-serif 回退。
- 等宽字体不额外下载：代码、项目编号、日期、slug 和命令优先使用设备上的 JetBrains Mono，否则回退到系统等宽字体。

## 中国大陆访问与性能

- 不依赖 Google Fonts、海外图片 CDN、统计、评论、音乐或视频服务。
- 中英文可变字体由构建产物自托管，加载失败时回退到本地系统字体。
- 首屏背景使用本地 WebP 与 CSS 遮罩、光影和气泡，不请求图片 CDN、视频或 Canvas 粒子库。
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
