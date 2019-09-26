<template>
  <div class="moudleList">
    <div class="title">
      <div class="left">品牌制造商直供</div>
      <div class="right">更多 ></div>
    </div>
    <ul class="list">
      <li v-for="(item,index) in tagList">
        <img :src="item.picUrl"
             alt="">
        <div class="listText">
          <span class="span1">{{item.name}}</span>
          <span class="span2">{{item.floorPrice}}元起</span>
          <span class="span3"
                v-show="item.newOnShelf">上新</span>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: {
    tagList: Array
  }

}
</script>

<style lang='stylus' rel='stylesheet/stylus'>
.moudleList
  width 100%
  height 654px
  margin-bottom 20px
  .title
    width 100%
    height 100px
    background-color #fff
    padding 0 30px
    line-height 100px
    box-sizing border-box
    .left
      color #333
      font-size 32px
      display inline-block
    .right
      color #333
      font-size 28px
      float right
  .list
    width 100%
    height 556px
    background-color #fff
    margin 0 0 20px
    padding 0 26px 26px 30px
    box-sizing border-box
    display flex
    flex 1
    flex-wrap wrap
    >li
      width 338px
      height 260px
      background-color #eee
      box-sizing border-box
      // background-image url('https://yanxuan.nosdn.127.net/74e2ea8f81004d0a60f90fc8e4649058.png?imageView&thumbnail=343y260&enlarge=1')
      background-repeat no-repeat
      text-align center
      position relative
      &:nth-child(2n+1)
        margin 0 4px 4px 0
      img
        width 338px
        height 260px
      .listText
        position absolute
        top 0
        left 50%
        transform translateX(-50%)
        .span1
          font-size 28px
          margin 23px 0 3px 0
          color #333
          text-align center
          display block
        .span2
          color #7f7f7f
          font-size 24px
        .span3
          margin-left 10px
          color #ffffff
          font-size 24px
          background-color #cbb693
          display inline-block
          line-height 32px
          width 64px
          height 32px
          text-align center
          border-radius 5px
</style>
 