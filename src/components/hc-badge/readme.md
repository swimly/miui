##### hc-badge

徽章主要用来做指示作用，比如页面未读或者新消息提示！主要是引起重视！

###### 默认

`badge`相当于一个容器，将其他控件包裹在内部，作为一个提示作用！，可以内嵌任何组件或者元素！
``` html
  <hc-badge value="3">
    <hc-icon name="search"></hc-icon>
  </hc-badge>
  <hc-badge value="3">
    <hc-text>发送</hc-text>
  </hc-badge>
```
<div class="phone">
  <hc-badge value="3">
    <hc-icon name="search"></hc-icon>
  </hc-badge>
  <hc-badge value="3" style="margin-left:20px;">
    <hc-text>发送</hc-text>
  </hc-badge>
  <hc-badge value="3" style="margin-left:20px;">
    <hc-button size="small" type="primary">提交</hc-button>
  </hc-badge>
</div>

###### 小点模式

如果不想显示具体数字，只需要添加`dot`即可
``` html
  <hc-badge value="3" dot>
    <hc-icon name="search"></hc-icon>
  </hc-badge>
```
<div class="phone">
  <hc-badge value="3" dot>
    <hc-icon name="search"></hc-icon>
  </hc-badge>
</div>

###### 自定义颜色
默认颜色是红色，如果需要其他颜色，可通过`background`任意设置！
``` html
  <hc-badge value="12" background="#0c84ff">
    <hc-icon name="search"></hc-icon>
  </hc-badge>
```
<div class="phone">
  <hc-badge value="12" background="#0c84ff">
    <hc-icon name="search"></hc-icon>
  </hc-badge>
</div>

###### 设置最大值
有时候如果提示数量很大，这时候可以通过`max`设置一个最大值，这样超过这个数值就会显示`n+`。
``` html
  <hc-badge value="101" background="#0c84ff" max="100">
    <hc-icon name="search"></hc-icon>
  </hc-badge>
```
<div class="phone">
  <hc-badge value="101" background="#0c84ff" max="100">
    <hc-icon name="search"></hc-icon>
  </hc-badge>
</div>
<!-- Auto Generated Below -->


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
