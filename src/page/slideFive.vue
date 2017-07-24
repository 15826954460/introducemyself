<template>
  <div class="slide_five slide_children" :style="{backgroundImage: 'url(' + contactbg + ')'}">
    <div class="contact_box">
      <p class="tel">联系电话：<br>15826954460</p>
      <p class="email">电子邮箱：<br>624793604@qq.com</p>
    </div>
    <div class="slide_five_content">
      <p>首先请允许我对你说声感谢！！！</p>
      <p>感谢您百忙之中抽出事件来阅读我的简历，感谢幸运之神的眷顾。</p>
      <p>如果有幸获得贵公司的面试机会，我将感激不尽，见字如面，也是一份缘，希望可以成为贵公司的一员，与公共同成长进步，即便没有机会，我也在这里祝愿贵公司鹏程万里......</p>
    </div>
  </div>
</template>
<script>
  export default {
    props: ['activeitem'],
    data () {
      return {
        contactbg: require('../assets/image/finance_bg.jpg')
      }
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
    },
    watch: { // 监听是否为当前页
      activeitem: function () {
        if (this.activeitem === 4) this.autotype()
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
  .contact_box {
    .abs;
    top:15%;
    left:5%;
    z-index:10;
    .tel,
    .email{
      font-size:.2rem;
      color:@fff;
      line-height:.4rem;
    }
  }
  .slide_five_content {
    .pc;
    z-index: 10;
    width:100%;
    >p {
      width:80%;
      margin:0 auto;
      font-size: .34rem;
      line-height:.5rem;
      color: #fff;
    }
  }
</style>
