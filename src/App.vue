<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
</script>

<style lang="less">
  @import './commonstyle/reset.css';
  @font-face {
    font-family: 'font1';   /*字体名称*/
    src: url('./assets/fonts/HeroicCondensed-Medium.ttf');       /*字体源文件*/
  }
  @font-face {
    font-family: 'font2';   /*字体名称*/
    src: url('./assets/fonts/MicrosoftYaHeiLight.ttf');       /*字体源文件*/
  }
  #app {
    width: 100%;
    height: 100%;
  }
  .slide_children { // 这部分样式是给路由模块用的
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    font-size: 0;
  }
  .title {  // 其它页面的通用样式
    font-family: HeroicCondensed;
    color: #fff;
    position:absolute;
    top:10%;
    left:50%;
    transform:translateX(-50%);
    width:100%;
    text-align:center;
  }
</style>
