<template>
  <div class="categoryContainer">
    <div class="searchSpan">
      <div class="search">
        <span class="searchImg"></span>
        搜索商品，共22717款好物
      </div>
    </div>
    <div class="wrap">
      <!-- 左侧菜单列表 -->
      <ul class="categoryList">
        <li class="active">推荐专区</li>
        <li>换季专区</li>
        <li>爆品专区</li>
        <li>新品专区</li>
        <li>居家生活</li>
        <li>服饰鞋包</li>
        <li>美食酒水</li>
        <li>个护清洁</li>
        <li>母婴亲子</li>
        <li>运动旅行</li>
        <li>数码家电</li>
        <li>全球特色</li>
      </ul>
      <!-- 右侧商品列表 -->
      <div class="list">
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
        </div>
        <ul class="listAll">
          <li>
            <img src="https://yanxuan.nosdn.127.net/71a5f1a0299e278f8193c193d8b7d1e4.png?imageView&quality=85&thumbnail=144x144"
                 alt="">
            <span>明星商品</span>
          </li>
          <li>
            <img src="https://yanxuan.nosdn.127.net/71a5f1a0299e278f8193c193d8b7d1e4.png?imageView&quality=85&thumbnail=144x144"
                 alt="">
            <span>精选美食99选6</span>
          </li>
          <li>
            <img src="https://yanxuan.nosdn.127.net/71a5f1a0299e278f8193c193d8b7d1e4.png?imageView&quality=85&thumbnail=144x144"
                 alt="">
            <span>男装季末特惠</span>
          </li>
          <li>
            <img src="https://yanxuan.nosdn.127.net/71a5f1a0299e278f8193c193d8b7d1e4.png?imageView&quality=85&thumbnail=144x144"
                 alt="">
            <span>员工精选好货</span>
          </li>
          <li>
            <img src="https://yanxuan.nosdn.127.net/71a5f1a0299e278f8193c193d8b7d1e4.png?imageView&quality=85&thumbnail=144x144"
                 alt="">
            <span>家装好物推荐</span>
          </li>
          <li>
            <img src="https://yanxuan.nosdn.127.net/71a5f1a0299e278f8193c193d8b7d1e4.png?imageView&quality=85&thumbnail=144x144"
                 alt="">
            <span>999+好评</span>
          </li>
        </ul>
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
        autoplay: true
      })
    })
  }
}
</script>

<style lang='stylus' rel='stylesheet/stylus'>
.categoryContainer
  .searchSpan
    height 88px
    padding 0 30px
    background-color #fff
    position fixed
    top 0
    left 0
    display flex
    align-items center
    position relative
    &:after
      content ''
      display block
      height 1px
      width 100%
      background-color #d9d9d9
      position absolute
      bottom 0
      left 0
    .search
      width 690px
      height 56px
      line-height 56px
      background-color #ededed
      border-radius 10px
      text-align center
      font-size 28px
      color #666
      .searchImg
        width 28px
        height 28px
        // margin-right 10px
        display inline-block
        background-image url('http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-553dba3aff.png')
        background-repeat no-repeat
  .wrap
    position relative
    .categoryList
      width 162px
      height 1120px
      padding 40px 0
      li
        margin-top 40px
        width 100%
        height 49px
        text-align center
        line-height 49px
        font-size 28px
        &.active
          border-left 4px solid #ab2b2b
          color #ab2b2b
        &:first-child
          margin-top 0
    .list
      height 100%
      padding 30px 30px 21px
      width 588px
      box-sizing border-box
      position absolute
      top 0
      right 0
      .swiper-wrapper
        width 528px
        height 192px
        img
          width 100%
          height 100%
    .listAll
      display flex
      flex-wrap wrap
      >li
        width 144px
        height 216px
        margin-right 30px
        display flex
        flex-direction column
        justify-content center
        align-items center
        &:nth-child(3n+3)
          margin-right 0
        span
          height 0.96rem
          font-size 0.32rem
          color #333
          text-align center
          line-height 0.48rem
          display -webkit-box
          -webkit-line-clamp 2
          -webkit-box-orient vertical
          overflow hidden
          text-overflow ellipsis
</style>
 