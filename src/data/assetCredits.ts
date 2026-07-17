export interface AssetCredit {
  path: string;
  title: string;
  author: string;
  source: string;
  licenseStatus: string;
  attributionRequired: boolean;
  attribution: string;
}

export const assetCredits: AssetCredit[] = [
  {
    path: '/assets/images/banner/home.webp',
    title: '首页 Banner（待补充）',
    author: '待用户确认',
    source: '待补充本地原创或授权清晰的资源',
    licenseStatus: 'PENDING · 当前未加载',
    attributionRequired: false,
    attribution: '文件不存在时使用浅色 CSS 渐变，不会请求远程图片。',
  },
  {
    path: '/assets/images/avatar.webp',
    title: 'Tianqi.Z 头像（待补充）',
    author: '待用户确认',
    source: '待补充本地原创或授权清晰的资源',
    licenseStatus: 'PENDING · 当前未加载',
    attributionRequired: false,
    attribution: '文件不存在时使用 TQ 文字头像。',
  },
  {
    path: '/assets/images/character.webp',
    title: 'Tianqi.Z 看板娘（待补充）',
    author: '待用户确认',
    source: '待补充本地原创或授权清晰的资源',
    licenseStatus: 'PENDING · 当前未接入页面',
    attributionRequired: false,
    attribution: '本轮不生成图片；文件缺失时不创建图片节点。',
  },
  {
    path: '/assets/images/about.webp',
    title: 'About 插画（待补充）',
    author: '待用户确认',
    source: '待补充本地原创或授权清晰的资源',
    licenseStatus: 'PENDING · 当前未加载',
    attributionRequired: false,
    attribution: '文件不存在时使用本地 CSS 占位。',
  },
  {
    path: '/assets/images/404.webp',
    title: '404 插画（待补充）',
    author: '待用户确认',
    source: '待补充本地原创或授权清晰的资源',
    licenseStatus: 'PENDING · 当前未加载',
    attributionRequired: false,
    attribution: '文件不存在时使用本地 CSS 占位。',
  },
];
