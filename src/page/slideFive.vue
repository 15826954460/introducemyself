<template>
  <div class="slide_five slide_children" :style="{backgroundImage: 'url(' + contactbg + ')'}">
    <div class="slide_five_content">
      <p class="thanks">{{$t('slideFive.thanks')}}</p>
      <p class="time">{{$t('slideFive.time')}}</p>
      <p class="luck">{{$t('slideFive.luck')}}</p>
    </div>
  </div>
</template>
<script>
  export default {
    props: ['activeitem'],
    data () {
      return {
        contactbg: require('../assets/image/finance_bg.jpg'),
        index: 0
      }
    },
    methods: {
      autotype () {
        let div = document.querySelector('.slide_five_content')
        let str = div.innerHTML // 获取内容
        let index = this.index
        div.innerHTML = '' // 清空内容
        if (index === 0) { // 只有index为0的时候才会加载改打字机效果
          let timer = setInterval(() => {
            let current = str.substr(index, 1) // 选取第一个标签的左尖括号
            if (current === '<') { // 碰到标签直接整个进行截取
              index = str.indexOf('>', index) + 1
            } else {
              index++
            }
            this.index = index
            div.innerHTML = str.substring(0, index) + '_'
            if (index >= str.length) {
              this.index = 0 // 每一次加载完成，重新将index清0，下一次进入的时候可以正常加载
              clearInterval(timer)
              div.innerHTML = str
            }
          }, 100)
        }
      }
    },
    watch: { // 每次进入当前页就加载动画，同时改变其他页面的状态
      activeitem: function () {
        if (this.activeitem === 4) {
          this.$store.commit('setLoadingImg', false)
          this.$store.commit('setLoadingAuthor', false)
          this.$store.commit('setLoadingApperception', false)
          this.$store.commit('setLaseCommon', false)
          this.$store.commit('setLoadingItem', false)
          this.$store.commit('setLoadingAbout', false)
          this.$store.commit('setLoading', false)
          this.$store.commit('setLoadingText', false)
          this.$store.commit('setBounced', false)
          this.$store.commit('setLoadingBtn', false)
          this.autotype()
        }
      }
    }
  }
</script>
<style lang="less" scoped>
  @import '../commonstyle/comment';
  .slide_five {
    background-size: 100% 100%;
    background-repeat: no-repeat;
    .rel;
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
