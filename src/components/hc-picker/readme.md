##### hc-picker
`picker`主要用来多层级选择或者单层级选择！

###### 普通用法
`current`用来初始化选择！

``` html
  <hc-picker-view id="auto" current="1">
    <hc-picker-item value="0">2020</hc-picker-item>
    <hc-picker-item value="1">2019</hc-picker-item>
    <hc-picker-item value="1">2018</hc-picker-item>
    <hc-picker-item value="1">2017</hc-picker-item>
  </hc-picker-view>
```
<div class="phone">
  <hc-picker-view id="auto" current="1">
    <hc-picker-item value="0">2020</hc-picker-item>
    <hc-picker-item value="1">2019</hc-picker-item>
    <hc-picker-item value="1">2018</hc-picker-item>
    <hc-picker-item value="1">2017</hc-picker-item>
    <hc-picker-item value="1">2016</hc-picker-item>
    <hc-picker-item value="1">2015</hc-picker-item>
    <hc-picker-item value="1">2014</hc-picker-item>
    <hc-picker-item value="1">2013</hc-picker-item>
    <hc-picker-item value="1">2012</hc-picker-item>
    <hc-picker-item value="0">2011</hc-picker-item>
    <hc-picker-item value="1">2010</hc-picker-item>
    <hc-picker-item value="1">2009</hc-picker-item>
    <hc-picker-item value="1">2008</hc-picker-item>
    <hc-picker-item value="1">2007</hc-picker-item>
    <hc-picker-item value="1">2006</hc-picker-item>
    <hc-picker-item value="1">2005</hc-picker-item>
    <hc-picker-item value="1">2004</hc-picker-item>
    <hc-picker-item value="1">2003</hc-picker-item>
    <hc-picker-item value="0">2020</hc-picker-item>
    <hc-picker-item value="1">2019</hc-picker-item>
    <hc-picker-item value="1">2018</hc-picker-item>
    <hc-picker-item value="1">2017</hc-picker-item>
    <hc-picker-item value="1">2016</hc-picker-item>
    <hc-picker-item value="1">2015</hc-picker-item>
    <hc-picker-item value="1">2014</hc-picker-item>
    <hc-picker-item value="1">2013</hc-picker-item>
    <hc-picker-item value="1">2012</hc-picker-item>
    <hc-picker-item value="0">2011</hc-picker-item>
    <hc-picker-item value="1">2010</hc-picker-item>
    <hc-picker-item value="1">2009</hc-picker-item>
    <hc-picker-item value="1">2008</hc-picker-item>
    <hc-picker-item value="1">2007</hc-picker-item>
    <hc-picker-item value="1">2006</hc-picker-item>
    <hc-picker-item value="1">2005</hc-picker-item>
    <hc-picker-item value="1">2004</hc-picker-item>
    <hc-picker-item value="1">2003</hc-picker-item>
  </hc-picker-view>
</div>

###### 多列
如果有多列可以配合`hc-row`来横向排列！但是二者不会联动！

``` html
  <hc-picker-content>
    <hc-picker-view id="auto" current="1">
      <hc-picker-item value="0">2020</hc-picker-item>
      <hc-picker-item value="1">2019</hc-picker-item>
      <hc-picker-item value="1">2018</hc-picker-item>
      <hc-picker-item value="1">2017</hc-picker-item>
    </hc-picker-view>
    <hc-picker-view id="auto" current="1">
      <hc-picker-item value="0">2020</hc-picker-item>
      <hc-picker-item value="1">2019</hc-picker-item>
      <hc-picker-item value="1">2018</hc-picker-item>
      <hc-picker-item value="1">2017</hc-picker-item>
    </hc-picker-view>
  </hc-picker-content>
```
<div class="phone">
  <hc-picker-content>
    <hc-picker-view id="auto" current="1">
      <hc-picker-item value="0">2020</hc-picker-item>
      <hc-picker-item value="1">2019</hc-picker-item>
      <hc-picker-item value="1">2018</hc-picker-item>
      <hc-picker-item value="1">2017</hc-picker-item>
    </hc-picker-view>
    <hc-picker-view id="auto" current="1">
      <hc-picker-item value="0">2020</hc-picker-item>
      <hc-picker-item value="1">2019</hc-picker-item>
      <hc-picker-item value="1">2018</hc-picker-item>
      <hc-picker-item value="1">2017</hc-picker-item>
    </hc-picker-view>
  </hc-picker-content>
</div>

###### 点击弹出选择
上面都是直接罗列出来，不符合实际项目中的应用！

<div class="phone">
  <hc-picker>
    <hc-picker-handle slot="handle">
      <hc-cell align="right" label="年份" value="2020"></hc-cell>
    </hc-picker-handle>
    <hc-picker-content>
      <hc-picker-view id="auto" current="1">
        <hc-picker-item value="0">2020</hc-picker-item>
        <hc-picker-item value="1">2019</hc-picker-item>
        <hc-picker-item value="1">2018</hc-picker-item>
        <hc-picker-item value="1">2017</hc-picker-item>
      </hc-picker-view>
    </hc-picker-content>
  </hc-picker>
</div>

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
