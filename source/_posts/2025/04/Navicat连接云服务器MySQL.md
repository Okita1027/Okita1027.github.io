---
title: Navicat连接云服务器MySQL
categories: [数据库, MySQL]
tags: [MySQL]
hide: false
archive: false
comment: false
password: ''
date: 2025-04-14 22:56:54
index_img:
banner_img:
---

> 用root连接搞了好久没连上，最后重新建了一个用户成功了……

<!-- more -->

1. 先去服务器的MySQL命令行执行如下命令：
   1. `CREATE USER '用户名'@'%' IDENTIFIED BY '密码';`
   2. `GRANT ALL PRIVILEGES ON *.* TO '用户名'@'%' WITH GRANT OPTION;`
   3. `FLUSH PRIVILEGES;`
   
2. Navicat新建连接，分别在以下2个标签中输入连接参数：
   1. 常规
   
      | KEY      | VALUE                |
      | -------- | -------------------- |
      | 连接名称 | 随便写               |
      | 主机     | localhost            |
      | 端口     | 3306                 |
      | 用户名   | 第一步中创建的用户名 |
      | 密码     | 第一步中创建的密码   |
   
   
   2. SSH
   
      | KEY      | VALUE        |
      | -------- | ------------ |
      | 主机     | 云服务器IP   |
      | 端口     | 22           |
      | 用户名   | 服务器用户名 |
      | 验证方式 | 密码         |
      | 密码     | 服务器密码   |
      