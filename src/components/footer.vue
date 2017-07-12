<template>
  <div class="footer_wrapper">
    <i class="fa fa-arrow-circle-up"
       :class="{show:activeitem > 0 }"
       @click="sentToParent(index)"></i>
  </div>
</template>
<script>
  export default {
    props: ['activeitem'],
    methods: {
      sentToParent (index) { // 监听父组件并传值
        this.$emit('changeActiveitem', 0)
      }
    }
  }
</script>
<style lang="less" scoped>
  .footer_wrapper {
    position: fixed;
    bottom: 20px;
    left: 50%;
    -moz-transform: translateX(-50%);
    -webkit-transform: translateX(-50%);
    -o-transform: translateX(-50%);
    transform: translateX(-50%);
    z-index: 100;
    .fa-arrow-circle-up {
      font-size: 32px;
      color: #4D4DFA;
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
