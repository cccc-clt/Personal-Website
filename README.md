# 赵天琦 AI 产品作品集

原创成年日系二次元女性数字向导 × 游戏 AI 产品作品集 × Apple 式内容聚焦 × Microsoft Fluent 式空间光感。项目使用 Astro 7、TypeScript、MDX Content Collections 与原生 CSS，可静态构建并部署到 Cloudflare Pages。

## 页面

- `/`：通用 AI 产品首页
- `/game`：游戏 AI / AIGC 定向首页
- `/agent`：大模型 / AI Agent 定向首页
- `/auto`：智能汽车 / 场景 AI 定向首页
- `/projects`：七个项目的可访问筛选展览
- `/projects/[slug]`：MDX 案例详情
- `/about`、`/resume`、`/credits`、`/404`

四套首页共享 `HomePage`、Hero、项目展、能力、About 与联系组件，只更换 `src/config/site.ts` 的文案、排序、强调色和 SEO。

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

- `email`：当前是 `your-email@example.com`
- `url`：当前是 `https://your-domain.com`
- GitHub、所在地、求职状态
- 四套定向首页的标题、描述与关键词

真实链接缺失时不要填写 `#`。项目 Frontmatter 的 `demoUrl`、`githubUrl`、`documentUrl`、`videoUrl` 均为可选字段，缺失时页面不会显示按钮。

## 编辑项目

项目位于 `src/content/projects/*.mdx`，Schema 位于 `src/content.config.ts`。状态限定为：

- `LIVE`
- `TESTED`
- `ITERATING`
- `ARCHIVED`

定向首页限定为 `general | game | agent | auto`。新增项目时填写职责、用户、目标、AI 必要性、工作流、人工节点、异常、安全、评测、失败与迭代，不虚构指标或成果。

## 角色与图片

角色路径与尺寸见 `public/images/README.md`。组件在构建时检测本地文件：

1. 优先使用移动 AVIF / WebP。
2. 桌面优先 AVIF，WebP 作为兼容回退。
3. 文件都不存在时，使用 `src/styles/character.css` 的成年女性数字向导轮廓。

项目真实截图缺失时使用不同的 CSS 概念封面；不会请求外链或输出破图。所有正式资源在 `src/data/credits.ts` 登记，并由 `/credits` 展示。

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

`public/_headers` 提供安全响应头与分层缓存；`public/_redirects` 只处理 `/404`，未知路由由 Pages 原生 `404.html` 接管。部署前把 `astro.config.mjs`、`public/robots.txt` 与 `src/config/site.ts` 的占位域名替换为正式域名。

## 中国大陆访问与性能

- 不依赖 Google Fonts、海外图片 CDN、统计、评论、音乐或视频服务。
- 中文与英文字体均使用本地系统字体栈。
- 首屏背景使用 CSS 光影；角色图本地托管并提供 AVIF/WebP。
- 非首屏图片懒加载，动效遵循 `prefers-reduced-motion`。

## 中断恢复

1. 阅读 `CODEX_PROGRESS.md` 与 `ASSET_CHECKLIST.md`。
2. 运行 `git status`，不要重新初始化或覆盖已有修改。
3. 旧站基线位于 `backup-before-rebuild` 分支与提交 `2e189c4`。
4. 继续当前未完成阶段，完成后更新进度并提交。

## 常见排错

- `spawn EPERM`：这是受限环境创建子进程的问题，可在允许的本机终端运行 `npm run build`。
- Content Collection 未更新：运行 `npx astro sync` 后重试。
- 图片不显示：确认文件位于 `public/` 且路径大小写一致；缺失时应看到 CSS 回退而非破图。
- 简历按钮显示待补充：文件名必须与 `public/resume/README.md` 完全一致。

资源待办以 `ASSET_CHECKLIST.md` 为准。

