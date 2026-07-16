import type { AssetCredit } from '../types/project';

export const assetCredits: AssetCredit[] = [
  {
    path: 'src/styles/character.css',
    title: 'Game AI Lab Guide CSS Silhouette',
    author: '赵天琦作品集项目',
    source: '本地原创 CSS 图形',
    licenseStatus: 'ORIGINAL',
    note: '图像生成服务不可用时启用的成年女性数字向导轮廓，不含第三方角色或素材。',
    attributionRequired: false,
  },
  {
    path: 'public/images/character/*',
    title: 'Game AI Lab Guide Raster Assets',
    author: '待生成',
    source: '待补充本地原创资产',
    licenseStatus: 'PENDING',
    note: '正式 AVIF/WebP 尚未写入；页面会自动使用 CSS 回退。',
    attributionRequired: false,
  },
];

