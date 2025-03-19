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



# HelloWorld
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