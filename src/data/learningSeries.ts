export interface LearningSeriesChapter {
  index: string;
  title: string;
}

export interface LearningSeriesArticle {
  index: number;
  title: string;
  chapters: LearningSeriesChapter[];
}

export interface LearningSeriesLevel {
  id: string;
  index: number;
  title: string;
  status: string;
  articleStatus: string;
  progressText: string;
  pendingNextLabel: string;
  pendingNextText: string;
  articles: LearningSeriesArticle[];
}

export interface LearningSeriesConfig {
  title: string;
  levels: LearningSeriesLevel[];
}

const learningSeriesByTitle: Record<string, LearningSeriesConfig> = {
  'AI 产品经理学习笔记': {
    title: 'AI 产品经理学习笔记',
    levels: [
      {
        id: 'foundation',
        index: 1,
        title: '保底必学',
        status: '阶段性完成',
        articleStatus: '第一层阶段性完成',
        progressText: '第一层基础学习体系阶段性完成。',
        pendingNextLabel: '下一阶段',
        pendingNextText: '继续深入学习中',
        articles: [
          {
            index: 1,
            title: '先成为产品经理，再谈 AI',
            chapters: [
              { index: '第 0 章', title: 'AI 产品岗的基础门槛' },
              { index: '第 1 章', title: '传统产品基本功' },
            ],
          },
          {
            index: 2,
            title: '从大模型到 Prompt 与 RAG',
            chapters: [
              { index: '第 2 章', title: '大模型基础认知' },
              { index: '第 3 章', title: 'Prompt Engineering' },
              { index: '第 4 章', title: 'RAG 基础' },
            ],
          },
          {
            index: 3,
            title: '从 Agent 到完整 AI 产品闭环',
            chapters: [
              { index: '第 5 章', title: 'Agent 基础' },
              { index: '第 6 章', title: 'API 与工程基础' },
              { index: '第 7 章', title: '基础数据能力' },
              { index: '第 8 章', title: 'Bad Case' },
              {
                index: '第 9 章',
                title: '规则、Prompt、RAG、Tool、Agent 的方案选择',
              },
              { index: '第 10 章', title: '基础 AI 产品案例' },
            ],
          },
        ],
      },
      {
        id: 'core',
        index: 2,
        title: '核心能力',
        status: '进行中',
        articleStatus: '第二层进行中',
        progressText: '第二层从系统诊断与 Evaluation 能力继续展开。',
        pendingNextLabel: '第二层下一篇',
        pendingNextText: '持续整理中',
        articles: [
          {
            index: 4,
            title: '从“会做 AI Demo”到“能完成 AI 产品闭环”',
            chapters: [
              { index: '第 0 章', title: '第二层到底在学什么？' },
              { index: '第 1 章', title: '第二层整体框架' },
              { index: '第 2 章', title: 'RAG 全链路' },
              { index: '第 3 章', title: 'RAG Bad Case 分析' },
            ],
          },
        ],
      },
    ],
  },
};

export function getLearningSeriesConfig(series?: string) {
  return series ? learningSeriesByTitle[series] : undefined;
}

export function getLearningSeriesLevel(series?: string, levelIndex?: number) {
  return getLearningSeriesConfig(series)?.levels.find((level) => level.index === levelIndex);
}
