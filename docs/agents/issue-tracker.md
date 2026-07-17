# Issue tracker：本地 Markdown

本仓库暂未关联远程 Git 仓库。需求、规格说明和实施 issue 使用 `.scratch/` 下的 Markdown 文件管理。

## 目录约定

- 每个功能使用独立目录：`.scratch/<feature-slug>/`
- 需求或规格说明：`.scratch/<feature-slug>/spec.md`
- 实施 issue：`.scratch/<feature-slug>/issues/<NN>-<slug>.md`
- issue 从 `01` 开始编号，每个 issue 使用独立文件
- `<feature-slug>` 和 `<slug>` 使用英文 kebab-case
- 文档正文使用简体中文
- issue 状态通过文件顶部附近的 `Status:` 字段记录
- 讨论记录追加在文件末尾的 `## Comments` 下

## 发布到 issue tracker

当技能要求“发布到 issue tracker”时，在 `.scratch/<feature-slug>/` 下创建相应 Markdown 文件；目录不存在时可以创建。

## 获取 issue

优先读取用户提供的文件路径。用户只提供编号时，在对应功能目录的 `issues/` 中查找匹配文件。

## Wayfinding 约定

- 工作地图：`.scratch/<effort>/map.md`
- 子任务：`.scratch/<effort>/issues/<NN>-<slug>.md`
- `Type:` 可使用 `research`、`prototype`、`grilling` 或 `task`
- `Status:` 可使用 `open`、`claimed`、`blocked` 或 `resolved`
- 依赖通过 `Blocked by: NN, NN` 表示
- 开始处理前将状态改为 `claimed`
- 完成后在 `## Answer` 下记录结果，并将状态改为 `resolved`
- 重要结论和上下文入口同步追加到 `map.md`
