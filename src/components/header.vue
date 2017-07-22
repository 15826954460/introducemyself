<template>
  <div class="header">
    <div class="taiji_wrapper" @click="iconshow = !iconshow">
      <div class="taiji">
        <div class="white">
          <div class="inner">
            <i class="doct"></i>
          </div>
        </div>
        <div class="black">
          <div class="inner">
            <i class="doct"></i>
          </div>
        </div>
      </div>
      <img :src="house" class="house icon_common"
           :class="{show_house: iconshow, icon_show : iconshow}" @click.stop="toConnect(0)">
      <img :src="work" class="work icon_common"
           :class="{show_work: iconshow, icon_show : iconshow}"  @click.stop="toConnect(2)">
      <img :src="self" class="self icon_common"
           :class="{show_self: iconshow, icon_show : iconshow}" @click.stop="toConnect(1)">
      <img :src="skills" class="work icon_common"
           :class="{show_github: iconshow, icon_show : iconshow}"  @click.stop="toConnect(3)">
      <img :src="tel" class="work icon_common"
           :class="{show_tel: iconshow, icon_show : iconshow}" @click.stop="toConnect(4)">
    </div>
    <p class="language_wrapper">
      <span class="language" v-for="(item, index) in language"
            :class="{margin: index === 0, active : index === defaultLanguage}"
            @click="chooseLanguage(index)">{{item}}</span>
    </p>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        house: require('../assets/image/house.svg'),
        self: require('../assets/image/self.svg'),
        work: require('../assets/image/work.svg'),
        skills: require('../assets/image/skills.svg'),
        tel: require('../assets/image/tel.svg'),
        language: ['CN', 'EN'], // 两种语言
        defaultLanguage: 0, // 默认选择中文
        iconshow: false  // 默认隐藏图标
      }
    },
    methods: {
      // 选择语言
      chooseLanguage (index) {
        this.defaultLanguage = index
      },
      // 监听负组件的事件，跳转到当前页面
      toConnect (index) {
        this.$emit('listenParent', index)
      }
    }
  }
</script>
<style lang="less" scoped>
  @import '../commonstyle/comment';

  .taiji_wrapper {
    position: fixed;
    font-size: 0;
    top: .4rem;
    left: .4rem;
    z-index: 100;
    height: .8rem;
    width: .8rem;
    .taiji {
      .rel;
      width: 100%;
      height: 100%;
      -moz-animation: run-inner 3s infinite linear;
      -o-animation: run-inner 3s infinite linear;
      -webkit-animation: run-inner 3s infinite linear;
      animation: run-inner 3s infinite linear;
      .white, .black {
        width: .8rem;
        height: .4rem;
        position: relative;
      }
      .white {
        border-bottom: 0;
        border-radius: .4rem .4rem 0 0;
        background: #fff;
      }
      .black {
        border-top: 0;
        border-radius: 0 0 .4rem .4rem;
        background: #000;
      }
      .inner {
        width: .4rem;
        height: .4rem;
        position: absolute;
        border-radius: 50%;
        z-index: 10;
      }
      .white .inner {
        background: #000;
        right: 0;
        top: 50%;
      }
      .black .inner {
        background: #fff;
        left: 0;
        bottom: 50%;
      }
      .doct {
        .inb;
        width: .1rem;
        height: .1rem;
        .abs;
        .pc;
        .b-r(50%);
      }
      .white .doct {
        background: #fff;
      }
      .black .doct {
        background: #000;
      }
    }
    .icon_common {
      .pc;
      z-index:-10;
      width: .3rem;
      height: .3rem;
      opacity: 0;
      .transition(.3s);
    }
    .icon_show {
      opacity: 1;
      z-index:100;
    }
    .show_house {
      top:0;
      left:1.3rem;
    }
    .show_work {
      top:.9rem;
      left:.95rem;
    }
    .show_self {
      top:.45rem;
      left:1.2rem;
    }
    .show_github{
      top:1.2rem;
      left:.5rem;
    }
    .show_tel{
      top:1.3rem;
      left:0;
    }
  }

  @-moz-keyframes run-inner {
    0% {
      transform: rotate(0deg)
    }
    100% {
      transform: rotate(-360deg)
    }
  }
  @-o-keyframes run-inner {
    0% {
      transform: rotate(0deg)
    }
    100% {
      transform: rotate(-360deg)
    }
  }
  @-webkit-keyframes run-inner {
    0% {
      transform: rotate(0deg)
    }
    100% {
      transform: rotate(-360deg)
    }
  }
  @-ms-keyframes run-inner {
    0% {
      transform: rotate(0deg)
    }
    100% {
      transform: rotate(-360deg)
    }
  }
  @keyframes run-inner {
    0% {
      transform: rotate(0deg)
    }
    100% {
      transform: rotate(-360deg)
    }
  }
  .language_wrapper {
    .fix;
    z-index: 100;
    top: .4rem;
    right: .6rem;
    font-size: 0;
    .language {
      color: @fff;
      font-family: HeroicCondensed;
      font-size: .4rem;
      .transition(.2s);
      &:hover {
        .cur;
        color: @yellow;
      }
    }
    .margin {
      .mr(.4rem);
    }
    .active {
      color: @yellow;
    }
  }
</style>
