##### hc-video
还在为视频而烦恼吗？现在，一个标签就能搞定！

##### 手机扫一扫
可以通过扫描下方二维码，在手机上查看文档！
<div class="qrcode" id="qrcode"></div>

或者[点击查看案例](https://swimly.cn:8080/miui/examples/video.html)

###### 默认

默认视频是不能进行拖拽改变进度的！

``` html
  <hc-video poster="../../assets/poster.png" src="https://swimly.cn:8080/mui/demo1.mp4"></hc-video>
```

<div class="phone">
  <hc-video poster="../../assets/poster.png" src="https://swimly.cn:8080/mui/demo1.mp4"></hc-video>
</div>

###### 可以拖动

添加`forbid-jump="false"`

``` html
  <hc-video forbid-jump="false" poster="../../assets/poster.png" src="https://swimly.cn:8080/mui/demo1.mp4"></hc-video>
```

<div class="phone">
  <hc-video forbid-jump="false" poster="../../assets/poster.png" src="https://swimly.cn:8080/mui/demo1.mp4"></hc-video>
</div>
<script>
  new QRCode(document.getElementById("qrcode"), {
    text: "https://swimly.cn:8080/miui/examples/docs/#/../../src/components/hc-video/readme",
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
