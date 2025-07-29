---
title: 由代理引起的Git报错解决方法
categories: []
tags: [Git]
hide: false
archive: false
comment: false
password: ''
date: 2025-07-18 17:29:51
index_img:
banner_img:
---
因为这个解决方案用得非常多，为了方便今后使用，在自己的站点上也放一份
原文：完美解决 git 报错 “fatal: unable to access ‘https://github.com/.../.git‘: Recv failure Connection was rese
> https://blog.csdn.net/qq_43546721/article/details/139506583
<!-- more -->
## 取消代理设置
> 端口号要根据实际更改：
> - Clash For Windows ：7890
> - Clash Verge : 7897
```BASH
git config --global --unset http.proxy
git config --global --unset https.proxy
```
## 使用本地代理
```BASH
git config --global http.proxy http://127.0.0.1:7890
```