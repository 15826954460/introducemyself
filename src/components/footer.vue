<template>
  <div class="footer_wrapper">
    <img :src="topicon" class="topicon"
         :class="{show:activeitem > 0 }"
         @click="sentToParent()">
  </div>
</template>
<script>
  export default {
    props: ['activeitem'],
    data () {
      return {
        topicon: require('../assets/image/top.svg')
      }
    },
    methods: {
      sentToParent () { // 监听父组件并传值
        this.$emit('changeActiveitem', 0)
      }
    }
  }
</script>
<style lang="less" scoped>
  .footer_wrapper {
    font-size:0;
    position: fixed;
    bottom: 10px;
    left: 50%;
    -moz-transform: translateX(-50%);
    -webkit-transform: translateX(-50%);
    -o-transform: translateX(-50%);
    transform: translateX(-50%);
    z-index: 100;
    .topicon {
      width:.3rem;
      color: #000;
      opacity: 0;
      -webkit-transition: opacity linear .3s;
      -moz-transition: opacity linear .3s;
      -o-transition: opacity linear .3s;
      transition: opacity linear .3s;
      &:hover {
        cursor: pointer;
      }
    }
    .show {
      opacity: 1
    }
  }
</style>
