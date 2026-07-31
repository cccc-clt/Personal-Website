# 实施暖色编辑式视觉校正

Type: task
Status: resolved

## 目标

按已确认的视觉校正规格改造全站，并保持内容、路由与真实性边界不变。

## Answer

- 完成暖米白、深墨、橙色设计 token 与低饱和深色主题。
- 完成宋体标题、简化 Hero、三类卡片、暖色内页与一次性入场。
- 修复首页研究卡、移动菜单、窄屏溢出、文章标题和 404 空占位。
- `npm run validate` 已通过：Prettier、ESLint、Astro check、17 个静态页面与 Pagefind 17 页索引全部完成。
- 浏览器检查覆盖桌面、移动和极窄边界，未发现页面运行时错误。
- 无 `SITE_URL` 与临时 `SITE_URL=https://portfolio.example` 构建均通过；canonical、sitemap、robots、RSS 和结构化数据输出符合条件逻辑。
- 生成产物共检查 21 份 HTML，空 `href/src` 为 0，缺失内部目标为 0；测试域名已从最终本地 `dist` 恢复移除。

## Comments

- 第二张视觉参考生成因图像服务网络错误未完成；实现依据首张成功的 Hero 参考、用户明确的设计系统和现有真实资产推进，没有改用外部图像 API。
- 正式项目截图、三份 PDF、邮箱和正式域名仍缺失，界面继续显示诚实状态。
