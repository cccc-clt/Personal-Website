# 项目上下文

## 项目定位

这是赵天琦面向 2027 届秋招的 AI 产品作品集，主要服务游戏 AI、AI 应用、Agent 与产品评测方向的招聘阅读。主信息架构是首页、项目、研究、随笔与关于；正式简历通过招聘系统单独投递。

## 核心领域概念

### Project

具备明确用户问题、产品目标、本人职责、AI 设计、人工节点、评测方法、失败边界和证据来源的案例。

### Public repository project

存在可核验公开 GitHub 仓库的项目。页面可以链接仓库，但只能描述仓库能够证明的能力。

### Local case

只有本地案例材料、没有公开仓库的项目。必须明确标注仓库未公开，不生成虚构链接或运行指标。

### Project outcome

项目当前真实产出。它描述现有仓库、原型或案例材料已经具备什么，不把后续计划写成结果。

### Project filter

项目的招聘阅读分类：`game-ai`、`agent`、`evaluation`、`workflow`。一个项目可以属于多个筛选。

### Insight

将项目方法、真实观察、产品假设和待验证证据整理为 AI 研究报告、产品随笔或个人记录的统一内容集合。草稿不会生成路由、搜索或 RSS 条目。

### Insight section

`research` 表示 AI 研究报告与产品随笔，允许 `research-report` 和 `ai-product-note`，列表使用 `/insights/`，详情使用 `/research/<slug>/`；`notes` 表示比赛记录、个人游戏记录与成长随记，允许 `game-jam-note`、`game-record-note` 和 `growth-note`，列表使用 `/notes/`，详情使用 `/notes/<slug>/`。两类内容继续复用同一个 Content Collection。

### Insight category

`game-research`、`player-research`、`game-ai`、`ai-product`、`model-observation`、`game-jam`、`game-experience`、`game-record`、`growth-record`。

### Concept image

承担品牌或主题表达的插图，不代表真实运行界面、评测结果或业务指标。页面必须就近标注。

### Evaluation loop

保留任务、样本、模型、Prompt、运行条件、原始输出、人工判断、失败类型和下一轮行动的产品验证回路。

## 内容边界

- 身份统一为赵天琦 / Tianqi.Z。
- 不补写项目数据、用户量、转化率、游戏成绩、实习经历或商业结果。
- 不生成不存在的邮箱、正式域名、截图、仓库或外部链接。
- 模型输出与 Mock 数据不能包装为真实业务结果。
- Research 方法文章不能包装为已经完成的用户研究。

## 技术边界

- 保留 Astro 7、MDX Content Collections、Swup、Pagefind、Tailwind 4 和静态输出。
- `SITE_URL` 是 canonical、sitemap、robots 与绝对 RSS 的唯一站点地址来源。
- Cloudflare 与 Netlify 均只发布 `dist`；Node.js 要求为 22。
- 不新增动画或 UI 依赖。

## 质量检查

主要命令是 `npm run validate`。发布前还需要：

- 无 `SITE_URL` 与临时 `SITE_URL` 双构建
- 内部链接、本地图片、空 `href` 和重定向审计
- 7 个目标宽度的视觉检查
- 键盘、主题、Reduced Motion、Dialog、筛选、搜索与 Swup 历史测试
