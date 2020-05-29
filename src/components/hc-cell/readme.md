<style>
  hc-cell{
    margin:0 !important;
  }
</style>
##### hc-cell
单元格主要用来做链接跳转！
###### 默认样式
其样式有点类似`hc-form-item`
``` html
  <hc-cell label="姓名" value="刘勇"></hc-cell>
```
<div class="phone">
  <hc-cell label="姓名" value="刘勇"></hc-cell>
</div>

###### 后面带箭头
`hc-cell`后面可通过`arrow-icon`来添加箭头图标。具体请参考`hc-icon`。
``` html
  <hc-cell arrow-icon="arrow-right" label="姓名" value="刘勇"></hc-cell>
```
<div class="phone">
  <hc-cell arrow-icon="arrow-right" label="姓名" value="刘勇"></hc-cell>
</div>

###### 前面带图片
`hc-cell`后面可通过`arrow-icon`来添加箭头图标。具体请参考`hc-icon`。
``` html
  <hc-cell icon="../../assets/ty1.png" arrow-icon="arrow-right" label="姓名" value="刘勇"></hc-cell>
```
<div class="phone">
  <hc-cell icon="../../assets/ty1.png" arrow-icon="arrow-right" label="姓名" value="刘勇"></hc-cell>
</div>

###### slot注入
可通过slot注入图标和箭头
``` html
  <hc-cell>
    <hc-icon name="map" slot="icon"></hc-icon>
    <span slot="label">详细地址</span>
    <span>湖北省武汉市江夏区栗庙路保利清能西海岸南区G15栋</span>
    <hc-icon name="arrow-right" slot="arrow"></hc-icon>
  </hc-cell>
```
<div class="phone">
  <hc-cell>
    <hc-icon name="map" color="#409EFF" size="28" slot="icon"></hc-icon>
    <span slot="label">详细地址</span>
    <span>湖北省武汉市江夏区栗庙路保利清能西海岸南区G15栋</span>
    <hc-icon name="arrow-right" slot="arrow"></hc-icon>
  </hc-cell>
</div>

###### 水平垂直对齐方式
`valign`代表垂直对齐，`align`水平对齐
``` html
  <hc-cell></hc-cell>
```
<div class="phone">
  <hc-cell valign="top" align="right">
    <hc-icon color="#409EFF" size="28" name="map" slot="icon"></hc-icon>
    <span slot="label">详细地址</span>
    <span>湖北省武汉市江夏区栗庙路保利清能西海岸南区G15栋</span>
    <hc-icon name="arrow-right" slot="arrow"></hc-icon>
  </hc-cell>
</div>

###### 点击跳转
可添加`href`属性，类似`a`标签的跳转！
``` html
  <hc-cell href="https://www.baidu.com">百度</hc-cell>
```
<div class="phone">
  <hc-cell href="https://www.baidu.com">百度</hc-cell>
</div>

<!-- Auto Generated Below -->

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
