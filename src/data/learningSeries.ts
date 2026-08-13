export interface LearningSeriesChapter {
  index: string;
  title: string;
  articleIndex: number;
}

export interface LearningSeriesConfig {
  title: string;
  level: string;
  status: string;
  completionStatement: string;
  nextStageLabel: string;
  nextStageText: string;
  chapters: LearningSeriesChapter[];
}

const learningSeriesByTitle: Record<string, LearningSeriesConfig> = {
  'AI 产品经理学习笔记': {
    title: 'AI 产品经理学习笔记',
    level: '第一层：保底必学',
    status: '第一层阶段性完成',
    completionStatement: '第一层基础学习体系阶段性完成。',
    nextStageLabel: '下一阶段',
    nextStageText: '继续深入学习中',
    chapters: [
      { index: '第 0 章', title: 'AI 产品岗的基础门槛', articleIndex: 1 },
      { index: '第 1 章', title: '传统产品基本功', articleIndex: 1 },
      { index: '第 2 章', title: '大模型基础认知', articleIndex: 2 },
      { index: '第 3 章', title: 'Prompt Engineering', articleIndex: 2 },
      { index: '第 4 章', title: 'RAG 基础', articleIndex: 2 },
      { index: '第 5 章', title: 'Agent 基础', articleIndex: 3 },
      { index: '第 6 章', title: 'API 与工程基础', articleIndex: 3 },
      { index: '第 7 章', title: '基础数据能力', articleIndex: 3 },
      { index: '第 8 章', title: 'Bad Case', articleIndex: 3 },
      {
        index: '第 9 章',
        title: '规则、Prompt、RAG、Tool、Agent 的方案选择',
        articleIndex: 3,
      },
      { index: '第 10 章', title: '基础 AI 产品案例', articleIndex: 3 },
    ],
  },
};

export function getLearningSeriesConfig(series?: string) {
  return series ? learningSeriesByTitle[series] : undefined;
}
