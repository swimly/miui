##### hc-actionsheet

动作面板，功能类似`hc-radio`，也就是单选，只是形式不同！

``` html
  <hc-actionsheet value="0">
    <hc-button slot="handle" conner type="primary">打开</hc-button>
    <hc-actionsheet-content>
      <hc-actionsheet-item value="0">支付宝</hc-actionsheet-item>
      <hc-actionsheet-item value="1">微信</hc-actionsheet-item>
      <hc-actionsheet-item value="2">网银</hc-actionsheet-item>
    </hc-actionsheet-content>
  </hc-actionsheet>
```

<div class="phone">
  <hc-actionsheet value="0">
    <hc-button slot="handle" conner type="primary">打开</hc-button>
    <hc-actionsheet-content>
      <hc-actionsheet-item value="0">支付宝</hc-actionsheet-item>
      <hc-actionsheet-item value="1">微信</hc-actionsheet-item>
      <hc-actionsheet-item value="2">网银</hc-actionsheet-item>
    </hc-actionsheet-content>
  </hc-actionsheet>
</div>

###### 多选模式

多选动作面板，功能类似`hc-checkbox`，也就是复选框，只是形式不同，通过添加`mode`为`multiple`实现！

``` html
  <hc-actionsheet mode="multiple" value="2,3">
    <hc-button slot="handle" conner type="primary">打开</hc-button>
    <hc-actionsheet-content>
      <hc-actionsheet-item value="1">支付宝</hc-actionsheet-item>
      <hc-actionsheet-item value="2">微信</hc-actionsheet-item>
      <hc-actionsheet-item value="3">网银</hc-actionsheet-item>
    </hc-actionsheet-content>
  </hc-actionsheet>
```

<div class="phone">
  <hc-actionsheet mode="multiple" value="2,3">
    <hc-button slot="handle" conner type="primary">打开</hc-button>
    <hc-actionsheet-content>
      <hc-actionsheet-item value="1">支付宝</hc-actionsheet-item>
      <hc-actionsheet-item value="2">微信</hc-actionsheet-item>
      <hc-actionsheet-item value="3">网银</hc-actionsheet-item>
    </hc-actionsheet-content>
  </hc-actionsheet>
</div>

###### 全局指令

通过指令调用，参数与普通模式相同

``` html
```

<div class="phone">
  <hc-button type="primary" id="zl1">单选调用</hc-button>
  <hc-button type="primary" id="zl2">多选调用</hc-button>
</div>

<script>
  document.querySelector('#zl2').addEventListener('click', () => {
    var a1 = Actionsheet.generate({
      mode: 'mutilpe',
      content: [{label: '平面设计', value: '1'},{label: '前端开发', value: '2'},{label: '视觉设计', value: '3'},{label: '动画设计', value: '4'}]
    }).then(res => {
      res.addEventListener('vdone', (e) => {
        Toast.generate({
          content: `您选中了${e.detail.valuestring}`
        })
      })
    })
  })
  document.querySelector('#zl1').addEventListener('click', () => {
    var a1 = Actionsheet.generate({
      content: [{label: '男', value: '1'},{label: '女', value: '2'}],
      value: '1'
    }).then(res => {
      res.addEventListener('vdone', (e) => {
        Toast.generate({
          content: `您选中了${e.detail.valuestring}`
        })
      })
    })
  })
  var actions = document.querySelectorAll('hc-actionsheet')
  actions.forEach((item) => {
    item.addEventListener('vdone', (e) => {
      Toast.generate({
        content: `您选中了${e.detail.valuestring}`
      })
    })
  })
</script>
<!-- Auto Generated Below -->


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
