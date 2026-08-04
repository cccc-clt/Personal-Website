# 随笔写作指南

个人随笔用于记录游戏比赛、Game Jam 开发过程、个人游戏体验和阶段性成长。产品方法、模型判断和 AI 产品观察仍属于“研究”栏目中的产品随笔，不使用 `section: notes`。

随笔继续存放在 `src/content/research/`，通过 `section: notes` 生成 `/notes/<slug>/`。开始写作时保持 `status: draft`；确认事实、证据与表达边界后，再单独修改为 `published`。

以下三个模板均包含当前 Schema 所需的完整通用 Frontmatter。没有真实 PDF 或封面时，不添加可选的 `pageCount`、`pdfUrl`、`cover` 和 `coverAlt`。

## 模板一：比赛记录

建议结构：

1. 为什么参加
2. 比赛规则和限制
3. 最初的游戏创意
4. 我承担的工作
5. 核心玩法如何形成
6. 中途遇到的问题
7. 删除了哪些功能
8. AI 是否进入核心玩法
9. 最终产物和证据
10. 如果重新做一次会调整什么

```yaml
---
title: '待填写：比赛记录标题'
subtitle: ''
type: '随笔'
section: 'notes'
kind: 'game-jam-note'
category: 'game-jam'
publishDate: '2026-08-04'
updatedDate: '2026-08-04'
readingTime: '待填写'
description: '待填写：说明比赛、记录范围和核心问题。'
tags: []
featured: false
homepageFeatured: false
slug: 'draft-game-jam-note'
status: 'draft'
coreJudgment: '待填写：这次比赛留下的个人判断。'
researchBoundary: '本文为个人参赛与开发过程记录，不代表完整用户研究；比赛规则、分工和结果以可核验材料为准。'
methodology: []
questions: []
keyFindings: []
contentStructure: []
metrics: []
relatedProjects: []
relatedInsights: []
---
```

## 模板二：游戏记录

建议结构：

1. 本次游玩范围
2. 哪个瞬间最打动我
3. 哪个机制带来了这种体验
4. 它服务哪类玩家
5. 它付出了什么代价
6. 我的个人感受
7. 仍需验证的问题

```yaml
---
title: '待填写：游戏记录标题'
subtitle: ''
type: '随笔'
section: 'notes'
kind: 'game-record-note'
category: 'game-record'
publishDate: '2026-08-04'
updatedDate: '2026-08-04'
readingTime: '待填写'
description: '待填写：说明游戏、体验范围和留下的具体问题。'
tags: []
featured: false
homepageFeatured: false
slug: 'draft-game-record-note'
status: 'draft'
coreJudgment: '待填写：本次体验留下的个人判断。'
researchBoundary: '本文为个人游玩记录，不代表完整用户研究；游戏内容、版本和个人体验可能随更新与游玩进度变化。'
methodology: []
questions: []
keyFindings: []
contentStructure: []
metrics: []
relatedProjects: []
relatedInsights: []
---
```

## 模板三：成长随记

建议结构：

1. 当前阶段
2. 遇到的问题
3. 原来的判断
4. 实际发生了什么
5. 学到的方法
6. 下一步行动

```yaml
---
title: '待填写：成长随记标题'
subtitle: ''
type: '随笔'
section: 'notes'
kind: 'growth-note'
category: 'growth-record'
publishDate: '2026-08-04'
updatedDate: '2026-08-04'
readingTime: '待填写'
description: '待填写：说明当前阶段、遇到的问题和复盘范围。'
tags: []
featured: false
homepageFeatured: false
slug: 'draft-growth-note'
status: 'draft'
coreJudgment: '待填写：这一阶段值得保留的方法或教训。'
researchBoundary: '本文为个人阶段性复盘，只描述当时的背景、判断和行动，不把个人经验包装为普遍结论。'
methodology: []
questions: []
keyFindings: []
contentStructure: []
metrics: []
relatedProjects: []
relatedInsights: []
---
```

`relatedProjects` 填项目 slug，`relatedInsights` 填研究或随笔 slug；只填写确实相关且已经存在的内容。草稿不会生成详情路由，也不会进入 Pagefind、RSS 或 sitemap。
