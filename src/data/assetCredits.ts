export interface AssetCredit {
  path: string;
  title: string;
  author: string;
  source: string;
  licenseStatus: string;
  attributionRequired: boolean;
  attribution: string;
}

const personalPortfolioLicense = '用户授权用于个人作品集展示';

export const assetCredits: AssetCredit[] = [
  {
    path: '/images/banner/hero-bg.webp',
    title: '深海二次元首页开屏背景',
    author: '用户提供',
    source: '用户提供的本地视觉素材',
    licenseStatus: personalPortfolioLicense,
    attributionRequired: false,
    attribution: '用于首页 Hero 背景；页面文字与操作保持独立 HTML 信息层。',
  },
  {
    path: '/images/avatar/tianqi-avatar.webp',
    title: 'Tianqi.Z 原创二次元头像',
    author: '用户提供',
    source: 'AI 辅助生成原创视觉',
    licenseStatus: personalPortfolioLicense,
    attributionRequired: false,
    attribution: '用于个人资料头像；无需公开署名。',
  },
  {
    path: '/images/avatar/tianqi-profile-card.webp',
    title: 'Tianqi.Z 个人名片插图',
    author: '用户提供',
    source: 'AI 辅助生成原创视觉',
    licenseStatus: personalPortfolioLicense,
    attributionRequired: false,
    attribution: '用于 About 页面个人资料区域；图片文字不替代页面 HTML 信息。',
  },
  {
    path: '/images/avatar/character-alt-source.png',
    title: '黑发猫耳角色备用源图',
    author: '用户提供',
    source: 'AI 辅助生成原创视觉',
    licenseStatus: `${personalPortfolioLicense} · 当前未接入`,
    attributionRequired: false,
    attribution: '棋盘格已写入像素且图片无 Alpha；真正去除背景前不作为透明 Hero 立绘。',
  },
  {
    path: '/images/projects/game-growth-workflow.webp',
    title: 'AI 游戏增长投放与实验评测工作流概念封面',
    author: '用户提供',
    source: 'AI 辅助生成概念插图',
    licenseStatus: personalPortfolioLicense,
    attributionRequired: false,
    attribution: '用于项目索引视觉封面；图中示意数字不代表真实项目指标。',
  },
  {
    path: '/images/projects/ai-product-evaluation-workbench.webp',
    title: 'AI Product Evaluation Workbench 概念封面',
    author: '用户提供',
    source: 'AI 辅助生成概念插图',
    licenseStatus: personalPortfolioLicense,
    attributionRequired: false,
    attribution:
      '用于表达模型对比、评测标准、测试记录与产品迭代主题；图中的评分、雷达图、图表和数字均不是实际评测结果或项目指标。',
  },
  {
    path: '/images/projects/mobile-uiagent-lab.webp',
    title: 'Mobile UIAgent Evaluation Lab 概念封面',
    author: '用户提供',
    source: 'AI 辅助生成概念插图',
    licenseStatus: personalPortfolioLicense,
    attributionRequired: false,
    attribution: '用于项目索引视觉封面，不代表真实运行界面。',
  },
  {
    path: '/images/projects/automate-car-copilot.webp',
    title: 'Automate AI Car Copilot 概念封面',
    author: '用户提供',
    source: 'AI 辅助生成概念插图',
    licenseStatus: personalPortfolioLicense,
    attributionRequired: false,
    attribution: '用于项目索引视觉封面，不代表真实运行界面。',
  },
  {
    path: '/images/projects/game-content-copilot.webp',
    title: 'AI Game Content Copilot 概念封面',
    author: '用户提供',
    source: 'AI 辅助生成概念插图',
    licenseStatus: personalPortfolioLicense,
    attributionRequired: false,
    attribution: '用于项目索引视觉封面，不代表真实运行界面。',
  },
  {
    path: '/images/projects/pdf-learning-assistant.webp',
    title: 'AI PDF Learning Assistant 概念封面',
    author: '用户提供',
    source: 'AI 辅助生成概念插图',
    licenseStatus: personalPortfolioLicense,
    attributionRequired: false,
    attribution: '用于项目索引视觉封面，不代表真实运行界面。',
  },
  {
    path: '/images/projects/elysia-character-agent.webp',
    title: '爱莉希雅 AI 角色陪伴应用概念封面',
    author: '用户提供',
    source: 'AI 辅助生成概念插图',
    licenseStatus: personalPortfolioLicense,
    attributionRequired: false,
    attribution: '用于项目索引视觉封面，不代表真实运行界面或官方授权素材。',
  },
];
