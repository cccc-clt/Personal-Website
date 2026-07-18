export const heroAssetConfig = {
  backgroundImage: '/images/banner/hero-bg.webp',
} as const;

export const heroCharacterConfig = {
  image: '/images/avatar/character.png',
  alt: '赵天琦个人网站的原创二次元看板娘立绘',
  name: '原创看板娘预留区',
  description: 'Original character artwork reserved',
  status: 'VISUAL ASSET · RESERVED',
  width: 720,
  height: 1080,
  hideOnMobile: true,
} as const;

export const avatarConfig = {
  image: '/images/avatar/tianqi-avatar.webp',
  alt: '赵天琦个人网站的原创二次元头像',
  name: '赵天琦',
  englishName: 'Tianqi.Z',
  role: 'Game AI Product Explorer',
  width: 640,
  height: 640,
} as const;

export const profileVisual = {
  image: '/images/avatar/tianqi-profile-card.webp',
  alt: 'Tianqi.Z Game AI Product Explorer 个人名片插图',
  width: 1200,
  height: 900,
} as const;

export const projectCoverKeys = [
  'gameGrowthWorkflow',
  'evaluationWorkbench',
  'mobileUiAgentLab',
  'automateCarCopilot',
  'gameContentCopilot',
  'pdfLearningAssistant',
  'elysiaCharacterAgent',
] as const;

export type ProjectCoverKey = (typeof projectCoverKeys)[number];

interface ProjectCoverConfig {
  image: string | null;
  fallback: string | null;
  alt: string;
  position: string;
  width: number;
  height: number;
  overlay: 'soft' | 'metrics';
}

export const projectCovers: Record<ProjectCoverKey, ProjectCoverConfig> = {
  gameGrowthWorkflow: {
    image: '/images/projects/game-growth-workflow.webp',
    fallback: null,
    alt: 'AI 游戏增长投放与实验评测工作流概念插图封面',
    position: 'center',
    width: 1672,
    height: 941,
    overlay: 'metrics',
  },
  evaluationWorkbench: {
    image: '/images/projects/ai-product-evaluation-workbench.webp',
    fallback: null,
    alt: 'AI Product Evaluation Workbench 产品评测工作台概念封面',
    position: 'center',
    width: 1672,
    height: 941,
    overlay: 'soft',
  },
  mobileUiAgentLab: {
    image: '/images/projects/mobile-uiagent-lab.webp',
    fallback: null,
    alt: 'Mobile UIAgent Evaluation Lab 概念插图封面',
    position: 'center',
    width: 1672,
    height: 941,
    overlay: 'soft',
  },
  automateCarCopilot: {
    image: '/images/projects/automate-car-copilot.webp',
    fallback: null,
    alt: 'Automate AI Car Copilot 概念插图封面',
    position: 'center',
    width: 1672,
    height: 941,
    overlay: 'soft',
  },
  gameContentCopilot: {
    image: '/images/projects/game-content-copilot.webp',
    fallback: null,
    alt: 'AI Game Content Copilot 概念插图封面',
    position: 'center',
    width: 1672,
    height: 941,
    overlay: 'soft',
  },
  pdfLearningAssistant: {
    image: '/images/projects/pdf-learning-assistant.webp',
    fallback: null,
    alt: 'AI PDF Learning Assistant 概念插图封面',
    position: 'center',
    width: 1672,
    height: 941,
    overlay: 'soft',
  },
  elysiaCharacterAgent: {
    image: '/images/projects/elysia-character-agent.webp',
    fallback: null,
    alt: '爱莉希雅 AI 角色陪伴应用概念插图封面',
    position: 'center',
    width: 1672,
    height: 941,
    overlay: 'soft',
  },
};
