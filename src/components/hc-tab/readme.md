##### hc-tab
`tab`是最常用的切换分类的组件！tab在文档中有问题，请大家拿起手机扫描二维码查看！

##### 手机扫一扫
可以通过扫描下方二维码，在手机上查看文档！
<div class="qrcode" id="qrcode"></div>

或者[点击查看案例](https://swimly.cn:8080/miui/examples/tab.html)

###### 普通
``` html
  <hc-tab>
    <hc-tab-item>全部</hc-tab-item>
    <hc-tab-item>已读</hc-tab-item>
    <hc-tab-item>未读</hc-tab-item>
  </hc-tab>
```
<div class="phone">
  <hc-tab>
    <hc-tab-item>全部</hc-tab-item>
    <hc-tab-item>已读</hc-tab-item>
    <hc-tab-item>未读</hc-tab-item>
  </hc-tab>
</div>

###### 水平对齐方式
通过`align`来控制水平方向的对齐方式
``` html
  <hc-tab>
    <hc-tab-item>全部</hc-tab-item>
    <hc-tab-item>已读</hc-tab-item>
    <hc-tab-item>未读</hc-tab-item>
  </hc-tab>
  <hc-tab align="center">
    <hc-tab-item style="margin:0 1rem;">全部</hc-tab-item>
    <hc-tab-item style="margin:0 1rem;">已读</hc-tab-item>
    <hc-tab-item style="margin:0 1rem;">未读</hc-tab-item>
  </hc-tab>
  <hc-tab align="flex-end">
    <hc-tab-item style="margin: 0 0 0 2rem;">全部</hc-tab-item>
    <hc-tab-item style="margin: 0 0 0 2rem;">已读</hc-tab-item>
    <hc-tab-item style="margin: 0 0 0 2rem;">未读</hc-tab-item>
  </hc-tab>
  <hc-tab align="space-around">
    <hc-tab-item style="margin:0;">全部</hc-tab-item>
    <hc-tab-item style="margin:0;">已读</hc-tab-item>
    <hc-tab-item style="margin:0;">未读</hc-tab-item>
  </hc-tab>
```
<div class="phone">
  <hc-tab>
    <hc-tab-item>全部</hc-tab-item>
    <hc-tab-item>已读</hc-tab-item>
    <hc-tab-item>未读</hc-tab-item>
  </hc-tab>
  <hc-tab align="center">
    <hc-tab-item style="margin:0 1rem;">全部</hc-tab-item>
    <hc-tab-item style="margin:0 1rem;">已读</hc-tab-item>
    <hc-tab-item style="margin:0 1rem;">未读</hc-tab-item>
  </hc-tab>
  <hc-tab align="flex-end">
    <hc-tab-item style="margin: 0 0 0 2rem;">全部</hc-tab-item>
    <hc-tab-item style="margin: 0 0 0 2rem;">已读</hc-tab-item>
    <hc-tab-item style="margin: 0 0 0 2rem;">未读</hc-tab-item>
  </hc-tab>
  <hc-tab align="space-around">
    <hc-tab-item style="margin:0;">全部</hc-tab-item>
    <hc-tab-item style="margin:0;">已读</hc-tab-item>
    <hc-tab-item style="margin:0;">未读</hc-tab-item>
  </hc-tab>
</div>

###### 超出滚动
``` html
  <hc-tab touch>
    <hc-tab-item>全部</hc-tab-item>
    <hc-tab-item>关注</hc-tab-item>
    <hc-tab-item>最新</hc-tab-item>
    <hc-tab-item>前端</hc-tab-item>
    <hc-tab-item>设计</hc-tab-item>
    <hc-tab-item>后台</hc-tab-item>
    <hc-tab-item>Android</hc-tab-item>
    <hc-tab-item>IOS</hc-tab-item>
    <hc-tab-item>产品</hc-tab-item>
    <hc-tab-item>其他</hc-tab-item>
  </hc-tab>
```
<div class="phone">
  <hc-tab touch>
    <hc-tab-item>全部</hc-tab-item>
    <hc-tab-item>关注</hc-tab-item>
    <hc-tab-item>最新</hc-tab-item>
    <hc-tab-item>前端</hc-tab-item>
    <hc-tab-item>设计</hc-tab-item>
    <hc-tab-item>后台</hc-tab-item>
    <hc-tab-item>Android</hc-tab-item>
    <hc-tab-item>IOS</hc-tab-item>
    <hc-tab-item>产品</hc-tab-item>
    <hc-tab-item>其他</hc-tab-item>
  </hc-tab>
</div>
<script>
  new QRCode(document.getElementById("qrcode"), {
    text: "https://swimly.cn:8080/miui/examples/docs/#/../../src/components/hc-tab/readme",
    width: 128,
    height: 128,
    colorDark : "#42b983",
    colorLight : "#ffffff",
    correctLevel : QRCode.CorrectLevel.H
  });
</script>
<!-- Auto Generated Below -->

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
