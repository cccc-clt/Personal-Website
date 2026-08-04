import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { siteConfig } from '../config/site';
import { getInsightPath, parsePublicationDate, sortInsightsByDate } from '../utils/content';

export async function GET(context) {
  if (!context.site) {
    return new globalThis.Response(null, { status: 204 });
  }

  const articles = (await getCollection('research'))
    .filter((article) => article.data.status === 'published')
    .sort(sortInsightsByDate);

  return rss({
    title: `${siteConfig.name}的研究与随笔`,
    description: '游戏与玩家研究、AI 产品实践，以及个人体验和阶段性记录。',
    site: context.site,
    items: articles.map((article) => ({
      title: article.data.title,
      description: article.data.description,
      pubDate: parsePublicationDate(article.data.publishDate),
      link: getInsightPath(article),
      categories: [article.data.category, ...article.data.tags],
    })),
    customData: '<language>zh-CN</language>',
  });
}
