<template>
  <div class="slide_three slide_children" :style="{backgroundImage:'url(' + slideTwoBg + ')'}">
    <div class="work_wrapper">
      <header class="title">{{$t('slideThree.title')}}</header>
      <div class="work_img_box">
        <div class="work_img_wrapper">
          <a class="img_wrapper img_common"
             :class="{img1: index === 0, img2: index ===1, img3: index ===2, img4: index ===3, img5: index ===4, img6: index ===5, img7: index ===6, img8: index ===7}"
             v-for="(item, index) in type" @click="judge(item, index)">
            <img :src="img1" v-show="index === 0">
            <img :src="img1" v-show="index === 1">
            <img :src="img1" v-show="index === 2">
            <img :src="img1" v-show="index === 3">
            <img :src="img1" v-show="index === 4">
            <img :src="img1" v-show="index === 5">
            <img :src="img1" v-show="index === 6">
            <img :src="img1" v-show="index === 7">
            <img :src="img1" v-show="index === 8">
            <div class="mark">
              <img :src="clickIcon" class="clickIcon">
            </div>
          </a>
          <!--<a class="img_wrapper img_common img2" @click="judge">-->
          <!--<img :src="img1">-->
          <!--<div class="mark">-->
          <!--<img :src="clickIcon" class="clickIcon">-->
          <!--</div>-->
          <!--</a>-->
          <!--<a class="img_wrapper img_common img3" @click="judge">-->
          <!--<img :src="img1">-->
          <!--<div class="mark">-->
          <!--<img :src="clickIcon" class="clickIcon">-->
          <!--</div>-->
          <!--</a>-->
          <!--<a class="img_wrapper img_common img4" @click="judge">-->
          <!--<img :src="img1">-->
          <!--<div class="mark">-->
          <!--<img :src="clickIcon" class="clickIcon">-->
          <!--</div>-->
          <!--</a>-->
          <!--<a class="img_wrapper img_common img5" @click="judge">-->
          <!--<img :src="img1">-->
          <!--<div class="mark">-->
          <!--<img :src="clickIcon" class="clickIcon">-->
          <!--</div>-->
          <!--</a>-->
          <!--<a class="img_wrapper img_common img6" @click="judge">-->
          <!--<img :src="img1">-->
          <!--<div class="mark">-->
          <!--<img :src="clickIcon" class="clickIcon">-->
          <!--</div>-->
          <!--</a>-->
          <!--<a class="img_wrapper img_common img7" @click="judge">-->
          <!--<img :src="img1">-->
          <!--<div class="mark">-->
          <!--<img :src="clickIcon" class="clickIcon">-->
          <!--</div>-->
          <!--</a>-->
          <!--<a class="img_wrapper img_common img8" @click="judge">-->
          <!--<img :src="img1">-->
          <!--<div class="mark">-->
          <!--<img :src="clickIcon" class="clickIcon">-->
          <!--</div>-->
          <!--</a>-->
        </div>
      </div>
      <div class="github_left" id="github_left">
        <header class="github">{{$t('slideThree.githubLeft.demo')}}：</header>
        <p class="demo_name">{{$t('slideThree.githubLeft.demoName')}}</p><br>
        <span class="git_add">{{$t('slideThree.githubLeft.github')}}：</span>
        <a href="https://github.com/15826954460/vue2.0-nodejs"
           class="lianjie">{{$t('slideThree.githubLeft.githubAddress')}}</a><br>
        <span class="online">{{$t('slideThree.githubLeft.online')}}：</span>
        <a href="http://demonodejs.applinzi.com" class="lianjie">{{$t('slideThree.githubLeft.onlineAddress')}}</a>
      </div>
      <div class="github_right" id="github_right">
        <header class="github">{{$t('slideThree.githubRight.demo')}}：</header>
        <p class="demo_name">{{$t('slideThree.githubRight.demoName')}}</p><br>
        <p class="git_add">{{$t('slideThree.githubRight.github')}}：</p>
        <a href="https://github.com/15826954460/elmProject" class="lianjie">{{$t('slideThree.githubRight.githubAddress')}}</a><br>
        <p class="online">{{$t('slideThree.githubRight.online')}}：</p>
        <a href="http://demoelmwebapp.applinzi.com" class="lianjie">{{$t('slideThree.githubRight.onlineAddress')}}</a>
      </div>
      <transition name="slide">
        <div class="product_wrapper" v-show="bounced">
          <div class="bounce_info_wrapper">
            <p class="bounce_info">{{$t('slideThree.bouncedInfo')}}</p>
            <a class="dynamic" href=""></a>
            <i class="close fa fa-remove" @click="closeBounced"></i>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>
<script>
  import {mapGetters} from 'vuex'
  export default {
    props: ['activeitem'],
    data () {
      return {
        slideTwoBg: require('../assets/image/03.jpg'),
        img1: require('../assets/image/gamespic1.png'),
        clickIcon: require('../assets/image/click.svg'),
        isShowProjectDetail: false,
        bounce: false,
        type: [
          {'url': 'http://pi-group.biz', 'type': 'pc'},
          {'url': 'http://demonodejs.applinzi.com', 'type': 'app'},
          {'url': 'http://demoelmwebapp.applinzi.com', 'type': 'app'},
          {'url': 'http://demoelmwebapp.applinzi.com', 'type': 'pc'},
          {'url': 'http://demoelmwebapp.applinzi.com', 'type': 'pc'},
          {'url': 'http://demoelmwebapp.applinzi.com', 'type': 'pc'},
          {'url': 'http://pi-group.biz', 'type': 'pc'},
          {'url': 'http://pi-group.biz', 'type': 'pc'}
        ]
      }
    },
    computed: {
      ...mapGetters(['bounced'])
    },
    methods: {
      judge (item, index) { // 如果是pc端项目没有做适配就建议用户pc端查看
        let as = document.querySelectorAll('.img_wrapper')
        if (item.type === 'pc') {
          this.$store.commit('setBounced', true)
          document.querySelector('.dynamic').innerHTML = this.type[index].url
          document.querySelector('.dynamic').href = this.type[index].url
        } else {
          as[index].href = this.type[index].url
        }
      },
      closeBounced () {
        this.$store.commit('setBounced', false)
      }
    },
    watch: { // 每次进入当前页就加载动画，同时改变其他页面的状态
      activeitem: function () {
        if (this.activeitem === 2) {
          this.$store.commit('setLoadingImg', false)
          this.$store.commit('setLoadingAuthor', false)
          this.$store.commit('setLoadingApperception', false)
          this.$store.commit('setLaseCommon', false)
          this.$store.commit('setLoadingItem', false)
          this.$store.commit('setLoadingAbout', false)
          this.$store.commit('setLoading', false)
          this.$store.commit('setLoadingText', false)
          this.$store.commit('setLoadingBtn', false)
        }
      }
    }
  }
</script>
<style lang="less" scoped>
  @import '../commonstyle/comment';

  .work_wrapper {
    width: 100%;
    height: 100%;
    .rel;
    .title {
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
        .abs;
        width: 100%;
        height: 100%;
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
      left: 2%;
    }
    .github_right {
      right: 2%;
    }
    .github_left,
    .github_right {
      .abs;
      z-index: 10;
      top: 27%;
      font-size: 0;
      color: @fff;
      width: 250px;
      word-break: break-all;
      line-height: 25px;
      transform-style: preserve-3d;
      .github {
        font-size: 14px;
      }
      .demo_name {
        font-size: 14px;
        color: rgba(255, 255, 255, .6);
      }
      .git_add,
      .online {
        font-size: 14px;
        color: @fff;
        line-height: 20px;
      }
      .lianjie {
        .b;
        font-size: 14px;
        word-break: break-all;
        line-height: 20px;
        .transition(.3s);
        color: #8BC6FA;
        &:hover {
          .cur;
          text-decoration: underline;
          color: #0A67F0;
        }
      }
    }
  }

  .product_wrapper {
    .abs;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 100;
    background: rgba(0, 0, 0, .8);
    .bounce_info_wrapper {
      border: 1px solid #fff;
      width: 280px;
      height: 100px;
      background: rgba(0, 0, 0, .5);
      .pc;
      .b-r(5px);
      .bounce_info {
        .pc;
        top:40%;
        width: 100%;
        font-size: 14px;
        color: @fff;
        line-height: 30px;
        .tc;
      }
      .dynamic{
        .pc;
        top:60%;
        font-size:12px;
        color:@fff;
        .transition(.3s);
        &:hover{
          color:#3A9AFF;
          text-decoration: underline;
        }
      }
      .fa-remove {
        .abs;
        right: -6px;
        top: -8px;
        z-index: 100;
        font-size: 20px;
        color: #fff;
      }
    }
  }

  @media screen and(max-width: 1024px) {
    .work_wrapper .work_img_box .work_img_wrapper .img_wrapper .mark {
      height: 100%;
    }

    .work_wrapper .work_img_box {
      width: 1.8rem;
      height: 1.2rem;
    }
  }

  @media screen and (min-width: 912px) and (max-width: 1024px) {
    #github_left,
    #github_right {
      top: 20%;
      .github {
        font-size: 14px;
        .mb();
      }
      .demo_name {
        font-size: 14px;
        .mb();
      }
      .lianjie {
        font-size: 14px;
      }
    }
  }

  @media screen and (max-width: 650px) {
    #github_right,
    #github_left {
      .pc;
      .tc;
      width: 100%;
      line-height: 6px;
      .github,
      .git_add,
      .online,
      .demo_name,
      .lianjie {
        .inb;
        font-size: 12px;
      }
      .github,
      .git_add,
      .online {
        .mr(10px);
      }

    }

    #github_left {
      top: 27%;
    }

    #github_right {
      top: 85%;
    }
  }

  @media screen and (max-width: 500px) {
    #github_left,
    #github_right {
      .github,
      .git_add,
      .online,
      .demo_name,
      .lianjie {
        .b;
        line-height: 15px;
        padding: 0;
        margin: 0;
      }
    }
  }

  .slide-enter-active {
    animation: slide-in .5s linear;
  }

  @keyframes slide-in {
    0% {
      opacity: 0;
      transform: translateX(25px);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }
</style>
