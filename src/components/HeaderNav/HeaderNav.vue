<template>
  <header class="headerContainer">
    <div class="header">
      <div class="Imglogo"></div>
      <span class="Headersearch"
            @click="$router.push('/search')">
        <span class="searchImg"></span>
        搜索商品，共22717款好物
      </span>
      <span class="loginBtn">登录</span>
    </div>
    <div class="headerNavLeft"
         v-show="!isOpen">
      <ul class="headerNavUl"
          ref="leftNavUl">
        <li class="headerNavLi"
            v-for="(nav,index) in homeNav"
            :key="index"
            @click="toNavItem(index)"><a href="javascript:;"
             :class="{active:select===index}">{{nav.text}}</a></li>
      </ul>
    </div>
    <div class="headerNavRight">
      <!-- <span class="linear"></span> -->
      <div class="arrow-down"
           :class="{isRotate:isOpen}"
           @click="handleClick"></div>
    </div>
    <div class="navAll"
         v-show="isOpen">
      <span class="allList">全部频道</span>
      <ul class="navList">
        <li @click="toNavItem(index)"
            :class="{active:select===index}"
            v-for="(item,index) in homeNav"
            :key="index">{{item.text}}</li>
      </ul>
      <div class="mask"
           @click="isOpen=!isOpen"
           v-show="isOpen"></div>
    </div>
  </header>
</template>
<script>
import BScroll from 'better-scroll'
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState({
      homeNav: state => state.home.homeNav,

    })
  },
  data () {
    return {
      isOpen: false,
      select: 0,

    }
  },
  methods: {
    handleClick () {
      this.isOpen = !this.isOpen
    },
    toNavItem (index) {
      this.select = index
    }
  },
  mounted () {
    // console.log(this.homeNav.kingKongModule.kingKongList)
    this.$nextTick(() => {
      // const list = this.$refs.leftNavUl.children
      // let width = 0
      // Array.prototype.slice.call(list).forEach(li => {
      //   width += li.clientWidth
      // })
      // width = width + list.length * 50
      // const leftNav = document.querySelector('.leftNav')
      // leftNav.style.width = width + 'px'
      // console.log(width)
      if (!this.bscroll) {
        this.bscroll = new BScroll('.headerNavLeft', {
          scrollX: true,
          click: true,
          bounce: false
        })
      } else {
        this.bscroll.refresh()
      }
    }
    )
  },
}
</script>

<style lang='stylus' rel='stylesheet/stylus'>
@import '../../common/stylus/mixins'
.headerContainer
  width 100%
  position fixed
  top 0
  left 0
  z-index 999
  .header
    padding 16px 30px
    display flex
    align-items center
    background-color #fff
    .Imglogo
      width 138px
      height 40px
      background-image url('http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png')
      background-repeat no-repeat
      margin-right 20px
    .Headersearch
      width 442px
      height 56px
      background-color #ededed
      border-radius 10px
      color #666
      text-align center
      line-height 56px
      font-size 27px
      .searchImg
        width 28px
        height 28px
        // margin-right 10px
        display inline-block
        background-image url('http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-553dba3aff.png')
        background-repeat no-repeat
    .loginBtn
      width 74px
      height 40px
      line-height 40px
      text-align center
      border 1px solid #b4282d
      border-radius 10px
      color #b4282d
      font-size 24px
      margin-left 16px
  .headerNavLeft
    // width 630px
    height 72px
    overflow hidden
    background-color #fff
    // display flex
    .headerNavUl
      float left
      padding-right 150px
      display flex
      .headerNavLi
        display flex
        justify-content center
        align-items center
        box-sizing border-box
        padding 0 16px
        text-align center
        font-size 28px
        line-height 60px
        width 145px
        >a
          color #333
        a.active
          color #b4282d
          border-bottom 4px solid #b4282d
  .headerNavRight
    width 150px
    height 60px
    position absolute
    right 0
    top 88px
    background-color #fff
    .arrow-down
      width 30px
      height 30px
      background-image url('http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/arrow-down-3-799ded53ea.png')
      background-repeat no-repeat
      position absolute
      left 50%
      top 50%
      transform translateY(-15px)
      transition 0.3s transform linear
      // transform-origin 20px
      &.isRotate
        transform rotateZ(180deg) translateY(10px)
  .navAll
    width 100%
    background-color #fff
    .allList
      width 100%
      height 60px
      display block
      padding-left 30px
      font-size 27px
      color #333
      line-height 60px
    .navList
      height 288px
      padding-top 24px
      width 100%
      >li
        float left
        width 150px
        height 56px
        background #fafafa
        margin 0 0 40px 30px
        border 1px solid #CCC
        border-radius 10px
        color #333
        text-align center
        line-height 56px
        &.active
          border 1px solid #b4282d
          color #b4282d
    .mask
      position fixed
      width 100%
      height 1800px
      z-index 1
      background-color rgba(0, 0, 0, 0.3)
</style>
 