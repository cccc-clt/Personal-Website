export const siteConfig = {
  name: '赵天琦',
  englishName: 'Tianqi.Z',
  siteName: '赵天琦 · 游戏 AI 产品作品集',
  title: '赵天琦｜游戏 AI 与 AI 产品实践',
  description: '聚焦游戏 AI、AI Agent、Prompt 工程、RAG 与 AI 产品评测的个人网站。',
  github: 'https://github.com/cccc-clt',
  email: '',
  location: '中国 · 河南',
  school: '河南城建学院',
  major: '交通工程',
  availability: '开放 AI 产品实习与 2027 秋招机会',
  signature: '在现实与幻想之间，寻找 AI 产品的下一种可能。',
  nav: [
    { label: '首页', subtitle: 'HOME', href: '/' },
    { label: '项目', subtitle: 'PROJECTS', href: '/projects/' },
    { label: '游戏观察', subtitle: 'GAME NOTES', href: '/game/' },
    { label: 'AI 随想', subtitle: 'MOMENTS', href: '/moments/' },
    { label: '关于我', subtitle: 'PROFILE', href: '/about/' },
    { label: '在线简历', subtitle: 'RESUME', href: '/resume/' },
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
    index: '01',
    title: '需求与场景',
    english: 'PRODUCT FRAMING',
    description: '从用户任务、业务约束和风险边界出发，判断 AI 是否真的必要。',
  },
  {
    index: '02',
    title: 'Agent 工作流',
    english: 'AGENT WORKFLOW',
    description: '拆解输入、规划、工具调用、人工确认、异常恢复与反馈回流。',
  },
  {
    index: '03',
    title: 'Prompt 与原型',
    english: 'PROMPT & PROTOTYPE',
    description: '用结构化 Prompt 与轻量原型快速验证交互、能力和数据契约。',
  },
  {
    index: '04',
    title: '评测与迭代',
    english: 'EVALUATION LOOP',
    description: '把稳定性、体验、成本和失败类型放进同一套产品决策框架。',
  },
] as const;
