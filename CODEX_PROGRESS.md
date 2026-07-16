# 重建进度

> 每个阶段完成后更新并提交。恢复工作时先看本文件，再运行 `git status`。

| 阶段            | 状态   | 完成内容                                                                                        |
| --------------- | ------ | ----------------------------------------------------------------------------------------------- |
| 0. 安全基线     | 已完成 | 初始化本地 Git；提交旧站；创建 `backup-before-rebuild`；确认无真实图片与简历需要迁移            |
| 1. 工程架构     | 已完成 | Astro 7 + MDX + Content Collections + 原生 CSS；移除 Tailwind；新增 validate                    |
| 2. 内容数据     | 已完成 | 七个项目迁移为严格 Schema 的 MDX；未新增虚构指标或链接                                          |
| 3. 视觉系统     | 已完成 | tokens、排版、光感、动效、项目封面与成年女性数字向导 CSS 回退                                   |
| 4. 首页体系     | 已完成 | 通用 / 游戏 / Agent / 智能汽车共享首页；沉浸 Hero、品牌叙事、杂志式项目、能力、About 与联系收尾 |
| 5. 项目与案例页 | 已完成 | `/projects` 无 JS 可见筛选与杂志式展览；七个 MDX 详情；项目概念封面；缺图画廊回退               |
| 6. 内容页与交互 | 已完成 | About、可打印 Resume、Credits、数字向导 404；导航、筛选、复制邮箱、画廊、键盘与 reduced motion  |
| 7. 部署与文档   | 已完成 | Cloudflare headers/redirects、SEO、四套本地 OG、README、资源与简历说明                          |
| 8. 验收         | 已完成 | format、Lint、类型、生产构建与 validate 通过；完成多路由、多视口和键盘交互检查                  |

## 最终验收（2026-07-17）

- 修复画廊空 `src`：只为本地真实文件创建图片与灯箱节点，首张有效图初始化灯箱；无图时使用项目 CSS 概念封面与说明。
- 画廊图片具备 `alt`、`width`、`height`、`loading`、`decoding` 与 `sizes`；灯箱支持原生 Escape、遮罩关闭与焦点归还。
- 修复移动菜单按钮关闭和 Escape 关闭后的焦点归还；项目方向筛选已在浏览器验证。
- 修复自定义 MDX 加载器的延迟渲染衔接，七个项目详情页的 01–07 结构与正文均已进入生产 HTML。
- `npm run format`、`npm run lint`、`npm run check`、`npm run build`、`npm run validate` 全部通过。
- `dist/` 生成 16 个静态页面；指定主路由、七个项目详情、404、站点地图、`_headers` 与 `_redirects` 均存在。
- 375px、390px、430px 共 30 个“路由 × 视口”浏览器检查无横向滚动、破图或空标题；首页姓名、岗位与主按钮处于首屏内。
- 生产 HTML 未发现空 `href`、空 `src`、`href="#"`、`undefined` 文本或远程图片依赖；缺失 PDF 不生成下载链接。

## 可恢复节点

- 旧站提交：`2e189c4`
- 旧站备份分支：`backup-before-rebuild`
- 当前开发分支：`main`
- 原创角色图像生成因网络失败未写入；当前安全使用 `src/styles/character.css` 的成年女性 CSS 数字向导，页面不会请求缺失图片。
- `astro sync` 在 Astro 7 / Windows 上使用 `glob()` 时触发 Vite CJS 加载错误；当前使用本地 MDX loader，并为 MDX entry 启用 deferred render，内容同步、正文渲染与生产构建均已通过。
- 仍待用户补充的真实资源：原创角色图、七个项目截图、真实邮箱、正式简历 PDF；真实域名与外链也仍为部署前待替换项。
