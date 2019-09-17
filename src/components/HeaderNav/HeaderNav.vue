<template>
  <header class="headerContainer">
    <div class="header">
      <div class="logo"></div>
      <span class="search">
        <span class="searchImg"></span>
        搜索商品，共22717款好物
      </span>
      <span class="loginBtn">登录</span>
    </div>
    <div class="headerNavLeft"
         v-show="!isOpen">
      <ul class="leftNav">
        <li class="active">推荐</li>
        <li>居家生活</li>
        <li>服饰鞋包</li>
        <li>美食酒水</li>
        <li>个护清洁</li>
        <li>母婴亲子</li>
        <li>运动旅行</li>
        <li>数码家电</li>
        <li>全球特色</li>
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
        <li class="active">推荐</li>
        <li>居家生活</li>
        <li>服饰鞋包</li>
        <li>美食酒水</li>
        <li>个户清洁</li>
        <li>母婴亲子</li>
        <li>运动旅行</li>
        <li>数码家电</li>
        <li>礼品特色</li>
      </ul>
      <div class="mask"
           v-show="isOpen"></div>
    </div>
  </header>
</template>
<script>
import BScroll from 'better-scroll'
export default {
  data () {
    return {
      isOpen: false
    }
  },
  methods: {
    handleClick () {
      this.isOpen = !this.isOpen
    }
  },
  mounted () {
    this.$nextTick(() => {
      new BScroll('.headerNavLeft', {
        scrollX: true,
        click: true
      })
    }
    )
  },
}
</script>

<style lang='stylus' rel='stylesheet/stylus'>
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
    .logo
      width 138px
      height 40px
      background-image url('http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png')
      background-repeat no-repeat
      margin-right 20px
    .search
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
    width 630px
    height 60px
    overflow hidden
    background-color #fff
    .leftNav
      width 1410px
      height 60px
      font-size 27px
      line-height 60px
      display flex
      &::after
        content ''
        display block
        clear both
      >li
        // float left
        // height 50px
        margin 0 15px
        padding 0 10px
        // text-align center
        display flex
        align-items center
        justify-content center
        // border 4px solid red
        &.active
          border-bottom 4px solid #b4282d
          color #b4282d
        &:first-child
          width 88px
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
 