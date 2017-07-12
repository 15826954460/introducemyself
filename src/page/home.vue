<template>
  <div class="index">
    <swiper :options="swiperOption" ref="homeSwiper">
      <!-- 幻灯内容 -->
      <swiper-slide>
        <slideOne></slideOne>
      </swiper-slide>
      <swiper-slide>
        <slideTwo></slideTwo>
      </swiper-slide>
      <swiper-slide>
        <slideThree></slideThree>
      </swiper-slide>
      <swiper-slide>
        <slideFour></slideFour>
      </swiper-slide>
      <swiper-slide>
        <slideFive></slideFive>
      </swiper-slide>
    </swiper>
    <guideline :activeitem="swiperOption.activeitem" :pageNum="pageNum"
               @changeActiveitem="goToNegativeDuideLine"></guideline>
    <vheader></vheader>
    <vfooter :activeitem="swiperOption.activeitem" @changeActiveitem="goToNegativeDuideLine"></vfooter>
  </div>
</template>

<script>
  import {swiper, swiperSlide} from 'vue-awesome-swiper'
  import slideOne from './slideOne.vue'
  import slideTwo from './slideTwo.vue'
  import slideThree from './slideThree.vue'
  import slideFour from './slideFour.vue'
  import slideFive from './slideFive.vue'
  import vheader from '../components/header.vue'
  import vfooter from '../components/footer.vue'
  import guideline from '../components/guideline.vue'
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
          }
        },
        pageNum: 5
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
      guideline
    },
    computed: {
      swiper () { // 定义这个swiper对象
        return this.$refs.homeSwiper.swiper  // 获取swper对象
      }
    },
    mounted () {  // 这边就可以使用swiper这个对象去使用swiper官网中的那些方法
      this.swiper.slideTo(0, 1000, false)  // 默认显示第一页
    },
    methods: {
      goToNegativeDuideLine (index) { // 通过点击跳转到相应的页面
        this.swiperOption.activeitem = index
        this.swiper.slideTo(this.swiperOption.activeitem, 1000, false)
      }
    }
  }
</script>

<style lang="less">
  .index {
    width: 100%;
    height: 100%;
  }

  /* 这是插件里面自带的class */
  .swiper-container,
  .swiper-wrapper,
  .swiper-slide {
    width: 100%;
    height: 100%;

  }
</style>
