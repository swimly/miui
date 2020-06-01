##### hc-signature
canvas签名控件，自动生成签名图片！
###### 普通用法

``` html
  <hc-signature></hc-signature>
```

<div class="phone">
  <hc-signature></hc-signature>
</div>

###### 自定义笔触
`pen-color`设置颜色，`pen-weight`设置粗细！

``` html
  <hc-signature pen-color="#f00" pen-weight="1.2"></hc-signature>
```

<div class="phone">
  <hc-signature pen-color="#f00" pen-weight="1.2"></hc-signature>
</div>

###### 自定义画布颜色
`background`定义画布颜色！

``` html
  <hc-signature background="#333" pen-color="#fff"></hc-signature>
```

<div class="phone">
  <hc-signature background="#333" pen-color="#fff"></hc-signature>
</div>

###### 获取签名图片
`background`定义画布颜色！

``` html
  <hc-signature id="s"></hc-signature>
  <hc-row>
    <hc-col span="12">
      <hc-button type="danger" id="clear">清空</hc-button>
    </hc-col>
    <hc-col span="12">
      <hc-button type="primary" id="confirm">确定</hc-button>
    </hc-col>
  </hc-row>
  <hc-image id="preview" height="150"></hc-image>
  <script>
    var signature = document.querySelector('#s')
    var image = document.querySelector('#preview')
    document.querySelector('#clear').addEventListener('click', () => {
      signature.clear()
    })
    document.querySelector('#confirm').addEventListener('click', () => {
      signature.fetchData().then(res => {
        image.setAttribute('src', res)
      })
    })
  </script>
```

<div class="phone">
  <hc-signature id="s"></hc-signature>
  <hc-row>
    <hc-col span="12">
      <hc-button type="danger" id="clear">清空</hc-button>
    </hc-col>
    <hc-col span="12">
      <hc-button type="primary" id="confirm">确定</hc-button>
    </hc-col>
  </hc-row>
  <hc-image id="preview" height="150"></hc-image>
</div>

<script>
  var signature = document.querySelector('#s')
  var image = document.querySelector('#preview')
  document.querySelector('#clear').addEventListener('click', () => {
    signature.clear()
  })
  document.querySelector('#confirm').addEventListener('click', () => {
    signature.fetchData().then(res => {
      image.setAttribute('src', res)
    })
  })
</script>
<!-- Auto Generated Below -->

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
