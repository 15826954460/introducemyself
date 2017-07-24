<template>
  <div class="slide_three slide_children" :style="{backgroundImage:'url(' + slideTwoBg + ')'}">
    <div class="work_wrapper">
      <header class="title">Part project experience</header>
      <div class="work_img_box">
        <div class="work_img_wrapper">
          <div class="img_wrapper img_common img1">
            <img :src="img1">
            <div class="mark">
              <img :src="clickIcon" class="clickIcon">
            </div>
          </div>
          <div class="img_wrapper img_common img2">
            <img :src="img1">
            <div class="mark">
              <img :src="clickIcon" class="clickIcon">
            </div>
          </div>
          <div class="img_wrapper img_common img3">
            <img :src="img1">
            <div class="mark">
              <img :src="clickIcon" class="clickIcon">
            </div>
          </div>
          <div class="img_wrapper img_common img4">
            <img :src="img1">
            <div class="mark">
              <img :src="clickIcon" class="clickIcon">
            </div>
          </div>
          <div class="img_wrapper img_common img5">
            <img :src="img1">
            <div class="mark">
              <img :src="clickIcon" class="clickIcon">
            </div>
          </div>
          <div class="img_wrapper img_common img6">
            <img :src="img1">
            <div class="mark">
              <img :src="clickIcon" class="clickIcon">
            </div>
          </div>
          <div class="img_wrapper img_common img7">
            <img :src="img1">
            <div class="mark">
              <img :src="clickIcon" class="clickIcon">
            </div>
          </div>
          <div class="img_wrapper img_common img8">
            <img :src="img1">
            <div class="mark">
              <img :src="clickIcon" class="clickIcon">
            </div>
          </div>
        </div>
      </div>
      <div class="github_left" id="github_left">
        <header class="github">github作品：</header>
        <p class="demo_name">vue2.0仿nodejs中文社区demo</p><br>
        <span class="git_add">github 地址：</span>
        <a href="https://github.com/15826954460/vue2.0-nodejs" class="lianjie">https://github.com/15826954460/vue2.0-nodejs</a><br>
        <span class="online">线上地址：</span>
        <a href="http://demonodejs.applinzi.com" class="lianjie">http://demonodejs.applinzi.com</a>
      </div>
      <div class="github_right" id="github_right">
        <header class="github">github作品：</header>
        <p class="demo_name">vue2.0仿饿了么webApp demo</p><br>
        <p class="git_add">github 地址：</p>
        <a href="https://github.com/15826954460/elmProject" class="lianjie">https://github.com/15826954460/elmProject</a><br>
        <p class="online">线上地址：</p>
        <a href="http://demoelmwebapp.applinzi.com" class="lianjie">http://demoelmwebapp.applinzi.com</a>
      </div>
      <transition name="slide">
        <div class="product_wrapper" v-show="">
        </div>
      </transition>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        slideTwoBg: require('../assets/image/03.jpg'),
        img1: require('../assets/image/gamespic1.png'),
        clickIcon: require('../assets/image/click.svg'),
        isShowProjectDetail: false
      }
    }
  }
</script>
<style lang="less" scoped>
  @import '../commonstyle/comment';
  .work_wrapper {
    .title{
      .f20;
    }
    .work_img_box {
      .pc;
      width: 1.5rem;
      height: 1rem;
      perspective: 5000px;
      transform-style: preserve-3d;
      -webkit-transform: rotateX(-30deg) translate(-50%);
      -moz-transform: rotateX(-30deg) translate(-50%);
      -ms-transform: rotateX(-30deg) translate(-50%);
      -o-transform: rotateX(-30deg) translate(-50%);
      transform: rotateX(-30deg) translate(-50%);
      .work_img_wrapper {
        .rel;
        width: 100%;
        height: 100%;
        transform-style: preserve-3d;
        -moz-animation: round 15s infinite linear;
        -o-animation: round 15s infinite linear;
        -webkit-animation: round 15s infinite linear;
        animation: round 15s infinite linear;
        &:hover {
          -webkit-animation-play-state: paused;
          -o-animation-play-state: paused;
          -moz-animation-play-state: paused;
          animation-play-state: paused;
        }
      }
      .img_common {
        width: 100%;
        height: 100%;
        .abs;
        font-size: 0;
        img {
          width: 100%;
          height: 100%;
        }
        &:hover .mark {
          height: 100%;
        }
        .mark {
          .abs;
          font-size: 0;
          bottom: 0;
          background: rgba(0, 0, 0, .3);
          width: 100%;
          height: 0;
          overflow: hidden;
          z-index: 10;
          .transition(.3s);
          .clickIcon {
            .pc;
            width: .3rem;
            height: .3rem;
          }
        }
      }
      .img1 {
        -webkit-transform: rotateY(45deg) translateZ(2.4rem);
        -moz-transform: rotateY(45deg) translateZ(2.4rem);
        -ms-transform: rotateY(45deg) translateZ(2.4rem);
        -o-transform: rotateY(45deg) translateZ(2.4rem);
        transform: rotateY(45deg) translateZ(2.4rem);
      }
      .img2 {
        -webkit-transform: rotateY(90deg) translateZ(2.4rem);
        -moz-transform: rotateY(90deg) translateZ(2.4rem);
        -ms-transform: rotateY(90deg) translateZ(2.4rem);
        -o-transform: rotateY(90deg) translateZ(2.4rem);
        transform: rotateY(90deg) translateZ(2.4rem);
      }
      .img3 {
        -webkit-transform: rotateY(135deg) translateZ(2.4rem);
        -moz-transform: rotateY(135deg) translateZ(2.4rem);
        -ms-transform: rotateY(135deg) translateZ(2.4rem);
        -o-transform: rotateY(135deg) translateZ(2.4rem);
        transform: rotateY(135deg) translateZ(2.4rem);
      }
      .img4 {
        -webkit-transform: rotateY(180deg) translateZ(2.4rem);
        -moz-transform: rotateY(180deg) translateZ(2.4rem);
        -ms-transform: rotateY(180deg) translateZ(2.4rem);
        -o-transform: rotateY(180deg) translateZ(2.4rem);
        transform: rotateY(180deg) translateZ(2.4rem);
      }
      .img5 {
        -webkit-transform: rotateY(225deg) translateZ(2.4rem);
        -moz-transform: rotateY(225deg) translateZ(2.4rem);
        -ms-transform: rotateY(225deg) translateZ(2.4rem);
        -o-transform: rotateY(225deg) translateZ(2.4rem);
        transform: rotateY(225deg) translateZ(2.4rem);
      }
      .img6 {
        -webkit-transform: rotateY(270deg) translateZ(2.4rem);
        -moz-transform: rotateY(270deg) translateZ(2.4rem);
        -ms-transform: rotateY(270deg) translateZ(2.4rem);
        -o-transform: rotateY(270deg) translateZ(2.4rem);
        transform: rotateY(270deg) translateZ(2.4rem);
      }
      .img7 {
        -webkit-transform: rotateY(315deg) translateZ(2.4rem);
        -moz-transform: rotateY(315deg) translateZ(2.4rem);
        -ms-transform: rotateY(315deg) translateZ(2.4rem);
        -o-transform: rotateY(315deg) translateZ(2.4rem);
        transform: rotateY(315deg) translateZ(2.4rem);
      }
      .img8 {
        -webkit-transform: rotateY(360deg) translateZ(2.4rem);
        -moz-transform: rotateY(360deg) translateZ(2.4rem);
        -ms-transform: rotateY(360deg) translateZ(2.4rem);
        -o-transform: rotateY(360deg) translateZ(2.4rem);
        transform: rotateY(360deg) translateZ(2.4rem);
      }
    }
    @-moz-keyframes round {
      0% {
        transform: rotate(0deg)
      }
      100% {
        transform: rotate(-360deg)
      }
    }
    @-o-keyframes round {
      0% {
        transform: rotateY(0deg);
      }
      100% {
        transform: rotateY(-360deg);
      }
    }
    @-webkit-keyframes round {
      0% {
        transform: rotateY(0deg);
      }
      100% {
        transform: rotateY(-360deg);
      }
    }
    @-ms-keyframes round {
      0% {
        transform: rotateY(0deg);
      }
      100% {
        transform: rotateY(-360deg);
      }
    }
    @keyframes round {
      0% {
        transform: rotateY(0deg);
      }
      10% {
        transform: rotateY(36deg);
      }
      20% {
        transform: rotateY(72deg);
      }
      30% {
        transform: rotateY(108deg);
      }
      40% {
        transform: rotateY(144deg);
      }
      50% {
        transform: rotateY(180deg);
      }
      60% {
        transform: rotateY(216deg);
      }
      70% {
        transform: rotateY(252deg);
      }
      80% {
        transform: rotateY(288deg);
      }
      90% {
        transform: rotateY(324deg);
      }
      100% {
        transform: rotateY(360deg);
      }
    }
    .github_left {
      left:2%;
    }
    .github_right {
      border:1px solid red;
      right:2%;
    }
    .github_left,
    .github_right{
      .abs;
      z-index:10;
      top:27%;
      font-size:0;
      color:@fff;
      width:250px;
      word-break: break-all;
      line-height:25px;
      transform-style: preserve-3d;
      .github{
        font-size:14px;
      }
      .demo_name{
        font-size:14px;
        /*.mb(.1rem);*/
        color:rgba(255,255,255,.6);
      }
      .git_add,
      .online{
        font-size:14px;
        color:@fff;
        line-height:20px;
      }
      .lianjie{
        .b;
        font-size:14px;
        word-break: break-all;
        line-height:20px;
        .transition(.3s);
        color:#8BC6FA;
        &:hover{
          .cur;
          text-decoration: underline;
          color:#0A67F0;
        }
      }
    }
    .product_wrapper {
      .abs;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, .8);
      font-size: 0;
    }
  }

  @media screen and(max-width: 1024px) {
    .work_wrapper .work_img_box .work_img_wrapper .img_wrapper .mark {
      height: 100%;
    }
    .work_wrapper .work_img_box{
      width: 1.8rem;
      height: 1.2rem;
    }
  }
  @media screen and (min-width:912px) and (max-width: 1024px) {
    #github_left,
    #github_right{
      top:20%;
      .github{
        font-size:14px;
        .mb();
      }
      .demo_name{
        font-size:14px;
        .mb();
      }
      .lianjie{
        font-size:14px;
      }
    }
  }
  @media screen and (max-width:650px) {
    #github_right,
    #github_left{
      .pc;
     .tc;
      width:100%;
      line-height:20px;
      .github,
      .git_add,
      .online,
      .demo_name,
      .lianjie{
        .inb;
      }
      .github,
      .git_add,
      .online{
        .mr(10px);
      }

    }
    #github_left{
      top:27%;
    }
    #github_right{
      top:85%;
    }
  }
  @media screen and (max-width:500px) {
    #github_left,
    #github_right{
      .github,
      .git_add,
      .online,
      .demo_name,
      .lianjie {
         .b;
        line-height:15px;
        padding:0;
        margin:0;
      }
    }
  }
</style>
