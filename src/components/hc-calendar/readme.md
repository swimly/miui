##### hc-calendar
日历组件是最为复杂的一个控件，使用方式如下

##### 手机扫一扫
可以通过扫描下方二维码，在手机上查看文档！
<div class="qrcode" id="qrcode"></div>

或者[点击查看案例](https://swimly.cn:8080/miui/examples/calendar.html)

###### 普通用法
日历支持手势拖动切换！，可以通过`type`来切换显示模式：`week`周视图，`month`月视图，默认是月视图。
``` html
<hc-calendar></hc-calendar>
<hc-calendar type="week"></hc-calendar>
```

<div class="phone">
  <hc-calendar></hc-calendar>
  <hc-calendar type="week"></hc-calendar>
</div>

###### 自定义头部显示内容
默认头部有`title`,`diff`,`today`,`type`，分别代表：标题，距离今日，回到今天，类型切换。可通过`header`来自定义
``` html
<hc-calendar header="title,today"></hc-calendar>
```

<div class="phone">
  <hc-calendar header="title,today"></hc-calendar>
</div>

###### 自定义渲染月份
可通过`range`来渲染月份的个数，`date`来确定起始日期，如果没有，默认就是当天。这种形式的日历可以多选，不能左右滑动切换，通过垂直滚动！
``` html
<hc-calendar range="3"></hc-calendar>
```

<div class="phone">
  <hc-calendar range="3"></hc-calendar>
</div>

###### 自定义指令
日历既可以是直接展示，也可以是弹出选择的形式！
``` html
  <hc-button id="zl" style="margin-bottom:10px;">选择日期区间</hc-button>
  <hc-button id="zl1">选择单日期</hc-button>
```

<div class="phone">
  <hc-button id="zl" style="margin-bottom:10px;">选择日期区间</hc-button>
  <hc-button id="zl1">选择单日期</hc-button>
</div>
<script>
  document.querySelector('#zl').addEventListener('click', () => {
      Calendar.generate({
        header: 'title',
        date: '2010/1/3',
        range: 3
      }).then(res => {
        res.addEventListener('vdone', (e) => {
          console.log(e.detail)
        })
      })
    })
    document.querySelector('#zl1').addEventListener('click', () => {
      Calendar.generate({
        header: 'title,diff,today'
      }).then(res => {
        res.addEventListener('vdone', (e) => {
          console.log(e.detail)
        })
      })
    })
    new QRCode(document.getElementById("qrcode"), {
    text: "https://swimly.cn:8080/miui/examples/docs/#/../../src/components/hc-calendar/readme",
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
