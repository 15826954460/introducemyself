<template>
  <div class="slide_four slide_children" :style="{backgroundImage: 'url(' + skillbg + ')'}">
    <div class="skill_wrapper">
      <header class="title">{{$t('slideFour.title')}}</header>
      <ul class="skills_list">
        <li class="skills_list_item">
          <div class="canvas_wrapper">
            <canvas class="canvas"></canvas>
            <span class="percentage">00</span>
          </div>
          <p class="skill_type">Javascript</p>
        </li>
        <li class="skills_list_item">
          <div class="canvas_wrapper">
            <canvas class="canvas"></canvas>
            <span class="percentage">00</span>
          </div>
          <p class="skill_type">Less/Stylus</p>
        </li>
        <li class="skills_list_item">
          <div class="canvas_wrapper">
            <canvas class="canvas"></canvas>
            <span class="percentage">00</span>
          </div>
          <p class="skill_type">vue.js/angularJs</p>
        </li>
        <li class="skills_list_item">
          <div class="canvas_wrapper">
            <canvas class="canvas"></canvas>
            <span class="percentage">00</span>
          </div>
          <p class="skill_type">HTML5/CSS3</p>
        </li>
        <li class="skills_list_item">
          <div class="canvas_wrapper">
            <canvas class="canvas"></canvas>
            <span class="percentage">00</span>
          </div>
          <p class="skill_type">WebApp</p>
        </li>
        <li class="skills_list_item">
          <div class="canvas_wrapper">
            <canvas class="canvas"></canvas>
            <span class="percentage">00</span>
          </div>
          <p class="skill_type">Jquery</p>
        </li>
        <li class="skills_list_item">
          <div class="canvas_wrapper">
            <canvas class="canvas"></canvas>
            <span class="percentage">00</span>
          </div>
          <p class="skill_type">webpack/git/glup</p>
        </li>
        <li class="skills_list_item">
          <div class="canvas_wrapper">
            <canvas class="canvas"></canvas>
            <span class="percentage">00</span>
          </div>
          <p class="skill_type">jquery</p>
        </li>
      </ul>
      <div class="big_circle">
        <p class="html position"><span class="skill_name">HTML5</span></p>
        <p class="css position"><span class="skill_name">CSS3</span></p>
        <p class="javascript position"><span class="skill_name">JavaScript</span></p>
        <p class="jquery position"><span class="skill_name">jQuery</span></p>
        <p class="bootstrap position"><span class="skill_name">Bootstrap</span></p>
        <p class="vue position"><span class="skill_name">Vue</span></p>
        <p class="angular position"><span class="skill_name">AngularJs</span></p>
        <p class="webapp position"><span class="skill_name">WebApp</span></p>
        <div class="small_circle">
          <p class="gulp position"><span class="skill_name">gulp</span></p>
          <p class="git position"><span class="skill_name">git</span></p>
          <p class="less position"><span class="skill_name">less</span></p>
          <p class="webpack position"><span class="skill_name">webpack</span></p>
        </div>
      </div>
    </div>
    <p class="logic text_common" :class="{loadingLogic:loadingText}">{{$t('slideFour.logic')}}</p>
    <p class="prepare text_common" :class="{loadingPrepare:loadingText}">{{$t('slideFour.prepare')}}</p>
    <p class="study text_common" :class="{loadingStudy:loadingText}">{{$t('slideFour.study')}}</p>
  </div>
</template>
<script>
  import {mapGetters} from 'vuex'
  export default {
    props: ['activeitem'],
    data () {
      return {
        skillbg: require('../assets/image/skillbg.jpg')
      }
    },
    computed: {
      ...mapGetters(['loadingText'])
    },
    mounted () {
      this.canvas()
      this.loadingLogic()
    },
    methods: {
      canvas () { // 绘制canvas
        let width = window.getComputedStyle(document.querySelector('.canvas_wrapper')).width
        let height = window.getComputedStyle(document.querySelector('.canvas_wrapper')).height
        let x = parseInt(width) / 2
        let y = parseInt(height) / 2
        let canvas = document.querySelectorAll('.canvas')
        for (let i = 0; i < canvas.length; i++) {
          canvas[i].width = parseInt(width)
          canvas[i].height = parseInt(height)
          let ctx = canvas[i].getContext('2d')
          ctx.beginPath()
          ctx.lineWidth = 6
          let r = ctx.lineWidth / 2
          ctx.arc(x, y, x - r, 0, 2 * Math.PI)
          ctx.strokeStyle = '#000'
          ctx.stroke()
          ctx.closePath()
          this.num(ctx)
        }
      },
      num (ctx) { // 绘制进度条
        let span = document.querySelectorAll('.percentage')
        let x = parseInt(window.getComputedStyle(document.querySelector('.canvas_wrapper')).width) / 2
        let y = parseInt(window.getComputedStyle(document.querySelector('.canvas_wrapper')).height) / 2
        let n = 1.5
        let timer = setInterval(function () {
          ctx.beginPath()
          ctx.lineWidth = 6
          let r = ctx.lineWidth / 2
          n += 0.05
          ctx.arc(x, y, x - r, 1.5 * Math.PI, n * Math.PI)
          ctx.strokeStyle = '#fff'
          ctx.stroke()
          if (n >= 3.3) {
            clearInterval(timer)
          }
          for (let i = 0, l = 0; i < span.length; i++, l += 3) {
            let m = parseInt(((n - 1.5) / 2) * 100) - l
            let j = m <= 0 ? 0 : m
            span[i].innerHTML = j + '%'
          }
        }, 40)
      },
      loadingLogic () {
        setTimeout(() => {
          this.$store.commit('setLoadingText', true)
        }, 500)
      }
    },
    watch: { // 监听是否为当前页
      activeitem: function () {
        if (this.activeitem === 3) {
          this.canvas()
          this.$store.commit('setLoadingImg', false)
          this.$store.commit('setLoadingAuthor', false)
          this.$store.commit('setLoadingApperception', false)
          this.$store.commit('setLaseCommon', false)
          this.$store.commit('setLoadingItem', false)
          this.$store.commit('setLoadingAbout', false)
          this.$store.commit('setLoading', false)
          this.$store.commit('setBounced', false)
          this.loadingLogic()
        }
      }
    }
  }
</script>
<style lang="less" scoped>
  @import '../commonstyle/comment';

  .slide_four {
    background-repeat: no-repeat;
    background-size: 100% 100%;
    font-size: 0;
  }

  .skill_wrapper {
    width: 100%;
    height: 100%;
    font-size: 0;
    .title {
      font-size: 20px;
      color: @fff;
      transform-style: preserve-3d;
    }
  }

  .skills_list {
    .pc;
    top: 55%;
    width: 80%;
    height: 50%;
  }

  .skills_list_item {
    width: 25%;
    .mb(10px);
    display: inline-block;
    .canvas_wrapper {
      .rel;
      margin: 0 auto;
      .mb(10px);
      width: 2rem;
      height: 2rem;
      .b;
      .mb(.15rem);
      .percentage {
        .abs;
        .pc;
        font-size: .2rem;
        color: @fff;
      }
    }
    .skill_type {
      color: @fff;
      font-size: 14px;
      .tc;
    }
  }

  .big_circle {
    .pc;
    top: 45%;
    width: 300px;
    height: 300px;
    border: 2px dotted @fff;
    transform-style: preserve-3d;
    perspective: 3000px;
    animation: biground 10s linear infinite;
    .b-r(50%);
    .position {
      .pc;
      width: 60px;
      height: 60px;
      .b-r(50%);
      .skill_name {
        .pc;
        .f12;
        color: @fff;
      }
    }
    .html {
      left: 0;
      background: rgba(58, 155, 255, .3);
    }
    .css {
      top: 15%;
      left: 14%;
      background: rgba(70, 166, 185, .3);
    }
    .javascript {
      top: 0;
      background: rgba(127, 167, 116, .4);
    }
    .jquery {
      top: 15%;
      left: 86%;
      background: rgba(224, 237, 108, .3);
    }
    .bootstrap {
      left: 100%;
      background: rgba(127, 121, 116, .3);
    }
    .vue {
      top: 85%;
      left: 86%;
      background: rgba(58, 155, 255, .5);
    }
    .angular {
      top: 100%;
      background: rgba(59, 57, 111, 1);
    }
    .webapp {
      top: 85%;
      left: 14%;
      background: rgba(5, 162, 170, .3);
    }
    .small_circle {
      .pc;
      width: 150px;
      height: 150px;
      border: 1px dotted @fff;
      perspective: 3000px;
      animation: smallround 5s linear infinite;
      .b-r(50%);
      .gulp {
        left: 0;
        background: rgba(224, 21, 72, .3);
      }
      .git {
        top: 0;
        background: rgba(90, 240, 41, .3);
      }
      .less {
        left: 100%;
        background: rgba(137, 5, 5, .2);
      }
      .webpack {
        top: 100%;
        background: rgba(206, 98, 0, .3);
      }
    }
  }

  .text_common {
    .abs;
    width: 100%;
    .f14;
    .tc;
    color: @fff;
    line-height: 20px;
    opacity:0;
    .transition(.5s);
  }

  .logic {
    bottom: 16%;
  }

  .prepare {
    bottom: 12%;
  }

  .study {
    bottom: 8%;
  }

  .loadingLogic,
  .loadingPrepare,
  .loadingStudy {
    opacity: 1;
  }

  @media screen and (min-width: 750px) and(max-width: 1440px) {
    .skills_list_item .canvas_wrapper {
      width: 1.2rem;
      height: 1.2rem;
      .mb(.05rem);
    }
  }

  @media screen and (min-width: 750px) {
    .skills_list {
      display: block;
    }

    .big_circle {
      display: none;
    }
  }

  @media screen and (max-width: 749px) {
    .skills_list {
      display: none;
    }

    .big_circle {
      display: inline-block;
    }
  }

  @media screen and (max-width: 749px) and (min-width: 500px) {
    .skill_img_wrapper {
      width: 40%;
    }

    .type_img_list {
      display: inline-block;
    }
  }

  @keyframes bigcircle {
    0% {
      left: 0;
      top: 50%;
    }
    12.5% {
      top: 15%;
      left: 14%;
    }
    25% {
      top: 0;
      left: 50%;
    }
    37.5% {
      top: 15%;
      left: 86%;
    }
    50% {
      top: 50%;
      left: 100%;
    }
    62.5% {
      top: 86%;
      left: 86%;
    }
    75% {
      top: 100%;
      left: 50%;
    }
    87.5% {
      top: 85%;
      left: 14%;
    }
    100% {
      top: 50%;
      left: 0%;
    }

  }

  @keyframes biground {
    0% {
      transform: translate(-50%, -50%) rotateZ(0deg);
    }
    100% {
      transform: translate(-50%, -50%) rotateZ(360deg);
    }
  }

  @keyframes smallround {
    0% {
      transform: translate(-50%, -50%) rotateZ(0deg);
    }
    100% {
      transform: translate(-50%, -50%) rotateZ(-360deg);
    }
  }

</style>
