# 第三阶段：游戏 AI 求职作品集内容质量优化

Status: open

Triage: ready-for-agent

## Problem Statement

现有网站已经具备项目详情、真实性声明和基础产品方法，但候选人叙事仍不够集中：`/about` 仍偏学生介绍，转型路径和游戏 AI 兴趣没有形成连续叙事；`/projects` 虽有完整字段，但需要统一成产品经理视角；`/game` 暂无真实 Game record，观察模板还没有直接形成“体验—设计—AI 机会—产品思考”的语言；`/stack` 的定位与字段仍偏技术栈，而且数据被首页共享，直接替换会造成越界变化。

本轮需要把网站从普通学生个人网站升级为面向米哈游及游戏行业的游戏 AI 产品经理求职作品集，同时保持所有事实可核验，不虚构项目指标、游戏数据、工作经历或外部链接。

## Solution

只优化 `/about`、`/projects`、`/game`、`/stack` 的文案和内容数据，保留 Astro、Mizuki 内容体系、路由、组件层级、DOM 骨架、样式、动效和静态资源。

1. `/about` 按“背景起点—转型路径—游戏 AI 兴趣—产品方法—求职方向”组织九节既有正文。
2. `/projects` 继续展示七个真实项目，用既有字段回答项目定位、用户问题、产品目标、我的职责、技术方案和当前状态。
3. `/game` 保持真实空状态，在既有八项模板与三列展示中形成四类产品观察语言，不发布虚构记录。
4. `/stack` 使用页面专用的九项工作台数据，避免改动首页消费的 `toolStack`。
5. 以构建后的静态 HTML 作为最高测试缝，并比较首页和受保护文件的前后哈希。

## User Stories

1. 作为招聘者，我希望快速看到候选人的目标方向，从而判断是否匹配游戏 AI 产品岗位。
2. 作为招聘者，我希望理解交通工程背景如何迁移到复杂系统、数据、仿真和流程分析能力。
3. 作为招聘者，我希望看到从 AI 工具使用者到 AI 产品构建者的连续转型路径。
4. 作为面试官，我希望区分候选人的产品判断与技术实现，从而围绕真实职责提问。
5. 作为游戏行业招聘者，我希望看到候选人对角色、NPC、叙事、内容生产和玩家关系的产品兴趣。
6. 作为候选人，我希望表达游戏 AI 兴趣，但不被包装成没有依据的资深玩家。
7. 作为候选人，我希望使用 AI Product Explorer 作为个人副标题，而不是虚构正式头衔。
8. 作为招聘者，我希望每个项目保留真实名称，从而能够与仓库和简历交叉核验。
9. 作为招聘者，我希望视觉代号只作为副标题，不妨碍理解项目用途。
10. 作为招聘者，我希望每个项目都能回答定位、问题、目标、职责、方案和状态六个问题。
11. 作为面试官，我希望“我的职责”只包含候选人真实完成的产品与原型工作。
12. 作为技术面试官，我希望技术方案说明每项技术在产品链路中的作用，而不是只列技术名。
13. 作为评测项目读者，我希望评测维度与已取得结果被明确区分。
14. 作为仓库读者，我希望 Mock、Demo、Local case 和公开项目的证据边界清楚可见。
15. 作为米哈游相关岗位招聘者，我希望同人角色项目保留非商业和无隶属关系声明。
16. 作为游戏产品观察页读者，我希望看到统一的体验、设计、AI 机会和产品思考模板。
17. 作为读者，我希望 AI 场景被标注为机会判断或探索方向，而不是已经实现的功能。
18. 作为候选人，我希望在没有真实游戏记录时保持诚实空状态，而不是补写时长、段位或账号数据。
19. 作为招聘者，我希望工具页能说明工具、使用场景、关联项目和实际实践之间的关系。
20. 作为招聘者，我希望工具熟练度通过具体实践表达，而不是“熟悉”“掌握”“精通”。
21. 作为网站维护者，我希望内容优化不影响首页、在线简历和归档页。
22. 作为网站维护者，我希望不新增 Schema、组件、路由、资源或框架依赖。
23. 作为网站维护者，我希望所有内容继续通过 Astro 类型检查和生产构建。
24. 作为候选人，我希望招聘者扫读目标页面后能够复述我的转型路径、代表能力和求职方向。

## Current Sources and Change Boundary

### 当前文件定位

- `/about`：`src/pages/about.astro`；正文来自 `src/content/spec/about.md`；共享的 `src/config/site.ts` 不修改。
- `/projects`：`src/pages/projects/index.astro`、`src/pages/projects/[slug].astro`；数据来自 `src/content/projects/*.mdx`。
- `/game`：`src/pages/game.astro`；当前只有未发布的 `src/content/game/template.md`。
- `/stack`：`src/pages/stack.astro`；数据来自 `src/data/siteContent.ts`。
- Content Collection Schema 位于 `src/content.config.ts`，本轮不修改。

### 允许修改

- `src/content/spec/about.md`
- `src/pages/about.astro` 的文字节点
- `src/pages/projects/index.astro` 的页面说明文字
- `src/pages/projects/[slug].astro` 的既有字段标签和说明文字
- 七个既有项目 MDX 的详情专用字段与正文
- `src/pages/game.astro` 的文字、三个观察标题和八项模板文字
- `src/content/game/template.md` 的草稿说明
- `src/pages/stack.astro` 的文字、字段标签和数据引用
- `src/data/siteContent.ts` 新增 `aiProductWorkbench`；原 `toolStack` 与其他导出保持不变

### 禁止修改

- 首页、`src/components/**`、`src/layouts/**`、`src/styles/**`
- Astro 配置、依赖、锁文件、TypeScript 配置
- Content Collection Schema、loader、类型
- `src/config/site.ts` 和其他页面
- `public/**`、脚本、图片、字体、OG、简历和静态资源
- 路由、组件标签、容器、循环数量、条件分支、CSS 和客户端脚本

项目 MDX 中的共享字段冻结：`index`、`title`、`englishTitle`、`codename`、`summary`、`description`、`updated`、`status`、`categories`、`targetTracks`、`role`、`period`、`responsibilities`、`featured`、`order`、资源字段和 URL 字段。

## Implementation Decisions

### About

- 保留“赵天琦 / Tianqi Z.”，AI Product Explorer 只作为探索者副标题。
- 交通工程部分强调复杂系统、数据分析、仿真建模和流程优化如何迁移到产品判断。
- 转型路径依次表达 AI 工具、Prompt、Agent、RAG、Evaluation。
- 游戏 AI 兴趣关注角色表达、NPC 理解、内容创造和玩家与虚拟世界的关系，不添加玩家履历。
- 产品方法固定为“需求分析 → 场景拆解 → 快速原型 → Prompt / Agent 设计 → 测试评估 → 迭代优化”。
- 联系区只显示 GitHub、项目页和在线简历，不显示缺失邮箱。

### Projects

保留七个真实名称：AI Product Evaluation Workbench、Mobile UIAgent Evaluation Lab、Automate AI Car Copilot、AI Game Content Copilot、AI PDF Learning Assistant、爱莉希雅 AI 角色陪伴应用、AI 游戏增长投放与实验评测工作流。

- 项目定位使用 `description`。
- 用户问题使用 `targetUser` 和 `problem`。
- 产品目标使用 `goal`。
- 我的职责使用 `role` 和 `responsibilities`。
- 技术方案使用 `techStack`、`solution`、`flow` 和 `aiDesign`。
- 当前状态使用 `status`、`period`、`sourceNote` 和 `nextSteps`。
- Evaluation focus 不等于已取得结果；Mock 数量或测试集数量必须注明数据性质。
- Local case 不生成仓库链接，不声明投放、转化、效率或运行结果。
- 同人项目保留非商业、无官方资产、与米哈游或 HoYoverse 无隶属关系声明。

### Game

- 无真实 Game record 时保留完整的公开空状态，不使用明显占位文案。
- 三列标题固定为“体验与产品观察”“AI 应用机会（探索方向）”“产品思考与验证”。
- 八项模板覆盖游戏体验记录、核心体验与角色／叙事感受、产品设计观察、玩家行为路径与系统反馈、AI 应用机会、产品思考、风险与验证、仍需观察的问题。
- 所有 AI 机会使用假设语气，不描述为已实现功能。

### Stack

- 页面定位为“AI 产品工作台”。
- 新增只由 `/stack` 消费的 `aiProductWorkbench`，沿用现有卡片字段与九项长度，不改变 DOM。
- 九项工具为 Codex、Cursor、Dify、OpenAI-compatible API、LangChain、ChromaDB、Streamlit、GitHub、Cloudflare。
- 每项说明实践内容、使用场景、关联项目和实践边界；不使用技能等级词。
- Cloudflare 只描述部署配置与发布准备，不声明线上规模或流量。

### Interfaces

- 不改变公开 URL、Schema、类型或组件 Props。
- 只新增内部只读导出 `aiProductWorkbench`，字段为 `name`、`category`、`state`、`use`、`scene`、`project`、`projectHref`、`next`。
- 不新增 API、数据库、组件、测试接口或迁移。

## Fact Sources

事实按以下顺序使用：用户明确提供的信息；六个公开项目仓库及 README；游戏增长 Local case 既有材料；`CONTEXT.md`；当前网站、README 和已有简历内容。

无法确认的信息省略，不通过推测补齐。正式页面不保留“待补充”占位符；未渲染的草稿模板可以保留填写提示。测试字段、Token、成本、延迟和样本数量不得被包装成业务成果。

## Testing Decisions

- 最高测试缝为 `npm run build` 生成的静态 HTML，一次覆盖内容集合、Schema、路由和渲染。
- 实施前后比较 `astro.config.mjs`、`src/content.config.ts`、首页源文件、首页 HTML 和 `public/**` 哈希。
- 运行 `npm run lint`、`npm run check`、`npm run build`。
- 检查 `/about`、`/game`、`/stack` 和七个项目详情的实际 HTML。
- 不新增测试文件。
- 不运行全仓 `npm run format`；当前仓库已有与本轮无关的 Prettier 基线差异。

### Acceptance Checklist

- 首页、Astro/Mizuki 边界、页面结构、样式和静态资源不变。
- 七个真实项目名称全部保留，视觉代号仍为副标题。
- `/about` 完整表达背景、转型、游戏 AI 兴趣、六步方法和求职方向。
- 七个项目均能回答定位、问题、目标、职责、技术方案和状态。
- `/game` 保持真实空状态并形成统一四维观察模板。
- `/stack` 的九项工具均对应场景、项目、实践和边界。
- 页面无虚构指标、游戏数据、工作经历或无依据等级词。
- `npm run lint`、`npm run check`、`npm run build` 通过。

## Out of Scope

- 首页、Mizuki、Astro、路由、组件、布局、样式、动效或依赖改造
- 新项目、新游戏记录、新文章、新简历内容
- 图片、截图、角色资产、OG、视频、部署、域名或统计
- 项目功能开发、模型调用、真实用户测试或全仓格式化
- 为缺失事实添加占位符或推测性内容

## Further Notes

- 当前没有适用的正式 ADR，本规格不触发架构决策。
- 工作区已有未提交修改，实施时只做增量编辑，不回滚、不覆盖用户工作。
- 现有项目状态体系保持不变，不扩大状态枚举或修改 StatusBadge。

## Comments

- 2026-07-17：用户确认规格并授权实施。
