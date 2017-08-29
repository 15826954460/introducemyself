<template>
  <div class="heart_wrapper">
    <div class="love_wrapper">
      <p class="word_wrapper">
        <span class="word">如</span>
        <span class="word">果</span>
        <span class="word">每</span>
        <span class="word">个</span>
        <span class="word">人</span>
        <span class="word">一</span>
        <span class="word">生</span>
        <span class="word">只</span>
        <span class="word">会</span>
        <span class="word">遇</span>
        <span class="word">到</span>
        <span class="word">一</span>
        <span class="word">颗</span>
        <span class="word">流</span>
        <span class="word">星</span>
        <span class="word">，</span>
        <span class="word">那</span>
        <span class="word">么</span>
        <span class="word">和</span>
        <span class="word">你</span>
        <span class="word">在</span>
        <span class="word">一</span>
        <span class="word">起</span>
        <span class="word">就</span>
        <span class="word">是</span>
        <span class="word">我</span>
        <span class="word">惟</span>
        <span class="word">一</span>
        <span class="word">的</span>
        <span class="word">愿</span>
        <span class="word">望</span>
        <span class="word">！</span>
      </p>
      <div class="btn_wrapper">
        <a id="audio" class="btn" @click="changeplay" :class="{loadingBtn:loadingBtn}">关闭背景音乐</a>
      </div>
      <audio id="music" autoplay="autoplay" loop="loop" preload="auto" src="./static/audio/My_Love.mp3">
      </audio>
    </div>
    <canvas id="heart"></canvas>
  </div>
</template>
<script>
  import {mapGetters} from 'vuex'
  import $ from 'jquery'
  import {heart} from '../../static/part/heart'
  export default {
    props: ['activeitem'],
    data () {
      return {}
    },
    computed: {
      ...mapGetters(['loadingBtn'])
    },
    mounted () {
      this.animate()
      this.btnanimation()
      heart()
    },
    methods: {
      animate () { // 文字动画
        $('.word').each(function () {
          $(this).css({
            position: 'relative',
            top: '-200px',
            opacity: 0
          })
          let wait = Math.floor((Math.random() * 3000) + 1)
          $(this).delay(wait).animate({
            top: '0px',
            opacity: 1
          }, 2000, function () {
            $(this).delay(wait).animate({
              top: '50px',
              opacity: 0
            }, 1000, function () {
              $(this).delay(wait).animate({
                top: '0px',
                opacity: 1
              }, 500)
            })
          })
        })
      },
      btnanimation () { // 页面加载就执行文字动画
        setTimeout(() => {
          this.$store.commit('setLoadingBtn', true)
        }, 1000)
      },
      changeplay () { // 关闭/播放背景音乐
        let music = document.getElementById('music')
        if (music.paused) {
          music.play()
          $('#audio').html('关闭背景音乐')
        } else {
          music.pause()
          $('#audio').html('播放背景音乐')
        }
      }
    },
    watch: { // 每次进入当前页就加载动画，同时改变其他页面的状态
      activeitem: function () {
        if (this.activeitem === 5) {
          this.$store.commit('setLoadingImg', false)
          this.$store.commit('setLoadingAuthor', false)
          this.$store.commit('setLoadingApperception', false)
          this.$store.commit('setLaseCommon', false)
          this.$store.commit('setLoadingItem', false)
          this.$store.commit('setLoadingAbout', false)
          this.$store.commit('setLoading', false)
          this.$store.commit('setLoadingText', false)
          this.$store.commit('setBounced', false)
          this.animate()
          heart()
          this.btnanimation()
        }
      }
    }
  }
</script>
<style lang="less" scoped>
  .heart_wrapper {
    width: 100%;
    height: 100%;
    position:relative;
  }

  .love_wrapper {
    position: absolute;
    top: 50%;
    left: 50%;
    padding: 0 20px;
    transform: translate(-50%, -50%);
    min-height: 3rem;
    margin: 0 auto;
    z-index: 10;
  }

  .mobile {
    width: 100%;
  }

  .word_wrapper {
    font-size: .3rem;
    color: #f75fe0;
    text-align: center;
  }

  .btn_wrapper {
    position: absolute;
    bottom: 0;
    right: 20px;
  }

  .btn {
    float: right;
    position: relative;
    margin-right: 10px;
    background: #f75fe0;
    color: #fff;
    border-radius: 5px;
    text-align: center;
    display: inline-block;
    cursor: pointer;
    padding: 5px;
    opacity: 0;
    left: -400px;
    -moz-transition:all 2s 1s ease-out;
    -o-transition:all 2s 1s ease-out;
    -webkit-transition:all 2s 1s ease-out;
    transition: all 2s 1s ease-out;
    &:hover {
      cursor: pointer;
    }
  }

  .loadingBtn {
    left: 0;
    opacity: 1
  }

  #bofang {
    margin-right: 10px;
  }

  @media screen and (max-width: 750px) {
    .love_wrapper {
      width: 100%;
    }
  }
</style>
