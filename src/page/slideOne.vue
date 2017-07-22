<template>
  <div class="slide_one slide_children"
       :style="{backgroundImage:'url(' + slideOneBg + ')'}">
    <div class="content_wrapper">
      <header class="header common" :class="{loadheader: loadingHeader}">My name's Aram</header>
      <p class="remarks common" :class="{loadremarks: loadingHeader}">寄语：曾经渴望的是气贯长虹的洒脱，笑傲江湖的豪迈。然而一颗心抵不过时间的浸泡，沉淀成静而绵软。行走在星光洒满的路上，任一阵阵凉风吹拂，一切淡而远</p>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        slideOneBg: require('../assets/image/slideOneBg.jpg'),
        loadingHeader: false  // 是否显示内容
      }
    },
    mounted () {
      this.loading()
    },
    methods: {
      // 页面加载8秒后加载显示文字
      loading () {
        setTimeout(() => {
          this.loadingHeader = true
        }, 800)
      }
    }
  }
</script>
<style lang="less" scoped>
  @import '../commonstyle/comment';
  .slide_one {
    .content_wrapper {
      .abs;
      top: 30%;
      left: 15%;
      width: 70%;
      overflow: hidden;
      .common {
        color: @fff;
        opacity: 0;
        .transition(1s);
      }
      .header {
        font-family: HeroicCondensed;
        font-size: 1rem;
        transform: translateX(-20%);
      }
      .loadheader {
        transform: translateX(0);
        opacity: 1;
      }
      .remarks {
        font-family: MicrosoftYaHeiLight;
        font-size: .3rem;
        width: 70%;
        line-height: .5rem;
        transform: translateY(100%);
      }
      .loadremarks {
        transform: translateY(0);
        opacity: 1;
      }
    }
  }
</style>
