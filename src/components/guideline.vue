<template>
  <div>
    <ul class="aside_list">
      <li class="aside_item"
          v-for="(item, index) in pageNum"
          @click="sentToParent(index)">
        <i :class="{'active' : index === activeitem}"></i>
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    props: ['pageNum', 'activeitem'],
    data () {
      return {}
    },
    methods: {
      sentToParent (index) {
        this.$emit('changeActiveitem', index)
      }
    }
  }
</script>
<style lang="less" scoped>
  @import '../commonstyle/comment';
  .aside_list {
    .fix;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    -moz-transform: translateY(-50%);
    -o-transform: translateY(-50%);
    -webkit-transform: translateY(-50%);
    z-index: 100;
    .aside_item {
      .rel;
      height: 20px;
      width: .3rem;
      &:hover {
        .cur;
      }
      &:hover i {
        width: 0.66rem;
      }
      i {
        .abs;
        bottom: 0;
        right: 0;
        width: 100%;
        height: 1px;
        border-bottom: 1px solid @fff;
        transition: width linear .2s;
      }
      .active {
        width: 0.66rem;
      }
    }
  }
</style>
