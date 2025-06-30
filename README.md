# BubbleBrain 🫧

一个基于 Hugo 构建的个人技术博客，专注于 AI、编程和技术思考的分享。

## 📖 项目简介

BubbleBrain 是一个现代化的静态博客网站，使用 Hugo 静态站点生成器和 PaperMod 主题构建。网站主要分享关于人工智能、编程技术、产品设计等领域的见解和实践经验。

**网站地址**: [https://bubblebrain.me/](https://bubblebrain.me/)

## ✨ 主要特性

- 🎨 **现代化设计**: 基于 PaperMod 主题，支持明暗模式切换
- 📱 **响应式布局**: 完美适配桌面端和移动端
- 🔍 **全文搜索**: 支持站内内容快速搜索
- 🏷️ **分类标签**: 完善的内容分类和标签系统
- 💬 **评论系统**: 集成 Giscus 评论系统
- 📊 **数据分析**: 支持 Google Analytics 等分析工具
- 🚀 **性能优化**: 静态站点，加载速度快
- 🌐 **SEO 友好**: 完善的 SEO 优化配置

## 📂 项目结构

```
.
├── archetypes/          # 内容模板
├── assets/             # 资源文件 (CSS, JS 等)
├── content/            # 博客内容
│   ├── posts/          # 博客文章
│   ├── ainews/         # AI 资讯
│   └── categories/     # 分类页面
├── layouts/            # 自定义布局模板
├── static/             # 静态资源 (图片, 图标等)
├── themes/             # 主题文件
│   └── PaperMod/       # PaperMod 主题
├── public/             # 生成的静态网站
├── hugo.yaml           # Hugo 配置文件
└── README.md           # 项目说明文档
```

## 🛠️ 技术栈

- **静态站点生成器**: [Hugo](https://gohugo.io/)
- **主题**: [PaperMod](https://github.com/adityatelange/hugo-PaperMod)
- **评论系统**: [Giscus](https://giscus.app/)
- **部署**: 静态托管服务
- **样式**: CSS3 + 自定义样式

## 🚀 快速开始

### 环境要求

- Hugo Extended 版本 (推荐 v0.100.0+)
- Git

### 本地开发

1. **克隆项目**
   ```bash
   git clone <repository-url>
   cd BubbleBrain
   ```

2. **初始化子模块** (如果主题是作为子模块)
   ```bash
   git submodule update --init --recursive
   ```

3. **启动开发服务器**
   ```bash
   hugo server -D
   ```

4. **访问网站**
   
   打开浏览器访问 `http://localhost:1313`

### 构建生产版本

```bash
hugo --minify
```

生成的静态文件将保存在 `public/` 目录中。

## 📝 内容管理

### 创建新文章

```bash
hugo new posts/文章标题.md
```

### 文章 Front Matter 示例

```yaml
---
title: "文章标题"
date: 2024-01-01
draft: false
tags: ["AI", "技术", "思考"]
categories: ["技术"]
description: "文章简介"
---
```

### 内容分类

- **posts/**: 主要的技术文章和思考
- **ainews/**: AI 相关资讯和动态
- **categories/**: 内容分类页面

## ⚙️ 配置说明

主要配置文件为 `hugo.yaml`，包含以下重要设置：

### 基本配置
- 网站 URL: `https://bubblebrain.me/`
- 网站标题: BubbleBrain
- 主题: PaperMod

### 功能配置
- 分页: 每页 10 篇文章
- 搜索: 支持全文搜索
- 评论: Giscus 评论系统
- 分析: Google Analytics 集成

### 自定义样式

项目包含自定义 CSS 样式文件，主要解决：
- 背景色适配问题
- 响应式布局优化
- 深色模式支持

详细的样式修复说明请参考 [`CSS_FIX_SUMMARY.md`](CSS_FIX_SUMMARY.md)。

## 🎨 主题定制

### 颜色方案
- 浅色模式: 温暖的米色背景 (#faf8f3)
- 深色模式: 深色背景配色
- 支持自动切换和手动切换

### 导航菜单
- 分类
- 归档
- AI资讯
- 搜索

### 社交链接
- Twitter/X
- GitHub

## 📱 功能特色

### 搜索功能
基于 Fuse.js 的全文搜索，支持：
- 标题搜索
- 内容搜索
- 标签搜索
- 模糊匹配

### 评论系统
使用 Giscus 提供的评论功能：
- 基于 GitHub Discussions
- 支持 Markdown
- 自动主题适配
- 中文界面

### SEO 优化
- 自动生成 sitemap.xml
- 支持 robots.txt
- Open Graph 标签
- Twitter Cards
- 结构化数据

## 🚀 部署指南

### 推荐部署方式

1. **Vercel** (推荐)
   - 连接 GitHub 仓库
   - 自动部署
   - 全球 CDN

2. **Netlify**
   - 拖拽部署或 Git 集成
   - 表单处理
   - 边缘函数支持

3. **GitHub Pages**
   - 免费托管
   - 自定义域名支持

### 部署配置

确保在部署前：
1. 运行 `hugo --minify` 生成优化后的静态文件
2. 配置正确的 `baseURL`
3. 设置适当的缓存策略

## 🤝 贡献指南

欢迎提交 Issue 和 Pull Request！

### 贡献方式
1. Fork 项目
2. 创建特性分支
3. 提交更改
4. 推送到分支
5. 创建 Pull Request

### 内容贡献
- 技术文章分享
- 错误修正
- 功能改进建议
- 翻译贡献

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。

## 📞 联系方式

- 网站: [https://bubblebrain.me/](https://bubblebrain.me/)
- Twitter: [@dylandddeng](https://x.com/dylandddeng)
- GitHub: [项目仓库](https://github.com/)

## 🙏 致谢

- [Hugo](https://gohugo.io/) - 优秀的静态站点生成器
- [PaperMod](https://github.com/adityatelange/hugo-PaperMod) - 简洁美观的 Hugo 主题
- [Giscus](https://giscus.app/) - 基于 GitHub Discussions 的评论系统

---

**BubbleBrain** - 探索技术、分享思考、记录成长 🫧