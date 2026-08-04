# 资源清单

本项目只加载本地资源，不热链、不使用随机图片 API，也不使用未经授权的动漫或游戏角色。图片缺失时使用 CSS 或文字降级，不输出空 `src`。

## 第五阶段已接入

### 头像与个人名片

- [x] `public/images/avatar/tianqi-avatar.webp`（640×640；ProfileCard 头像）
- [x] `public/images/avatar/tianqi-profile-card.webp`（1200×900；About 个人名片）
- [x] PNG 发布副本保留为备用，不作为当前页面主路径
- [x] 图片保留独立 HTML 姓名、身份、求职状态和链接
- [x] 原始 PNG 保留在 `incoming-assets/`，发布副本经过尺寸与 WebP 格式优化

### 备用角色源图

- [x] `public/images/avatar/character-alt-source.png`（1086×1448；未接入页面）
- [ ] 真正去除背景后再输出透明角色立绘
- [x] 当前文件没有 Alpha 通道，棋盘格已经写入像素；不得用 CSS 伪装成透明背景
- [x] Hero 不使用方形头像或该备用源图

### 首页深海品牌插图

- [x] `public/images/banner/hero-bg.webp`（1672×941；已优化为 172KB 左右）
- [x] 原图由用户提供，已从 PNG 正确转码为 WebP
- [x] 图片缩放为首页右侧局部品牌视觉，不再作为深色全屏开场
- [x] 页面就近标注“品牌插图 · 非项目运行截图”
- [x] 姓名、岗位、价值主张和操作均保留为独立 HTML
- [x] 已删除重复且未引用的 `public/images/hero/underwater-opening.*`

### 项目真实产品封面

- [x] `src/assets/project-covers/game-ai-growth-workflow.webp` → AI 游戏增长投放与实验评测工作流
- [x] `src/assets/project-covers/ai-product-evaluation-workbench.webp` → AI Product Evaluation Workbench
- [x] `src/assets/project-covers/mobile-uiagent-evaluation-lab.webp` → Mobile UIAgent Evaluation Lab
- [x] `src/assets/project-covers/automate-ai-car-copilot.webp` → AutoMate AI Car Copilot
- [x] `src/assets/project-covers/ai-game-content-copilot.webp` → AI Game Content Copilot
- [x] `src/assets/project-covers/ai-pdf-learning-assistant.webp` → AI PDF Learning Assistant
- [x] `src/assets/project-covers/elysia-ai-character-agent.webp` → 爱莉希雅 AI 角色陪伴应用
- [x] 七张封面均为 1600×1000 WebP，且分别映射到七个真实项目
- [x] 所有封面均来自本地真实运行截图，不使用远程图片或生成式装饰图
- [x] 项目卡片、首页精选与详情 Hero 共用 Content Collection 中的同一份封面数据

### 安全降级与真实性

- [x] AI Product Evaluation Workbench 使用独立图片，不重复其他项目封面
- [x] 已删除 AI Product Evaluation Workbench 专用 CSS 占位封面
- [x] 图片路径缺失时回退到通用 CSS 视觉或文字，不输出空 `src`
- [x] Gallery 只接受真实截图；缺失时显示诚实状态，不重复概念图冒充证据

## 尚未提供

- [ ] `public/images/avatar/character.png`（真正透明的原创看板娘立绘）
- [ ] 七个项目的更多过程截图；当前 Gallery 使用真实产品封面并诚实说明暂无更多图片
- [ ] 三个首页研究选题的独立真实封面；当前已发布文章复用并标注品牌插图，两个整理中选题使用 CSS 占位视觉
- [ ] “二次元跨端 RPG 竞品研究”与“二次元开放世界玩家评论洞察”的可发布正文和可核验材料
- [ ] 新的 404 插图（当前可继续使用已存在的本地插图或文字降级）
- [ ] 三份正式简历 PDF
- [ ] 真实邮箱与正式域名

## 固定原则

- [x] 不调用 imagegen
- [x] 不下载或热链远程图片
- [x] 不把概念图冒充真实项目截图
- [x] 首页、头像、名片和项目封面均有安全降级
- [x] 远程图片开关保持关闭
