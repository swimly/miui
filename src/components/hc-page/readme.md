##### hc-page
页面布局，是每个页面必不可少的，主要用来包裹住一个页面的所有组件，配合 `hc-header`和 `hc-view`使用，单独使用没有任何意义！

###### 默认

默认`hc-page`会铺满父元素！

``` html
  <hc-page></hc-page>
```
<div class="phone" style="height:667px">
  <hc-page></hc-page>
</div>

###### 添加头部

向内部直接添加 `hc-header`组件，其具体使用方法具体介绍！

``` html
  <hc-page>
    <hc-header>首页</hc-header>
  </hc-page>
```
<div class="phone" style="height:667px">
  <hc-page>
    <hc-header>首页</hc-header>
  </hc-page>
</div>

###### 添加主体

向内部直接添加 `hc-header`组件，其具体使用方法具体介绍！

``` html
  <hc-page>
    <hc-header>首页</hc-header>
    <hc-view></hc-view>
  </hc-page>
```
<div class="phone" style="height:667px">
  <hc-page>
    <hc-header>首页</hc-header>
    <hc-view>
      <hc-panel>
        <p>当我们在移动端给元素添加点击事件时我们会发现点击时元素会默认出现一个背景色框或者高亮显示 ，如何去掉蓝色边框？</p>
      </hc-panel>
      <hc-panel>
        <p>当我们在移动端给元素添加点击事件时我们会发现点击时元素会默认出现一个背景色框或者高亮显示 ，如何去掉蓝色边框？</p>
      </hc-panel>
      <hc-panel>
        <p>当我们在移动端给元素添加点击事件时我们会发现点击时元素会默认出现一个背景色框或者高亮显示 ，如何去掉蓝色边框？</p>
      </hc-panel>
      <hc-panel>
        <p>当我们在移动端给元素添加点击事件时我们会发现点击时元素会默认出现一个背景色框或者高亮显示 ，如何去掉蓝色边框？</p>
      </hc-panel>
    </hc-view>
  </hc-page>
</div>

<!-- Auto Generated Below -->


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
