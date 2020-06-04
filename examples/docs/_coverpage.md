<h2>MIUI <span>V0.2.0</span></h2>

miui是一个遵循`miui12`设计的前端ui组件库，利用stencil编写，能与 vue、react、angular、ember无缝衔接！基本上做到一处编写到处可用！

[Github](https://github.com/swimly/miui)
[起步](../../README)

<style>
  .cover-main h2{
    font-size:64px;
    display:inline-block;
    position:relative;
    line-height:48px;
    font-weight:bold;
    color:#42b983;
  }
  .cover-main h2 span{
    font-size:12px;
    background:#ff4555;
    color:#fff;
    padding:5px 10px;
    border-radius:20px;
    position:absolute;
    right:0;
    bottom:0;
    line-height:14px;
    transform:translate(110%, -20%);
  }
  .cover-main p{
    margin:60px auto !important;
    max-width:700px;
  }
  .cover-main p a{
    display:inline-flex;
    flex-direction:row;
    align-items:center;
    justify-content:center;
    background:#42b983;
    color:#fff !important;
    border:1px solid #42b983;
    height:44px;
    padding:0 30px;
    border-radius:30px;
    color:#fff;
    text-decoration:none;
    min-width:140px;
    margin:0 10px;
    position:relative;
  }
  .cover-main p a:after{
    content:"";
    display:block;
    position:absolute;
    left:0;
    top:0;
    right:0;
    bottom:0;
    border-radius:30px;
    background:#42b983;
    transition:0.3s;
    opacity:0;
  }
  .cover-main p a:hover:after{
    opacity:0.3;
  }
  .cover-main p a:first-child{
    background:none;
    color: #42b983 !important;
  }
</style>