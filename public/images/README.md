# 图片资源目录

所有资源必须本地托管并在 `/credits` 与 `ASSET_CHECKLIST.md` 登记，不使用外链图片、随机图片 API 或未经授权的动漫角色。

## 角色文件

放入 `character/`：

- `lab-guide-hero.avif` / `lab-guide-hero.webp`：桌面 Hero，建议 1080×1320。
- `lab-guide-mobile.avif` / `lab-guide-mobile.webp`：移动构图，建议 900×1125。
- `lab-guide-avatar.webp`、`lab-guide-contact.webp`、`lab-guide-404.webp`：可选裁切。

文件缺失时会自动使用原创成年女性 CSS 数字向导，不输出破图。

## 项目截图

Frontmatter 中的路径保持在 `projects/<slug>/` 下。建议先导出 WebP，再按需提供 AVIF；单张建议控制在 350KB 内，并保留与界面内容一致的 alt 描述。

## OG 图片

`og/` 中四张品牌卡由 `node scripts/generate-og.mjs` 生成，不依赖远程字体或图片。

