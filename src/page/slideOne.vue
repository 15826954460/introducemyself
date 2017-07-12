<template>
  <div class="slide_one slide_children" :style="{backgroundImage:'url(' + bg + ')'}">
  </div>
</template>
<script>
  export default {
    data () {
      return {
        bg: require('../assets/image/bg-1.png'),
        bg1: require('../assets/image/financeicon1.png'),
        bg2: require('../assets/image/financeicon2.png'),
        bg3: require('../assets/image/financeicon3.png'),
        bg4: require('../assets/image/financeicon4.png'),
        bg5: require('../assets/image/financeicon1.png'),
        bg6: require('../assets/image/financeicon2.png'),
        bg7: require('../assets/image/financeicon3.png'),
        bg8: require('../assets/image/financeicon4.png')
      }
    }
  }
</script>
<style lang="less" scoped>
  @import '../commonstyle/comment';

  .slide_one {
    .rel;
  }

  .img_wrapper {
    .pc;
    width: 500px;
    height: 500px;
    font-size: 0;
    .bd(red);
    img {
      width: 150px;
      .pc;
    }
  }

</style>
