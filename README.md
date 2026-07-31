# 赵天琦 AI 产品作品集

面向 2027 届秋招的个人作品集，聚焦游戏 AI、AI Agent、产品评测与大模型应用。网站只展示公开仓库或已有本地案例能够核验的事实，不补写项目指标、经历、邮箱或外部链接。

## 信息架构

- `/`：求职定位、4 个精选项目、能力与 7 步工作流、Research、关于摘要和求职入口
- `/projects/`：支持 `?filter=game-ai|agent|evaluation|workflow` 的项目索引
- `/projects/[slug]/`：统一案例结构与证据边界
- `/research/`：支持 `?category=` 的研究索引
- `/research/[slug]/`：文章目录、阅读时间、来源说明与关联项目
- `/about/`、`/resume/`、`/404.html`：主要说明页面
- `/stack/`、`/archive/`、`/credits/`：次级资料页面

旧 `/game/`、`/moments/`、`/agent/` 与 `/auto/` 已重定向到对应 Research 分类、项目筛选或具体案例。

## 技术栈

- Astro 7 静态输出
- MDX Content Collections
- Tailwind CSS 4 / Vite
- Swup 页面过渡
- Pagefind 本地搜索
- Cloudflare 与 Netlify 静态发布配置

## 本地开发

要求 Node.js 22。

```bash
npm install
npm run dev
npm run validate
```

`npm run validate` 会依次执行 Prettier 检查、ESLint、Astro 类型检查、静态构建和 Pagefind 索引。

## SITE_URL

未配置 `SITE_URL` 时可以正常本地构建，但不生成 canonical、sitemap 和绝对地址 RSS。

PowerShell 示例：

```powershell
$env:SITE_URL='https://example.com'
npm run build
Remove-Item Env:SITE_URL
```

配置后会生成 canonical、sitemap、完整 robots 信息和已发布 Research 的 RSS。

## 编辑项目

项目位于 `src/content/projects/`。除了既有项目字段，还必须维护：

- `filters`：`game-ai`、`agent`、`evaluation`、`workflow`
- `outcome`：只描述当前仓库或案例材料能够证明的真实产出
- `sourceNote`：说明证据来源、Mock、Local case 或缺失状态
- `gallery`：只放真实界面或过程截图；概念图不能写入 Gallery 冒充截图

## 编辑 Research

文章位于 `src/content/research/`，主要字段包括：

- `title`、`summary`、`category`、`tags`
- `publishedAt`、`updatedAt`
- `draft`、`featured`
- `relatedProjects`
- 可选 `cover` 与 `sourceNote`

阅读时间由正文自动计算。`draft: true` 的内容不生成路由，不进入首页、搜索或 RSS。

## 图片与简历

- 首页深海图是局部品牌插图，不是项目证据。
- 7 张项目封面均标注为概念图。
- 真实项目截图缺失时，页面显示诚实的缺失说明。
- 三份简历 PDF、邮箱和正式域名尚未提供，不生成虚假文件或链接。

完整资源状态见 `ASSET_CHECKLIST.md`。

## 发布

- Cloudflare：保留 `wrangler.jsonc`
- Netlify：使用 `netlify.toml`，构建命令为 `npm run build`，发布目录为 `dist`
- 本仓库不自动执行生产部署
