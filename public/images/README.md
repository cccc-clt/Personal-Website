# 图片资源说明

现有 `public/images/og/` 保存本地生成的分享卡。首页与内页后续图片统一放在 `public/assets/images/`，所有文件必须本地托管并在 `/credits` 与 `ASSET_CHECKLIST.md` 登记。

## 首页与角色

- `banner/home.webp`、`banner/home-1440.webp`、`banner/home-960.webp`：首页 Banner 响应式版本。
- `character-mobile.webp`：可选移动端构图。
- `avatar.webp`：个人资料卡头像。
- `character.webp`：后续可选看板娘立绘，本轮不接入。
- `about.webp`、`404.webp`：可选内页插画。

这些文件独立检测，缺失时使用浅色 CSS 或文字回退，不会输出破图。

## 项目截图

项目 Frontmatter 中的路径保持在 `projects/<slug>/` 下。建议使用 WebP，并为每张图片保留与实际界面一致的替代文本。项目无截图时继续使用本地 CSS 概念封面。

## 使用原则

- 不热链，不使用随机图片 API。
- 不使用官方游戏角色、Logo 或未经授权的画师作品包装个人品牌。
- 新增图片前先确认来源、授权和是否需要署名。
