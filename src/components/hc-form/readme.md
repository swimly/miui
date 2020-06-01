##### hc-form

表单布局搭配其他表单组件使用！

###### 普通

``` html
  <hc-form>
    <hc-form-item label="姓名">刘勇</hc-form-item>
    <hc-form-item label="性别" value="男"></hc-form-item>
    <hc-form-item label="手机号码">18827078587</hc-form-item>
    <hc-form-item label="居住地址">湖北省武汉市江夏区保利清能西海岸</hc-form-item>
  </hc-form>
```

<div class="phone">
  <hc-form>
    <hc-form-item label="姓名">刘勇</hc-form-item>
    <hc-form-item label="性别" value="男"></hc-form-item>
    <hc-form-item label="手机号码">18827078587</hc-form-item>
    <hc-form-item label="居住地址">湖北省武汉市江夏区保利清能西海岸</hc-form-item>
  </hc-form>
<div>

###### 可编辑

``` html
  <hc-form>
    <hc-form-item label="姓名">
      <hc-input plain align="right"></hc-input>
    </hc-form-item>
    <hc-form-item label="性别">
      <hc-checkbox rounder>男</hc-checkbox>
    </hc-form-item>
    <hc-form-item label="手机号码">18827078587</hc-form-item>
    <hc-form-item label="居住地址">湖北省武汉市江夏区保利清能西海岸南区G15栋1单元1603</hc-form-item>
  </hc-form>
```

<div class="phone">
  <hc-form>
    <hc-form-item label="姓名">
      <hc-input light align="right"></hc-input>
    </hc-form-item>
    <hc-form-item label="性别">
      <hc-radio-group align="right" value="1">
        <hc-radio rounder value="0">男</hc-radio>
        <hc-radio rounder value="1">女</hc-radio>
      </hc-radio-group>
    </hc-form-item>
    <hc-form-item label="爱好" align="right">
      <hc-checkbox-group>
        <hc-checkbox value="1" rounder>篮球</hc-checkbox>
        <hc-checkbox value="2" rounder>羽毛球</hc-checkbox>
        <hc-checkbox value="3" rounder>足球</hc-checkbox>
        <hc-checkbox value="4" rounder>橄榄球</hc-checkbox>
      </hc-checkbox-group>
    </hc-form-item>
    <hc-form-item label="手机号码">
      <hc-input type="number" light align="right" placeholder="请填写手机号！"></hc-input>
    </hc-form-item>
    <hc-form-item label="居住地址">
      <hc-input type="textarea" align="right" light value="湖北省武汉市江夏区保利清能西海岸南区G15栋1单元1603"></hc-input>
    </hc-form-item>
  </hc-form>
<div>


<!-- Auto Generated Below -->

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
