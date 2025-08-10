---
title: HelloWorld
categories: [Hexo]
tags: [Hexo]
index_img: /HelloWorld/闪闪切嗣.jpg
banner_img: img/fgo/Stella.jpg
hide: false
archive: false
date: 2024-05-12 15:33:00
---

这一段文字是摘要，显示在主页和文章页
<!-- more -->

# 语法高亮

Hexo 对 [highlight.js](https://github.com/highlightjs/highlight.js) 与 [prismjs](https://github.com/PrismJS/prism) 两种代码高亮库提供内建支持。 本篇教程将展示如何将 Hexo 的内建语法高亮组件整合至你的模板中。

## 如何插入代码块

Hexo 支持两种代码块写法——[代码块标签插件](https://hexo.io/zh-cn/docs/tag-plugins#代码块)和[反引号代码块标签插件](https://hexo.io/zh-cn/docs/tag-plugins#反引号代码块)：

````HEXO
{% codeblock [title] [lang:language] [url] [link text] [additional options] %}
code snippet
{% endcodeblock %}

{% code [title] [lang:language] [url] [link text] [additional options] %}
code snippet
{% endcode %}

```[language] [title] [url] [link text] [additional options]
code snippet
```
````

上面的第三种是 Markdown 的 fenced code block 语法。 Hexo 对其进行了扩展，使其支持更多特性。 在[标签插件文档](https://hexo.io/zh-cn/docs/tag-plugins#代码块)中你可以找到可用的选项。

> [!TIP]
>
> Hexo 支持用任何格式书写文章，只需安装相应渲染插件即可。 可以使用 markdown、ejs、swig、nunjucks、pug、asciidoc 等。 无论使用哪种格式，这三种代码块语法始终可用。

# Hello World
这是一段脚注
<!-- 空一行 -->
    Indent paragraphs to include them in the footnote.
    `{ my code }`
    Add as many paragraphs as you like.

## 定义列表
First Term
: This is the definition of the first term.

Second Term
: This is one definition of the second term.
: This is another definition of the second term.

## 任务列表
- [x] Write the press release
- [ ] Update the website
- [ ] Contact the media

## 使用 Emoji 表情
😂

## Tag插件
### 便签
在markdown中加入如下代码使用便签
{% note success %}
文字或者`markdown`都可以
``` java
int num = 1;
```
{% endnote %}
### 行内标签
{% label primary @123 %}
### 折叠块
{% fold info @这是标题 %}
需要折叠的一段内容，支持markdown
{% endfold %}
### 勾选框
{% cb text, checked?, incline? %}
### 按钮
{% btn https://www.baidu.com, 去百度, 百度 %}

## 脚注
[^1]: https://pan.baidu.com
[^2]: https://yiyan.baidu.com



![花嫁光辉](./HelloWorld/花嫁光辉.jpg)