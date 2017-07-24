<template>
  <div class="slide_two slide_children">
    <div class="wrapper">
      <header class="about_me" :class="{about_transition: loadingAbout}">关于我</header>
      <ul class="list">
        <li class="item transform0ne" :class="{loading_transform_one:loadingItem}">
          <div class="icon_wrapper">
            <img :src="graudation" alt="">
          </div>
          <p class="explain">学历/本科</p>
        </li>
        <li class="item transformTwo" :class="{loading_transform_two:loadingItem}">
          <div class="icon_wrapper">
             <img :src="address">
          </div>
          <p class="explain">暂住地/深圳</p>
        </li>
        <li class="item transformThree" :class="{loading_transform_three:loadingItem}">
          <div class="icon_wrapper">
             <img :src="status" alt="">
          </div>
          <p class="explain">状态/在职</p>
        </li>
        <li class="item transformFour" :class="{loading_transform_four:loadingItem}">
          <div class="icon_wrapper">
             <img :src="major" alt="">
          </div>
          <p class="explain">专业/自动化</p>
        </li>
      </ul>
      <p class="power" :class="{power_loading: Loading}">高效的自学能力，能独立分析解决问题</p>
      <p class="control" :class="{control_loading:Loading}">强烈的自我驱动力，代码洁癖患者</p>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        graudation: require('../assets/image/graudation.svg'),
        address: require('../assets/image/address.svg'),
        status: require('../assets/image/status.svg'),
        major: require('../assets/image/major.svg'),
        loadingItem: false,
        loadingAbout: false,
        Loading: false
      }
    },
    mounted () {
      this.loadItem()
      this.loadAbout()
      this.commonLoading()
    },
    methods: {
      loadItem () {
        setTimeout(() => {
          this.loadingItem = true
        }, 2000)
      },
      loadAbout () {
        setTimeout(() => {
          this.loadingAbout = true
        }, 1000)
      },
      commonLoading () {
        setTimeout(() => {
          this.Loading = true
        }, 4000)
      }
    }
  }
</script>
<style lang="less" scoped>
  @import '../commonstyle/comment';

  .slide_two {
    .rel;
    width: 100vw;
    height: 100vh;
    background: #8BB68B;
    .pt(1rem);
  }
  .about_me{
    .tc;
    color:@fff;
    font-size:14px;
    .mb(40px);
    opacity:0;
    transform: translateY(-100px);
    transition: all .5s linear ;
  }
  .about_transition{
    transform: translateY(0);
    opacity:1;
  }
  .list{
    margin:0 auto;
    width:300px;
    .mb(50px);
  }
  .item{
    float:left;
    .mb(10px);
    width:50%;
    .tc;
    opacity:0;
    border:1px solid blue;
    transition:all .5s linear;
    .explain{
      width:100%;
      .f14;
      color:@fff;
    .tc;
    }
  }
  .transform0ne{
    transform: translate(-200px,-150px);
  }
  .transformTwo{
    transform: translate(200px,-150px);
  }
  .transformThree{
    transform: translate(-200px,150px);
  }
  .transformFour{
    transform: translate(200px,150px);
  }
  .loading_transform_one{
    transform: translate(0,0);
    opacity:1;
  }
  .loading_transform_two{
    transform: translate(0,0);
    opacity:1;
  }
  .loading_transform_three{
    transform: translate(0,0);
    opacity:1;
  }
  .loading_transform_four{
    transform: translate(0,0);
    opacity:1;
  }
  .icon_wrapper {
    .inb;
    width:1rem;
    height:1rem;
    .b-r(50%);
    overflow: hidden;
    border: 1px solid red;
    .mb(10px);
    img{
      width:100%;
      height:100%;
    }
  }
  .power,
  .control{
    .tc;
    .f14;
    color:@fff;
    line-height:25px;
    opacity:0;
  }
  .power{
    animation: powerload 1s 2.5s ease;
  }
  .control{
    animation: powerload 1s 3.5s ease;
  }
  .power_loading{
    opacity:1;
  }
  .control_loading{
    opacity:1;
  }
  @keyframes powerload {
    0%{
      opacity:0;
      transform: translateX(-300px);
    }
    30%{
      opacity:1;
      transform: translateX(50px);
    }
    60%{
      opacity:.5;
      transform: translateX(-50px);
    }
    100%{
      opacity:1;
      transform: translateX(0);
    }
  }
  @media screen and (max-width:600px) {
    .slide_two {
      .pt(100px);
    }
  }
  @media screen and (min-width:1440px) {
    .slide_two {
    .pt(200px);
    }
  }
</style>
