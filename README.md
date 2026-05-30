# BubbleBrain

BubbleBrain 是一个使用 Astro 构建的个人博客，记录 AI、coding agents、产品思考和个人生活笔记。

网站地址: <https://bubblebrain.me/>

## 技术栈

* Astro 5

* MDX / Markdown 内容

* UnoCSS

* Pagefind 站内搜索

* Giscus 评论

* 自动生成 Open Graph / X 分享预览图

## 项目结构

```text
.
├── src/
│   ├── components/       # Astro 组件
│   ├── content/          # 文章和短笔记
│   │   ├── blog/         # 长文章
│   │   ├── shorts/       # 短笔记
│   │   └── home/         # 首页内容
│   ├── layouts/          # 页面布局
│   └── pages/            # 路由页面
├── plugins/              # Markdown / OG image 插件
├── static/               # 会复制到站点根目录的静态文件
├── astro.config.ts       # Astro 配置
├── src/config.ts         # 站点、导航和功能配置
└── package.json
```

## 本地开发

```bash
pnpm install
pnpm dev
```

开发地址默认是 `http://localhost:4321`。

## 构建

```bash
pnpm check
pnpm build
```

生产产物会生成到 `dist/`。`static/` 目录中的 favicon、OG 图片、Giscus 样式、视频等静态文件会被 Astro 复制到站点根目录。

## 内容管理

长文章放在 `src/content/blog/`，短笔记放在 `src/content/shorts/`。常用 frontmatter:

```yaml
---
title: "文章标题"
description: "文章简介"
pubDate: 2026-01-01
tags: ["AI", "Thought"]
categories: ["Blog"]
---
```

如果不想为某篇内容生成分享图，可以设置:

```yaml
ogImage: false
```

## 配置入口

* 站点信息、导航、社交链接和功能开关: `src/config.ts`

* Astro 构建配置: `astro.config.ts`

* 内容 schema: `src/content/schema.ts`

* 站点静态资源: `static/`

