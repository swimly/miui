##### hc-rate

星星评分组件！

###### 普通用法

通过添加`hc-rate-item`来控制评分组件的星星数量！

``` html
  <hc-rate>
    <hc-rate-item></hc-rate-item>
    <hc-rate-item></hc-rate-item>
    <hc-rate-item></hc-rate-item>
    <hc-rate-item></hc-rate-item>
    <hc-rate-item></hc-rate-item>
  </hc-rate>
```

<div class="phone">
  <hc-rate>
    <hc-rate-item></hc-rate-item>
    <hc-rate-item></hc-rate-item>
    <hc-rate-item></hc-rate-item>
    <hc-rate-item></hc-rate-item>
    <hc-rate-item></hc-rate-item>
  </hc-rate>
</div>

###### 自定义图标

`void-icon`是默认图标，`active-icon`是选中图标！

``` html
  <hc-rate void-icon="favorites" active-icon="favorites-fill">
    <hc-rate-item></hc-rate-item>
    <hc-rate-item></hc-rate-item>
    <hc-rate-item></hc-rate-item>
    <hc-rate-item></hc-rate-item>
  </hc-rate>
```

<div class="phone">
  <hc-rate void-icon="favorites" active-icon="favorites-fill">
    <hc-rate-item></hc-rate-item>
    <hc-rate-item></hc-rate-item>
    <hc-rate-item></hc-rate-item>
    <hc-rate-item></hc-rate-item>
  </hc-rate>
</div>

###### 自定义主题

`active-color`控制选中之后的颜色！

``` html
  <hc-rate active-color="#f00" value="2">
    <hc-rate-item></hc-rate-item>
    <hc-rate-item></hc-rate-item>
    <hc-rate-item></hc-rate-item>
    <hc-rate-item></hc-rate-item>
    <hc-rate-item></hc-rate-item>
  </hc-rate>
```

<div class="phone">
  <hc-rate active-color="#f00" value="2">
    <hc-rate-item></hc-rate-item>
    <hc-rate-item></hc-rate-item>
    <hc-rate-item></hc-rate-item>
    <hc-rate-item></hc-rate-item>
    <hc-rate-item></hc-rate-item>
  </hc-rate>
</div>

###### 带选中文本

给`hc-rate-item`添加属性`label`就能实现选中显示文本的效果！

``` html
  <hc-rate value="2">
    <hc-rate-item label="差"></hc-rate-item>
    <hc-rate-item label="一般"></hc-rate-item>
    <hc-rate-item label="好"></hc-rate-item>
    <hc-rate-item label="很好"></hc-rate-item>
    <hc-rate-item label="非常好"></hc-rate-item>
  </hc-rate>
```

<div class="phone">
  <hc-rate value="2">
    <hc-rate-item label="差"></hc-rate-item>
    <hc-rate-item label="一般"></hc-rate-item>
    <hc-rate-item label="好"></hc-rate-item>
    <hc-rate-item label="很好"></hc-rate-item>
    <hc-rate-item label="非常好"></hc-rate-item>
  </hc-rate>
</div>
<!-- Auto Generated Below -->

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
