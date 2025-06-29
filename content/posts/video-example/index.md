---
title: "视频嵌入示例"
date: 2025-06-29
draft: true
description: "展示如何在博客中嵌入视频"
tags: ["教程", "视频"]
categories: ["技术"]
---

这是一个展示如何在博客文章中嵌入视频的示例。

## 1. 本地视频

如果你有一个本地视频文件，可以将它放在本文章的目录下（与index.md同级），然后使用video shortcode：

```markdown
{{< video src="demo.mp4" >}}
```

## 2. Bilibili视频

嵌入B站视频非常简单，只需要视频的BV号：

{{< bilibili bvid="BV1xx411c7mD" >}}

## 3. YouTube视频

YouTube视频使用Hugo内置的shortcode：

{{< youtube w7Ft2ymGmfc >}}

## 4. 带参数的视频

你可以控制视频的各种属性：

```markdown
{{< video src="demo.mp4" width="80%" autoplay=true muted=true loop=true >}}
```

## 5. 直接使用HTML

如果需要更精细的控制，也可以直接写HTML：

```html
<video controls width="100%" style="border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
  <source src="/videos/demo.mp4" type="video/mp4">
  您的浏览器不支持视频播放。
</video>
```

## 注意事项

1. 视频文件建议压缩到合理大小（<50MB）
2. 使用MP4格式以获得最佳兼容性
3. 对于大文件，考虑使用视频平台或CDN