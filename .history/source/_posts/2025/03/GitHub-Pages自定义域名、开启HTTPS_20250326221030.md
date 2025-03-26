---
title: GitHub Pages自定义域名、开启HTTPS
categories: [Hexo]
tags: [Hexo]
hide: false
archive: false
comment: true
date: 2025-03-19 10:42:30
index_img:
banner_img:
---

GitHub Pages绑定自定义域名、（Namesilo）开启HTTPS

<!-- more -->

# 购买域名
[NameSilo](https://www.namesilo.com)能用支付宝
国外域名最大的好处是解析云服务器地址时不需要备案
# 绑定自定义域名
1. 打开[GitHub设置里的Pages](https://github.com/settings/pages)

2. 点击`Add a domain`，输入你的域名，之后页面上会出现如下文字：

   - Create a TXT record in your DNS configuration for the following hostname: 

     `下划线开头的代码`

   - Use this code for the value of the TXT record: 

     `数字和字母组成的代码`

   - Wait until your DNS configuration changes. This could take up to 24 hours to propagate.

3. 在你的购买域名的地方找到DNS解析服务，添加如下记录

   | Type  |        Name        |           Value            |
   | :---: | :----------------: | :------------------------: |
   |  TXT  | `下划线开头的代码` |   `数字和字母组成的代码`   |
   |   A   |         @          |      185.199.108.153       |
   |   A   |         @          |      185.199.109.153       |
   |   A   |         @          |      185.199.110.153       |
   |   A   |         @          |      185.199.111.153       |
   | AAAA  |         @          |    2606:50c0:8000::153     |
   | AAAA  |         @          |    2606:50c0:8001::153     |
   | AAAA  |         @          |    2606:50c0:8002::153     |
   | AAAA  |         @          |    2606:50c0:8003::153     |
   | CNAME |        www         | 你的github用户名.github.io |

4. 添加完之后，回到刚才GitHub的Pages域名设置页面点击`Verify`，此时GitHub已经成功添加了自定义域名。
5. 找到你的博客仓库，进入Settings->Pages，在该页面上的Custom domain填入你的域名并保存。

# 开启HTTPS

刚才绑定域名设置的下方有一个`Enforce HTTPS的选项`，如果它无法勾选，并且提示：

`Unavailable for your site because your domain is not properly configured to support HTTPS`的话，

回到DNS解析服务，再添加一条记录：

| Type | Hostname | Value           | Flag            | Tag                                                   |
| ---- | -------- | --------------- | --------------- | ----------------------------------------------------- |
| CAA  | @        | letsencrypt.org | 0(non-critical) | issue(domain name of the certificate issuer to trust) |

此时Github上的`Enforce HTTPS`选项就能够勾选了。
> 上面用的是NameSilo的解析服务，不同服务商添加SSL证书的方式不太一样，有些是可以申请免费SSL证书并自动解析的。