<style>
  hc-notify{
    margin: 0 !important;
  }
</style>
##### hc-notify
`hc-notify`类似于`hc-toast`都是用来提示用户操作结果，指示展示形式不同！
###### 默认
可通过`place`配置位置，`down`是从底部，默认是从顶部！
``` html
  <hc-notify id="n1">
    <span>恭喜您，注册成功！</span>
  </hc-notify>
  <hc-notify id="n2" place="down">
    <span>恭喜您，注册成功！</span>
  </hc-notify>
```
<div class="phone">
  <hc-button type="primary" id="a1" conner size="small">顶部</hc-button>
  <hc-button type="primary" id="a2" conner size="small">底部</hc-button>
  <hc-notify id="n1">
    <span>恭喜您，注册成功！</span>
  </hc-notify>
  <hc-notify id="n2" place="down">
    <span>恭喜您，注册成功！</span>
  </hc-notify>
</div>

###### 带小图标
可通过`icon`来设置，具体参考`hc-icon`。
``` html
  <hc-notify id="n3" icon="reduce">
    <span>恭喜您，注册成功！</span>
  </hc-notify>
```
<div class="phone">
  <hc-button type="primary" id="a3" conner size="small">顶部</hc-button>
  <hc-notify id="n3" icon="reduce">
    <span>恭喜您，注册成功！</span>
  </hc-notify>
</div>

###### 手动关闭
`closable`控制其不能自动关闭，只能手动触发！
``` html
  <hc-notify id="n4" icon="reduce" closable="true">
    <span>恭喜您，注册成功！</span>
  </hc-notify>
```
<div class="phone">
  <hc-button type="primary" id="a4" conner size="small">顶部</hc-button>
  <hc-notify id="n4" icon="reduce" closable="true">
    <span>恭喜您，注册成功！</span>
  </hc-notify>
</div>

###### 文字对齐方式
`align`控制文字水平对齐方式！
``` html
  <hc-notify id="n4" icon="reduce" closable="true">
    <span>恭喜您，注册成功！</span>
  </hc-notify>
```
<div class="phone">
  <hc-button type="primary" id="a5" conner size="small">顶部</hc-button>
  <hc-notify id="n5" closable="true" align="center">
    <span>哈哈哈哈，我是剧中对齐方式</span>
  </hc-notify>
</div>

###### 全局指令
``` html
  <hc-notify id="n4" icon="reduce" closable="true">
    <span>恭喜您，注册成功！</span>
  </hc-notify>
```
<div class="phone">
  <hc-button type="primary" id="zl1" conner size="small">全局指令</hc-button>
</div>

<!-- Auto Generated Below -->
<script>
  document.querySelector('#zl1').addEventListener('click', () => {
    Notify.generate({
      content: '我是全局指令调用的'
    })
  })
  document.querySelector('#a1').addEventListener('click', () => {
    document.querySelector('#n1').generate()
  })
  document.querySelector('#a2').addEventListener('click', () => {
    document.querySelector('#n2').generate()
  })
  document.querySelector('#a3').addEventListener('click', () => {
    document.querySelector('#n3').generate()
  })
  document.querySelector('#a4').addEventListener('click', () => {
    document.querySelector('#n4').generate()
  })
  document.querySelector('#a5').addEventListener('click', () => {
    document.querySelector('#n5').generate()
  })
</script>

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
