<template>
  <div class="msiteContainer">
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

    <ul class="textUl">
      <li class="textLi">
        <img src="https://yanxuan.nosdn.127.net/a03dd909803b9ac032eba58b7253a2f6.png"
             alt="">
        <span>网易自营品牌</span>
      </li>
      <li class="textLi">
        <img src="https://yanxuan.nosdn.127.net/2d0402ffcd52b3ec3b07422681c42a89.png"
             alt="">
        <span>30天无忧退货</span>
      </li>
      <li class="textLi">
        <img src="https://yanxuan.nosdn.127.net/eb61ee48e8942dbd1784c9ee75ebe955.png"
             alt="">
        <span>48小时快速退款</span>
      </li>
    </ul>
    <div class="swiperListContainer">
      <ul class="swiperList">
        <li class="swiperLi">
          <img src="https://yanxuan.nosdn.127.net/37520d1204a0c55474021b43dac2a69e.png"
               alt="">
          <span>新品首发</span>
        </li>
        <li class="swiperLi">
          <img src="https://yanxuan.nosdn.127.net/37520d1204a0c55474021b43dac2a69e.png"
               alt="">
          <span>居家生活</span>
        </li>
        <li class="swiperLi">
          <img src="https://yanxuan.nosdn.127.net/37520d1204a0c55474021b43dac2a69e.png"
               alt="">
          <span>服饰鞋包</span>
        </li>
        <li class="swiperLi">
          <img src="https://yanxuan.nosdn.127.net/37520d1204a0c55474021b43dac2a69e.png"
               alt="">
          <span>美食酒水</span>
        </li>
        <li class="swiperLi">
          <img src="https://yanxuan.nosdn.127.net/37520d1204a0c55474021b43dac2a69e.png"
               alt="">
          <span>个护清洁</span>
        </li>
        <li class="swiperLi">
          <img src="https://yanxuan.nosdn.127.net/37520d1204a0c55474021b43dac2a69e.png"
               alt="">
          <span>母婴亲子</span>
        </li>
        <li class="swiperLi">
          <img src="https://yanxuan.nosdn.127.net/37520d1204a0c55474021b43dac2a69e.png"
               alt="">
          <span>运动旅行</span>
        </li>
        <li class="swiperLi">
          <img src="https://yanxuan.nosdn.127.net/37520d1204a0c55474021b43dac2a69e.png"
               alt="">
          <span>数码家电</span>
        </li>
        <li class="swiperLi">
          <img src="https://yanxuan.nosdn.127.net/37520d1204a0c55474021b43dac2a69e.png"
               alt="">
          <span>全球特色</span>
        </li>
        <li class="swiperLi">
          <img src="https://yanxuan.nosdn.127.net/37520d1204a0c55474021b43dac2a69e.png"
               alt="">
          <span>好货抄底</span>
        </li>
      </ul>
    </div>
    <div class="newPerson">
      <div class="newTitle">
        <span>新人专享礼</span>
      </div>
      <div class="newContent">
        <div class="left">
          <div>新人专享礼包</div>
          <img src="https://yanxuan.nosdn.127.net/ba4d635ec94ad95b28bfab6500900659.png"
               alt="">
        </div>
        <div class="rightTop">
          <div class="span1">福利社</div>
          <div class="span2">今日特价</div>
          <img src="https://yanxuan-item.nosdn.127.net/1f526aa1c16110f9fda9f8759103a35a.png?imageView&thumbnail=200x200&quality=75"
               alt="">
        </div>
        <div class="rightBottom">
          <div class="span1">新人拼团</div>
          <div class="span2">1元起包邮</div>
          <img src="https://yanxuan-item.nosdn.127.net/58b7b4a5277dddbfd9b99b07f38b6c20.png?imageView&thumbnail=200x200&quality=75"
               alt="">
        </div>
      </div>
    </div>
    <div class="moudleList">
      <div class="title">
        <div class="left">品牌制造商直供</div>
        <div class="right">更多 ></div>
      </div>
    </div>
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
      });
    })
  },
}
</script>

<style lang='stylus' rel='stylesheet/stylus'>
.msiteContainer
  width 100%
  padding-top 150px
  background-color #eee
  .textUl
    width 100%
    height 72px
    padding 0 30px
    box-sizing border-box
    display flex
    flex-flow row nowrap
    align-items center
    background-color #fff
    .textLi
      width 228px
      height 36px
      display flex
      align-items center
      justify-content center
      >img
        width 35px
        height 35px
      >span
        margin-left 8px
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
        margin 10px 20px 9px
        >img
          width 110px
          height 110px
        >span
          display inline-block
          margin-top 10px
          color #333
          font-size 24px
  .newPerson
    width 100%
    height 558px
    margin 20px 0
    padding 0 0 30px
    box-sizing border-box
    background-color #fff
    .newTitle
      width 100%
      height 90px
      padding 0 30px
      box-sizing border-box
      text-align center
      line-height 90px
      >span
        font-size 32px
        position relative
        &::after
          content ''
          display block
          width 24px
          height 3px
          background-color #333
          position absolute
          right -38px
          top 18px
        &::before
          content ''
          display block
          width 24px
          height 3px
          background-color #333
          position absolute
          left -40px
          top 22px
    .newContent
      width 100%
      height 438px
      padding-left 30px
      display flex
      flex-wrap wrap
      position relative
      .left
        width 343px
        height 434px
        background-color #f9e9cf
        margin-right 4px
        position relative
        >div
          width 343px
          height 78px
          color #333
          font-size 32px
          padding 30px 0 0 30px
          box-sizing border-box
        >img
          width 258px
          height 257px
          position absolute
          top 115px
          left 50%
          margin-left -129px
      .rightTop
        width 343px
        height 215px
        background-color #f9e9cf
        margin 0 4px 4px 0
        padding 20px 0 0 30px
        box-sizing border-box
        position relative
        .span1
          color #333
          font-size 32px
        .span2
          color #7f7f7f
          font-size 24px
          margin-top 10px
        >img
          width 200px
          height 200px
          position absolute
          right 0
          bottom 0
      .rightBottom
        position absolute
        right 56px
        bottom 0
        width 343px
        height 215px
        margin 0 4px 4px 0
        padding 20px 0 0 30px
        box-sizing border-box
        background-color #f9e9cf
        .span1
          color #333
          font-size 32px
        .span2
          color #ffffff
          font-size 22px
          background-color #cbb693
          padding 0 10px
          margin-top 10px
          width 105px
          height 32px
          text-align center
          line-height 32px
          border-radius 5px
        >img
          width 200px
          height 200px
          position absolute
          right 0
          bottom 0
</style>
<style>
.swiper-pagination-bullet {
  width: 30px;
  height: 10px;
  background-color: deepskyblue;
  border-radius: 0;
}
</style>