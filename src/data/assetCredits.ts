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
    title: '深海角色品牌插图',
    author: '用户提供',
    source: '用户提供的本地视觉素材',
    licenseStatus: personalPortfolioLicense,
    attributionRequired: false,
    attribution: '缩放后用于首页右侧品牌视觉，并明确标注为概念插图；不作为项目证据。',
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
    path: 'src/assets/project-covers/game-ai-growth-workflow.webp',
    title: 'AI 游戏增长投放与实验评测工作流真实运行截图',
    author: '用户提供',
    source: '用户提供的本地真实运行截图',
    licenseStatus: personalPortfolioLicense,
    attributionRequired: false,
    attribution: '裁切自 Dify 多节点工作流编辑器，展示用户输入、诊断、Prompt 与报告输出链路。',
  },
  {
    path: 'src/assets/project-covers/ai-product-evaluation-workbench.webp',
    title: 'AI Product Evaluation Workbench 真实运行截图',
    author: '用户提供',
    source: '用户提供的本地真实运行截图',
    licenseStatus: personalPortfolioLicense,
    attributionRequired: false,
    attribution: '裁切自产品首页，展示评测模块与使用流程，不包含 API Key 输入区域。',
  },
  {
    path: 'src/assets/project-covers/mobile-uiagent-evaluation-lab.webp',
    title: 'Mobile UIAgent Evaluation Lab 真实运行截图',
    author: '用户提供',
    source: '用户提供的本地真实运行截图',
    licenseStatus: personalPortfolioLicense,
    attributionRequired: false,
    attribution: '裁切自产品主页，展示任务评测、竞品分析、验收指标与需求闭环。',
  },
  {
    path: 'src/assets/project-covers/automate-ai-car-copilot.webp',
    title: 'AutoMate AI Car Copilot 真实运行截图',
    author: '用户提供',
    source: '用户提供的本地真实运行截图',
    licenseStatus: personalPortfolioLicense,
    attributionRequired: false,
    attribution: '裁切自产品主页，已排除侧栏、平台控件与 API 未配置警告。',
  },
  {
    path: 'src/assets/project-covers/ai-game-content-copilot.webp',
    title: 'AI Game Content Copilot 真实运行截图',
    author: '用户提供',
    source: '用户提供的本地真实运行截图',
    licenseStatus: personalPortfolioLicense,
    attributionRequired: false,
    attribution: '裁切自产品主页，展示目标用户、多版本生成、五维评分与安全边界。',
  },
  {
    path: 'src/assets/project-covers/ai-pdf-learning-assistant.webp',
    title: 'AI PDF Learning Assistant 真实运行截图',
    author: '用户提供',
    source: '用户提供的本地真实运行截图',
    licenseStatus: personalPortfolioLicense,
    attributionRequired: false,
    attribution: '裁切自文档已解析状态，展示页数、字符数、向量化结果与 RAG 就绪信息。',
  },
  {
    path: 'src/assets/project-covers/elysia-ai-character-agent.webp',
    title: '爱莉希雅 AI 角色陪伴应用真实运行截图',
    author: '用户提供',
    source: '用户提供的本地真实运行截图',
    licenseStatus: personalPortfolioLicense,
    attributionRequired: false,
    attribution:
      '裁切自 fan-made 角色 Agent 对话页；展示角色状态、亲密度、反馈和记忆操作，不代表官方授权产品。',
  },
];
