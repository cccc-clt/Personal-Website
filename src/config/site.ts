import type { TargetTrack, TrackConfig } from '../types/project';

export const siteConfig = {
  name: '赵天琦',
  englishName: 'Tianqi Zhao',
  siteName: '赵天琦 · AI Product Portfolio',
  title: '赵天琦｜AI 产品经理作品集',
  description:
    '聚焦游戏 AI、AI Agent、Prompt 工程、RAG 与产品评测的个人作品集，以可运行、可评测、可迭代的方式设计 AI 产品。',
  url: 'https://your-domain.com',
  github: 'https://github.com/cccc-clt',
  email: 'your-email@example.com',
  location: '中国 · 可远程协作',
  availability: '开放实习与 2027 届校招机会',
  nav: [
    { label: '首页', href: '/' },
    { label: '项目', href: '/projects' },
    { label: '关于我', href: '/about' },
    { label: '在线简历', href: '/resume' },
  ],
  resumes: {
    general: '/resume/zhao-tianqi-general.pdf',
    game: '/resume/zhao-tianqi-game-ai.pdf',
    agent: '/resume/zhao-tianqi-agent.pdf',
    auto: '/resume/zhao-tianqi-general.pdf',
  } satisfies Record<TargetTrack, string>,
} as const;

export const trackConfigs: Record<TargetTrack, TrackConfig> = {
  general: {
    key: 'general',
    path: '/',
    label: '通用 AI 产品',
    eyebrow: 'AI PRODUCT PORTFOLIO · 2026',
    title: '游戏 AI 与 Agent\n产品实践',
    role: 'AI 产品经理 / AI Agent 产品设计与开发',
    description:
      '你好，我是赵天琦。从交通工程走向 AI 产品，关注大模型应用、Agent、Prompt 实验与产品评测，把模糊需求推进为可运行、可评测、可迭代的产品。',
    tags: ['AI Product', 'AI Agent', 'LLM Evaluation', 'Prompt Engineering', 'RAG'],
    resumeLabel: '通用 AI 产品简历',
    accent: '#5b6df6',
    seoDescription: '赵天琦的 AI 产品经理作品集，涵盖 AI Agent、产品评测、RAG 与游戏 AI。',
  },
  game: {
    key: 'game',
    path: '/game',
    label: '游戏 AI',
    eyebrow: 'GAME AI TRACK · AIGC',
    title: '游戏 AI 与 AIGC\n产品实践',
    role: '游戏 AI / AIGC 产品经理',
    description:
      '聚焦游戏内容生成、增长投放、角色一致性与 Prompt 工作流，用实验和评测判断 AI 是否真正提升生产质量。',
    tags: ['Game AI', 'AIGC', 'Growth', 'Workflow', 'Prompt', 'Evaluation'],
    resumeLabel: '游戏 AI 定向简历',
    accent: '#d98772',
    seoDescription: '赵天琦的游戏 AI 与 AIGC 产品实践，覆盖增长工作流、内容共创与角色 Agent。',
  },
  agent: {
    key: 'agent',
    path: '/agent',
    label: 'AI Agent',
    eyebrow: 'AGENT SYSTEM · LLM APPLICATION',
    title: '大模型与 AI Agent\n产品实践',
    role: '大模型 / AI Agent 产品经理',
    description:
      '聚焦 Agent 工作流、RAG、模型评测、记忆系统与产品能力边界，把自动化过程设计成可观察的协作系统。',
    tags: ['AI Agent', 'LLM', 'RAG', 'Memory', 'Evaluation', 'Safety'],
    resumeLabel: 'AI Agent 定向简历',
    accent: '#6475e9',
    seoDescription: '赵天琦的 AI Agent 产品作品集，覆盖模型评测、UI Agent、RAG 与记忆系统。',
  },
  auto: {
    key: 'auto',
    path: '/auto',
    label: '智能汽车 AI',
    eyebrow: 'AUTOMOTIVE AI · SCENARIO AGENT',
    title: '智能汽车与场景 AI\n产品实践',
    role: '智能座舱 / 场景 AI 产品经理',
    description:
      '聚焦智能座舱、场景 Agent、指令理解、安全确认与用户反馈，探索交通工程背景与 AI 产品能力的交叉价值。',
    tags: ['Automotive AI', 'Agent', 'RAG', 'Safety', 'Context', 'Prototype'],
    resumeLabel: '智能汽车 AI 定向简历',
    accent: '#3897b8',
    seoDescription: '赵天琦的智能汽车 AI 产品实践，覆盖座舱 Agent、RAG、安全确认与场景设计。',
  },
};

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
    description: '把成功率、稳定性、成本、体验与失败类型放进同一决策框架。',
  },
] as const;
