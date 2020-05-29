##### hc-radio
单选框用来收集用户的单项选择数据！
###### 默认单选框
单选框默认是一个矩形框！,单个的单选框默认没有选中，一旦选中无法取消选中，除非搭配`hc-radio-group`使用！
``` html
  <hc-radio value="1" checked>前端开发</hc-radio>
  <hc-radio value="0">设计ui</hc-radio>
```
<div class="phone">
  <hc-radio value="1" checked>前端开发</hc-radio>
  <hc-radio value="0">设计ui</hc-radio>
</div>

###### 圆角单选框
根据弧度的不同，单选框可以衍生出两种形式：  `conner`， `rounder`，类似`hc-button`， `hc-input`等等一系列组件！
``` html
  <hc-radio conner value="1" checked>前端开发</hc-radio>
  <hc-radio rounder value="0">设计ui</hc-radio>
```
<div class="phone">
  <hc-radio conner value="1" checked>前端开发</hc-radio>
  <hc-radio rounder value="0">设计ui</hc-radio>
</div>

###### 不同主题的单选框
`type`可以来设定单选框选中的颜色， 默认有 `primary`，`danger`，`success`，`warning`4种！
``` html
  <hc-radio type="primary" conner value="1" checked>前端开发</hc-radio>
  <hc-radio type="danger" rounder value="0">设计ui</hc-radio>
  <hc-radio type="success" rounder value="0">设计ui</hc-radio>
  <hc-radio type="warning" rounder value="0">设计ui</hc-radio>
```
<div class="phone">
  <hc-radio type="primary" conner value="1" checked>前端开发</hc-radio>
  <hc-radio type="danger" rounder value="0">设计ui</hc-radio>
  <hc-radio type="success" rounder value="0">设计ui</hc-radio>
  <hc-radio type="warning" rounder value="0">设计ui</hc-radio>
</div>

###### 不同排列形式
默认是横向排列,如果需要纵向排列只需要添加`vertical`即可
``` html
  <hc-radio-group value="3" rounder vertical>
    <hc-radio value="0">支付宝</hc-radio>
    <hc-radio value="1">微信</hc-radio>
    <hc-radio value="2">银联</hc-radio>
    <hc-radio value="3">其他</hc-radio>
  </hc-radio-group>
```
<div class="phone">
  <hc-radio-group value="3" rounder vertical>
    <hc-radio value="0">支付宝</hc-radio>
    <hc-radio value="1">微信</hc-radio>
    <hc-radio value="2">银联</hc-radio>
    <hc-radio value="3">其他</hc-radio>
  </hc-radio-group>
</div>

可通过添加`reverse`来反转文字和选择框

``` html
  <hc-radio-group value="3" rounder vertical reverse>
    <hc-radio value="0">支付宝</hc-radio>
    <hc-radio value="1">微信</hc-radio>
    <hc-radio value="2">银联</hc-radio>
    <hc-radio value="3">其他</hc-radio>
  </hc-radio-group>
```
<div class="phone">
  <hc-radio-group value="3" rounder vertical reverse>
    <hc-radio value="0">支付宝</hc-radio>
    <hc-radio value="1">微信</hc-radio>
    <hc-radio value="2">银联</hc-radio>
    <hc-radio value="3">其他</hc-radio>
  </hc-radio-group>
</div>

可通过添加`subline`来添加下划线

``` html
  <hc-radio-group value="3" rounder vertical reverse subline>
    <hc-radio value="0">支付宝</hc-radio>
    <hc-radio value="1">微信</hc-radio>
    <hc-radio value="2">银联</hc-radio>
    <hc-radio value="3">其他</hc-radio>
  </hc-radio-group>
```
<div class="phone">
  <hc-radio-group value="3" rounder vertical reverse subline>
    <hc-radio value="0">支付宝</hc-radio>
    <hc-radio value="1">微信</hc-radio>
    <hc-radio value="2">银联</hc-radio>
    <hc-radio value="3">其他</hc-radio>
  </hc-radio-group>
</div>

###### 单选框组
上面介绍那么多样式，其实并非单选框的真正用法，在实际项目中还是需要配合 `hc-radio-group`使用！切记在使用中 `hc-radio`必须配置不同的 `value`值!
``` html
  <hc-radio-group value="3" rounder>
    <hc-radio value="0">支付宝</hc-radio>
    <hc-radio value="1">微信</hc-radio>
    <hc-radio value="2">银联</hc-radio>
    <hc-radio value="3">其他</hc-radio>
  </hc-radio-group>
```

<div class="phone">
  <hc-radio-group value="3" rounder>
    <hc-radio value="0">支付宝</hc-radio>
    <hc-radio value="1">微信</hc-radio>
    <hc-radio value="2">银联</hc-radio>
    <hc-radio value="3">其他</hc-radio>
  </hc-radio-group>
</div>

提示：获取 `hc-radio-group`的值，通过标签本身的自定义属性 `value`获取，或者监听 `vchange`事件获取！
<!-- Auto Generated Below -->

``` javascript
  document.querySelector('hc-radio-group').getAttribute('value')
  document.querySelector('hc-radio-group').addEventListener('vchange', (e) => {
    console.log(e.detail.value)
  })
```
----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
