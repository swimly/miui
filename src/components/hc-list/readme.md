##### hc-list
列表是使用最广泛的一个控件，灵活的内部结构使其能搭配出任意列表形式！

###### 普通列表
单标题列表，可通过自定义属性`head`添加title，也可以通过`slot`形式添加！

``` html
  <hc-list>
    <hc-list-item 
      head="内部呈批: 关于机构改革中涉改党委工作机关和政府工作部门刻制印章的函内部呈批: 关于机构改革中涉改党委工作机关和政府工作部门刻制印章的函"
    ></hc-list-item>
    <hc-list-item>
      <span slot="head">关于2019年度护士执业资格现场确认时间的通知</span>
    </hc-list-item>
  </hc-list>
```

<div class="phone">
  <hc-list>
    <hc-list-item head="内部呈批: 关于机构改革中涉改党委工作机关和政府工作部门刻制印章的函内部呈批: 关于机构改革中涉改党委工作机关和政府工作部门刻制印章的函"></hc-list-item>
    <hc-list-item>
      <span slot="head">关于2019年度护士执业资格现场确认时间的通知</span>
    </hc-list-item>
  </hc-list>
</div>

###### 带时间
`date`代表列表时间！

``` html
  <hc-list>
    <hc-list-item date="发布时间：2020-02-23 13:23:32" head="内部呈批: 关于机构改革中涉改党委工作机关和政府工作部门刻制印章的函内部"></hc-list-item>
    <hc-list-item>
      <span slot="head">关于2019年度护士执业资格现场确认时间的通知</span>
      <span slot="date">发布时间：2020-02-23 13:23:32</span>
    </hc-list-item>
  </hc-list>
```

<div class="phone">
  <hc-list>
    <hc-list-item date="发布时间：2020-02-23 13:23" head="内部呈批: 关于机构改革中涉改党委工作机关和政府工作部门刻制印章的函内部"></hc-list-item>
    <hc-list-item>
      <span slot="head">关于2019年度护士执业资格现场确认时间的通知</span>
      <span slot="date">发布时间：2020-02-23 13:23</span>
    </hc-list-item>
  </hc-list>
</div>

###### 复杂列表
`attach`代表列表前面的区域，可以搭配出复杂的列表样式！

``` html
  <hc-list>
    <hc-list-item type="complex" date="发布时间：2020-02-23 13:23" head="内部呈批: 关于机构改革中涉改党委工作机关和政府工作部门刻制印章的函内部"></hc-list-item>
    <hc-list-item type="complex">
      <span slot="attach">
        <hc-tag size="mini" plain conner type="danger">未读</hc-tag>
      </span>
      <span slot="head">关于2019年度护士执业资格现场确认时间的通知</span>
      <span slot="date">发布时间：2020-02-23 13:23</span>
    </hc-list-item>
  </hc-list>
```

<div class="phone">
  <hc-list>
    <hc-list-item type="complex" date="发布时间：2020-02-23 13:23" head="内部呈批: 关于机构改革中涉改党委工作机关和政府工作部门刻制印章的函内部"></hc-list-item>
    <hc-list-item type="complex">
      <span slot="attach">
        <hc-tag size="mini" plain conner type="danger">未读</hc-tag>
      </span>
      <span slot="head">关于2019年度护士执业资格现场确认时间的通知</span>
      <span slot="date">发布时间：2020-02-23 13:23</span>
    </hc-list-item>
  </hc-list>
</div>

###### 文件列表

``` html
  <hc-list>
    <hc-list-item append-color="#f00" append-icon="ashbin" cover="../../assets/word.png" date="432Kb" head="内部呈批.doc"></hc-list-item>
    <hc-list-item>
      <hc-image width="36" height="36" style="margin-right:0.4rem;" slot="cover" src="../../assets/pdf.png"></hc-image>
      <span slot="head">关于2019年度护士执业资格现场确认时间的通知</span>
      <span slot="date">1.23Mb</span>
      <hc-icon name="ashbin" slot="append"></hc-icon>
    </hc-list-item>
  </hc-list>
```

<div class="phone">
  <hc-list>
    <hc-list-item append-color="#f00" append-icon="ashbin" cover="../../assets/word.png" date="432Kb" head="内部呈批.doc"></hc-list-item>
    <hc-list-item>
      <hc-image width="36" height="36" style="margin-right:0.4rem;" slot="cover" src="../../assets/pdf.png"></hc-image>
      <span slot="head">关于2019年度护士执业资格现场确认时间的通知</span>
      <span slot="date">1.23Mb</span>
      <hc-icon name="ashbin" slot="append"></hc-icon>
    </hc-list-item>
  </hc-list>
</div>

###### 图文列表

``` html
  <hc-list>
    <hc-list-item cover-width="120" cover-height="80" cover="../assets/img1.png" date="2020-02-23 13:23" head="内部呈批.doc"></hc-list-item>
    <hc-list-item reverse cover-width="120" cover-height="80" cover="../assets/img1.png" date="2020-02-23 13:23" head="关于机构改革中涉改党委工作机关和政府工作部门刻制印章的函内部.doc"></hc-list-item>
    <hc-list-item reverse>
      <hc-image width="120" height="80" style="margin-left:0.4rem;" slot="cover" src="../assets/img2.png"></hc-image>
      <span slot="head">关于2019年度护士执业资格现场确认时间的通知</span>
      <span slot="date">2020-02-23 13:23</span>
    </hc-list-item>
  </hc-list>
```

<div class="phone">
  <hc-list>
    <hc-list-item cover-width="120" cover-height="80" cover="../../assets/img1.png" date="2020-02-23 13:23" head="内部呈批.doc"></hc-list-item>
    <hc-list-item reverse cover-width="120" cover-height="80" cover="../../assets/img1.png" date="2020-02-23 13:23" head="关于机构改革中涉改党委工作机关和政府工作部门刻制印章的函内部.doc"></hc-list-item>
    <hc-list-item reverse>
      <hc-image width="120" height="80" style="margin-left:0.4rem;" slot="cover" src="../../assets/img2.png"></hc-image>
      <span slot="head">关于2019年度护士执业资格现场确认时间的通知</span>
      <span slot="date">2020-02-23 13:23</span>
    </hc-list-item>
  </hc-list>
</div>
<!-- Auto Generated Below -->

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
