<style>
  .bar{
    font-size:0.8rem;
    background:var(--background-color-dark);
    border-radius:0.3rem;
    color:var(--color-primary);
    padding: 0.2rem 0.5rem;
    box-sizing:border-box;
    text-align:center;
    margin:0.2rem;
  }
</style>
##### hc-row

栅栏布局主要用来做一些排版工作，最常见的就是几个控件需要放在一行，并且要随意控制对齐方式，这时候，`hc-row`，`hc-col`就可以起到很大作用！

###### 普通用法

``` html
  <hc-row>
    <hc-col></hc-col>
    <hc-col></hc-col>
    <hc-col></hc-col>
    <hc-col></hc-col>
  </hc-row>
```

<div class="phone">
  <hc-row>
    <hc-col>
      <div class="bar">auto</div>
    </hc-col>
    <hc-col>
      <div class="bar">auto</div>
    </hc-col>
    <hc-col>
      <div class="bar">auto</div>
    </hc-col>
    <hc-col>
      <div class="bar">auto</div>
    </hc-col>
  </hc-row>
</div>

###### 设置每列的宽度

将一列拆分成`24`小列。

``` html
  <hc-row>
    <hc-col span="6"></hc-col>
    <hc-col span="6"></hc-col>
    <hc-col span="6"></hc-col>
    <hc-col span="6"></hc-col>
  </hc-row>
```

<div class="phone">
  <hc-row>
    <hc-col span="6">
      <div class="bar">auto</div>
    </hc-col>
    <hc-col span="6">
      <div class="bar">auto</div>
    </hc-col>
    <hc-col span="6">
      <div class="bar">auto</div>
    </hc-col>
    <hc-col span="6">
      <div class="bar">auto</div>
    </hc-col>
  </hc-row>
</div>

###### 设置横向对齐方式

通过 `align`来设置左中右对齐，分别是：`left`、`center`、`right`

``` html
  <hc-row>
    <hc-col span="6"></hc-col>
    <hc-col span="6"></hc-col>
  </hc-row>
  <hc-row align="center">
    <hc-col span="6"></hc-col>
    <hc-col span="6"></hc-col>
  </hc-row>
  <hc-row align="right">
    <hc-col span="6"></hc-col>
    <hc-col span="6"></hc-col>
  </hc-row>
```

<div class="phone">
  <hc-row>
    <hc-col span="6">
      <div class="bar">auto</div>
    </hc-col>
    <hc-col span="6">
      <div class="bar">auto</div>
    </hc-col>
  </hc-row>
  <hc-row align="center">
    <hc-col span="6">
      <div class="bar">auto</div>
    </hc-col>
    <hc-col span="6">
      <div class="bar">auto</div>
    </hc-col>
  </hc-row>
  <hc-row align="right">
    <hc-col span="6">
      <div class="bar">auto</div>
    </hc-col>
    <hc-col span="6">
      <div class="bar">auto</div>
    </hc-col>
  </hc-row>
</div>

###### 自动铺满

通过 `hc-col`设置 `flex`的值来实现该栏自动铺满！

``` html
  <hc-row>
    <hc-col span="6"></hc-col>
    <hc-col flex="1"></hc-col>
  </hc-row>
```

<div class="phone">
  <hc-row>
    <hc-col span="6">
      <div class="bar">auto</div>
    </hc-col>
    <hc-col flex="1">
      <div class="bar">auto</div>
    </hc-col>
  </hc-row>
</div>

###### 排不下自动换行

通过 `wrap`实现自动换行

``` html
  <hc-row>
    <hc-col span="6"></hc-col>
    <hc-col span="12"></hc-col>
    <hc-col span="6"></hc-col>
    <hc-col span="12"></hc-col>
  </hc-row>
```

<div class="phone">
  <hc-row wrap>
    <hc-col span="6">
      <div class="bar">auto</div>
    </hc-col>
    <hc-col span="12">
      <div class="bar">auto</div>
    </hc-col>
    <hc-col span="6">
      <div class="bar">auto</div>
    </hc-col>
    <hc-col span="12">
      <div class="bar">auto</div>
    </hc-col>
  </hc-row>
</div>

###### 垂直对齐

通过 `valign`实现，可选：`top`，`center`，`bottom`

``` html
  <hc-row valign="top">
    <hc-col span="6"></hc-col>
    <hc-col span="12"></hc-col>
    <hc-col span="6"></hc-col>
    <hc-col span="12"></hc-col>
  </hc-row>
```

<div class="phone">
  <hc-row wrap valign="top">
    <hc-col span="6">
      <div class="bar">auto<br>333</div>
    </hc-col>
    <hc-col span="12">
      <div class="bar">auto</div>
    </hc-col>
    <hc-col span="6">
      <div class="bar">auto</div>
    </hc-col>
    <hc-col span="12">
      <div class="bar">auto</div>
    </hc-col>
  </hc-row>
</div>
<!-- Auto Generated Below -->


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
