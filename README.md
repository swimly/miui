#### 介绍

miui作为一个致敬miui12的前端ui组件库，其很多组件的样式都是遵循miui12的设计风格，采用`stencil`编写，利用现在最流行的`web-component`技术实现。能够实现一处编写多处使用，支持`vue`、`react`、`angular`、`ember`的嵌入使用！

#### 安装

``` bash
  npm install --save @swimly/miui
  yarn add @swimly/miui
```

#### CDN

`@0.2.2`为版本号，替换相应版本号即可！

``` html
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/swimly/miui@v0.2.2/miui.css">
  <script type="module" src="https://cdn.jsdelivr.net/gh/swimly/miui@v0.2.2/miui.esm.js"></script>
  <script nomodule="" src="https://cdn.jsdelivr.net/gh/swimly/miui@v0.2.2/dist/miui.js"></script>
```

#### HTML使用

如果你还没使用任何第三方框架，也可以直接使用该组件库，而且使用方式极其简单！

###### 引入样式
``` html
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/swimly/miui@v0.2.2/miui.css">
```
###### 引入插件
``` html
  <script type="module" src="https://cdn.jsdelivr.net/gh/swimly/miui@v0.2.2/miui.esm.js"></script>
  <script nomodule="" src="https://cdn.jsdelivr.net/gh/swimly/miui@v0.2.2/dist/miui.js"></script>
```
###### 使用插件
所有的控件都可以直接写一个标签名就可以，极大的减少了常用ui组件库的繁琐程度。
``` html
  <hc-button>按钮</hc-button>
```
其他使用方式，后续完善！