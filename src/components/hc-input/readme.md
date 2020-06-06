##### HC-Input 输入框

输入框是表单的重要组成部分，用来收集用户的输入信息，使用位置广泛，且变化比较多！通过`focusin`自动获取焦点

##### 手机扫一扫
可以通过扫描下方二维码，在手机上查看文档！
<div class="qrcode" id="qrcode"></div>

或者[点击查看案例](https://swimly.cn:8080/miui/examples/input.html)

###### 普通输入框
默认输入框
``` html
  <hc-input placeholder="请填写"></hc-input>
  <hc-input focusin placeholder="我会自动获取焦点"></hc-input>
```
<div class="phone">
  <hc-input placeholder="请填写"></hc-input>
  <hc-input focusin placeholder="我会自动获取焦点"></hc-input>
</div>

###### 不同类型输入框
正则验证
``` html
  <hc-input type="number" placeholder="数字"></hc-input>
  <hc-input type="tel" placeholder="电话号码"></hc-input>
  <hc-input type="email" placeholder="邮箱"></hc-input>
  <hc-input type="phone" placeholder="手机号"></hc-input>
  <hc-input type="url" placeholder="网址"></hc-input>
  <hc-input type="cn" placeholder="中文"></hc-input>
```
<div class="phone">
  <hc-input type="number" placeholder="数字"></hc-input>
  <hc-input type="tel" placeholder="电话号码"></hc-input>
  <hc-input type="email" placeholder="邮箱"></hc-input>
  <hc-input type="phone" placeholder="手机号"></hc-input>
  <hc-input type="url" placeholder="网址"></hc-input>
  <hc-input type="cn" placeholder="中文"></hc-input>
</div>

###### 不同弧度
输入框根据弧度的不同分为：`conner`，`rounder`，直接添加对应的自定义属性即可！

``` html
  <hc-input conner placeholder="请填写"></hc-input>
  <hc-input rounder placeholder="请填写"></hc-input>
```
<div class="phone">
  <hc-input conner placeholder="请填写"></hc-input>
  <hc-input rounder placeholder="请填写"></hc-input>
</div>

###### 不同大小
输入框根据尺寸的不同分为：`mini`，`small`，`default`，`large`，通过`size`赋值！

``` html
  <hc-input size="mini" placeholder="请填写"></hc-input>
  <hc-input size="small" placeholder="请填写"></hc-input>
  <hc-input size="default" placeholder="请填写"></hc-input>
  <hc-input size="large" placeholder="请填写"></hc-input>
```
<div class="phone">
  <hc-input size="mini" placeholder="请填写"></hc-input>
  <hc-input size="small" placeholder="请填写"></hc-input>
  <hc-input size="default" placeholder="请填写"></hc-input>
  <hc-input size="large" placeholder="请填写"></hc-input>
</div>

###### 无边框输入框
`light`形式的输入框默认是看不到的，隐藏了边框，适合配合`hc-form-item`使用！
``` html
  <hc-input light placeholder="请填写"></hc-input>
```
<div class="phone">
  <hc-input light placeholder="请填写"></hc-input>
</div>

###### 深色输入框
`darker`代表有灰色背景的输入框，通常用来做搜索框！
``` html
  <hc-input dark placeholder="请填写"></hc-input>
```
<div class="phone">
  <hc-input dark placeholder="请填写"></hc-input>
</div>

###### 文字右对齐
`align`可以设置输入框文字的对齐方式，默认是：`left`，选择项有： `left`，`center`，`right`。
``` html
  <hc-input align="center" placeholder="请填写"></hc-input>
  <hc-input align="right" placeholder="请填写"></hc-input>
```
<div class="phone">
  <hc-input align="center" placeholder="请填写"></hc-input>
  <hc-input  align="right" placeholder="请填写"></hc-input>
</div>

###### 有图标
可以通过添加`prefix-icon`，或者`suffix-icon`来分别向输入框的前后添加小图标。具体的图标名称，可参考`hc-icon`组件，`icon-color`可以用来设置小图标的颜色，`icon-size`可以用来设置小图标的大小。
``` html
  <hc-input prefix-icon="map" placeholder="请填写"></hc-input>
  <hc-input suffix-icon="map" placeholder="请填写"></hc-input>
  <hc-input icon-color="#409EFF" suffix-icon="map" placeholder="请填写"></hc-input>
  <hc-input icon-color="#409EFF" prefix-icon="map" placeholder="请填写" type="textarea"></hc-input>
  <hc-input icon-color="#409EFF" suffix-icon="map" placeholder="请填写" type="textarea"></hc-input>
```
<div class="phone">
  <hc-input prefix-icon="map" placeholder="请填写"></hc-input>
  <hc-input suffix-icon="map" placeholder="请填写"></hc-input>
  <hc-input icon-color="#409EFF" suffix-icon="map" placeholder="请填写"></hc-input>
  <hc-input icon-color="#409EFF" prefix-icon="map" placeholder="请填写" type="textarea"></hc-input>
  <hc-input icon-color="#409EFF" suffix-icon="map" placeholder="请填写" type="textarea"></hc-input>
</div>

###### 多行输入框（textarea）
通过添加`type="textarea"`便可以使用多行文本框。
``` html
  <hc-input type="textarea" placeholder="请填写"></hc-input>
```
<div class="phone">
  <hc-input type="textarea" placeholder="请填写"></hc-input>
</div>

###### 带清空按钮
默认的输入框是没有手动清空按钮的，如果需要添加`clearable`即可。
``` html
  <hc-input placeholder="请填写" clearable></hc-input>
  <hc-input type="textarea" placeholder="请填写" clearable></hc-input>
```
<div class="phone">
  <hc-input placeholder="请填写" clearable></hc-input>
  <hc-input type="textarea" placeholder="请填写" clearable></hc-input>
</div>

###### 限制字数
可通过`min-length`来限制最小的字符长度，`max-length`来控制最大的字符长度！
``` html
  <hc-input max-length="20" placeholder="请填写" clearable="true"></hc-input>
  <hc-input min-length="4" placeholder="请填写" clearable="true" suffix-icon="map" icon-color="#409EFF"></hc-input>
  <hc-input max-length="20" placeholder="请填写" type="textarea" clearable="true"></hc-input>
```
<div class="phone">
  <hc-input max-length="20" placeholder="请填写" clearable="true"></hc-input>
  <hc-input min-length="4" placeholder="请填写" clearable="true" suffix-icon="map" icon-color="#409EFF"></hc-input>
  <hc-input max-length="20" placeholder="请填写" type="textarea" clearable="true"></hc-input>
</div>

###### 输入框验证样式
可通过 `verify`来控制输入框的状态！
``` html
  <hc-input verify="error" placeholder="请填写" clearable="true"></hc-input>
  <hc-input verify="warning" placeholder="请填写" clearable="true"></hc-input>
  <hc-input verify="success" placeholder="请填写" clearable="true"></hc-input>
  <hc-input verify="error" placeholder="请填写" type="textarea"></hc-input>
  <hc-input verify="warning" placeholder="请填写" type="textarea"></hc-input>
  <hc-input verify="success" placeholder="请填写" type="textarea"></hc-input>
```
<div class="phone">
  <hc-input verify="error" placeholder="请填写" clearable="true"></hc-input>
  <hc-input verify="warning" placeholder="请填写" clearable="true"></hc-input>
  <hc-input verify="success" placeholder="请填写" clearable="true"></hc-input>
  <hc-input verify="error" placeholder="请填写" type="textarea"></hc-input>
  <hc-input verify="warning" placeholder="请填写" type="textarea"></hc-input>
  <hc-input verify="success" placeholder="请填写" type="textarea"></hc-input>
</div>

###### 禁用和只读
`disabled`禁用，`readonly`只读
``` html
  <hc-input placeholder="请填写"></hc-input>
  <hc-input focusin placeholder="我会自动获取焦点"></hc-input>
```
<div class="phone">
  <hc-input placeholder="请填写" readonly></hc-input>
  <hc-input disabled placeholder="我会自动获取焦点"></hc-input>
</div>

###### Props属性

常用属性汇总！

名称|描述|类型|可选值|默认值
--|--|:--:|--|:--:
type|类型|string|`text`、`number`、`tel`、`email`、`phone`|text
size|大小|string|`mini`、`small`、`default`、`large`|-
placeholder|提示文字|string|-|-
prefix-icon|开头图标|string|-|-
suffix-icon|末尾图标|string|-|-
icon-color|图标颜色|string|色值|-
icon-size|图标大小|number|数值|-
align|文字水平对齐方式|string|`left`、`center`、`right`|left
rows|文字行数|number|-|-
clearable|是否有清空按钮|boolean|`true`、`false`|false
clear-icon|清空图标|string|`hc-icon`|reeor-fill
max-length|最长可输入字符|number|数值|-
min-length|最小可输入字符|number|数值|-
light|简洁输入框|boolean|`true`、`false`|false
conner|圆角|boolean|`true`、`false`|false
rounder|圆弧|boolean|`true`、`false`|false
dark|深色|boolean|`true`、`false`|false
readonly|只读|boolean|`true`、`false`|false
disabled|禁用|boolean|`true`、`false`|false
dark|深色|boolean|`true`、`false`|false
focusin|是否获取焦点|boolean|`true`、`false`|false
verify|验证|string|`success`、`error`、`warning`|-
value|值|string||

###### Methods方法

常用方法汇总！

名称|描述|参数|返回值|
--|--|:--:|--|
Verify|验证输入内容|`null`|`null`

###### Events事件

常用事件汇总！调用方法

``` javascript
button.addEventListener('XX', (e) => {})
```

名称|描述|参数|返回值|
--|--|:--:|--|
vchange|输入值改变|`null`|`object`

<!-- Auto Generated Below -->
----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*

<script>
  new QRCode(document.getElementById("qrcode"), {
    text: "https://swimly.cn:8080/miui/examples/docs/#/../../src/components/hc-input/readme",
    width: 128,
    height: 128,
    colorDark : "#42b983",
    colorLight : "#ffffff",
    correctLevel : QRCode.CorrectLevel.H
  });
</script>