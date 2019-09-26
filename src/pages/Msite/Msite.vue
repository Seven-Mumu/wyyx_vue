<template>
  <div class="msiteContainer">
    <HeaderNav />
    <div class="wraper">
      <div style="padding-bottom: 260px">
        <Swiper />
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
        <SwiperList />
        <NewPerson />
        <ModuleList :tagList="homeItems.tagList" />
        <HotSell />
        <TimeBuy :homeTimeBuy="homeItems.flashSaleModule" />
        <CategoryList :listArr="homeItems.newItemList" />
        <div class="footer">
          <div class="btn">
            <span>下载App</span>
            <span>电脑版</span>
          </div>
          <div class="text">
            <span>网易公司版权所有 © 1997-2019</span><br>
            <span>食品经营许可证：JY13301080111719</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
const SwiperList = () => import('./SwiperList/SwiperList')
import HeaderNav from '../../components/HeaderNav/HeaderNav'
import Swiper from './Swiper/Swiper'
// import SwiperList from './SwiperList/SwiperList'
import NewPerson from './NewPerson/NewPerson'
import ModuleList from './ModuleList/ModuleList'
import CategoryList from './CategoryList/CategoryList'
import HotSell from './HotSell/HotSell'
import TimeBuy from './TimeBuy/TimeBuy'

// 引入better-scroll
import BScroll from 'better-scroll'
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState({
      homeNav: state => state.home.homeNav,
      homeItems: state => state.home.homeItems
    })
  },
  async mounted () {
    await this.$store.dispatch('getHomeNav')
    await this.$store.dispatch('getHomeItems')
    console.log(this.homeItems)
    this.$nextTick(() => {
      const height = document.documentElement.clientHeight
      // console.log(height)
      const wraper = document.querySelector('.wraper')
      wraper.style.height = height + 'px'
      if (!this.bscroll) {
        this.bscroll = new BScroll('.wraper', {
          scrollY: true,
          click: true,
          mouseWheel: true
        })
      }
    })
  },
  components: {
    Swiper,
    SwiperList,
    NewPerson,
    ModuleList,
    CategoryList,
    HeaderNav,
    HotSell,
    TimeBuy
  }
}
</script>

<style lang='stylus' rel='stylesheet/stylus'>
.msiteContainer
  width 100%
  padding-top 150px
  background-color #eee
  height 500px
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
  .footer
    width 100%
    height 244px
    padding 54px 20px 28px
    box-sizing border-box
    background-color #414141
    .btn
      margin-bottom 36px
      text-align center
      span
        display inline-block
        width 172px
        height 62px
        color #ffffff
        font-size 24px
        border 1px solid #999
        border-radius 5px
        text-align center
        line-height 62px
        background-color transparent
        &:first-child
          margin-right 50px
    .text
      text-align center
      span
        color #999
        font-size 24px
</style>
