<template>
  <div class="slide_one slide_children" id="particles-js">
    <div class="content_wrapper">
      <a class="self" href="https://github.com/15826954460">
        <div class="img_wrapper">
          <img :src="self" alt="" class="box-shadow" :class="{img_loading:loadingImg}">
        </div>
        <p class="author" :class="{author_loading:loadingAuthor}">{{$t('slideOne.title')}}</p>
      </a>
      <div class="apperception_wrapper"
           :class="{apperception_wrapper_loading: loadingApperception}">
        <p class="apperception" v-for="item in $t('slideOne.remarks')">{{item}}</p>
      </div>
      <ul class="base_info">
        <li class="base_info_one base_common" :class="{loadBaseOne:baseCommon}">
          {{$t('slideOne.base_info_one.tel')}}：{{$t('slideOne.base_info_one.tel_num')}}
        </li>
        <li class="base_info_two base_common" :class="{loadBaseTwo:baseCommon}">{{$t('slideOne.base_info_two.email')}}：{{$t('slideOne.base_info_two.email_num')}}</li>
        <li class="base_info_three base_common" :class="{loadBaseThree:baseCommon}">
          {{$t('slideOne.base_info_three.experience')}}：{{$t('slideOne.base_info_three.age')}}
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
//  import '../../static/part/particles.min'
  import {part} from '../../static/part/part'
  import {mapGetters} from 'vuex'
  export default {
    props: ['activeitem'],
    data () {
      return {
        self: require('../assets/image/self.jpg')
      }
    },
    computed: {
      ...mapGetters(['loadingImg', 'loadingAuthor', 'loadingApperception', 'baseCommon'])
    },
    mounted () {
      this.$nextTick(() => {
        this.loadImg()
        this.loadAuthor()
        this.loadApperception()
        this.loadBaseCommon()
        part()
      })
    },
    methods: {
      // 页面加载1秒后加载显示文字
      loadImg () {
        setTimeout(() => {
          this.$store.commit('setLoadingImg', true)
        }, 1000)
      },
      // 页面加载1.5秒后加载显示作者名字
      loadAuthor () {
        setTimeout(() => {
          this.$store.commit('setLoadingAuthor', true)
        }, 1500)
      },
      // 页面加载1.5秒后加载显示寄语
      loadApperception () {
        setTimeout(() => {
          this.$store.commit('setLoadingApperception', true)
        }, 1500)
      },
      // 页面加载3秒后加载个人基本信息
      loadBaseCommon () {
        setTimeout(() => {
          this.$store.commit('setLaseCommon', true)
        }, 3000)
      }
    },
    watch: { // 每次进入当前页就加载动画，同时改变其他页面的状态
      activeitem: function () {
        if (this.activeitem === 0) {
          this.loadImg()
          this.loadAuthor()
          this.loadApperception()
          this.loadBaseCommon()
          this.$store.commit('setLoadingItem', false)
          this.$store.commit('setLoadingAbout', false)
          this.$store.commit('setLoading', false)
          this.$store.commit('setLoadingText', false)
          this.$store.commit('setBounced', false)
          this.$store.commit('setLoadingBtn', false)
        }
      }
    }
  }
</script>
<style lang="less" scoped>
  @import '../commonstyle/comment';

  .slide_one {
    width: 100vw;
    height: 100vh;
    background:#000;
    .rel;
    z-index:10;
    .content_wrapper {
      .rel;
      width: 50%;
      height: 100vh;
      margin: 0 auto;
      .self {
        .b;
        .tc;
        .mb(30px);
        .pt(.8rem);
        .img_wrapper{
          width: 1.2rem;
          margin: 0 auto;
          img {
            width: 1.2rem;
            height: 1.2rem;
            transform: scale(0);
            .b-r(50%);
            .mb(10px);
            opacity: 0;
            .transition(1s);
            &:hover {
              .cur;
              box-shadow: 0 0 20px #FFFE0A;
              -webkit-box-shadow: 0 0 20px #FFFE0A;
              -moz-box-shadow: 0 0 20px #FFFE0A;
              -o-box-shadow: 0 0 20px #FFFE0A;
            }
          }
          .img_loading {
            transform: scale(1);
            opacity: 1;
          }
        }
        .author {
          font-family: font2;
          .f14;
          color: @fff;
          opacity: 0;
          .transition(1s);
        }
        .author_loading {
          opacity: 1;
        }
      }
      .apperception_wrapper {
        .abs;
        .pc;
        width: 100%;
        opacity: 0;
        transition: all 1s ease-in-out;
        animation: bounce 1s ease-in-out 1.5s;
      }
      .apperception_wrapper_loading {
        opacity: 1;
      }
      .apperception,
      .base_info {
        font-size: 14px;
        color: @fff;
        line-height: 20px;
        .tc;
      }
      .base_common {
        opacity: 0;
      }
      .base_info_one {
        transform: translateX(-100px);
        transition: transform 1s linear;
      }
      .base_info_three {
        transform: translateX(100px);
        transition: transform 1s linear;
      }
      .base_info_two {
        .transition(1s);
      }
      .loadBaseOne,
      .loadBaseTwo,
      .loadBaseThree {
        opacity: 1
      }
      .loadBaseOne,
      .loadBaseThree {
        transform: translateX(0);
      }
      .base_info {
        .abs;
        bottom: 70px;
        left: 50%;
        .trsx(-50%);
        .inb;
        text-align: left;
      }
    }
  }

  @media screen and (max-width: 650px) {
    .slide_one .content_wrapper .apperception {
      text-align: left;
      display: inline;
      line-height: 30px;
    }

    .slide_one .content_wrapper .self {
      .pt(100px);
      .mb(60px);
    }

    .slide_one .content_wrapper {
      width: 90%;
    }

    .slide_one .content_wrapper .base_info {
      bottom: 100px;
      width: 70%;
    }
  }

  @media screen and (min-width: 1440px) {
    .slide_one .content_wrapper .self {
      .pt(150px);
      .mb(60px);
    }

    .slide_one .content_wrapper .base_info {
      bottom: 200px;
      width: 70%;
      .pl(20%);
    }
  }

  @keyframes bounce {
    0% {
      top: 70%;
      opacity: 0;
    }
    30% {
      top: 40%;
      opacity: 1;
    }
    80% {
      top: 55%;
      opacity: 1;
    }
    100% {
      top: 50%;
      opacity: 1;
    }
  }
</style>
