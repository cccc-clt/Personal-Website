# ADR 0003：拆分研究与随笔的公开栏目入口

状态：已接受（2026-08-04）

日期：2026-08-04

## 背景

`research` Content Collection 已同时承载系统研究和个人随笔，详情路由也已通过 `section` 区分为 `/research/<slug>/` 与 `/notes/<slug>/`。统一的 `/insights/` 聚合入口让两类内容在导航和列表中混合，难以清楚表达“系统研究”与“真实过程记录”的不同证据边界。

## 决策

- 保留单一 `research` Content Collection，不复制 Schema 和内容数据源。
- `/insights/` 继续作为公开 URL，但只展示 `section: research`，导航名称改为“研究”。
- 新增 `/notes/` 作为 `section: notes` 的独立列表入口，使用纵向时间线和轻量主题筛选。
- 详情页继续按 `section` 使用 `/research/<slug>/` 或 `/notes/<slug>/`；内容重新归类时同步调整规范地址，并为旧地址保留重定向。
- `research-report` 与 `ai-product-note` 只能归入 `section: research`；`game-jam-note`、`game-record-note` 与 `growth-note` 只能归入 `section: notes`。
- 上一篇和下一篇只在当前 `section` 内切换；`relatedInsights` 仍可通过显式 slug 跨栏目关联。
- 首页研究区只读取精选研究；最近随笔区只在存在已发布随笔时渲染。
- 随笔沿用现有内容字段，并扩展 `kind` 与 `category` 枚举，不新增第二套 Content Collection。

## 与 ADR 0002 的关系

本决策保留 ADR 0002 的单一内容集合、详情路由和 PDF 能力，但取代其“`/insights/` 统一聚合随笔与研究”以及主导航使用“随笔与研究”的决定。研究和随笔可以继续出现在同一个 RSS 中，但公开列表和导航分别呈现。

## 影响

- 主导航固定为首页、项目、研究、随笔、关于、简历。
- 研究筛选与随笔筛选使用各自的集中配置，避免分类相互污染。
- 无已发布随笔时，`/notes/` 展示不进入 Pagefind 的静态空状态；不创建示例文章。
- 两篇历史产品随笔归回 `section: research`，旧 `/notes/` 地址永久重定向到对应 `/research/` 地址。
- 当前没有已发布个人随笔，因此 `/notes/` 展示真实空状态，首页不渲染最近随笔区。
