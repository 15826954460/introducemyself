<template>
  <div class="slide_four slide_children" :style="{backgroundImage: 'url(' + skillbg + ')'}">
    <div class="skill_wrapper">
      <header class="title">My Skills</header>
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
      <ul class="skill_img_wrapper">
        <li class="type_img_list" v-for="(item, index) in skillIcon">
          <div class="img_wrapper">
            <img :src="item.icon" class="item_icon">
            <p class="item_name">{{item.name}}</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  export default {
    props: ['activeitem'],
    data () {
      return {
        skillbg: require('../assets/image/skillbg.jpg')
      }
    },
    mounted () {
      this.canvas()
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
          ctx.lineWidth = 10
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
          ctx.lineWidth = 10
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
      }
    },
    watch: { // 监听是否为当前页
      activeitem: function () {
        if (this.activeitem === 3) this.canvas()
      }
    }
  }
</script>
<style lang="less" scoped>
  @import '../commonstyle/comment';

  .slide_four {
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }

  .skill_wrapper {
    .title{
      font-size:20px;
      clor:@fff;
    }
    width: 100%;
    height: 100%;
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
    .type_img_list{
      display:none;
    }
  }
  @media screen and (max-width: 749px) {
    .skills_list {
      display: none;
    }
    .type_img_list{
      display:inline-block;
    }
  }
  @media screen and (max-width: 749px) and (min-width:500px) {
    .skill_img_wrapper{
      width:40%;
    }
    .type_img_list{
      display:inline-block;
    }
  }
</style>
