<template>
  <div id="index">
    <vheader @listenParent="goToNegativeDuideLine"></vheader>
    <swiper :options="swiperOption" ref="homeSwiper">
      <!-- 幻灯内容 -->
      <swiper-slide>
        <slideOne :activeitem="swiperOption.activeitem"></slideOne>
      </swiper-slide>
      <swiper-slide>
        <slideTwo :activeitem="swiperOption.activeitem"></slideTwo>
      </swiper-slide>
      <swiper-slide>
        <slideThree :activeitem="swiperOption.activeitem"></slideThree>
      </swiper-slide>
      <swiper-slide>
        <slideFour :activeitem="swiperOption.activeitem"></slideFour>
      </swiper-slide>
      <swiper-slide>
        <slideFive :activeitem="swiperOption.activeitem"></slideFive>
      </swiper-slide>
      <swiper-slide>
        <heart :activeitem="swiperOption.activeitem"></heart>
      </swiper-slide>
    </swiper>
    <guideline :activeitem="swiperOption.activeitem" :pageNum="pageNum"
               @changeActiveitem="goToNegativeDuideLine"></guideline>
    <vfooter :activeitem="swiperOption.activeitem" @changeActiveitem="goToNegativeDuideLine"></vfooter>
  </div>
</template>

<script>
  import {swiper, swiperSlide} from 'vue-awesome-swiper'
  import slideOne from './slideOne.vue'
  import slideThree from './slideThree.vue'
  import slideTwo from './slideTwo.vue'
  import slideFour from './slideFour.vue'
  import slideFive from './slideFive.vue'
  import vheader from '../components/header.vue'
  import vfooter from '../components/footer.vue'
  import guideline from '../components/guideline.vue'
  import heart from './slideSix.vue'
  export default{
    data () {
      return {
        swiperOption: {
          // 所有配置均为可选（同Swiper配置）
          activeitem: 0,
          notNextTick: true, // 是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
          direction: 'vertical',
          setWrapperSize: true,
          speed: 500,
          autoHeight: true,
          paginationClickable: true,
          mousewheelControl: true,
          observeParents: true,
          debugger: true,
          onTransitionStart (swiper) { //  //这个位置放swiper的回调方法
            this.activeitem = swiper.activeIndex
            window.localStorage.setItem('activeIndex', this.activeitem)
          }
        },
        pageNum: 6
      }
    },
    components: {
      swiper,
      swiperSlide,
      slideOne,
      slideTwo,
      slideThree,
      slideFour,
      slideFive,
      vheader,
      vfooter,
      guideline,
      heart
    },
    computed: {
      swiper () { // 定义这个swiper对象
        return this.$refs.homeSwiper.swiper  // 获取swper对象
      }
    },
    mounted () {  // 这边就可以使用swiper这个对象去使用swiper官网中的那些方法
      let [win, index] = [window.localStorage, null]
      // 用户刷新页面跳转到当前页（默认为第一页）
      if (win.getItem('activeIndex') === null) {
        index = 0
      } else {
        index = parseInt(win.getItem('activeIndex'))
      }
      this.swiperOption.activeitem = index
      this.swiper.slideTo(index, 1000, false)  // 默认显示第一页
    },
    methods: {
      goToNegativeDuideLine (index) { // 通过点击跳转到相应的页面
        this.swiperOption.activeitem = index
        this.swiper.slideTo(index, 1000, false)
        window.localStorage.setItem('activeIndex', index)
      }
    }
  }
</script>

<style lang="less">
  #index {
    width: 100vw;
    height: 100vh;
  }
  /* 这是插件里面自带的class */
  .swiper-container.swiper-container-vertical.swiper-container-autoheight,
  .swiper-wrapper,
  .swiper-slide {
    width: 100% !important;
    height: 100% !important;
  }
  .particles-js-canvas-el{
    position:absolute;
    z-index:-10;
    top:0;
    left:0;
  }
</style>
