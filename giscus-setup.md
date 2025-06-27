# Giscus 评论系统配置指南

Giscus 是一个基于 GitHub Discussions 的评论系统。要启用评论功能，请按以下步骤操作：

## 1. 准备 GitHub 仓库

1. 确保您有一个**公开的** GitHub 仓库（可以是您的博客仓库或单独的评论仓库）
2. 在仓库的 Settings → General → Features 中启用 **Discussions**

## 2. 获取 Giscus 配置

1. 访问 [giscus.app](https://giscus.app/zh-CN)
2. 按照页面指引填写：
   - 输入您的仓库名（格式：`username/repo-name`）
   - 选择 Discussion 分类（建议选择 `Announcements` 或创建一个 `Comments` 分类）
   - 选择映射方式（推荐 `pathname`）
   - 其他选项保持默认即可

3. 页面会自动生成所需的配置信息

## 3. 更新博客配置

编辑 `hugo.yaml` 文件，找到 giscus 配置部分（大约在第130行），更新以下信息：

```yaml
giscus:
  enable: true
  repo: "YOUR_GITHUB_USERNAME/YOUR_REPO_NAME"  # 替换为您的仓库
  repoId: "YOUR_REPO_ID"                       # 从 giscus.app 获取
  category: "Announcements"                     # 或您选择的分类
  categoryId: "YOUR_CATEGORY_ID"                # 从 giscus.app 获取
```

## 4. 特性说明

- **自动主题切换**：评论区会随网站主题（亮色/暗色）自动切换
- **中文界面**：默认设置为中文界面
- **懒加载**：评论区采用懒加载，提升页面加载速度
- **单篇文章禁用**：在文章的 front matter 中添加 `disableComments: true` 可禁用该文评论

## 5. 验证

1. 运行 `hugo server`
2. 访问任意博客文章页面
3. 滚动到底部应该能看到评论区
4. 使用 GitHub 账号登录即可发表评论

## 常见问题

- **评论不显示**：检查仓库是否公开，Discussions 是否启用
- **配置错误**：确保从 giscus.app 复制的 ID 正确无误
- **主题不切换**：清除浏览器缓存后重试