# 在博客文章中嵌入视频的方法

## 1. 使用本地视频文件

### 方法A：放在static目录（适合共享的视频）
```
/static/videos/your-video.mp4
```

在文章中使用：
```markdown
{{< video src="/videos/your-video.mp4" >}}
```

### 方法B：作为页面资源（适合文章专属视频）
创建文件夹结构：
```
/content/posts/你的文章标题/
├── index.md      # 文章内容
└── demo.mp4      # 视频文件
```

在index.md中使用：
```markdown
{{< video src="demo.mp4" >}}
```

### video shortcode参数说明
- `src`: 视频文件路径（必需）
- `width`: 宽度，默认100%
- `height`: 高度，默认auto
- `controls`: 是否显示控制条，默认true
- `autoplay`: 是否自动播放，默认false
- `loop`: 是否循环播放，默认false
- `muted`: 是否静音，默认false

例如：
```markdown
{{< video src="video.mp4" width="80%" autoplay=true muted=true >}}
```

## 2. 嵌入Bilibili视频

使用BV号：
```markdown
{{< bilibili bvid="BV1xx411c7mD" >}}
```

使用AV号：
```markdown
{{< bilibili aid="123456789" >}}
```

参数说明：
- `bvid`: B站BV号
- `aid`: B站AV号
- `page`: 分P，默认1
- `autoplay`: 是否自动播放，默认0

## 3. 嵌入YouTube视频

Hugo内置支持：
```markdown
{{< youtube w7Ft2ymGmfc >}}
```

## 4. 直接使用HTML

如果需要更多控制：
```html
<video controls width="100%" style="max-width: 800px;">
  <source src="/videos/demo.mp4" type="video/mp4">
  您的浏览器不支持视频播放。
</video>
```

## 注意事项

1. **文件大小**：建议视频文件不超过50MB，否则会影响网站加载速度
2. **视频格式**：推荐使用MP4格式（H.264编码），兼容性最好
3. **CDN建议**：对于大文件，建议使用CDN或视频平台
4. **移动端优化**：添加 `playsinline` 属性避免iOS全屏播放

## 视频压缩建议

使用FFmpeg压缩视频：
```bash
ffmpeg -i input.mp4 -vcodec h264 -acodec aac -strict -2 -crf 24 -preset slow output.mp4
```

这会在保持较好质量的同时显著减小文件大小。