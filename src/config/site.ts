export const siteConfig = {
  name: '赵天琦',
  englishName: 'Tianqi.Z',
  siteName: '赵天琦 · AI 产品作品集',
  title: '赵天琦｜游戏 AI、Agent 与产品评测作品集',
  description:
    '赵天琦的 AI 产品作品集，聚焦游戏 AI、AI Agent、产品评测与从真实问题到验证回路的产品实践。',
  github: 'https://github.com/cccc-clt',
  email: '',
  location: '中国 · 河南',
  school: '河南城建学院',
  major: '交通工程',
  availability: '开放 AI 产品实习与 2027 秋招机会',
  signature: '在现实与幻想之间，寻找 AI 产品的下一种可能。',
  nav: [
    { label: '首页', href: '/' },
    { label: '项目', href: '/projects/' },
    { label: '研究', href: '/research/' },
    { label: '随想', href: '/research/?category=learning-notes' },
    { label: '关于', href: '/about/' },
    { label: '简历', href: '/resume/' },
  ],
  resumes: [
    { label: '通用 AI 产品简历', path: '/resume/resume-general.pdf' },
    { label: '游戏 AI 定向简历', path: '/resume/resume-game.pdf' },
    { label: '智能汽车 AI 定向简历', path: '/resume/resume-auto.pdf' },
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
  'player-insight': '玩家洞察',
  'ai-opportunity': 'AI 机会',
  'agent-evaluation': 'Agent 评测',
  'product-method': '产品方法',
  'learning-notes': '学习记录',
} as const;
