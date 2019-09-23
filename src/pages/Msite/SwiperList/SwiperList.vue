<template>
  <div class="swiperListContainer">
    <ul class="swiperList">
      <li class="swiperLi"
          v-for="(item,index) in homeNav"
          :key="index">
        <img :src="item.picUrl"
             alt="">
        <span>{{item.text}}</span>
      </li>
    </ul>
  </div>
</template>
<script>
import { mapState } from 'vuex';
export default {
  computed: {
    ...mapState({
      homeNav: state => state.home.homeNav
    })
  },
}
</script>

<style lang='stylus' rel='stylesheet/stylus'>
.swiperListContainer
  .swiperList
    width 100%
    height 341px
    padding-bottom 32px
    display flex
    flex-wrap wrap
    background-color #fff
    .swiperLi
      width 110px
      height 156px
      margin 10px 19px 9px
      >img
        width 110px
        height 110px
      >span
        width 110px
        text-align center
        display inline-block
        margin-top 10px
        color #333
        font-size 24px
</style>
 