<template>
  <div class="HotSellContainer">
    <div class="hotSellHeader">类目热销榜</div>
    <div class="hotSellContent">
      <div class="hotSellTop">
        <div class="topLeft">
          <span>热销榜</span>
          <div class="line"></div>
          <span class="topLeftImg"></span>
        </div>
        <div class="topRight">
          <span>热销榜</span>
          <div class="line"></div>
          <span class="topRightImg"></span>
        </div>
      </div>
      <ul class="hotSellBottom">
        <li>
          <div class="text">居家生活榜</div>
          <img src="https://yanxuan-item.nosdn.127.net/c0b3d87a8066b33c68294ce60f8e1920.png?imageView&quality=65&thumbnail=200x200"
               alt="">
        </li>
        <li>
          <div class="text">居家生活榜</div>
          <img src="https://yanxuan-item.nosdn.127.net/c0b3d87a8066b33c68294ce60f8e1920.png?imageView&quality=65&thumbnail=200x200"
               alt="">
        </li>
        <li>
          <div class="text">居家生活榜</div>
          <img src="https://yanxuan-item.nosdn.127.net/c0b3d87a8066b33c68294ce60f8e1920.png?imageView&quality=65&thumbnail=200x200"
               alt="">
        </li>
        <li>
          <div class="text">居家生活榜</div>
          <img src="https://yanxuan-item.nosdn.127.net/c0b3d87a8066b33c68294ce60f8e1920.png?imageView&quality=65&thumbnail=200x200"
               alt="">
        </li>
        <li>
          <div class="text">居家生活榜</div>
          <img src="https://yanxuan-item.nosdn.127.net/c0b3d87a8066b33c68294ce60f8e1920.png?imageView&quality=65&thumbnail=200x200"
               alt="">
        </li>
        <li>
          <div class="text">居家生活榜</div>
          <img src="https://yanxuan-item.nosdn.127.net/c0b3d87a8066b33c68294ce60f8e1920.png?imageView&quality=65&thumbnail=200x200"
               alt="">
        </li>
        <li>
          <div class="text">居家生活榜</div>
          <img src="https://yanxuan-item.nosdn.127.net/c0b3d87a8066b33c68294ce60f8e1920.png?imageView&quality=65&thumbnail=200x200"
               alt="">
        </li>
        <li>
          <div class="text">居家生活榜</div>
          <img src="https://yanxuan-item.nosdn.127.net/c0b3d87a8066b33c68294ce60f8e1920.png?imageView&quality=65&thumbnail=200x200"
               alt="">
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
}
</script>

<style lang='stylus' rel='stylesheet/stylus'>
.HotSellContainer
  width 100%
  height 710px
  margin-bottom 20px
  background-color #fff
  .hotSellHeader
    width 100%
    height 100px
    padding 0 30px
    box-sizing border-box
    font-size 32px
    color #333
    line-height 100px
  .hotSellContent
    width 100%
    height 610px
    padding 0 20px 20px 30px
    box-sizing border-box
    .hotSellTop
      display flex
      .topLeft, .topRight
        width 340px
        height 200px
        background-color #f9f3e4
        margin 0px 10px 10px 0
        box-sizing border-box
        position relative
        >span
          color #333
          font-size 28px
          display inline-block
          padding-left 24px
          margin-top 66px
        .line
          width 48px
          height 4px
          background-color #333
          margin 20px 0 0 24px
        .topLeftImg
          position absolute
          right 0
          top 0
          margin-top 0
          display inline-block
          width 200px
          height 200px
          background-image url('https://yanxuan-item.nosdn.127.net/8ee282bed26f6248b3453b4b202a55db.png?imageView&quality=65&thumbnail=200x200')
          background-repeat no-repeat
          background-position 22px 0
      .topRight
        background-color #ebeff6
        .topRightImg
          position absolute
          right 0
          top 0
          margin-top 0
          display inline-block
          width 200px
          height 200px
          background-image url('https://yanxuan-item.nosdn.127.net/35a8a3840106785c88a84b3ad91f7ebd.png?imageView&quality=65&thumbnail=200x200')
          background-repeat no-repeat
          background-position 22px 0
    .hotSellBottom
      display flex
      flex-wrap wrap
      >li
        width 165px
        height 180px
        background-color #f5f5f5
        margin 0 10px 10px 0
        text-align center
        >img
          width 120px
          height 120px
          margin-top 15px
        .text
          font-size 24px
          color #333
          margin-top 10px
          text-align center
</style>
 