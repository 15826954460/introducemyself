<template>
  <div class="header">
    <div class="taiji_wrapper"
         :class="{taiji_active: loading}"
         @click="iconshow = !iconshow">
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
    <p class="language_wrapper" :class="{language_active: loading}">
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
        iconshow: false,  // 默认隐藏图标
        loading: false // 默认隐藏页面
      }
    },
    mounted () {
      this.load()
    },
    methods: {
      // 选择语言
      chooseLanguage (index) {
        this.defaultLanguage = index
      },
      // 监听负组件的事件，跳转到当前页面
      toConnect (index) {
        this.$emit('listenParent', index)
      },
      load () {
        setTimeout(() => {
          this.loading = true
        }, 1000)
      }
    }
  }
</script>
<style lang="less" scoped>
  @import '../commonstyle/comment';
  .taiji_wrapper {
    position: fixed;
    font-size: 0;
    top: 20px;
    left: 0;
    z-index: 100;
    height: 40px;
    width: 40px;
    opacity:0;
    .transition(.5s);
    .taiji {
      .rel;
      width: 100%;
      height: 100%;
      &:hover{
        .cur;
       }
      -moz-animation: run-inner 3s infinite linear;
      -o-animation: run-inner 3s infinite linear;
      -webkit-animation: run-inner 3s infinite linear;
      animation: run-inner 3s infinite linear;
      .white, .black {
        width: 40px;
        height: 20px;
        position: relative;
      }
      .white {
        border-bottom: 0;
        border-radius: 20px 20px 0 0;
        background: #fff;
      }
      .black {
        border-top: 0;
        border-radius: 0 0 20px 20px;
        background: #000;
      }
      .inner {
        width: 20px;
        height:20px;
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
        width: 5px;
        height:5px;
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
      width: 20px;
      height: 20px;
      opacity: 0;
      .transition(.3s);
      &:hover{
        .cur;
       }
    }
    .icon_show {
      opacity: 1;
      z-index:100;
    }
    .show_house {
      top:0;
      left:65px;
    }
    .show_work {
      top:45px;
      left:47.5px;
    }
    .show_self {
      top:22.5px;
      left:60px;
    }
    .show_github{
      top:60px;
      left:25px;
    }
    .show_tel{
      top:65px;
      left:0;
    }
  }
  .taiji_active{
    left:20px;
    opacity:1;
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
    top: 30px;
    right: 20px;
    font-size: 0;
    opacity:0;
    .transition(1s);
    .language {
      color: @fff;
      font-family: font1;
      font-size: 20px;
      .transition(.2s);
      &:hover {
        .cur;
        color: @yellow;
      }
    }
    .margin {
      .mr(20px);
    }
    .active {
      color: @yellow;
    }
  }
  .language_active{
    right: 40px;
    opacity:1;
  }
</style>
