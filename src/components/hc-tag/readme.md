##### hc-tag

`hc-tag`主要用来做一些提示性意义，比如状态，重点提示！

###### 默认

默认的标签很像一个小按钮！
``` html
  <hc-tag>标签</hc-tag>
```
<div class="phone">
  <hc-tag>标签</hc-tag>
</div>

###### 不同形状
添加自定义属性可以改变标签的形状，默认是`default`，备选： `conner`、`rounder`
``` html
  <hc-tag conner>标签</hc-tag>
  <hc-tag rounder>标签</hc-tag>
```
<div class="phone">
  <hc-tag conner>标签</hc-tag>
  <hc-tag rounder>标签</hc-tag>
</div>

###### 不同颜色
按颜色分为：`primary`、`warning`、`success`、`danger`
``` html
  <hc-tag type="primary">标签</hc-tag>
  <hc-tag type="warning">标签</hc-tag>
  <hc-tag type="success">标签</hc-tag>
  <hc-tag type="danger">标签</hc-tag>
```
<div class="phone">
  <hc-tag type="primary">标签</hc-tag>
  <hc-tag type="warning">标签</hc-tag>
  <hc-tag type="success">标签</hc-tag>
  <hc-tag type="danger">标签</hc-tag>
</div>

###### 自定义颜色
通过 `color`、`background`来自定义不同色调的标签
``` html
  <hc-tag background="#FEC006" color="#fff" conner>标签</hc-tag>
  <hc-tag background="#FEC006" color="#fff" rounder>标签</hc-tag>
  <hc-tag background="#FEC006" color="#fff" plain>标签</hc-tag>
```
<div class="phone">
  <hc-tag background="#FEC006" color="#fff" conner>标签</hc-tag>
  <hc-tag background="#FEC006" color="#fff" rounder>标签</hc-tag>
  <hc-tag background="#FEC006" color="#fff" plain>标签</hc-tag>
  <hc-tag background="#FEC006" color="#fff" outline>标签</hc-tag>
  <hc-tag background="#FEC006" color="#fff" light>标签</hc-tag>
</div>

###### 朴素标签
通过添加`plain`来转换为朴素标签
``` html
  <hc-tag plain type="primary" conner>标签</hc-tag>
  <hc-tag plain type="warning" rounder>标签</hc-tag>
  <hc-tag plain type="success">标签</hc-tag>
  <hc-tag plain type="danger">标签</hc-tag>
```
<div class="phone">
  <hc-tag plain type="primary" conner>标签</hc-tag>
  <hc-tag plain type="warning" rounder>标签</hc-tag>
  <hc-tag plain type="success">标签</hc-tag>
  <hc-tag plain type="danger">标签</hc-tag>
</div>

###### 边框标签
通过添加`outline`来转换为边框标签
``` html
  <hc-tag outline type="primary" conner>标签</hc-tag>
  <hc-tag outline type="warning" rounder>标签</hc-tag>
  <hc-tag outline type="success">标签</hc-tag>
  <hc-tag outline type="danger">标签</hc-tag>
```
<div class="phone">
  <hc-tag outline type="primary" conner>标签</hc-tag>
  <hc-tag outline type="warning" rounder>标签</hc-tag>
  <hc-tag outline type="success">标签</hc-tag>
  <hc-tag outline type="danger">标签</hc-tag>
</div>

###### 简洁标签
通过添加`light`来转换为简洁标签
``` html
  <hc-tag light type="primary" conner>标签</hc-tag>
  <hc-tag light type="warning" rounder>标签</hc-tag>
  <hc-tag light type="success">标签</hc-tag>
  <hc-tag light type="danger">标签</hc-tag>
```
<div class="phone">
  <hc-tag light type="primary" conner>标签</hc-tag>
  <hc-tag light type="warning" rounder>标签</hc-tag>
  <hc-tag light type="success">标签</hc-tag>
  <hc-tag light type="danger">标签</hc-tag>
</div>

###### 不同尺寸
通过添加`size`来设置大小，可选：`mini`、`small`、`default`、`large`
``` html
  <hc-tag size="mini">标签</hc-tag>
  <hc-tag size="small">标签</hc-tag>
  <hc-tag size="default">标签</hc-tag>
  <hc-tag size="large">标签</hc-tag>
```
<div class="phone">
  <hc-tag size="mini">标签</hc-tag>
  <hc-tag size="small">标签</hc-tag>
  <hc-tag size="default">标签</hc-tag>
  <hc-tag size="large">标签</hc-tag>
</div>

###### 可关闭
通过添加`closable`来控制标签可点击关闭
``` html
  <hc-tag size="mini">标签</hc-tag>
  <hc-tag size="small">标签</hc-tag>
  <hc-tag size="default">标签</hc-tag>
  <hc-tag size="large">标签</hc-tag>
```
<div class="phone">
  <hc-tag closable>标签</hc-tag>
  <hc-tag type="primary" rounder closable>标签</hc-tag>
</div>

###### 扩展
手机宽度有限，有时候标签非常长以至于一行拍不下，标签会自动省略！
``` html
  <hc-tag size="mini">标签</hc-tag>
  <hc-tag size="small">标签</hc-tag>
  <hc-tag size="default">标签</hc-tag>
  <hc-tag size="large">标签</hc-tag>
```
<div class="phone">
  <hc-tag closable="true">请示报告: 深圳市宝安区人大常委会办公室关于转交《区六届人大四次会议人大…</hc-tag>
  <hc-tag type="primary" rounder closable="true">请示报告: 深圳市宝安区人大常委会办公室关于转交《区六届人大四次会议人大…</hc-tag>
</div>
<!-- Auto Generated Below -->

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
