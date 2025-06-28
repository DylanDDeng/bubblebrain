# Favicon 设置说明

你需要准备以下图标文件并放在 `/static` 目录下：

1. **favicon.ico** - 标准的网站图标（16x16 或 32x32 像素）
2. **favicon-16x16.png** - 16x16 像素的PNG图标
3. **favicon-32x32.png** - 32x32 像素的PNG图标
4. **apple-touch-icon.png** - 180x180 像素的PNG图标（用于iOS设备）
5. **safari-pinned-tab.svg** - SVG格式的图标（用于Safari浏览器）

## 推荐的图标生成工具

1. **Favicon.io** (https://favicon.io/)
   - 可以从文字、图片或表情符号生成favicon
   - 自动生成所有需要的尺寸

2. **RealFaviconGenerator** (https://realfavicongenerator.net/)
   - 支持更多平台和设备
   - 提供详细的配置选项

3. **Favicon Generator** (https://www.favicon-generator.org/)
   - 简单易用
   - 支持多种格式

## 使用步骤

1. 选择一个工具生成你的favicon文件
2. 下载生成的文件包
3. 将相应的文件复制到 `/static` 目录
4. 运行 `hugo` 命令重新构建网站

Hugo会自动将static目录中的文件复制到网站根目录。