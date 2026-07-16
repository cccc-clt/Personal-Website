# 重建进度

> 每个阶段完成后更新并提交。恢复工作时先看本文件，再运行 `git status`。

| 阶段 | 状态 | 完成内容 |
| --- | --- | --- |
| 0. 安全基线 | 已完成 | 初始化本地 Git；提交旧站；创建 `backup-before-rebuild`；确认无真实图片与简历需要迁移 |
| 1. 工程架构 | 已完成 | Astro 7 + MDX + Content Collections + 原生 CSS；移除 Tailwind；新增 validate |
| 2. 内容数据 | 已完成 | 七个项目迁移为严格 Schema 的 MDX；未新增虚构指标或链接 |
| 3. 视觉系统 | 已完成 | tokens、排版、光感、动效、项目封面与成年女性数字向导 CSS 回退 |
| 4. 首页体系 | 已完成 | 通用 / 游戏 / Agent / 智能汽车共享首页；沉浸 Hero、品牌叙事、杂志式项目、能力、About 与联系收尾 |
| 5. 项目与案例页 | 已完成 | `/projects` 无 JS 可见筛选与杂志式展览；七个 MDX 详情；项目概念封面；缺图画廊回退 |
| 6. 内容页与交互 | 进行中 | 正在迁移 About、Resume、Credits、404，并完善键盘与 reduced motion |
| 7. 部署与文档 | 待开始 | Cloudflare 配置、SEO、README、资源清单 |
| 8. 验收 | 待开始 | 格式、Lint、类型、生产构建、浏览器多视口检查 |

## 可恢复节点

- 旧站提交：`2e189c4`
- 旧站备份分支：`backup-before-rebuild`
- 当前开发分支：`main`
- 原创角色图像生成因网络失败未写入；当前安全使用 `src/styles/character.css` 的成年女性 CSS 数字向导，页面不会请求缺失图片。
- `astro sync` 在 Astro 7 / Windows 上使用 `glob()` 时触发 Vite CJS 加载错误，当前使用 Astro 支持的 `type: 'content'` 集合配置读取 `src/content/projects`，同步已通过。
