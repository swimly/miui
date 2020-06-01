##### hc-swiper
图片轮播组件

###### 普通用法
`hc-swiper`为最外层，切记一定要记得添加`height`属性，不然轮播图没有高度,添加`vertical`可实现垂直方向的轮播图！

``` html
  <hc-swiper id="control" height="200">
    <hc-swiper-item style="background:#0c84ff;color:#fff;">1</hc-swiper-item>
    <hc-swiper-item style="background:#13ca8a;color:#fff;">2</hc-swiper-item>
    <hc-swiper-item style="background:#f32326;color:#fff;">3</hc-swiper-item>
  </hc-swiper>
  <hc-swiper id="control" vertical height="200">
    <hc-swiper-item style="background:#0c84ff;color:#fff;">1</hc-swiper-item>
    <hc-swiper-item style="background:#13ca8a;color:#fff;">2</hc-swiper-item>
    <hc-swiper-item style="background:#f32326;color:#fff;">3</hc-swiper-item>
  </hc-swiper>
```
<div class="phone">
  <hc-swiper id="control" height="200">
    <hc-swiper-item style="background:#0c84ff;color:#fff;">1</hc-swiper-item>
    <hc-swiper-item style="background:#13ca8a;color:#fff;">2</hc-swiper-item>
    <hc-swiper-item style="background:#f32326;color:#fff;">3</hc-swiper-item>
  </hc-swiper>
  <hc-swiper id="control" vertical height="200">
    <hc-swiper-item style="background:#0c84ff;color:#fff;">1</hc-swiper-item>
    <hc-swiper-item style="background:#13ca8a;color:#fff;">2</hc-swiper-item>
    <hc-swiper-item style="background:#f32326;color:#fff;">3</hc-swiper-item>
  </hc-swiper>
</div>

###### 无限循环
添加`loop`属性，轮播图可无限循环,体验效果更佳，且更适宜自动轮播！

``` html
  <hc-swiper loop id="control" height="200">
    <hc-swiper-item style="background:#0c84ff;color:#fff;">1</hc-swiper-item>
    <hc-swiper-item style="background:#13ca8a;color:#fff;">2</hc-swiper-item>
    <hc-swiper-item style="background:#f32326;color:#fff;">3</hc-swiper-item>
  </hc-swiper>
```
<div class="phone">
  <hc-swiper loop id="control" height="200">
    <hc-swiper-item style="background:#0c84ff;color:#fff;">1</hc-swiper-item>
    <hc-swiper-item style="background:#13ca8a;color:#fff;">2</hc-swiper-item>
    <hc-swiper-item style="background:#f32326;color:#fff;">3</hc-swiper-item>
  </hc-swiper>
</div>

###### 自动轮播
添加`autoplay`可实现自动轮播！

``` html
  <hc-swiper loop autoplay id="control" height="200">
    <hc-swiper-item style="background:#0c84ff;color:#fff;">1</hc-swiper-item>
    <hc-swiper-item style="background:#13ca8a;color:#fff;">2</hc-swiper-item>
    <hc-swiper-item style="background:#f32326;color:#fff;">3</hc-swiper-item>
  </hc-swiper>
  <hc-swiper loop autoplay vertical id="control" height="200">
    <hc-swiper-item style="background:#0c84ff;color:#fff;">1</hc-swiper-item>
    <hc-swiper-item style="background:#13ca8a;color:#fff;">2</hc-swiper-item>
    <hc-swiper-item style="background:#f32326;color:#fff;">3</hc-swiper-item>
  </hc-swiper>
```
<div class="phone">
  <hc-swiper loop autoplay id="control" height="200">
    <hc-swiper-item style="background:#0c84ff;color:#fff;">1</hc-swiper-item>
    <hc-swiper-item style="background:#13ca8a;color:#fff;">2</hc-swiper-item>
    <hc-swiper-item style="background:#f32326;color:#fff;">3</hc-swiper-item>
  </hc-swiper>
  <hc-swiper loop autoplay vertical id="control" height="200">
    <hc-swiper-item style="background:#0c84ff;color:#fff;">1</hc-swiper-item>
    <hc-swiper-item style="background:#13ca8a;color:#fff;">2</hc-swiper-item>
    <hc-swiper-item style="background:#f32326;color:#fff;">3</hc-swiper-item>
  </hc-swiper>
</div>

<!-- Auto Generated Below -->

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
