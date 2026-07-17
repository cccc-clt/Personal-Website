# Mizuki 重建进度

> 恢复工作时先阅读本文件，再运行 `git status` 与 `git log --oneline -8`。不要重新初始化仓库，不要重新拉取 Mizuki，也不要覆盖当前有效修改。

## 当前阶段（2026-07-17）

| 阶段 | 状态 | 当前真实情况 |
| --- | --- | --- |
| 0. 恢复检查 | 已完成 | 当前分支为 `main`；`backup-tech-theme` 存在；迁移前恢复提交 `634f4ef` 存在；旧站基线 `2e189c4` 保留 |
| 1. Mizuki 基础迁移 | 已完成 | 保留悬浮导航、Banner、三栏布局、左右侧栏、Swup、明暗主题与 Pagefind；包管理器为 npm，锁文件为 `package-lock.json` |
| 2. 首页重建 | 已完成 | 首页保持浅色、柔和、二次元博客感；本轮对 6 个首页结构文件做哈希核对，确认没有修改 |
| 3. 项目索引与详情 | 已完成 | `/projects/` 与 7 个项目详情路由已完成；6 个公开 GitHub 项目依据 README 校对，另 1 个既有本地案例明确标注仓库未公开且不声明运行数据 |
| 4. About 内容页 | 已完成 | `/about/` 使用 Mizuki Markdown 内容集合，移除未经证实的年份、经历和数字，补充真实项目来源说明与 GitHub 入口 |
| 5. Game 基础结构 | 已完成 | `/game/` 提供真实记录的字段模板、内容列表和无内容空状态；没有虚构游戏记录 |
| 6. Stack 基础结构 | 已完成 | `/stack/` 只展示可从公开仓库、当前站点或本地案例确认的工具用途，并链接到对应证据项目 |
| 7. 工程验证 | 已完成 | `npm install`、`npm run lint`、`npm run check`、`npm run build` 已通过；Astro 与 Pagefind 生产构建成功 |
| 8. 其余内页定稿 | 未完成 | `/resume/`、`/moments/`、`/archive/`、`/credits/` 与 `/404.html` 尚未进入下一轮内容和交互验收 |
| 9. 正式资源与部署 | 未完成 | 等待真实截图、简历、邮箱与正式域名；设置 `SITE_URL` 后再完成正式部署配置 |

## 第二阶段完成内容

- `/projects/` 增加来源统计，明确区分 6 个已核验公开仓库和 1 个仓库未公开的本地案例。
- 7 个项目详情页统一展示内容来源、真实项目名、视觉代号、职责、工作流、AI 设计、人工节点、评测关注项、失败边界、迭代记录与下一步。
- 删除项目 frontmatter 中的封面与截图占位路径；本轮没有生成、下载或热链图片。
- 公开项目内容依据对应 GitHub README 校对：
  - `ai-product-evaluation-workbench`
  - `mobile-uiagent-evaluation-lab`
  - `automate-ai-car-copilot`
  - `ai-game-content-copilot`
  - `ai-pdf-learning-assistant`
  - `elysia-ai-character-agent`
- `ai-game-growth-workflow` 没有可核验的公开 GitHub 仓库，因此不添加虚构链接，不填写投放、转化、效率或其他运行结果。
- `/about/` 改为可核验的个人方法、项目实践、能力边界与求职方向说明。
- `/game/` 保留空状态，并建立以后录入真实体验记录所需的字段与展示结构。
- `/stack/` 建立工具、用途、场景、证据项目与下一步之间的对应关系。
- 首页结构文件的 Git blob 哈希与阶段开始前记录完全一致。

## 验证结果

- `npm install`：通过；依赖已是最新状态，审计为 0 个漏洞。
- `npm run lint`：通过。
- `npm run check`：通过；47 个文件，0 errors / 0 warnings / 0 hints。
- `npm run build`：通过；Astro 生成 17 个页面。
- Pagefind：通过；索引 17 个页面、1239 个词。
- `dist/`：已生成；包含 `/projects/`、7 个项目详情、`/about/`、`/game/`、`/stack/` 与 Pagefind 索引。

## 下一轮内页范围

本轮按要求停止，不继续制作以下内页：

- `/resume/`：接入真实简历 PDF 后完成下载入口与内容校对
- `/moments/`：仅在有真实文章后补充内容和归档体验
- `/archive/`：结合真实文章与项目记录完成归档逻辑
- `/credits/`：校对依赖、主题与资源署名
- `/404.html`：补充最终文案和可选插画后的视觉验收

还可在下一轮对本阶段页面进行移动端和键盘交互验收，但不要改回虚构数据或不存在的项目能力。

## 等待用户补充

- 6 个公开 GitHub 项目的真实界面截图；本地案例若需要继续展示，也需提供可公开的工作流截图或文档
- 首页 Banner：`home.webp`，可选 `home-1440.webp`、`home-960.webp` 与 `character-mobile.webp`
- 个人资料头像：`avatar.webp`
- 可选看板娘立绘：`character.webp`
- 可选 About 与 404 插画
- 3 份正式简历 PDF
- 真实邮箱、正式域名和需要公开的其他真实外链

完整资源路径与降级规则见 `ASSET_CHECKLIST.md`。

## 可恢复节点

- 旧站提交：`2e189c4`
- 旧站备份分支：`backup-before-rebuild`
- 科技主题备份分支：`backup-tech-theme`
- Mizuki 迁移前检查点：`634f4ef`
- 首页重建提交：`a6fe16c`
- 当前开发分支：`main`
