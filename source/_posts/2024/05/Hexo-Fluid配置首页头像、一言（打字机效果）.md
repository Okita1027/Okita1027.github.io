---
title: Hexo-Fluid配置首页头像、一言（打字机效果）
categories: [Hexo, Fluid]
tags: [Hexo]
hide: false
archive: false
comment: true
date: 2024-05-16 14:44:48
excerpt: Hexo博客Fluid主题下的配置首页的头像、随机一句话（打字机效果）
index_img:
banner_img:
---
# 头像
> 原文链接：[传送门](https://blog.ayaka.space/2024/01/From-Halo-To-Hexo/#2%EF%BC%89Hexo)
1. 在 `scripts` 文件夹下新建 `Avatar.js`
```js
// Description: Adds a custom avatar to the top of the page
hexo.extend.injector.register('head_begin', '<link rel="stylesheet" href="/css/my-avatar.css">', 'default');
```
2. 在 `source/css` 文件夹下新建 `my-avatar.css`
```css
.my-avatar:hover {
  transform: rotate(360deg); /* 鼠标悬停时旋转 */
}

.my-avatar {
  width: 150px;
  height: 150px;
  border-radius: 50%;   /* 将图片圆形化 */
  transition: transform 0.5s; /* 过渡效果 */
  margin-bottom: 50px;  /* 与下面的文字对齐 */
}
```
3. 修改主题配置文件 `_config.fluid.yml`
```yaml
index: 
  # 首页副标题的独立设置
  # Independent config of home page subtitle
  slogan:
    enable: true
    # 为空则按 hexo config.subtitle 显示
    # If empty, text based on `subtitle` in hexo config
    text: "<img src='/img/图片名.后缀' class='my-avatar' /> <br /> 欢迎语"
```
4. 把头像图放到 `source/img` 下，名称同步上面的`图片名.后缀`。
# 一言
{% gi 2 2 %}
![配置多参数不生效](https://cdn.jsdelivr.net/gh/Okita1027/blog-images@master/Hexo-Fluid%E9%85%8D%E7%BD%AE%E9%A6%96%E9%A1%B5%E5%A4%B4%E5%83%8F%E3%80%81%E4%B8%80%E8%A8%80%EF%BC%88%E6%89%93%E5%AD%97%E6%9C%BA%E6%95%88%E6%9E%9C%EF%BC%89/invaild-default.png)
![一言接口示例](https://cdn.jsdelivr.net/gh/Okita1027/blog-images@master/Hexo-Fluid%E9%85%8D%E7%BD%AE%E9%A6%96%E9%A1%B5%E5%A4%B4%E5%83%8F%E3%80%81%E4%B8%80%E8%A8%80%EF%BC%88%E6%89%93%E5%AD%97%E6%9C%BA%E6%95%88%E6%9E%9C%EF%BC%89/hitokoto-example.png)
{% endgi %}
- 现状：官方提供的配置能够请求接口获取JSON数据，但只能选定**其中一个字段**在首页渲染，此时我希望能同时保留`hitokoto`、`from_who`、`from`。
- 解决方案：修改打字机程序`typed.ejs`，有背景色的是修改的代码。
{% code lang:js mark:18-58 %}
<% if(theme.fun_features.typing.enable && in_scope(theme.fun_features.typing.scope) && page.subtitle !== false) { %>
    <%- js_ex(theme.static_prefix.typed, '/typed.min.js') %>
    <script>
        (function (window, document) {
            var typing = Fluid.plugins.typing;
            var subtitle = document.getElementById('subtitle');
            if (!subtitle || !typing) {
                return;
            }
            var text = subtitle.getAttribute('data-typed-text');
            <% if (is_home() && theme.index.slogan.api && theme.index.slogan.api.enable) { %>
            jQuery.ajax({
                type: '<%= theme.index.slogan.api.method %>',
                url: '<%- theme.index.slogan.api.url %>',
                headers: <%- JSON.stringify(theme.index.slogan.api.headers || {}) %>,
                dataType: 'json',
                success: function (result) {
                    // 打字机输出内容
                    var apiText;
                    // 一言、来源作品、发言人
                    var hitokoto, from, fromWho;
                    // 从一言接口得到的JSON结果
                    if (result) {
                        // 需要的结果字段名，取决于_config[.主题名称].yml中的配置
                        var keys = '<%= theme.index.slogan.api.keys %>'.split(',');
                        if (result instanceof Array) {
                            // 得到 去掉外层{}的 数据
                            result = result[0];
                        }
                        // 取出实际展示的字段
                        for (const k of keys) {
                            var value = result[k];
                            if (typeof value === 'string') {
                                if (hitokoto == null) {
                                    hitokoto = value;
                                } else if (from == null) {
                                    from = value
                                } else if (fromWho == null) {
                                    fromWho = value;
                                }
                            } else if (value instanceof Object) {
                                result = value;
                            }
                        }
                        // 头像
                        apiText = "<img src='/img/avatar-gray.png' class='my-avatar' />";
                        // 样式
                        apiText += '<p style="font-size: 30px; text-align: center">『&#12288;' + hitokoto + '』</p>' +
                                '<p style="margin-top: 15px; text-align: right; font-size: 24px; color: #e0e0e0">——';
                        // 一言的发言人可能未知
                        if (fromWho != null) {
                            apiText += fromWho;
                        }
                        apiText += '「' + from + '」</p>';
                    }
                    apiText ? typing(apiText) : typing(text);
                },
                error: function (xhr, status, error) {
                    if (error) {
                        console.error('Failed to request <%= theme.index.slogan.api.url %>:', error);
                    }
                    typing(text);
                }
            })
            <% } else { %>
            typing(text);
            <% } %>
        })(window, document);
    </script>
<% } %> 
{% endcode %}
# 参考
[^1]: [一言开发者中心](https://developer.hitokoto.cn/sentence/demo.html)
[^2]: [Fluid官方打字机配置](https://hexo.fluid-dev.com/docs/guide/#slogan-%E6%89%93%E5%AD%97%E6%9C%BA)
[^3]: [从Halo迁移到Hexo，放弃变质的Halo博客](https://blog.ayaka.space/2024/01/From-Halo-To-Hexo/#2%EF%BC%89Hexo)
