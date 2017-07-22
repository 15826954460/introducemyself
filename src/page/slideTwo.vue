<template>
  <div class="slide_two slide_children"
       :style="{backgroundImage:'url(' + slideTwoBg + ')'}">
    <div class="mark">
      <div class="introduce_contant">
        <header class="title">Introduce myself</header>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        slideTwoBg: require('../assets/image/02.jpg')
      }
    }
  }
</script>
<style lang="less" scoped>
  @import '../commonstyle/comment';
  .mark {
    width: 100%;
    height: 100%;
    background:rgba(255, 255, 255, 0.5);
  }
</style>
