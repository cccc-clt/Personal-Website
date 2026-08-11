export const siteConfig = {
  name: '赵天琦',
  englishName: 'Tianqi.Z',
  siteName: '赵天琦 · AI 产品作品集',
  title: '赵天琦｜游戏 AI、Agent 与产品评测作品集',
  description:
    '赵天琦的 AI 产品作品集，聚焦游戏 AI、AI Agent、产品评测与从真实问题到验证回路的产品实践。',
  github: 'https://github.com/cccc-clt',
  location: '中国 · 河南',
  school: '河南城建学院',
  major: '交通工程',
  availability: '开放 AI 产品实习与 2027 秋招机会',
  signature: '在现实与幻想之间，寻找 AI 产品的下一种可能。',
  nav: [
    { label: '首页', href: '/' },
    { label: '项目', href: '/projects/' },
    { label: '研究', href: '/insights/', activePrefixes: ['/insights/', '/research/'] },
    { label: '随笔', href: '/notes/', activePrefixes: ['/notes/'] },
    { label: '关于', href: '/about/' },
  ],
  banner: {
    desktop: '/assets/images/banner/home.webp',
    desktop960: '/assets/images/banner/home-960.webp',
    desktop1440: '/assets/images/banner/home-1440.webp',
    mobile: '/assets/images/character-mobile.webp',
  },
  features: {
    search: true,
    darkMode: true,
    swup: true,
    comments: false,
    music: false,
    live2d: false,
    remoteImages: false,
  },
} as const;

export const abilities = [
  {
    title: '需求与场景',
    description: '从用户任务、业务约束和风险边界出发，判断 AI 是否真的必要。',
  },
  {
    title: 'Agent 工作流',
    description: '拆解输入、规划、工具调用、人工确认、异常恢复与反馈回流。',
  },
  {
    title: 'Prompt 与原型',
    description: '用结构化 Prompt 与轻量原型快速验证交互、能力和数据契约。',
  },
  {
    title: '评测与迭代',
    description: '把稳定性、体验、成本和失败类型放进同一套产品决策框架。',
  },
] as const;

export const productWorkflow = [
  '确认真实问题',
  '拆解用户任务',
  '判断 AI 必要性',
  '设计人工节点',
  '搭建最小原型',
  '记录评测与失败',
  '回到产品边界迭代',
] as const;

export const projectFilterLabels = {
  'game-ai': '游戏 AI',
  agent: 'Agent',
  evaluation: '产品评测',
  workflow: '工作流',
} as const;

export const researchCategoryLabels = {
  'game-research': '游戏研究',
  'player-research': '玩家研究',
  'game-ai': '游戏 AI',
  'ai-product': 'AI 产品',
  'model-observation': '模型观察',
  'game-jam': '游戏比赛',
  'game-experience': '游戏体验',
  'game-record': '游戏记录',
  'growth-record': '成长记录',
} as const;

export const insightKindLabels = {
  'research-report': 'AI 研究报告',
  'ai-product-note': '产品随笔',
  'learning-note': '学习笔记',
  'game-jam-note': '比赛记录',
  'game-record-note': '游戏记录',
  'growth-note': '成长随记',
} as const;

export type InsightKind = keyof typeof insightKindLabels;
export type InsightCategory = keyof typeof researchCategoryLabels;

export const researchKindFilters = [
  'research-report',
  'ai-product-note',
] as const satisfies readonly InsightKind[];

export const researchCategoryFilters = [
  'game-research',
  'player-research',
  'game-ai',
  'ai-product',
  'model-observation',
] as const satisfies readonly InsightCategory[];

export const noteKindFilters = [
  'learning-note',
  'game-jam-note',
  'game-record-note',
  'growth-note',
] as const satisfies readonly InsightKind[];
