---
title: vi/vim（单次/永久）显示行号
categories: [Linux, Shell]
tags: []
hide: false
archive: false
comment: false
date: 2024-06-16 14:27:03
index_img:
banner_img:
---

Linux的vi/vim编辑器中显示行号（单次/永久）

<!-- more -->

## 单次

`vi/vim 文件名`进入命令模式后，输入`:set number`或`:set nu`

## 永久

`echo set number >> ~/.vimr`或`echo set nu >> ~/.vimrc`