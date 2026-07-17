# 资源清单

本项目只加载本地资源，不热链、不使用随机图片 API，也不使用未经授权的动漫或游戏角色。下列图片缺失时，页面使用 CSS 或文字占位，不输出空 `src` 或请求不存在的文件。

## 首页 Banner

- [ ] `public/assets/images/banner/home.webp`（桌面主图，建议 1920×900）
- [ ] `public/assets/images/banner/home-1440.webp`（可选响应式版本）
- [ ] `public/assets/images/banner/home-960.webp`（可选响应式版本）
- [ ] `public/assets/images/character-mobile.webp`（可选移动端构图）
- [x] 每个 `srcset` 候选在构建时单独检查；缺失版本不会写入 HTML
- [x] 全部 Banner 图片缺失时显示浅蓝、淡紫与浅粉 CSS 渐变，不出现破图

## 头像与看板娘

- [ ] `public/assets/images/avatar.webp`（个人资料卡头像，建议 512×512）
- [ ] `public/assets/images/character.webp`（后续可选看板娘立绘；本轮未接入页面）
- [x] 头像缺失时显示 `TQ` 文字头像
- [x] 看板娘文件缺失时不创建图片节点，不产生网络请求

## 内页可选插画

- [ ] `public/assets/images/about.webp`
- [ ] `public/assets/images/404.webp`
- [x] About 与 404 插画缺失时显示本地 CSS 占位

## 项目真实截图（待用户补充）

- [ ] AI Product Evaluation Workbench
- [ ] AI 游戏增长投放与实验评测工作流
- [ ] Mobile UIAgent Evaluation Lab
- [ ] AutoMate AI Car Copilot
- [ ] AI Game Content Copilot
- [ ] AI PDF Learning Assistant
- [ ] Elysia AI 角色 Agent
- [x] 截图缺失时使用每个项目自己的浅色 CSS 概念封面

## 社交分享图

- [x] 通用首页 OG（本地品牌排版图）
- [x] 游戏 AI OG（本地品牌排版图）
- [x] Agent OG（本地品牌排版图）
- [x] 智能汽车 OG（本地品牌排版图）

## 简历

- [ ] `public/resume/resume-general.pdf`
- [ ] `public/resume/resume-game.pdf`
- [ ] `public/resume/resume-auto.pdf`
- [x] PDF 缺失时只显示“待补充”或在线简历入口，不生成 404 下载链接

## 待用户补充的信息

- [ ] 真实邮箱（当前为空；页面不生成 `mailto:` 链接）
- [ ] 正式域名（部署时通过 `SITE_URL` 提供；未提供时不生成 Canonical、Sitemap 与绝对社交图链接）
- [ ] 需要公开的其他真实外链

## 本轮降级检查

- [x] 不调用 imagegen
- [x] 不下载或热链远程动漫图片
- [x] Banner、头像、看板娘、About 与 404 均有安全降级
- [x] 远程图片开关保持关闭
