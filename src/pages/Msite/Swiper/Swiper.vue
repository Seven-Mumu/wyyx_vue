<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide"
           v-for="(swiper,index) in homeSwiperImg"
           :key="index">
        <img :src="swiper.picUrl"
             alt="">
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
  </div>
</template>
<script>
// 引入swiper包
import Swiper from "swiper"
import "swiper/dist/css/swiper.css"
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState({
      homeSwiperImg: state => state.home.homeSwiperImg
    })
  },
  async mounted () {
    await this.$store.dispatch('getHomeItem')
    this.$nextTick(() => {
      new Swiper(".swiper-container", {
        loop: true, // 循环模式选项
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
        },
        bulletClass: 'my-bullet',//需设置.my-bullet样式
        autoplay: true
      })
    })

  }
}
</script>

<style lang='stylus' rel='stylesheet/stylus'>
.swiper-wrapper
  width 100%
  height 370px
  .swiper-slide
    width 100%
    height 370px
    img
      width 100%
      height auto
</style>
<style>
.swiper-pagination-bullet {
  width: 30px;
  height: 10px;
  background-color: deepskyblue;
  border-radius: 0;
}
</style>
 