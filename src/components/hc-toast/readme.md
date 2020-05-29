##### hc-toast
吐司用来给用户操作一个反馈结果！

###### 默认
默认是中间显示，可根据`place`的值来控制其显示位置，`start`顶部，`center`中间，`end`底部
``` html
  <hc-toast id="center">恭喜登陆成功</hc-toast>
  <hc-toast place="start" id="start">恭喜登陆成功</hc-toast>
  <hc-toast place="end" id="end">恭喜登陆成功</hc-toast>
```
<div class="phone">
  <hc-button id="a1" size="small" type="primary" conner>中间提示</hc-button>
  <hc-button id="a2" size="small" type="primary" conner>顶部提示</hc-button>
  <hc-button id="a3" size="small" type="primary" conner>底部提示</hc-button>
  <hc-toast id="center">恭喜登陆成功</hc-toast>
  <hc-toast place="start" id="start">恭喜登陆成功</hc-toast>
  <hc-toast place="end" id="end">恭喜登陆成功</hc-toast>
</div>

###### 带图标
可通过`icon`来给`hc-toast`添加图标！
``` html
  <hc-toast icon="success-fill" id="success">操作成功</hc-toast>
  <hc-toast icon="prompt-fill1" id="warning">操作提示</hc-toast>
  <hc-toast icon="reeor-fill" id="danger">操作错误</hc-toast>
  <hc-toast icon="reduce-fill" id="dely">禁止操作</hc-toast>
```
<div class="phone">
  <hc-button icon="success-fill" id="b1" size="small" type="success" conner>成功</hc-button>
  <hc-button icon="prompt-fill1" id="b2" size="small" type="warning" conner>提示</hc-button>
  <hc-button icon="reeor-fill" id="b3" size="small" type="danger" conner>错误</hc-button>
  <hc-button icon="reduce-fill" id="b4" size="small" type="primary" conner>禁止</hc-button>
  <hc-toast icon="success-fill" id="success">操作成功</hc-toast>
  <hc-toast icon="prompt-fill1" id="warning">操作提示</hc-toast>
  <hc-toast icon="reeor-fill" id="danger">操作错误</hc-toast>
  <hc-toast icon="reduce-fill" id="dely">禁止操作</hc-toast>
</div>

###### 自定义颜色
可通过`icon`来给`hc-toast`添加图标！
``` html
  <hc-toast id="color" fill="#f00">恭喜登陆成功</hc-toast>
```
<div class="phone">
  <hc-button id="c1" size="small" type="primary" conner>自定义颜色</hc-button>
  <hc-toast id="color" fill="#f00">恭喜登陆成功</hc-toast>
</div>

###### 全局指令
可通过`icon`来给`hc-toast`添加图标！
``` html
  <hc-toast id="color" fill="#f00">恭喜登陆成功</hc-toast>
```
<div class="phone">
  <hc-button id="zl1" size="small" type="primary" conner>全局指令调用！</hc-button>
</div>

<script>
  document.querySelector('#zl1').addEventListener('click', () => {
    Toast.generate({
      content: '哈哈哈哈'
    })
  })
  document.querySelector('#a1').addEventListener('click', () => {
    var toast = document.querySelector('#center')
    toast.generate();
  })
  document.querySelector('#a2').addEventListener('click', () => {
    var toast = document.querySelector('#start')
    toast.generate();
  })
  document.querySelector('#a3').addEventListener('click', () => {
    var toast = document.querySelector('#end')
    toast.generate();
  })
  document.querySelector('#b1').addEventListener('click', () => {
    var toast = document.querySelector('#success')
    toast.generate();
  })
  document.querySelector('#b2').addEventListener('click', () => {
    var toast = document.querySelector('#warning')
    toast.generate();
  })
  document.querySelector('#b3').addEventListener('click', () => {
    var toast = document.querySelector('#danger')
    toast.generate();
  })
  document.querySelector('#b4').addEventListener('click', () => {
    var toast = document.querySelector('#dely')
    toast.generate();
  })
  document.querySelector('#c1').addEventListener('click', () => {
    var toast = document.querySelector('#color')
    toast.generate();
  })
  document.querySelector('#d1').addEventListener('click', () => {
    var toast = document.querySelector('#slot')
    toast.generate();
  })
  document.querySelector('#t1').addEventListener('click', () => {
    Toast.generate()
  })
</script>
<!-- Auto Generated Below -->

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
