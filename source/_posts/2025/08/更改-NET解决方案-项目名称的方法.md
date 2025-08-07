---
title: 更改.NET解决方案/项目名称的方法
categories: [后端, .NET]
tags: [.NET]
hide: false
archive: false
comment: true
password: ''
date: 2025-08-07 20:49:50
index_img:
banner_img:
---

<!-- more -->
## 更改.NET项目的名称的方法
1. 重命名`.csproj`和`.csproj.user`文件；
2. 重命名项目文件夹名称【可选】
3. 更改`.csproj`和`.csproj.user`文件中的如下内容：
   ```C#
    <RootNamespace>命名空间名称</RootNamespace>
    <AssemblyName>新建C#文件时生成的命名空间名称</AssemblyName>
   ```
4. 更改解决方案文件`.sln`中对项目的引用
```sln
Project("{FAE04EC0-301F-11D3-BF4B-00C04F79EFBC}") = "你想要的名称", "你想要的名称.csproj", "{5CEBB23A-BFE1-465D-AF8B-3A21764B88F7}"
```
5. 检查你的配置文件`launchSettings.json`和一系列`appsettings.json`是否需要更新项目引用名称
6. 把所有代码中的原命名控件改成新的命名空间