export interface SkillGroup {
  title: string;
  code: string;
  description: string;
  items: { name: string; evidence: string[] }[];
}

export const skillGroups: SkillGroup[] = [
  {
    title: '产品能力',
    code: 'PRODUCT',
    description: '从用户问题到可验证方案，关注证据、指标与迭代闭环。',
    items: [
      { name: '用户与场景分析', evidence: ['AutoMate', 'UIAgent Lab'] },
      { name: '需求拆解与优先级', evidence: ['Evaluation Workbench'] },
      { name: 'PRD 与原型设计', evidence: ['Game Content Copilot'] },
      { name: '产品指标体系', evidence: ['Game Growth Workflow'] },
      { name: 'A/B 测试与实验复盘', evidence: ['Game Growth Workflow'] },
      { name: 'AI 产品评测', evidence: ['Evaluation Workbench', 'UIAgent Lab'] },
    ],
  },
  {
    title: 'AI 能力',
    code: 'AI SYSTEM',
    description: '把不稳定的模型能力装进可观测、可控、可评测的产品系统。',
    items: [
      { name: 'LLM 应用设计', evidence: ['Evaluation Workbench'] },
      { name: 'Prompt 与结构化输出', evidence: ['Game Growth Workflow'] },
      { name: 'RAG 与知识库问答', evidence: ['PDF Learning Assistant', 'AutoMate'] },
      { name: 'Agent 与工具调用', evidence: ['UIAgent Lab', 'Elysia Agent'] },
      { name: '记忆与上下文管理', evidence: ['Elysia Agent'] },
      { name: '准确性、延迟与成本评测', evidence: ['Evaluation Workbench'] },
    ],
  },
  {
    title: '开发能力',
    code: 'BUILD',
    description: '能够将产品方案快速落成可交互 Demo，并完成基础数据分析。',
    items: [
      { name: 'Python / Pandas / SQL', evidence: ['Evaluation Workbench'] },
      { name: 'TypeScript / JavaScript', evidence: ['Portfolio System'] },
      { name: 'HTML / CSS / Node.js', evidence: ['Portfolio System'] },
      { name: 'Streamlit / LangChain', evidence: ['PDF Learning Assistant'] },
      { name: 'ChromaDB / REST API', evidence: ['PDF Learning Assistant'] },
    ],
  },
  {
    title: '工具能力',
    code: 'TOOLS',
    description: '根据验证目标选择合适工具，不把工具清单当作能力本身。',
    items: [
      { name: 'Dify / Coze', evidence: ['Game Growth Workflow'] },
      { name: 'Cursor / Codex', evidence: ['Prototype Delivery'] },
      { name: 'Git / GitHub', evidence: ['7 个公开项目'] },
      { name: 'Figma', evidence: ['PRD 与原型'] },
      { name: 'Cloudflare Pages / Vercel / Render', evidence: ['Web Delivery'] },
    ],
  },
];
