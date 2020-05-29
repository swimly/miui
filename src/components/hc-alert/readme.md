##### hc-alert

弹窗主要是用来给用户一个反馈或者提示的用处！弹窗请尽量使用手机模式演示！

###### 默认弹窗

``` html
  <hc-button size="default" type="primary" id="b1">放大</hc-button>
  <hc-alert type="zoomIn" id="a1">
    <span>你好呀！问候消息</span>
  </hc-alert>
  <script>
    document.querySelector('#b1').addEventListener('click', () => {
      document.querySelector('#a1').generate()
    })
  </script>
```
<div class="phone">
  <hc-button size="default" type="primary" id="b1">放大</hc-button>
  <hc-alert type="none" id="a1">
    <span>你好呀！问候消息</span>
  </hc-alert>
</div>

###### 不同的展开形式
通过`type`设置不同的展开形式，可选项有：`slideInDown`、`slideInUp`，`fadeInDown`、`fadeInUp`、`zoomInDown`、`zoomInUp`、`fadeIn`可通过点击下面对应的按钮体验不同效果之间的差异！
``` html
  <hc-button type="primary" id="b1">放大</hc-button>
  <hc-alert type="none" id="a1">
    <span>你好呀！问候消息</span>
  </hc-alert>
  <script>
    document.querySelector('#b1').addEventListener('click', () => {
      document.querySelector('#a1').generate()
    })
  </script>
```
<div class="phone">
  <hc-button size="default" type="primary" id="b2">slideInDown</hc-button>
  <hc-alert type="slideInDown" id="a2">
    <span>你好呀！问候消息</span>
  </hc-alert>
  <hc-button size="default" type="primary" id="b3">slideInUp</hc-button>
  <hc-alert type="slideInUp" id="a3">
    <span>你好呀！问候消息</span>
  </hc-alert>
  <hc-button size="default" type="primary" id="b4">fadeInDown</hc-button>
  <hc-alert type="fadeInDown" id="a4">
    <span>你好呀！问候消息</span>
  </hc-alert>
  <hc-button size="default" type="primary" id="b5">fadeInUp</hc-button>
  <hc-alert type="fadeInUp" id="a5">
    <span>你好呀！问候消息</span>
  </hc-alert>
  <hc-button size="default" type="primary" id="b6">zoomInDown</hc-button>
  <hc-alert type="zoomInDown" id="a6">
    <span>你好呀！问候消息</span>
  </hc-alert>
  <hc-button size="default" type="primary" id="b7">zoomInUp</hc-button>
  <hc-alert type="zoomInUp" id="a7">
    <span>你好呀！问候消息</span>
  </hc-alert>
  <hc-button size="default" type="primary" id="b8">fadeIn</hc-button>
  <hc-alert type="fadeIn" id="a8">
    <span>你好呀！问候消息</span>
  </hc-alert>
</div>

###### 带标题

``` html
  <hc-button type="primary" size="small" id="b9">弹出</hc-button>
  <hc-alert type="zoomIn" id="a9">
    <span slot="title">提示</span>
    <span>你好呀！问候消息</span>
  </hc-alert>
```
<div class="phone">
  <hc-button type="primary" size="small" id="b9">弹出</hc-button>
  <hc-alert type="zoomIn" id="a9">
    <span slot="title">提示</span>
    <span>你好呀！问候消息</span>
  </hc-alert>
</div>

###### 带底部按钮

``` html
  <hc-button type="primary" size="small" id="b9">弹出</hc-button>
  <hc-alert type="zoomIn" id="a9">
    <span slot="title">提示</span>
    <span>你好呀！问候消息</span>
  </hc-alert>
```
<div class="phone">
  <hc-button type="primary" size="small" id="b10">弹出</hc-button>
  <hc-alert type="slideInDown" id="a10">
    <h2 slot="title" style="font-size:0.8rem;margin:0;">提示</h2>
    <p>你好呀！问候消息</p>
    <hc-row slot="footer" style="margin:1rem 1rem 0.5rem 1rem;">
      <hc-col span="12">
        <hc-button rounder type="info" style="margin-right:0.5rem;">取消</hc-button>
      </hc-col>
      <hc-col span="12">
        <hc-button rounder type="primary" style="margin-left:0.5rem;">确认</hc-button>
      </hc-col>
    </hc-row>
  </hc-alert>
</div>

###### 全局指令
每个弹窗结构每次都要重写，而且一个页面如果很多弹窗会增加很多不必要的页面渲染，最好的解决办法就是一个页面始终只有一个弹窗！全局指令便能解决这种尴尬！
``` html
<hc-button id="zl1">指令打开</hc-button>
<script type="module">
  import {hc_alert} from '../../www/build/hc-alert.entry.js' //这里的地址有变，请按照实际地址！
  window.Alert = new hc_alert({})
</script>
<script>
  document.querySelector('#zl1').addEventListener('click', () => {
    Alert.generate({
      head: document.querySelector('#title').value,
      content: document.querySelector('#content').value,
      footer: [{label:'取消'},{label:'确定'}]
    })
  })
</script>
```
<div class="phone">
  <hc-form>
    <hc-form-item label="标题">
      <hc-input light value="友情提示" id="title"></hc-input>
    </hc-form-item>
    <hc-form-item label="内容">
      <hc-input light value="恭喜您，成功注册为本站会员!" id="content"></hc-input>
    </hc-form-item>
  </hc-form>
  <hc-button id="zl1" type="primary">指令打开</hc-button>
</div>
<script>
  document.querySelector('#zl1').addEventListener('click', () => {
    Alert.generate({
      head: document.querySelector('#title').value,
      content: document.querySelector('#content').value,
      footer: [{label:'取消'},{label:'确定'}],
      duration: 10000
    })
  })
  document.querySelector('#b1').addEventListener('click', () => {
    document.querySelector('#a1').generate()
  })
  document.querySelector('#b2').addEventListener('click', () => {
    document.querySelector('#a2').generate()
  })
  document.querySelector('#b3').addEventListener('click', () => {
    document.querySelector('#a3').generate()
  })
  document.querySelector('#b4').addEventListener('click', () => {
    document.querySelector('#a4').generate()
  })
  document.querySelector('#b5').addEventListener('click', () => {
    document.querySelector('#a5').generate()
  })
  document.querySelector('#b6').addEventListener('click', () => {
    document.querySelector('#a6').generate()
  })
  document.querySelector('#b7').addEventListener('click', () => {
    document.querySelector('#a7').generate()
  })
  document.querySelector('#b8').addEventListener('click', () => {
    document.querySelector('#a8').generate()
  })
  document.querySelector('#b9').addEventListener('click', () => {
    document.querySelector('#a9').generate()
  })
  document.querySelector('#b10').addEventListener('click', () => {
    document.querySelector('#a10').generate()
  })
</script>
<!-- Auto Generated Below -->


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
