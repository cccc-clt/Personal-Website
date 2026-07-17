# Mizuki 重建进度

> 恢复工作时先阅读本文件，再运行 `git status` 与 `git log --oneline -8`。不要重新初始化仓库，不要重新拉取 Mizuki，也不要覆盖当前有效修改。

## 当前阶段（2026-07-17）

| 阶段 | 状态 | 当前真实情况 |
| --- | --- | --- |
| 0. 恢复检查 | 已完成 | 当前分支为 `main`；`backup-tech-theme` 存在；迁移前恢复提交 `634f4ef` 存在；旧站基线 `2e189c4` 保留 |
| 1. Mizuki 基础迁移 | 已完成 | 保留悬浮导航、Banner、三栏布局、左右侧栏、Swup、明暗主题与 Pagefind；包管理器为 npm，锁文件为 `package-lock.json` |
| 2. 首页重建 | 已完成 | 首页改为浅色、柔和、二次元博客感；完成 Banner、个人资料卡、精选项目、实践方法、时间线与右侧小组件；真实项目名为主体，视觉代号仅作副标题 |
| 3. 内容清理 | 已完成 | 移除公开示例随想与虚构日期标签；占位邮箱和域名不再生成链接；无远程图片；Mizuki/Fuwari 信息仅保留必要的开源署名 |
| 4. 资源降级 | 已完成 | Banner 每个响应式候选独立检测；头像缺失显示 `TQ`；看板娘缺失不创建图片节点；About、404 与项目截图均有本地 CSS 回退 |
| 5. 工程验证 | 已完成 | `npm install`、`npm run lint`、`npm run check`、`npm run build` 已通过；Pagefind 已完成生产索引 |
| 6. 全部内页定稿 | 未完成 | 本轮按要求停止在首页与构建；现有内页可构建和访问，但仍需下一轮逐页校对内容、布局与移动端细节 |
| 7. 正式资源与部署 | 未完成 | 等待用户补充图片、简历、邮箱与正式域名；设置 `SITE_URL` 后再生成 Canonical、Sitemap、RSS 与绝对社交分享链接 |

## 本轮完成内容

- 首页 Banner 在无图状态下使用浅蓝、淡紫、浅粉 CSS 渐变，不再出现深色科技仪表盘、全息 HUD、星系网络或持续发光。
- 首页使用真实项目集合动态生成精选项目与项目数量；项目卡先展示真实项目名，再展示视觉代号。
- 右侧小组件只展示可从仓库确认的项目数量、关注方向、工具链和真实项目入口，不添加用户量、转化率、延迟、覆盖率或其他商业指标。
- `/moments/` 不再公开展示演示文章；无真实文章时显示明确空状态。
- 未提供邮箱时不生成 `mailto:`；未设置 `SITE_URL` 时不生成占位 Canonical、Sitemap、RSS 或绝对社交图链接。
- 更新 `ASSET_CHECKLIST.md`、图片目录说明、简历文件名说明和资源状态记录。
- 本轮未调用 imagegen，未下载或热链远程动漫图片。

## 验证结果

- `npm install`：通过，依赖已是最新状态，审计为 0 个漏洞。
- `npm run lint`：通过。
- `npm run check`：通过，47 个文件 0 errors / 0 warnings / 0 hints。
- `npm run build`：通过，Astro 生成 17 个页面，Pagefind 索引 17 个页面。
- `dist/`：已生成；包含首页、项目、内容页、`_headers`、`_redirects` 与 `pagefind/`。
- 阶段性提交信息：`feat: rebuild homepage with Mizuki layout`。

## 下一轮内页范围

以下路由已经具备可构建骨架，但尚未作为本轮完成项验收：

- `/projects/` 与 7 个 `/projects/[slug]/` 案例详情页
- `/about/`
- `/resume/`
- `/game/`
- `/moments/`
- `/stack/`
- `/archive/`
- `/credits/`
- `/404.html`

下一轮应逐页检查真实内容、链接、移动端排版、键盘交互和图片降级；不要把空状态改造成虚构文章或虚构成绩。

## 等待用户补充

- 首页 Banner：`home.webp`，可选 `home-1440.webp`、`home-960.webp` 与 `character-mobile.webp`
- 个人资料头像：`avatar.webp`
- 可选看板娘立绘：`character.webp`
- 7 个项目的真实截图
- 可选 About 与 404 插画
- 3 份正式简历 PDF
- 真实邮箱、正式域名和需要公开的其他真实外链

完整路径与降级规则见 `ASSET_CHECKLIST.md`。

## 可恢复节点

- 旧站提交：`2e189c4`
- 旧站备份分支：`backup-before-rebuild`
- 科技主题备份分支：`backup-tech-theme`
- Mizuki 迁移前检查点：`634f4ef`
- 当前开发分支：`main`
