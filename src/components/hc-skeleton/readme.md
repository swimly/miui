##### hc-skeleton
增强用户体验！

###### 普通用法
`loaded()`函数调用加载完成！

``` html
  <hc-skeleton animation rows="2">
    <hc-list-item head="内部呈批: 关于机构改革中涉改党委工作机关和政府工作部门刻制印章的函内部呈批: 关于机构改革中涉改党委工作机关和政府工作部门刻制印章的函"></hc-list-item>
  </hc-skeleton>
```

<div class="phone">
  <hc-skeleton animation rows="2">
    <hc-list-item head="内部呈批: 关于机构改革中涉改党委工作机关和政府工作部门刻制印章的函内部呈批: 关于机构改革中涉改党委工作机关和政府工作部门刻制印章的函"></hc-list-item>
  </hc-skeleton>
  <hc-skeleton avatar titles rows="2">
    <hc-list-item>
      <hc-image width="36" height="36" style="margin-right:0.4rem;" slot="cover" src="../../assets/pdf.png"></hc-image>
      <span slot="head">关于2019年度护士执业资格现场确认时间的通知</span>
      <span slot="date">1.23Mb</span>
      <hc-icon name="ashbin" slot="append"></hc-icon>
    </hc-list-item>
  </hc-skeleton>
  <hc-skeleton cover titles rows="2">
    <hc-list-item cover-width="120" cover-height="80" cover="../../assets/img1.png" date="2020-02-23 13:23" head="关于机构改革中涉改党委工作机关和政府工作部门刻制印章的函内部.doc"></hc-list-item>
  </hc-skeleton>
  <hc-skeleton reverse cover titles rows="2">
    <hc-list-item reverse cover-width="120" cover-height="80" cover="../../assets/img1.png" date="2020-02-23 13:23" head="关于机构改革中涉改党委工作机关和政府工作部门刻制印章的函内部.doc"></hc-list-item>
  </hc-skeleton>
</div>
<script>
  var skeletons = document.querySelectorAll('hc-skeleton')
  setTimeout(() => {
    skeletons.forEach(ske => {
      ske.loaded()
    })
  }, 3000)
</script>
<!-- Auto Generated Below -->

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
