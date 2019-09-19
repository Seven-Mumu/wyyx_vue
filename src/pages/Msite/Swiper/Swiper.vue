<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        <img src="https://yanxuan.nosdn.127.net/1eba77c8f34e1498b83cabca593f3a3f.jpg?imageView&quality=75&thumbnail=750x0"
             alt="">
      </div>
      <div class="swiper-slide">
        <img src="https://yanxuan.nosdn.127.net/ccfde8af22184921682d049b00b34be2.jpg?imageView&quality=75&thumbnail=750x0"
             alt="">
      </div>
      <div class="swiper-slide">
        <img src="https://yanxuan.nosdn.127.net/e03c9b74a854d4c31c77720dc1e8433a.jpg?imageView&quality=75&thumbnail=750x0"
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
export default {
  mounted () {
    this.$nextTick(() => {
      new Swiper(".swiper-container", {
        loop: true, // 循环模式选项
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
        },
        bulletClass: 'my-bullet',//需设置.my-bullet样式
      })
    })

  }
}
</script>

<style lang='stylus' rel='stylesheet/stylus'></style>
<style>
.swiper-pagination-bullet {
  width: 30px;
  height: 10px;
  background-color: deepskyblue;
  border-radius: 0;
}
</style>
 