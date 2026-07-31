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
    title: `${siteConfig.name}的研究与随想`,
    description: '游戏观察、玩家洞察、AI 产品机会、Agent 评测与产品方法文章。',
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
