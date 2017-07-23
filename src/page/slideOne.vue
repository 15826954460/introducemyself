<template>
  <div class="slide_one slide_children">
    <div class="content_wrapper">
      <a class="self" href="https://github.com/15826954460">
        <img :src="self" alt="" class="box-shadow" :class="{img_loading:loadingImg}">
        <p class="author" :class="{author_loading:loadingAuthor}">柏松</p>
      </a>
      <div class="apperception_wrapper" :class="{apperception_wrapper_loading: loadingApperception}">
        <p class="apperception">曾经渴望的是气贯长虹的洒脱，笑傲江湖的豪迈。</p>
        <p class="apperception">然而一颗心抵不过时间的浸泡，沉淀成静而绵软。</p>
        <p class="apperception">行走在星光洒满的路上，任一阵阵凉风吹拂，一切淡而远</p>
      </div>
      <ul class="base_info">
        <li class="base_info_one base_common" :class="{loadBaseOne:baseCommon}">电话：15826954460</li>
        <li class="base_info_two base_common" :class="{loadBaseTwo:baseCommon}">邮箱：624793604@qq.com</li>
        <li class="base_info_three base_common" :class="{loadBaseThree:baseCommon}">工作经验：3年</li>
      </ul>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        slideOneBg: require('../assets/image/slideOneBg.jpg'),
        self: require('../assets/image/self.jpg'),
        loadingImg: false,  // 是否显示内容
        loadingAuthor: false,
        loadingApperception: false,
        baseCommon: false
      }
    },
    mounted () {
      this.loadImg()
      this.loadAuthor()
      this.loadApperception()
      this.loadBaseCommon()
    },
    methods: {
      // 页面加载8秒后加载显示文字
      loadImg () {
        setTimeout(() => {
          this.loadingImg = true
        }, 1000)
      },
      loadAuthor () {
        setTimeout(() => {
          this.loadingAuthor = true
        }, 1500)
      },
      loadApperception () {
        setTimeout(() => {
          this.loadingApperception = true
        }, 1500)
      },
      loadBaseCommon () {
        setTimeout(() => {
          this.baseCommon = true
        }, 3000)
      }
    }
  }
</script>
<style lang="less" scoped>
  @import '../commonstyle/comment';
  .slide_one {
    width: 100vw;
    height: 100vh;
    background: #80A69C;
    .content_wrapper {
      .rel;
      width: 50%;
      height:100vh;
      margin: 0 auto;
      .self {
        .b;
        width:1.2rem;
        margin:0 auto;
        .pt(.8rem);
        .mb(30px);
        .tc;
        img{
          width: 1.2rem;
          height:1.2rem;
          transform:scale(0);
          .b-r(50%);
          .mb(10px);
          opacity:0;
          .transition(1s);
          &:hover{
             .cur;
             box-shadow:0 0 20px #FFFE0A;
             -webkit-box-shadow:0 0 20px #FFFE0A;
             -moz-box-shadow:0 0 20px #FFFE0A;
             -o-box-shadow:0 0 20px #FFFE0A;
           }
        }
        .img_loading{
          transform:scale(1);
          opacity:1;
        }
        .author{
          font-family:font2 ;
          .f14;
          color:@fff;
          opacity:0;
          .transition(1s);
        }
        .author_loading{
          opacity:1;
        }
      }
      .apperception_wrapper{
        .abs;
        .pc;
        width:100%;
        opacity:0;
        transition:all 1s ease-in-out;
        animation:bounce 1s ease-in-out 1.5s;
      }
      .apperception_wrapper_loading{
        opacity:1;
      }
      .apperception,
      .base_info{
        font-size:14px;
        color:@fff;
        line-height:20px;
        .tc;
      }
      .base_common{
        opacity:0;
      }
      .base_info_one{
        transform:translateX(-50px);
        transition:transform 1s linear;
      }
      .base_info_three{
         transform:translateX(50px);
         transition:transform 1s linear;
       }
      .base_info_two{
        .transition(1s);
      }
      .loadBaseOne,
      .loadBaseTwo,
      .loadBaseThree{
        opacity:1
      }
      .loadBaseOne,
      .loadBaseThree{
        transform:translateX(0);
      }
      .base_info{
        .abs;
        border:1px solid red;
        bottom:70px;
        left:50%;
        .trsx(-50%);
        .inb;
        text-align: left;
      }
    }
  }
  @media screen and (max-width:650px) {
    .slide_one .content_wrapper .apperception{
      text-align:left;
      display:inline;
      line-height:30px;
    }
    .slide_one .content_wrapper .self{
      .pt(100px);
      .mb(60px);
    }
    .slide_one .content_wrapper{
     width:90%;
    }
    .slide_one .content_wrapper .base_info{
       bottom:100px;
       width:70%;
    }
  }
  @media screen and (min-width:1440px) {
    .slide_one .content_wrapper .self{
    .pt(150px);
    .mb(60px);
    }
    .slide_one .content_wrapper .base_info{
      bottom:200px;
      width:70%;
      .pl(20%);
    }
  }
  @keyframes bounce {
    0%{
      top:70%;
      opacity:0;
    }
    30%{
      top:40%;
      opacity:1;
    }
    80%{
      top:55%;
      opacity:1;
    }
    100%{
      top:50%;
      opacity:1;
    }
  }
</style>
