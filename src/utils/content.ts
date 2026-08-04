import type { CollectionEntry } from 'astro:content';

export function estimateReadingMinutes(body = '') {
  const hanCharacters = body.match(/[\u3400-\u9fff]/g)?.length ?? 0;
  const latinWords = body
    .replace(/[\u3400-\u9fff]/g, ' ')
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;
  return Math.max(1, Math.ceil(hanCharacters / 420 + latinWords / 220));
}

export function formatDate(date: Date) {
  return new Intl.DateTimeFormat('zh-CN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);
}

export function parsePublicationDate(value: string) {
  const normalized = /^\d{4}-\d{2}$/.test(value) ? `${value}-01` : value;
  return new Date(`${normalized}T00:00:00+08:00`);
}

export function formatPublicationDate(value: string) {
  const [year, month, day] = value.split('-').map(Number);
  if (!day) return `${year} 年 ${month} 月`;
  return `${year} 年 ${month} 月 ${day} 日`;
}

export function getInsightPath(article: CollectionEntry<'research'>) {
  return `/${article.data.section}/${article.data.slug}/`;
}

export function getInsightPdfPath(article: CollectionEntry<'research'>) {
  return `/insights/${article.data.slug}/pdf/`;
}

export function sortInsightsByDate(
  left: CollectionEntry<'research'>,
  right: CollectionEntry<'research'>,
) {
  return (
    parsePublicationDate(right.data.publishDate).valueOf() -
    parsePublicationDate(left.data.publishDate).valueOf()
  );
}
