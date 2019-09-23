<template>
  <div class="thingsContainer">
    <div class="headerContainer"
         style="z-index:1">
      <!-- header -->
      <HeaderPersonal>
        <div slot="title"
             class="titleContainer">
          <span class="find">发现</span>
          <span class="zhenxuanjia">甄选家</span>
        </div>
      </HeaderPersonal>
      <!-- nav -->
      <div class="thingsNav">
        <div style="width:1150px"
             class="thingsNavList">
          <span class="active">家装节</span>
          <span>推荐</span>
          <span>好货内部价</span>
          <span>回购榜</span>
          <span>晒单</span>
          <span>开发者日记</span>
          <span>达人</span>
          <span>HOME</span>
        </div>
      </div>
    </div>
    <div class="scrollContainer">
      <div style="padding-bottom:285px">
        <!-- 图片 -->
        <div class="thingsSwiper">
          <div class="first">
            <img src="https://yanxuan.nosdn.127.net/05c56c6c8a364dd8a928e19ec89e2729.jpeg"
                 alt="">
            <img src="https://yanxuan.nosdn.127.net/4cedf9351bba46c7ab513ef32f991eae.jpeg"
                 alt="">
            <img src="https://yanxuan.nosdn.127.net/bcab412a58aa4680bb5ea62dc378b8e6.jpg?imageView&thumbnail=750x0"
                 alt="">
          </div>
          <div class="second">
            <img src="https://yanxuan.nosdn.127.net/bed0ce2a994444789e85c14071b13c81.jpeg"
                 alt="">
          </div>

        </div>
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </div>
    </div>
  </div>
</template>
<script>
import Item from './Item/Item'
// 引入better-scroll
import BScroll from 'better-scroll'
export default {
  components: {
    Item
  },
  mounted () {
    this.$nextTick(() => {
      if (!this.bscroll) {
        this.bscroll = new BScroll('.thingsNav', {
          scrollX: true,
          click: true
        })
      }
      // 竖向滑动
      const height = document.documentElement.clientHeight
      const scrollContainer = document.querySelector('.scrollContainer')
      scrollContainer.style.height = height + 'px'
      if (!this.bscrollY) {
        this.bscrollY = new BScroll('.scrollContainer', {
          scrollY: true,
          click: true
        })
      }
    })
  }
}
</script>

<style lang='stylus' rel='stylesheet/stylus'>
.thingsContainer
  position relative
  .titleContainer
    display inline-block
    position absolute
    top 0
    left 250px
    .find
      color #b4282d
      font-size 40px
      font-weight bold
    .zhenxuanjia
      font-size 28px
      color #7f7f7f
      margin-left 20px
  .thingsNav
    width 100%
    height 92px
    padding-bottom 20px
    box-sizing border-box
    background-color #fff
    .thingsNavList
      white-space nowrap
      line-height 92px
      span
        font-size 28px
        margin 0 20px
        padding 0 8px
        &.active
          color #b4282d
          border-bottom 4px solid #b4282d
  .scrollContainer
    position absolute
    top 181px
    left 0
    .thingsSwiper
      width 100%
      .first
        font-size 0
</style>
 