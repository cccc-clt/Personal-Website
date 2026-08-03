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
    title: `${siteConfig.name}的随笔与研究`,
    description: '游戏研究、玩家研究、游戏 AI、AI 产品与模型观察。',
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
