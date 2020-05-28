##### HC-Button 按钮
按钮在项目中是最常用的一个控件，所以按钮的可变形，可定制性就尤为重要！
###### 默认按钮
默认按钮只需要标签`hc-button`即可，也可以通过自定义属性`label`来给按钮添加文字！
``` html
  <hc-button>按钮</hc-button>
  <hc-button label="按钮"></hc-button>
```
<div class="phone">
  <hc-button>按钮</hc-button>
  <hc-button label="按钮"></hc-button>
</div>

###### 不同主题

按照颜色划分按钮有5种默认主题： `primary` ,`warning`,`success`,`danger`,`info`，通过属性`type`来设置！
``` html
  <hc-button type="primary">按钮</hc-button>
  <hc-button type="warning">按钮</hc-button>
  <hc-button type="success">按钮</hc-button>
  <hc-button type="danger">按钮</hc-button>
  <hc-button type="info">按钮</hc-button>
```
<div class="phone">
  <hc-button type="primary">按钮</hc-button>
  <hc-button type="warning">按钮</hc-button>
  <hc-button type="success">按钮</hc-button>
  <hc-button type="danger">按钮</hc-button>
  <hc-button type="info">按钮</hc-button>
</div>

###### 自定义按钮颜色
虽然已经提供了五种颜色的按钮，但有时候可能还有其他需求，这时候就可以通过`background-color`，`color`，`border-color`，分别代表 `背景颜色`，`字体颜色` `边框颜色`来diy自己的按钮样式！

``` html
  <hc-button background-color="#3E97DF" color="#fff" border-color="#3E97DF">按钮</hc-button>
  <hc-button background-color="#3E97DF" color="#fff" border-color="#3E97DF" conner>按钮</hc-button>
  <hc-button background-color="#fff" color="#3E97DF" border-color="#3E97DF" rounder>按钮</hc-button>
```
<div class="phone">
  <hc-button background-color="#3E97DF" color="#fff" border-color="#3E97DF">按钮</hc-button>
  <hc-button background-color="#3E97DF" color="#fff" border-color="#3E97DF" conner>按钮</hc-button>
  <hc-button background-color="#fff" color="#3E97DF" border-color="#3E97DF" rounder>按钮</hc-button>
</div>

###### 不同形状
一般默认的按钮形状就是个直角，有时候可能有特殊需求，需要一个小圆角，或者圆弧形状的按钮，这时候就可以通过`conner`， `rounder`来定义形式了！

``` html
  <hc-button conner>按钮</hc-button>
  <hc-button rounder>按钮</hc-button>
  <hc-button rounder type="primary">按钮</hc-button>
  <hc-button icon="loading" rounder type="primary" size="small">按钮</hc-button>
```
<div class="phone">
  <hc-button conner>按钮</hc-button>
  <hc-button rounder>按钮</hc-button>
  <hc-button rounder type="primary">按钮</hc-button>
  <hc-button icon="loading" rounder type="primary" size="small">按钮</hc-button>
</div>

###### 朴素按钮
默认按钮太清淡，五种默认主题太花哨，`plain`朴素按钮或许会优雅许多。

``` html
  <hc-button type="primary" plain>按钮</hc-button>
  <hc-button type="warning" plain>按钮</hc-button>
  <hc-button type="success" plain>按钮</hc-button>
  <hc-button type="danger" plain>按钮</hc-button>
```

<div class="phone">
  <hc-button type="primary" plain>按钮</hc-button>
  <hc-button type="warning" plain>按钮</hc-button>
  <hc-button type="success" plain>按钮</hc-button>
  <hc-button type="danger" plain>按钮</hc-button>
</div>

###### 简洁按钮
如果觉得朴素按钮还不够简洁，`outline`将会是你的最优选。

``` html
  <hc-button type="primary" outline>按钮</hc-button>
  <hc-button type="warning" outline>按钮</hc-button>
  <hc-button type="success" outline>按钮</hc-button>
  <hc-button type="danger" outline>按钮</hc-button>
```

<div class="phone">
  <hc-button type="primary" outline>按钮</hc-button>
  <hc-button type="warning" outline>按钮</hc-button>
  <hc-button type="success" outline>按钮</hc-button>
  <hc-button type="danger" outline>按钮</hc-button>
</div>

###### 不同尺寸的按钮
默认的按钮是横向铺满的，有时候想要个小巧玲珑的按钮，这时候可以自定义 `size`大小来解决，默认有4个尺寸： `mini` `small` `default` `large`。

``` html
  <hc-button size="mini">迷你按钮</hc-button>
  <hc-button size="small">小按钮</hc-button>
  <hc-button size="default">默认按钮</hc-button>
  <hc-button size="large">大按钮</hc-button>
  <hc-button size="mini" type="primary" conner>迷你按钮</hc-button>
  <hc-button size="small" type="primary" conner>小按钮</hc-button>
  <hc-button size="default" type="primary" conner>默认按钮</hc-button>
  <hc-button size="large" type="primary" conner>大按钮</hc-button>
```

<div class="phone">
  <hc-button size="mini">迷你按钮</hc-button>
  <hc-button size="small">小按钮</hc-button>
  <hc-button size="default">默认按钮</hc-button>
  <hc-button size="large">大按钮</hc-button>
  <hc-button size="mini" type="primary" conner>迷你按钮</hc-button>
  <hc-button size="small" type="primary" conner>小按钮</hc-button>
  <hc-button size="default" type="primary" conner>默认按钮</hc-button>
  <hc-button size="large" type="primary" conner>大按钮</hc-button>
</div>

###### 带图标的按钮

单纯的文字按钮或许太单调，可以通过 `icon`添加一个小图标来做点缀！

``` html
  <hc-button conner icon="add">按钮</hc-button>
  <hc-button conner icon="add" type="primary">按钮</hc-button>  
```
<div class="phone">
  <hc-button conner icon="add">按钮</hc-button>
  <hc-button conner icon="add" type="primary">按钮</hc-button>  
</div>

###### 按钮的加载动画

很多情况下，我们希望点击按钮之后给个等待的动画，可以通过以下方式来实现

``` html
  <hc-button class="click" conner icon="add">提交</hc-button>
  <hc-button class="click" conner type="primary">提交</hc-button>
  <script>
    var clicks = document.querySelectorAll('.click')
    clicks.forEach(click => {
      click.addEventListener('click', () => {
        click.Loading()
        setTimeout(() => {
          click.Loaded()
        }, 3000)
      })
    })
  </script>
```
<div class="phone">
  <hc-button class="click" conner icon="add">提交</hc-button>
  <hc-button class="click" conner type="primary">提交</hc-button>
</div>
<script>
  var clicks = document.querySelectorAll('.click')
  clicks.forEach(click => {
    click.addEventListener('click', () => {
      click.Loading()
      setTimeout(() => {
        click.Loaded()
      }, 3000)
    })
  })
</script>

###### 禁用按钮

通过添加`disabled`来禁用按钮！

``` html
  <hc-button conner icon="add" disabled>提交</hc-button>
  <hc-button conner type="primary" disabled>提交</hc-button>
```

<div class="phone">
  <hc-button conner icon="add" disabled>提交</hc-button>
  <hc-button conner type="primary" disabled>提交</hc-button>
</div>

*Built with [StencilJS](https://stenciljs.com/)*
