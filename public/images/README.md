# 图片资源接口

现有 `public/images/og/` 保存分享卡。第四阶段-B 起，首页角色、Banner 与项目封面统一使用以下本地路径：

```text
public/images/
├─ avatar/
│  └─ character.png
├─ banner/
│  └─ hero-bg.webp
└─ projects/
   └─ <project-cover>.webp
```

## 首页与角色

- `avatar/character.png`：原创看板娘立绘，建议保留透明背景。
- `banner/hero-bg.webp`：首页 Hero 背景，建议使用横向构图。
- 两个文件均为可选资源；缺失时继续使用现有 CSS 与文字回退，不会输出破图。
- 看板娘资源在移动端按照 `avatarConfig.hideOnMobile` 的策略隐藏。

## 项目封面

- 项目 Frontmatter 已支持可选 `cover` 字段。
- `cover` 可填写 `/images/projects/<project-cover>.webp`，也可只填写文件名。
- 图片使用懒加载；文件缺失或未配置时继续显示现有 CSS 概念封面。

## 使用原则

- 不热链，不使用随机图片 API。
- 不使用官方游戏角色、Logo 或未经授权的画师作品包装个人品牌。
- 新增图片前先确认来源、授权和是否需要署名。
- 需要署名的资源应同步登记到 `/credits` 与 `ASSET_CHECKLIST.md`。
