##### hc-switch
开关有点类似单个的单选框，表示`boolean`类型。

###### 默认
通过`checked`来控制开关的状态！

``` html
<hc-switch checked></hc-switch>
<hc-switch>收藏</hc-switch>
```
<div class="phone">
  <hc-switch></hc-switch>
  <hc-switch checked></hc-switch>
</div>

###### 不同主题
通过`type`来改变开关的选中颜色，默认有：`primary`、`warning`、`success`、`danger`。

``` html
  <hc-switch type="primary" checked></hc-switch>
  <hc-switch type="warning" checked></hc-switch>
  <hc-switch type="success" checked></hc-switch>
  <hc-switch type="danger" checked></hc-switch>
```
<div class="phone">
  <hc-switch type="primary" checked></hc-switch>
  <hc-switch type="warning" checked></hc-switch>
  <hc-switch type="success" checked></hc-switch>
  <hc-switch type="danger" checked></hc-switch>
</div>

###### 自定义开关形式
除了默认的开关样式，还可以自定义任意形状的开关样式，比如常用的收藏，点赞，都可以看成一个开关组件！`off-icon`表示未选中的图标，`active-icon`表示选中的图标，`icon-size`用来控制图标的大小，`active-color`控制选中的颜色。

``` html
  <hc-switch custom off-icon="favorites" active-icon="favorites-fill"></hc-switch>
  <hc-switch custom off-icon="collection" active-icon="collection-fill"></hc-switch>
```
<div class="phone">
  <hc-switch custom off-icon="favorites" checked active-icon="favorites-fill"></hc-switch>
  <hc-switch custom off-icon="collection" checked active-icon="collection-fill" active-color="#f00"></hc-switch>
  <hc-switch custom icon-size="26" checked off-icon="collection" active-icon="collection-fill"></hc-switch>
</div>

###### 只读
仅仅用来展示，不可点击，通过添加 `readonly`。

``` html
  <hc-switch custom off-icon="favorites" active-icon="favorites-fill"></hc-switch>
  <hc-switch custom off-icon="collection" active-icon="collection-fill"></hc-switch>
```
<div class="phone">
<hc-switch type="primary" checked readonly></hc-switch>
  <hc-switch custom off-icon="favorites" checked active-icon="favorites-fill" readonly></hc-switch>
</div>

###### 禁用
不可点击，组件本身变灰，添加 `disabled`。

``` html
  <hc-switch custom off-icon="favorites" active-icon="favorites-fill" disabled></hc-switch>
  <hc-switch custom off-icon="collection" active-icon="collection-fill" disabled></hc-switch>
```
<div class="phone">
<hc-switch type="primary" checked disabled></hc-switch>
  <hc-switch custom off-icon="favorites" checked active-icon="favorites-fill" disabled></hc-switch>
</div>
<!-- Auto Generated Below -->


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
