<template>
  <div class="slide_Two slide_children" :style="{backgroundImage:'url(' + slideTwoBg + ')'}">
    <div class="work_wrapper">
      <header class="title">Experience in project</header>
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
    .work_img_box {
      .pc;
      width: 2.4rem;
      height: 1.6rem;
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
          height:0;
          overflow: hidden;
          z-index: 10;
          .transition(.3s);
          .clickIcon{
            .pc;
            width:.3rem;
            height:.3rem;
          }
        }
      }
      .img1 {
        -webkit-transform: rotateY(45deg) translateZ(3.2rem);
        -moz-transform: rotateY(45deg) translateZ(3.2rem);
        -ms-transform: rotateY(45deg) translateZ(3.2rem);
        -o-transform: rotateY(45deg) translateZ(3.2rem);
        transform: rotateY(45deg) translateZ(3.2rem);
      }
      .img2 {
        -webkit-transform: rotateY(90deg) translateZ(3.2rem);
        -moz-transform: rotateY(90deg) translateZ(3.2rem);
        -ms-transform: rotateY(90deg) translateZ(3.2rem);
        -o-transform: rotateY(90deg) translateZ(3.2rem);
        transform: rotateY(90deg) translateZ(3.2rem);
      }
      .img3 {
        -webkit-transform: rotateY(135deg) translateZ(3.2rem);
        -moz-transform: rotateY(135deg) translateZ(3.2rem);
        -ms-transform: rotateY(135deg) translateZ(3.2rem);
        -o-transform: rotateY(135deg) translateZ(3.2rem);
        transform: rotateY(135deg) translateZ(3.2rem);
      }
      .img4 {
        -webkit-transform: rotateY(180deg) translateZ(3.2rem);
        -moz-transform: rotateY(180deg) translateZ(3.2rem);
        -ms-transform: rotateY(180deg) translateZ(3.2rem);
        -o-transform: rotateY(180deg) translateZ(3.2rem);
        transform: rotateY(180deg) translateZ(3.2rem);
      }
      .img5 {
        -webkit-transform: rotateY(225deg) translateZ(3.2rem);
        -moz-transform: rotateY(225deg) translateZ(3.2rem);
        -ms-transform: rotateY(225deg) translateZ(3.2rem);
        -o-transform: rotateY(225deg) translateZ(3.2rem);
        transform: rotateY(225deg) translateZ(3.2rem);
      }
      .img6 {
        -webkit-transform: rotateY(270deg) translateZ(3.2rem);
        -moz-transform: rotateY(270deg) translateZ(3.2rem);
        -ms-transform: rotateY(270deg) translateZ(3.2rem);
        -o-transform: rotateY(270deg) translateZ(3.2rem);
        transform: rotateY(270deg) translateZ(3.2rem);
      }
      .img7 {
        -webkit-transform: rotateY(315deg) translateZ(3.2rem);
        -moz-transform: rotateY(315deg) translateZ(3.2rem);
        -ms-transform: rotateY(315deg) translateZ(3.2rem);
        -o-transform: rotateY(315deg) translateZ(3.2rem);
        transform: rotateY(315deg) translateZ(3.2rem);
      }
      .img8 {
        -webkit-transform: rotateY(360deg) translateZ(3.2rem);
        -moz-transform: rotateY(360deg) translateZ(3.2rem);
        -ms-transform: rotateY(360deg) translateZ(3.2rem);
        -o-transform: rotateY(360deg) translateZ(3.2rem);
        transform: rotateY(360deg) translateZ(3.2rem);
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

    .product_wrapper{
      .abs;
      width:100%;
      height:100%;
      background:rgba(0,0,0,.8);
      font-size:0;
    }
  }
</style>
