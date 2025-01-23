---
nav:
  title: 指南
group:
  title: 组件
  order: 2
order: -1
toc: content
tocDepth: 2
---
# Quiz

通用题目显示组件。

## 何时使用

用于显示题目题干信息，包括媒体文件和文本信息。

## 代码演示

<code src="../../src/Quiz/demo/simple.tsx">基本用法</code>
<code src="../../src/Quiz/demo/richText.tsx">包含富文本的题目</code>
<code src="../../src/Quiz/demo/image.tsx">包含图片的题目</code>
<code src="../../src/Quiz/demo/audio.tsx">包含音频的题目</code>

## API

### QuizProps

| 参数        | 说明           | 类型                                            | 默认值   |
| ----------- | -------------- | ----------------------------------------------- | -------- |
| title       | 题目文本信息   | `string`                                        | -        |
| keyword     | 题目关键词     | `string`                                        | -        |
| annotations | 题目关键词样式 | `normal` \| `underline` \| `strong` \| `italic` | `normal` |
| audio       | 题目音频链接   | `string`                                        | -        |
| image       | 题目图片链接   | `string`                                        | -        |
| direction   | 题目对齐方式   | `left` \| `center` \| `right`                     | `center`  |
