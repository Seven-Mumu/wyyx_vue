<template>
  <div class="categoryContainer">
    <router-view></router-view>
    <div class="searchSpan"
         @click="$router.push('/search')"
         v-show="$route.path==='/category'">
      <div class="search">
        <span class="searchImg"></span>
        搜索商品，共22717款好物
      </div>
    </div>

    <div class="wrap"
         v-show="$route.path==='/category'">
      <!-- 左侧菜单列表 -->
      <div class="leftWrapper">
        <ul class="categoryList"
            ref="leftUl">
          <li :class="{active:select===index}"
              @click="toItems(index)"
              v-for="(category,index) in categorys.categoryL1List">{{category.name}}</li>
        </ul>
      </div>
      <!-- 右侧商品列表 -->
      <div class="list"
           ref="rightD">
        <div class="rightUl">
          <div class="swiper-container">
            <div class="swiper-wrapper">
              <div class="swiper-slide"
                   v-for="(category,index) in categorys.categoryL1List"
                   :key="index">
                <img :src="category.wapBannerUrl"
                     alt="">
              </div>
            </div>
          </div>

          <ul class="listAll">
            <li v-for="(category,index) in categoryObj.subCateList"
                :key="index">
              <router-link :to="`/category/shop/${index}`">
                <img :src="category.bannerUrl"
                     alt="">
                <span>{{category.name}}</span>
              </router-link>
            </li>
          </ul>
        </div>

      </div>
    </div>
  </div>
</template>
<script>
// 引入swiper包
import Swiper from "swiper"
import "swiper/dist/css/swiper.css"
// 引入bscroll
import BScroll from 'better-scroll'
import { mapState } from 'vuex'
export default {
  data () {
    return {
      select: 0,
      categoryObj: {}
    }
  },
  methods: {
    toItems (index) {
      this.select = index
      this.categoryObj = this.categorys.categoryL1List[index]
    }
  },
  computed: {
    ...mapState({
      categorys: state => state.category.categorys,
    })
  },

  async mounted () {
    // console.log(this.categorys)
    await this.$store.dispatch('getCategorys')
    this.categoryObj = this.categorys.categoryL1List[0]
    this.$nextTick(() => {
      new Swiper(".swiper-container", {
        loop: true, // 循环模式选项
        autoplay: true
      })

      // 左侧列表滑动
      const categoryList = this.$refs.leftUl
      const list = categoryList.children
      let height = list.length * 49 + list.length * 40 - 20
      categoryList.style.height = height + 'px'
      if (!this.bscroll) {
        this.bscroll = new BScroll('.leftWrapper', {
          click: true
        })
      } else {
        this.bscroll.refresh()
      }

      // 右侧详细信息列表滑动
      const rightD = this.$refs.rightD
      const h = document.documentElement.clientHeight - 100
      rightD.style.height = h + 'px'
      if (!this.bscrollRight) {
        this.bscrollRight = new BScroll('.list', {
          click: true
        })
      } else {
        this.bscrollRight.refresh()
      }



    })
  }
}
</script>

<style lang='stylus' rel='stylesheet/stylus'>
.categoryContainer
  height 1800px
  background-color #fff
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
    z-index 2
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
    .leftWrapper
      width 162px
      max-height 1144px
    .categoryList
      width 100%
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
          margin-top 20px
    .list
      // height 100%
      padding 30px 30px 20px
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
          height 192px
      .rightUl
        .listAll
          padding-bottom 200px
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
            img
              width 144px
              height 144px
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
 