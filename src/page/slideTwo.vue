<template>
  <div class="slide_two slide_children" :style="{backgroundImage: 'url(' + bgImg + ')'}">
    <div class="wrapper">
      <header class="about_me" :class="{about_transition: loadingAbout}">
        {{$t('slideTwo.title')}}</header>
      <ul class="list">
        <li class="item transform0ne" :class="{loading_transform_one:loadingItem}">
          <div class="icon_wrapper">
            <img :src="graudation" alt="">
          </div>
          <p class="explain">{{$t('slideTwo.transform0ne.graduation')}}/{{$t('slideTwo.transform0ne.education')}}</p>
        </li>
        <li class="item transformTwo" :class="{loading_transform_two:loadingItem}">
          <div class="icon_wrapper">
            <img :src="address">
          </div>
          <p class="explain">{{$t('slideTwo.transformTwo.Stand')}}/{{$t('slideTwo.transformTwo.address')}}</p>
        </li>
        <li class="item transformThree" :class="{loading_transform_three:loadingItem}">
          <div class="icon_wrapper">
            <img :src="status" alt="">
          </div>
          <p class="explain">{{$t('slideTwo.transformThree.statue')}}/{{$t('slideTwo.transformThree.working')}}</p>
        </li>
        <li class="item transformFour" :class="{loading_transform_four:loadingItem}">
          <div class="icon_wrapper">
            <img :src="major" alt="">
          </div>
          <p class="explain">{{$t('slideTwo.transformFour.major')}}/{{$t('slideTwo.transformFour.automation')}}</p>
        </li>
      </ul>
      <p class="power" :class="{power_loading: Loading}">{{$t('slideTwo.power')}}</p>
      <p class="control" :class="{control_loading:Loading}">{{$t('slideTwo.control')}}</p>
    </div>
  </div>
</template>
<script>
  import {mapGetters} from 'vuex'
  export default {
    props: ['activeitem'],
    data () {
      return {
        bgImg: require('../assets/image/plane.png'),
        graudation: require('../assets/image/graudation.svg'),
        address: require('../assets/image/address.svg'),
        status: require('../assets/image/status.svg'),
        major: require('../assets/image/major.svg')
      }
    },
    computed: {
      ...mapGetters(['loadingItem', 'loadingAbout', 'Loading'])
    },
    mounted () {
      this.loadItem()
      this.loadAbout()
      this.commonLoading()
    },
    methods: {
      loadItem () {
        setTimeout(() => {
          this.$store.commit('setLoadingItem', true)
        }, 2000)
      },
      loadAbout () {
        setTimeout(() => {
          this.$store.commit('setLoadingAbout', true)
        }, 1000)
      },
      commonLoading () {
        setTimeout(() => {
          this.$store.commit('setLoading', true)
        }, 4000)
      }
    },
    watch: { // 每次进入当前页就加载动画，同时改变其他页面的状态
      activeitem: function () {
        if (this.activeitem === 1) {
          this.loadItem()
          this.loadAbout()
          this.commonLoading()
          this.$store.commit('setLoadingImg', false)
          this.$store.commit('setLoadingAuthor', false)
          this.$store.commit('setLoadingApperception', false)
          this.$store.commit('setLaseCommon', false)
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

  .slide_two {
    .rel;
    width: 100vw;
    height: 100vh;
    .pt(1rem);
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }

  .about_me {
    .tc;
    color: @fff;
    font-family: font1;
    font-size: 20px;
    .mb(40px);
    opacity: 0;
    transform: translateY(-100px);
    transition: all .5s linear;
  }

  .about_transition {
    transform: translateY(0);
    opacity: 1;
  }

  .list {
    margin: 0 auto;
    width: 300px;
    .mb(50px);
  }

  .item {
    float: left;
    .mb(10px);
    width: 50%;
    .tc;
    opacity: 0;
    transition: all .5s linear;
    .explain {
      width: 100%;
      .f14;
      color: @fff;
      .tc;
    }
  }

  .transform0ne {
    transform: translate(-200px, -150px);
  }

  .transformTwo {
    transform: translate(200px, -150px);
  }

  .transformThree {
    transform: translate(-200px, 150px);
  }

  .transformFour {
    transform: translate(200px, 150px);
  }

  .loading_transform_one {
    transform: translate(0, 0);
    opacity: 1;
  }

  .loading_transform_two {
    transform: translate(0, 0);
    opacity: 1;
  }

  .loading_transform_three {
    transform: translate(0, 0);
    opacity: 1;
  }

  .loading_transform_four {
    transform: translate(0, 0);
    opacity: 1;
  }

  .icon_wrapper {
    .inb;
    width: 1rem;
    height: 1rem;
    .b-r(50%);
    overflow: hidden;
    .mb(10px);
    img {
      width: 100%;
      height: 100%;
    }
  }

  .power,
  .control {
    .tc;
    .f14;
    color: @fff;
    line-height: 25px;
    opacity: 0;
    transition: all 1s ease;
  }

  .power {
    animation: powerload 1s 2.5s ease;
  }

  .control {
    animation: powerload 1s 3.5s ease;
  }

  .power_loading {
    opacity: 1;
  }

  .control_loading {
    opacity: 1;
  }

  @keyframes powerload {
    0% {
      opacity: 0;
      transform: translateX(-300px);
    }
    30% {
      opacity: 1;
      transform: translateX(50px);
    }
    60% {
      opacity: .8;
      transform: translateX(-50px);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @media screen and (max-width: 600px) {
    .slide_two {
      .pt(100px);
    }
  }

  @media screen and (min-width: 1440px) {
    .slide_two {
      .pt(200px);
    }
  }
</style>
