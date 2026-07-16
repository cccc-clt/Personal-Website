import type { TargetTrack } from '../types/project';

export const siteConfig = {
  name: '赵天琦',
  siteName: '赵天琦 · AI Product Portfolio',
  title: '赵天琦｜AI 产品经理作品集',
  description: '聚焦 AI Agent、游戏 AI、Prompt 工程、RAG 与 AI 产品评测的个人作品集。',
  url: 'https://your-domain.com',
  github: 'https://github.com/cccc-clt',
  email: 'your-email@example.com',
  location: '中国 · 可远程协作',
  status: '开放实习与 2027 届校招机会',
  nav: [
    { label: '首页', href: '/' },
    { label: '项目', href: '/projects' },
    { label: '关于我', href: '/about' },
    { label: '在线简历', href: '/resume' },
  ],
  resumes: {
    general: '/resume/resume-general.pdf',
    game: '/resume/resume-game.pdf',
    agent: '/resume/resume-general.pdf',
    auto: '/resume/resume-auto.pdf',
  } satisfies Record<TargetTrack, string>,
  projectLinks: {
    evaluation: 'https://github.com/cccc-clt/ai-product-evaluation-workbench',
    uiAgent: 'https://github.com/cccc-clt/mobile-uiagent-evaluation-lab',
    gameGrowth: 'https://github.com/cccc-clt',
    autoMate: 'https://github.com/cccc-clt/automate-ai-car-copilot',
    gameCopilot: 'https://github.com/cccc-clt/ai-game-content-copilot',
    pdfAssistant: 'https://github.com/cccc-clt/ai-pdf-learning-assistant',
    elysia: 'https://github.com/cccc-clt/elysia-ai-character-agent',
  },
} as const;

export interface TrackConfig {
  key: TargetTrack;
  label: string;
  eyebrow: string;
  title: string;
  role: string;
  description: string;
  tags: string[];
  resumeLabel: string;
}

export const trackConfigs: Record<TargetTrack, TrackConfig> = {
  general: {
    key: 'general',
    label: '通用 AI 产品',
    eyebrow: 'AI PRODUCT PORTFOLIO · 2026',
    title: '你好，我是赵天琦。',
    role: 'AI 产品经理 / AI Agent 产品设计与开发',
    description:
      '一名从交通工程走向 AI 产品的实践者。聚焦大模型应用、AI Agent、Prompt 实验与产品评测，持续将需求转化为可运行、可评测、可迭代的 AI 产品。',
    tags: ['AI Product', 'AI Agent', 'LLM Evaluation', 'Prompt Engineering', 'RAG', 'Game AI'],
    resumeLabel: '通用 AI 产品简历',
  },
  game: {
    key: 'game',
    label: '游戏 AI',
    eyebrow: 'GAME AI TRACK · AIGC',
    title: '游戏 AI 与 AIGC 产品实践',
    role: '游戏 AI / AIGC 产品经理',
    description: '聚焦游戏内容生成、增长投放、Prompt 工作流与 AI 产品评测。',
    tags: ['Game AI', 'AIGC', 'Growth', 'Workflow', 'Prompt', 'Evaluation'],
    resumeLabel: '游戏 AI 定向简历',
  },
  agent: {
    key: 'agent',
    label: 'AI Agent',
    eyebrow: 'AGENT SYSTEM · LLM APPLICATION',
    title: '大模型与 AI Agent 产品实践',
    role: '大模型 / AI Agent 产品经理',
    description: '聚焦 Agent 工作流、RAG、模型评测、记忆系统与产品能力边界。',
    tags: ['AI Agent', 'LLM', 'RAG', 'Memory', 'Evaluation', 'Safety'],
    resumeLabel: '通用 AI 产品简历',
  },
  auto: {
    key: 'auto',
    label: '智能汽车 AI',
    eyebrow: 'AUTOMOTIVE AI · SCENARIO AGENT',
    title: '智能汽车与场景 AI 产品实践',
    role: '智能座舱 / 场景 AI 产品经理',
    description: '聚焦智能座舱、场景 Agent、指令理解、安全边界与用户反馈分析。',
    tags: ['Automotive AI', 'Agent', 'RAG', 'Safety', 'Context', 'Prototype'],
    resumeLabel: '智能汽车 AI 定向简历',
  },
};
