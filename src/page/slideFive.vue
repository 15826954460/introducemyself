<template>
  <div class="slide_five slide_children" :style="{backgroundImage: 'url(' + contactbg + ')'}">
    <div class="slide_five_content">
      <p class="thanks">首先请允许我对你说声感谢！！！</p>
      <p class="time">感谢您百忙之中抽出事件来阅读我的简历，感谢幸运之神的眷顾。</p>
      <p class="luck">如果有幸获得贵公司的面试机会，我将感激不尽，见字如面，也是一份缘，希望可以成为贵公司的一员，与公共同成长进步，即便没有机会，我也在这里祝愿贵公司鹏程万里......</p>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        contactbg: require('../assets/image/finance_bg.jpg')
      }
    },
    mounted () {
      this.autotype()
    },
    methods: {
      autotype () {
        let div = document.querySelector('.slide_five_content')
        let str = div.innerHTML // 获取内容
        let index = 0
        div.innerHTML = '' // 清空内容
        let timer = setInterval(function () {
          let current = str.substr(index, 1) // 选取第一个标签的左尖括号
          if (current === '<') { // 碰到标签直接整个进行截取
            index = str.indexOf('>', index) + 1
          } else {
            index++
          }
          div.innerHTML = str.substring(0, index) + '_'
          if (index >= str.length) {
            clearInterval(timer)
            div.innerHTML = str
          }
        }, 100)
      }
    }
  }
</script>
<style lang="less" scoped>
  @import '../commonstyle/comment';
  .slide_five {
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }
  .slide_five_content {
    .pc;
    z-index: 10;
    width:100%;
    >p {
      width:80%;
      margin:0 auto;
      font-size: .16rem;
      line-height:.4rem;
      color: #fff;
    }
  }
</style>
