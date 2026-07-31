import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { siteConfig } from '../config/site';

export async function GET(context) {
  if (!context.site) {
    return new globalThis.Response(null, { status: 204 });
  }

  const articles = (await getCollection('research'))
    .filter((article) => !article.data.draft)
    .sort((a, b) => b.data.publishedAt.valueOf() - a.data.publishedAt.valueOf());

  return rss({
    title: `${siteConfig.name}的研究记录`,
    description: '游戏 AI、Agent 评测与 AI 产品机会判断的研究文章。',
    site: context.site,
    items: articles.map((article) => ({
      title: article.data.title,
      description: article.data.summary,
      pubDate: article.data.publishedAt,
      link: `/research/${article.id}/`,
      categories: [article.data.category, ...article.data.tags],
    })),
    customData: '<language>zh-CN</language>',
  });
}
