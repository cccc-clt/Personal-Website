# ADR 0002：发布随笔与研究聚合页及 PDF 报告

状态：已接受（2026-08-03）

日期：2026-08-03

## 背景

网站已有统一 `research` Content Collection 和 `/research/` 聚合页，但现在有三份研究报告与两份 AI 产品随笔需要正式发布。公开信息架构需要同时表达内容类型，并为报告提供真实封面、可搜索摘要和本地 PDF 阅读能力。

## 决策

- 继续使用单一 `research` Content Collection，避免首页、聚合页和详情页形成重复数据源。
- 新增 `/insights/` 作为“随笔与研究”统一聚合入口。
- `section: research` 的详情继续使用 `/research/<slug>/`。
- `section: notes` 的详情使用 `/notes/<slug>/`。
- 旧 `/research/` 聚合入口重定向到 `/insights/`；旧 `/game/` 与 `/moments/` 同步指向新的聚合筛选。
- PDF 存放在 `public/reports/`，封面使用 PDF 真实第一页生成并存放在 `src/assets/report-covers/`。
- 详情页同时提供可被搜索引擎读取的结构化摘要、本地 PDF 预览、新窗口打开和下载入口。

## 与 ADR 0001 的关系

本决策保留 ADR 0001 的核心原则：内容仍由一个集合统一管理，草稿不生成路由、搜索或 RSS 条目。

本决策取代 ADR 0001 中“统一入口固定为 `/research/`”以及 `/game/`、`/moments/` 的具体重定向目标。变化只发生在公开路由和栏目命名，不重新拆分内容集合。

## 影响

- 主导航名称改为“随笔与研究”，路径为 `/insights/`。
- 首页只展示三篇指定的精选研究，完整内容在聚合页展示。
- sitemap、RSS、Pagefind 和结构化数据需要使用每篇内容的实际详情路径。
- PDF 不依赖远程查看器，也不会上传到第三方平台。
