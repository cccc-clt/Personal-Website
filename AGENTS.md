# Repository instructions

## Communication and naming

- 与用户交流、需求文档、ADR 和项目说明使用简体中文。
- 代码、变量、函数、组件、类型和文件名使用英文。
- 已有技术专有名词、GitHub 仓库名和公开项目名保持原文。

## Change boundaries

- 写入文件前先展示实施计划，并等待用户确认。
- 未经明确要求，不修改现有网站功能、页面结构或视觉效果。
- 不虚构项目数据、指标、经历或外部链接。
- 修改后按影响范围运行 lint、check 和 build。

## Agent skills

### Issue tracker

本仓库使用 `.scratch/<feature-slug>/` 下的本地 Markdown 文件管理需求和 issue。参见 `docs/agents/issue-tracker.md`。

### Domain docs

本仓库使用 single-context 结构：根目录 `CONTEXT.md` 记录领域上下文，架构决策保存在 `docs/adr/`。参见 `docs/agents/domain.md`。
