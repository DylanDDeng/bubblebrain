# 标签页和分类页面背景色修复总结

## 问题描述
在标签页（/tags/）和分类页面（/categories/技术/）中，米色背景没有撑满整个页面。

## 问题原因
PaperMod主题在`themes/PaperMod/assets/css/core/theme-vars.css`文件中定义了：
```css
.list {
    background: var(--code-bg);
}
```
这个样式导致使用`.list`类的页面（包括标签页和分类页）使用了错误的背景色。

## 解决方案
在`assets/css/extended/custom.css`文件中添加了以下样式来覆盖默认设置：

```css
/* 覆盖PaperMod的容器限制，让背景撑满全屏 */
.list {
    background: var(--warm-bg) !important;
    background-color: var(--warm-bg) !important;
}

body.list {
    background: var(--warm-bg) !important;
    background-color: var(--warm-bg) !important;
}

.dark.list {
    background: var(--warm-bg) !important;
    background-color: var(--warm-bg) !important;
}

body.dark.list {
    background: var(--warm-bg) !important;
    background-color: var(--warm-bg) !important;
}

/* 其他相关样式 */
.terms-tags {
    background-color: transparent !important;
}

.post-entry.tag-entry {
    background-color: var(--warm-bg) !important;
}

/* 覆盖滚动条轨道的背景色 */
.list:not(.dark)::-webkit-scrollbar-track {
    background: var(--warm-bg) !important;
}

.list:not(.dark)::-webkit-scrollbar-thumb {
    border: 5px solid var(--warm-bg) !important;
}

/* 页面header背景处理 */
.page-header {
    background-color: transparent;
}

/* 确保main容器内的所有内容背景正确 */
.main > * {
    background-color: transparent;
}
```

## 页面类型说明
- **列表页面**（首页、标签页、分类页）：body标签会添加`list`类
- **单个页面**（文章页）：body标签没有`list`类
- **深色模式**：body标签会额外添加`dark`类

## 验证方法
1. 运行`hugo`命令重新生成网站
2. 在浏览器中访问：
   - `/tags/` - 标签列表页
   - `/categories/` - 分类列表页
   - `/categories/技术/` - 特定分类页面
3. 检查背景色是否为米色（#faf8f3）且撑满整个页面
4. 切换深色模式，确认背景色正确切换

## 注意事项
- 使用`!important`确保自定义样式优先级高于主题默认样式
- 同时使用`background`和`background-color`属性确保兼容性
- 为深色模式和浅色模式都添加了相应的样式规则