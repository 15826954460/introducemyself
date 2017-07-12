<template>
  <div class="header">
    <div class="taiji">
      <div class="white">
        <div class="inner">
          <i class="doct"></i>
        </div>
      </div>
      <div class="black">
        <div class="inner">
          <i class="doct"></i>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        selfPhoto: require('../assets/image/financeicon4.png')
      }
    }
  }
</script>
<style lang="less" scoped>
  @import '../commonstyle/comment';
  .taiji {
    position: fixed;
    top: .6rem;
    left: .6rem;
    z-index: 100;
    height: 1rem;
    width: 1rem;
    animation: run-inner 3s infinite linear;
  }

  @keyframes run-inner {
    0% {
      transform: rotate(0deg)
    }
    25% {
      transform: rotate(-90deg)
    }
    50% {
      transform: rotate(-180deg)
    }
    75% {
      transform: rotate(-270deg)
    }
    100% {
      transform: rotate(-360deg)
    }
  }

  .white, .black {
    width: 1rem;
    height: .5rem;
    position: relative;
  }

  .white {
    border-bottom: 0;
    border-radius: .5rem .5rem 0 0;
    background: #fff;
  }

  .black {
    border-top: 0;
    border-radius: 0 0 .5rem .5rem;
    background: #000;
  }

  .inner {
    width: .5rem;
    height: .5rem;
    position: absolute;
    border-radius: 50%;
    z-index: 10;
  }

  .white .inner {
    background: #000;
    right: 0;
    top: 50%;
  }

  .black .inner {
    background: #fff;
    left: 0;
    bottom: 50%;
  }

  .doct {
    .inb;
    width: .1rem;
    height: .1rem;
    .abs;
    .pc;
    .b-r(50%);
  }

  .white .doct {
    background: #fff;
  }

  .black .doct {
    background: #000;
  }
</style>
