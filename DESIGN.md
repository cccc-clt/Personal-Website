---
version: alpha
name: Starlit Mizuki Portfolio
description: 蓝白与浅紫星光构成的日系二次元游戏 AI 产品作品集设计系统
colors:
  light-page: '#EDF3F8'
  light-surface: 'rgba(255, 255, 255, 0.88)'
  light-surface-solid: '#FFFFFF'
  light-surface-soft: '#F5F8FB'
  light-text-main: '#202431'
  light-text-secondary: '#667080'
  light-text-muted: '#8A94A3'
  primary: '#60A5E8'
  primary-strong: '#3A86C8'
  primary-soft: '#DCEEFF'
  violet: '#9A8BD8'
  pink: '#E9A6BD'
  mint: '#83D8C2'
  gold: '#E3BD72'
  dark-page: '#181D27'
  dark-surface: 'rgba(38, 45, 59, 0.90)'
  dark-surface-solid: '#252C3A'
  dark-text-main: '#EDF2F7'
  dark-text-secondary: '#B3BDCB'
typography:
  display:
    fontFamily: 'Inter Variable, Noto Sans SC Variable, PingFang SC, sans-serif'
    fontSize: '96px'
    fontWeight: 700
    lineHeight: 1
    letterSpacing: '-0.04em'
  headline-large:
    fontFamily: 'Inter Variable, Noto Sans SC Variable, PingFang SC, Microsoft YaHei, sans-serif'
    fontSize: '56px'
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: '-0.025em'
  headline-medium:
    fontFamily: 'Inter Variable, Noto Sans SC Variable, PingFang SC, Microsoft YaHei, sans-serif'
    fontSize: '36px'
    fontWeight: 700
    lineHeight: 1.14
    letterSpacing: '-0.02em'
  body-large:
    fontFamily: 'Inter Variable, Noto Sans SC Variable, PingFang SC, Microsoft YaHei, sans-serif'
    fontSize: '18px'
    fontWeight: 400
    lineHeight: 1.75
    letterSpacing: '0em'
  body-medium:
    fontFamily: 'Inter Variable, Noto Sans SC Variable, PingFang SC, Microsoft YaHei, sans-serif'
    fontSize: '16px'
    fontWeight: 400
    lineHeight: 1.75
    letterSpacing: '0em'
  body-small:
    fontFamily: 'Inter Variable, Noto Sans SC Variable, PingFang SC, Microsoft YaHei, sans-serif'
    fontSize: '13px'
    fontWeight: 400
    lineHeight: 1.7
    letterSpacing: '0em'
  label:
    fontFamily: 'Inter Variable, Noto Sans SC Variable, PingFang SC, Microsoft YaHei, sans-serif'
    fontSize: '12px'
    fontWeight: 600
    lineHeight: 1.5
    letterSpacing: '0.06em'
rounded:
  xs: '8px'
  sm: '14px'
  md-compat: '22px'
  lg-compat: '32px'
  full: '999px'
spacing:
  micro: '4px'
  xs: '8px'
  sm: '12px'
  md: '16px'
  lg: '24px'
  xl: '32px'
  2xl: '48px'
  3xl: '72px'
  section-min: '72px'
  section-max: '128px'
  desktop-gutter: '24px'
  mobile-gutter: '14px'
components:
  button-primary:
    backgroundColor: '{colors.light-text-main}'
    textColor: '{colors.light-surface-solid}'
    rounded: '{rounded.full}'
    height: '50px'
    padding: '12px 20px'
  button-secondary:
    backgroundColor: 'rgba(255, 255, 255, 0.68)'
    textColor: '{colors.light-text-main}'
    rounded: '{rounded.full}'
    height: '50px'
    padding: '12px 20px'
  chip:
    backgroundColor: 'rgba(255, 255, 255, 0.70)'
    textColor: '{colors.light-text-secondary}'
    rounded: '{rounded.full}'
    padding: '7px 11px'
---

# Design System

## Overview

本设计系统服务于游戏 AI 产品经理求职作品集。核心不是把“AI”“游戏”和“二次元”分别做成显眼装饰，而是让它们形成同一种个人气质：清澈的蓝白底色、浅紫星光、精致原创角色、真实项目场景与克制的技术表达共同构成 Tianqi.Z 的品牌世界。

设计 register 为品牌型个人作品集：设计本身需要留下印象，但项目内容、证据边界和招聘浏览效率始终拥有最高优先级。视觉不得滑向普通 SaaS、企业后台或 AI Dashboard。

### 物理场景

招聘负责人在办公室的日间屏幕上，从简历链接打开网站，希望在短时间内判断候选人的方向与代表项目；浅色主题是主要阅读环境，深色主题作为个人偏好支持，而不是默认营造“AI 很酷”的黑色界面。

### 品牌关键词

- 星光感：轻盈、清澈、带有幻想世界入口的情绪。
- 游戏文化：角色、陪伴、叙事、世界观与交互细节自然存在，不依赖官方素材或游戏 Logo。
- 产品可信度：项目结构、来源说明、人工节点、失败与评测比装饰更醒目。
- 日系精致：高质量原创角色和细腻配色形成品牌辨识度，不使用廉价萌系贴纸或通用二次元模板。
- 克制技术感：技术通过真实工作流、术语和项目内容表达，不通过无意义线框与数据面板表达。

### 视觉比例

| 视觉角色       | 比例 | 主要承担内容                                                |
| -------------- | ---: | ----------------------------------------------------------- |
| 专业求职作品集 |  40% | 信息层级、项目证据、职责、方法、评测、来源、简历与转化路径  |
| 二次元个人博客 |  30% | 角色形象、星光、柔和配色、个人语气和 Mizuki 内容氛围        |
| 游戏文化       |  20% | 角色陪伴、叙事与世界观气质、游戏场景细节、轻量视觉代号      |
| AI 技术表达    |  10% | Agent、RAG、Prompt、Evaluation 的真实流程、标签和结构化说明 |

这个比例描述注意力与表达方式，不是要求每一屏机械分配面积。项目详情页中作品集与技术内容比例可以提高；About、Game 和品牌首屏中二次元与游戏文化比例可以提高，但专业可读性不能低于基本阈值。

### 当前实现基线与规范化方向

当前实现已经形成稳定的蓝白浅紫身份、深海二次元动态 Hero、三个代表项目的线性首页、原创角色资产、七张统一项目封面、明暗主题与自托管可变字体策略。Hero 使用用户提供的横向深海图，通过深蓝遮罩、少量气泡和克制光效营造游戏启动界面感；首页正文仍保持明亮、开放的招聘作品集阅读环境。首页已经移除三栏信息墙、重复侧栏和大部分通用 `.panel` 容器；原有三栏组件仍作为兼容代码保留，但不再代表首页的默认结构。其他内页中尚存的重复 eyebrow、22–32px 大圆角与宽软阴影属于兼容现状，不鼓励新界面继续复制。

后续新增或重做界面时，优先使用内容分组、留白、分隔线、图片与排版建立层级；玻璃、光效、自由形状和大圆角只在品牌首屏、悬浮导航、搜索浮层或角色舞台中有明确用途时使用。

## Colors

### 色彩策略

采用“品牌色明确、内容面克制”的 Full palette 策略。蓝色负责交互与清澈感，浅紫负责幻想和角色品牌，粉色只用于情绪补色，薄荷绿用于安全、可用或在线状态，金色只作为星光饰品的微量高光。正文区域以浅蓝灰底、白色内容面和深色文字维持长文阅读。

### 浅色主题

| Token            | 值                      | 用途                                                         |
| ---------------- | ----------------------- | ------------------------------------------------------------ |
| `page-bg`        | `#EDF3F8`               | 全站浅蓝灰页面背景，承载日间阅读                             |
| `surface`        | `rgba(255,255,255,.88)` | 现有半透明面板兼容值；不得作为所有内容的默认容器             |
| `surface-solid`  | `#FFFFFF`               | 项目正文、卡片和关键阅读面                                   |
| `surface-soft`   | `#F5F8FB`               | 次级分区、表格行、工具说明和非交互背景                       |
| `text-main`      | `#202431`               | 标题、正文重点和主要图标                                     |
| `text-secondary` | `#667080`               | 正文辅助说明；在浅页面背景上对比度接近最低要求，避免继续变浅 |
| `text-muted`     | `#8A94A3`               | 仅用于非关键元数据；不得用于小字号正文或核心操作             |
| `primary`        | `#60A5E8`               | 品牌蓝、轻量状态和局部装饰                                   |
| `primary-strong` | `#3A86C8`               | 文本链接与交互强调；小字号白底文字使用前需复核对比度         |
| `primary-soft`   | `#DCEEFF`               | 选中背景、说明区和浅色过渡                                   |
| `violet`         | `#9A8BD8`               | 视觉代号、幻想气质和次级品牌强调                             |
| `pink`           | `#E9A6BD`               | 情绪补色与温柔氛围，不作为错误色                             |
| `mint`           | `#83D8C2`               | 可用、在线、安全确认和积极状态                               |
| `gold`           | `#E3BD72`               | 星形饰品与极少量精致高光，面积应低于页面的 2%                |

### 深色主题

深色主题使用 `#181D27` 页面背景、`#252C3A` 实体内容面、`#EDF2F7` 主文字和 `#B3BDCB` 次文字。蓝紫色在深色主题中提高明度，但不能扩展为霓虹灯、终端界面或赛博朋克数据大屏。深色内容面仍以可读性和层级为先，装饰光晕的透明度应低于浅色主题。

### 色彩规则

- 页面同时出现的品牌强调色不超过蓝、紫和一个情绪补色；金色仅作高光。
- 正常正文与背景至少达到 4.5:1，大字号文字至少达到 3:1。
- `text-muted` 不承担正文、按钮、输入提示、来源边界或风险说明。
- 状态不得只靠颜色表达，必须同时显示清楚的文字标签。
- 禁止渐变文字。渐变只用于大面积氛围背景、图片蒙层或品牌舞台，并保持文字为单色。
- 角色图片已经提供丰富色彩时，周围 UI 应降低饱和度，避免蓝紫光效与人物争夺焦点。

## Typography

### 字体家族

- `--font-sans`：`Inter Variable`、`Noto Sans SC Variable`、`PingFang SC`、`Microsoft YaHei`、sans-serif。正文、中文标题、导航、按钮、项目卡、普通英文副标题、状态和技术栈统一使用该栈。
- `--font-display`：`Inter Variable`、`Noto Sans SC Variable`、`PingFang SC`、sans-serif。只用于首页 Hero 的 `TIANQI.Z` 和后续确有品牌职责的大型纯英文标题。
- `--font-mono`：`JetBrains Mono`、`ui-monospace`、`SFMono-Regular`、Consolas、monospace。只用于代码、命令、版本、日期、slug、项目编号和真实技术参数；普通元数据、状态和英文标签不用等宽字体。
- Inter Variable 与 Noto Sans SC Variable 通过 Fontsource 5.3 自托管，字体文件使用 OFL-1.1；构建后由站点同源提供，不请求 Google Fonts 或海外字体 CDN。
- 字体采用 `font-display: swap`。Noto Sans SC 使用 `unicode-range` 分片且不预加载全部中文字体；字体不可用时立即回退到系统字体。
- 不自托管 JetBrains Mono。设备未安装时使用系统等宽字体，避免为少量编号和代码增加首屏负担。

### 字号层级

| 层级              | 建议范围                       | 字重 / 行高         | 用途                     |
| ----------------- | ------------------------------ | ------------------- | ------------------------ |
| Hero / Display    | `clamp(3rem, 6vw, 6rem)`       | 700 / 1–1.08        | 首页英文品牌名           |
| Page title        | `clamp(2.5rem, 5.5vw, 5.6rem)` | 700 / 1.08–1.12     | 内页 Hero 与项目标题     |
| Section title     | `clamp(1.8rem, 4vw, 3.7rem)`   | 700 / 1.12–1.2      | 章节核心标题             |
| Card / Item title | `1.15–1.55rem`                 | 600 / 1.3–1.4       | 项目名、工具名和列表条目 |
| Lead              | `1.05–1.35rem`                 | 400–600 / 1.75      | 页面简介和核心判断       |
| Body              | `1rem`                         | 400 / 1.7–1.8       | 长文正文和主要说明       |
| Supporting        | `0.8125–0.9rem`                | 400–500 / 1.65–1.75 | 项目摘要和辅助说明       |
| Metadata          | `0.6875–0.75rem`               | 500–600 / 1.5–1.7   | 状态、编号和非关键标签   |

### 排版规则

- 标题使用 `text-wrap: balance`，正文使用 `text-wrap: pretty`。
- 长文行长控制在 65–75ch，项目详情主阅读区不因宽屏无限扩张。
- 全站主要字重只使用 400、500、600、700：正文 400，导航与元数据 500，按钮、正文强调和卡片标题 600，重要页面标题 700。禁止新增 620、650、680、750 等非标准中间值。
- 中文正文不增加字间距；中文标题控制在 `-0.01em` 至 `-0.025em`。大型纯英文标题可使用 `-0.03em` 至 `-0.05em`，短全大写标签控制在 `0.05em` 至 `0.07em`。
- `.eyebrow` 使用无衬线字体、0.75rem、600、`0.06em`；只有编号、代码或真实参数语义的标签才能使用等宽字体。
- 中文正文避免大段全大写英文插入；英文只承担品牌名、技术专有名词和必要元数据。
- 小型全大写标签不能出现在每一个章节标题上方。一个页面最多保留一套有明确作用的品牌 kicker；真实流程编号和项目案例章节编号不受此限制。
- 关键正文不小于 16px；13px 只用于短辅助说明，11–12px 只用于非关键元数据。

## Layout

### 页面宽度与外边距

- 当前最大页面宽度为 `1480px`。
- 桌面容器宽度为 `min(1480px, 100vw - 48px)`，左右各至少 24px。
- 700px 以下容器宽度为 `min(100% - 28px, 1480px)`，左右各至少 14px。
- 长文阅读宽度目标为 `760px`；案例页允许侧边来源信息与正文并列，但正文段落仍控制行长。
- Section 垂直间距使用 `clamp(4.5rem, 8vw, 8rem)`，相邻相关元素内部使用更紧凑的 8–32px 节奏。

### 首页主结构

当前首页使用单一纵向叙事：

1. `100vh → 100svh → 100dvh` 渐进回退的深海动态 Hero。
2. 固定读取三个真实项目的精选项目区，第一张跨双列，其余两张并列。
3. 从需求与场景到评测与迭代的四步产品方法。
4. 仅包含在线简历、About 与 GitHub 的职业 CTA。

首页不挂载 `MainGridLayout`、`ProfileCard` 或 `RightSidebar`，不重复展示求职状态、工具云、时间线和项目快捷入口。760px 以下项目区变为单列；560px 以下方法流和职业操作转为窄屏列表。原有三栏组件及数据继续保留，不影响独立页面。

### 内页与案例页

- 普通内页 Hero 采用“文字主区 + 轻量品牌图形”两栏，760px 以下隐藏非必要图形。
- About 和案例详情采用“辅助信息侧栏 + 主阅读区”，900px 以下改为单栏且侧栏取消 sticky。
- 项目索引桌面端为两列，重点案例可以跨两列；700px 以下为单列。
- 流程、评测项和方法矩阵必须根据内容决定结构，不为凑齐三列而压缩文字。
- 用分隔线、留白和图片建立章节层级；除项目卡、搜索结果、筛选控件等确有边界的元素外，不默认创建卡片。

### 间距节奏

- 基础节奏以 4px 为微调单位，常用步长为 8、12、16、24、32、48、72、128px。
- 卡片内部常用 20–24px；长文内容面在宽屏使用 48–64px，移动端使用 24–28px。
- 同组标题与正文使用紧间距 8–16px；章节之间使用 48–96px；页面大段落之间允许更强留白。
- 不把所有 section 设置为同样上下间距；品牌首屏、项目索引和长文案例应形成不同节奏。

## Elevation & Depth

深度主要依靠页面底色、实体白色内容面、图片、分隔线与少量局部阴影，不依靠每个容器的玻璃和悬浮。

- 全站正文面优先使用实体 `surface-solid`，轻玻璃只用于悬浮 Header、Search dialog、浮动控制和 Hero 中确有前后层级的局部元素。
- 一个元素不要同时使用 1px 边框和 16px 以上模糊半径的装饰性软阴影。需要边界时选择边框；需要悬浮时选择短而克制的阴影。
- 普通内容卡阴影不超过约 `0 4px 8px rgba(57,76,101,.12)`；Hover 位移不超过 3px。
- 星光可使用很小的发光或 `drop-shadow`，不得形成持续闪烁的霓虹噪声。
- 当前 `--shadow-soft` 与 `--shadow-float` 是兼容 token，只用于已有面板和真正浮层；新组件不得默认套用。

## Shapes

- 基础 UI 圆角使用 8–16px：输入和按钮容器 12–14px，项目卡与内容分区 14–16px。
- 完整 pill 只用于短按钮、筛选项、状态和标签，不用于大段文本容器。
- 当前 `22px` 与 `32px` 为兼容现有面板和搜索浮层的 token。32px 只能用于 modal、角色舞台或明确的自由形状，不能用于普通卡片、输入和 section。
- 角色光环、空状态插图和 Hero 过渡可以使用非对称有机轮廓，但页面内同一层级不重复多种随机圆角。
- 星形、菱形和悬挂晶体是品牌装饰语言；每个视口只保留少量，不围绕每张卡重复。
- 禁止用粗侧边色条作为卡片、提示或引用的默认强调。提示信息改用完整淡色背景、图标、标题或普通分隔线。

## Components

### Header 与导航

- Header 悬浮但保持轻薄，默认透明度低，滚动后提高实体感以保障可读性。
- 桌面导航优先显示中文主标签；英文副标签只作辅助，不与中文争夺注意力。
- 900px 以下使用移动菜单；菜单必须可键盘关闭、支持 Escape、显示当前页并锁定背景滚动。
- Header 中始终保留搜索与主题操作；在线简历作为一级导航保留，不再额外重复下载按钮。390px 以下搜索与主题仍可直接操作，GitHub 在移动菜单辅助区提供。

### 卡片与内容面

- 项目卡是必要卡片：包含概念封面、真实项目名、状态、视觉代号、摘要和详情入口。首页精选卡额外显示个人职责与核心能力，不展示日期或标签堆叠；项目索引可继续显示筛选所需标签。
- 资料卡、搜索结果和工具条目只有在边界有助于扫描时使用卡片；普通文章章节、方法说明和时间线优先使用开放布局与分隔线。
- 禁止卡片套卡片。若卡片内部需要分组，使用标题、间距、细分隔线或浅色区块。
- 项目卡 Hover 只允许轻微上移、封面缩放和边界变化；内容本身在无 Hover 时必须完整可读。

### 按钮

- 主要按钮：每个关键视口最多一个最高强调行动，使用深色实体或明确品牌色，最小高度 50px。
- 次要按钮：实体浅底或单一边框，不同时叠加宽阴影；与主要按钮并排时视觉权重明显更低。
- 文字链接：用于内容中的继续阅读、GitHub 和来源核验，颜色使用 `primary-strong` 或正文色；外部链接可用 `↗`，站内前进使用 `→`。
- 移动端触控目标不小于 44×44px；禁用状态使用文字说明，不只降低透明度。

### 标签与状态

- 标签采用短文本、pill 轮廓或浅底，用于项目方向、技术栈和筛选；单张卡最多优先展示三个。
- 状态使用受控词汇 `LIVE`、`TESTED`、`ITERATING`、`ARCHIVED`，并有可读中文语境。
- Evaluation focus、Mock、Local case、Demo 与待补充项属于真实性状态，必须在内容附近说明，不能藏在 Tooltip。
- 标签不是装饰，不能为了“科技感”批量生成无信息英文词。

### 链接

- 链接文案说明目的，例如“查看项目详情”“访问 GitHub”“查看在线简历”，避免单独使用“了解更多”。
- 不存在的邮箱、简历、仓库、Demo、视频和文档不生成链接，不使用 `#` 占位。
- 文字链接 Hover 可以移动箭头或改变颜色，但不得依赖 Hover 才显示链接本身。
- 外部链接使用 `target="_blank"` 时同时提供 `rel="noreferrer"`。

### 提示与来源说明

- 来源、Mock、概念封面、同人项目和计划项说明必须靠近相关内容，优先使用淡色整块背景与明确标题。
- 风险与真实性说明的优先级高于普通辅助文案，不使用低对比度 `text-muted`。
- 不把警告写成营销式免责声明；直接说明什么是真实内容、什么不是以及依据在哪里。

## 图片使用规则

### 正式品牌与项目资产映射

| 路径                                                    | 当前用途                  | 比例 / 尺寸    | 使用边界                                         |
| ------------------------------------------------------- | ------------------------- | -------------- | ------------------------------------------------ |
| `/images/avatar/tianqi-avatar.webp`                     | 首页职业 CTA 与资料头像   | 1:1，640×640   | 个人品牌头像，不替代 HTML 姓名、身份和求职状态   |
| `/images/banner/hero-bg.webp`                           | 首页深海 Hero 背景        | 16:9，1672×941 | 用户提供；人物面部保留在安全裁切区，纯装饰空 Alt |
| `/images/avatar/tianqi-profile-card.webp`               | About 个人名片插图        | 4:3，1200×900  | 图片内文字不作为唯一信息源                       |
| `/images/avatar/character-alt-source.png`               | 未接入的备用角色源图      | 1086×1448      | 无 Alpha，棋盘格已写入像素；去背前不能当透明立绘 |
| `/images/projects/game-growth-workflow.webp`            | 游戏增长工作流概念封面    | 16:9，1672×941 | 示意数字不是真实指标，正文不得引用               |
| `/images/projects/ai-product-evaluation-workbench.webp` | 产品评测工作台概念封面    | 16:9，1672×941 | 评分、图表和数字仅为视觉概念                     |
| `/images/projects/mobile-uiagent-lab.webp`              | Mobile UIAgent 概念封面   | 16:9，1672×941 | 不代表真实设备界面或实测结果                     |
| `/images/projects/automate-car-copilot.webp`            | 智能座舱 Copilot 概念封面 | 16:9，1672×941 | 不代表真实车辆、真实控制或量产界面               |
| `/images/projects/game-content-copilot.webp`            | 游戏内容 Copilot 概念封面 | 16:9，1672×941 | 表达内容生产主题，不代表正式游戏资产             |
| `/images/projects/pdf-learning-assistant.webp`          | PDF 学习助手概念封面      | 16:9，1672×941 | 不把画面中的文档或图表当作项目证据               |
| `/images/projects/elysia-character-agent.webp`          | 角色陪伴应用概念封面      | 16:9，1672×941 | 非官方角色资产，不暗示米哈游或 HoYoverse 授权    |

PNG 头像与名片是发布备用副本，不是新的视觉角色。`/images/og/` 下四张 WebP 为脚本生成的社交分享卡，不计入页面内容图。透明看板娘 `/images/avatar/character.png`、项目真实截图与 404 插图尚未提供。

### 图片构图与裁切

- 项目封面统一使用 16:9；索引和详情优先保持完整主题，不为了填满异形卡片过度裁切人物脸部、主要设备或核心场景。
- 头像使用 1:1，个人名片使用 4:3。角色视觉的脸部、眼睛和主要手势应处于安全区域。
- 同一角色与蓝紫世界观保持品牌一致，但七张项目封面必须通过真实场景物件区分主题，不能只更换悬浮 UI 文案。
- 概念封面与真实截图在页面上使用不同标签和说明。未来 Gallery 只接入用户提供、可公开且来源清楚的真实界面或过程截图。
- 图片失败时使用明确的 CSS 或文字降级，不请求外链、不输出空 `src`、不让装饰占位冒充项目截图。

### 图片版权与替代文本

- 只使用用户提供、原创、AI 辅助原创或授权清晰的本地资源；不热链 Pixiv，不使用随机图片 API。
- 不使用官方游戏角色、Logo 或未经授权画师作品包装个人品牌。
- Alt 文本描述图片在当前页面中的真实用途和主题，不描述无法确认的指标、功能或授权关系。
- 纯装饰星光、光晕和几何图形使用空 Alt 或 `aria-hidden="true"`。

## 动效使用规则

### 当前动效语言

- Swup 页面切换使用约 180–220ms 的淡出与 3px 纵向位移。
- Hero 首次进入用约 1.6 秒完成品牌名、定位、价值主张、CTA 与滚动提示的 ease-out 分段入场；同一标签页返回首页只做约 280ms 快速淡入。
- 深海背景使用约 16 秒的 `scale(1 → 1.035)` 与 `translateY(0 → -7px)` 往返微动，右上光斑低幅呼吸，六个 CSS 气泡以不同周期缓慢上升。
- 首次状态使用会话键 `tianqi-home-hero-seen-v1`。内容在无 JavaScript 时默认可见；存储不可用时直接使用静态状态。
- 900px 以上桌面端使用 passive scroll、`requestAnimationFrame` 和单一 CSS 进度变量提供文字上移淡出、背景轻微放大与光效淡出，不拦截滚轮或触摸。
- 移动端不注册 Hero 滚动视差并减少气泡数量；`prefers-reduced-motion: reduce` 直接显示静态 Hero，同时关闭背景循环、气泡、呼吸光、入场和滚动联动。
- 按钮和项目卡 Hover 使用 2–3px 位移、边界变化和轻微图片缩放。

### 规范

- 动效解释层级、进入品牌世界或操作反馈，不用来填补静态设计缺乏重点的问题。
- 内容默认可见；不得通过等待 JavaScript class 才把正文从 `opacity: 0` 恢复。
- 进入动效优先使用 `transform`、`opacity`、轻量 `clip-path` 或局部模糊，避免动画布局属性。
- 使用 ease-out-quart / quint / expo 一类自然减速，不使用 bounce、elastic 或游戏抽卡式夸张反馈。
- 一个页面只设置一个主要首屏编排。普通 section 不重复相同的滚动淡入模板。
- 移动端降低循环动画、发光与位移幅度；动效不能增加滚动长度或遮挡按钮。
- 所有新动效同时设计 reduced-motion 状态；关闭动效后内容顺序、理解和操作不变。

## 响应式规则

### 主要断点

| 断点        | 主要变化                                                   |
| ----------- | ---------------------------------------------------------- |
| `1180px`    | 桌面导航压缩英文副标签并隐藏低权重 GitHub 文字入口         |
| `1100px`    | Hero 右侧文字区收缩，保持左侧人物面部安全区                |
| `980px`     | 三列工具网格改为两列                                       |
| `900px`     | 桌面导航切换移动菜单；Hero 改为底部文字布局并停止滚动视差  |
| `760px`     | 首页项目区、普通 Hero 和案例 Hero 转为单栏；非必要装饰隐藏 |
| `700–620px` | 项目、方法、指标、工具和图片网格逐步归一列                 |
| `560–520px` | 方法流、职业 CTA、标题和按钮组针对窄屏重排                 |

断点服务于内容，不要求所有组件机械共享同一数值。新增组件优先测试 1440、1024、768、390 和 320px，再根据真实溢出选择断点。

### 桌面端

- 首页使用开放主内容宽度与单一阅读轴；内页侧栏仍须让主阅读区保持视觉中心。
- 首屏角色舞台的宽度不得超过文字主区，也不得遮挡导航、姓名、方向和 CTA。
- Sticky 元素的 top offset 与固定 Header 保持至少 16px 安全距离。
- 宽屏不通过增加卡片列数填满空间；长文、项目封面和留白可以承担宽度。

### 移动端

- 最小支持宽度为 320px；正文、按钮、标签和标题不得水平溢出。
- 内容顺序以招聘判断为准：个人定位、代表项目、产品方法和职业入口依次出现；辅助工具与归档只保留在独立页面。
- 按钮和筛选项允许换行，触控目标至少 44px；不要求精确点击小型文字或图标。
- 多列数据、流程和对比在窄屏转换为可读列表，不依赖横向滚动查看核心信息。
- `hideOnMobile` 只适用于非必要角色立绘或复杂装饰，不适用于身份、项目封面和真实性说明。
- 浮动控件与系统安全区保持距离，不遮挡内容或移动菜单。

## Do's and Don'ts

### 应当

- 先让访问者理解候选人、岗位方向和项目证据，再感受角色与星光氛围。
- 使用真实项目名作为主标题，视觉代号只作副标题。
- 用项目场景、工作流、来源、失败与迭代形成 AI 技术表达。
- 在概念封面、Mock、Local case、同人项目和 Evaluation focus 附近直接说明边界。
- 让角色图片成为少量、高质量、可记忆的品牌锚点；周围界面保持克制。
- 使用开放排版、图片、留白和分隔线减少卡片数量。
- 同时验证浅色、深色、键盘、Reduced Motion、窄屏和图片缺失状态。

### 禁止使用的 AI 网页设计模式

- 禁止普通 SaaS Hero：渐变标题、两枚胶囊按钮、三项大指标和右侧伪 Dashboard。
- 禁止 Hero metric 模板、虚构实时数据、评分雷达图、增长曲线、成本卡和“模型在线”面板作为能力证明。
- 禁止相同大小的 icon + heading + paragraph 卡片矩阵，以及卡片套卡片的 bento 堆叠。
- 禁止把玻璃拟态作为默认 surface；不得给所有 section 同时添加透明底、1px 边框、大圆角和宽软阴影。
- 禁止渐变文字、装饰性 CSS 网格背景、重复斜线纹理、扫描线、终端窗口、神经网络线条和无功能电路图。
- 禁止每个 section 都使用小号全大写 tracked eyebrow；编号只用于真实流程、顺序、时间线和案例章节。
- 禁止普通卡片与输入使用 24–40px 大圆角；禁止粗侧边强调条；禁止边框与 16px 以上宽软阴影同时作为装饰。
- 禁止与画面语义无关的粒子、浮动数据面板、鼠标跟随光晕和持续高亮动画。深海 Hero 可使用少量低对比度气泡补充水下纵深，其他页面的星光仍只作为品牌标点。
- 禁止用通用机器人、AI 大脑、芯片、火箭、魔法棒或闪电图标代替真实项目内容。
- 禁止把二次元角色铺满所有页面、压住正文或重复用同一角色姿势制造“丰富度”。
- 禁止使用官方角色、游戏 Logo、未经授权画师素材或无法说明来源的截图。
- 禁止把概念图中的文字、图表和数字写入项目事实；禁止把 Mock、Demo 或计划项包装为生产成果。
- 禁止添加不存在的邮箱、简历、仓库、Demo、视频和文档链接，也不使用 `#` 占位。

## 维护规则

- 本文件的 YAML token 是未来设计实现的规范化目标；正文中的“当前实现基线”用于解释兼容差异。
- 若后续修改 `src/styles/tokens.css`、全局字体、页面宽度、主要断点、卡片语言或图片资产映射，应同步更新本文件。
- 任何视觉变化不得改变 Astro、Mizuki、Swup、Pagefind、静态输出和 Cloudflare Pages 部署边界，除非用户另行明确授权。
- 任何新增项目内容和图片先核验真实性、来源、授权与用途，再进入页面和 `/credits`。
- 首页结构、动效边界或响应式策略变化时，应同时更新 README、本文件与 `CODEX_PROGRESS.md` 的验证记录。
