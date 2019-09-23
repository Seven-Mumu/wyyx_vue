<template>
  <!-- 专题 -->
  <div class="items">
    <div class="itemContainers">
      <div class="bigImg">
        <img src="https://yanxuan.nosdn.127.net/3d85cc49215744e5a11cba16fe2b51f1.png"
             alt="">
      </div>
      <ul class="smallImg">
        <li>
          <img src="https://yanxuan-item.nosdn.127.net/c7ec188857a3f8c5e15e906a09931a2e.png?imageView&thumbnail=226y226&quality=95"
               alt="">
          <div class="itemText">
            <p>金属色加厚垃圾袋超值组 21卷630只</p>
            <span>￥79.9</span>
          </div>
        </li>
        <li>
          <img src="https://yanxuan-item.nosdn.127.net/c7ec188857a3f8c5e15e906a09931a2e.png?imageView&thumbnail=226y226&quality=95"
               alt="">
          <div class="itemText">
            <p>金属色加厚垃圾袋超值组 21卷630只</p>
            <span>￥79.9</span>
          </div>
        </li>
        <li>
          <img src="https://yanxuan-item.nosdn.127.net/c7ec188857a3f8c5e15e906a09931a2e.png?imageView&thumbnail=226y226&quality=95"
               alt="">
          <div class="itemText">
            <p>金属色加厚垃圾袋超值组 21卷630只</p>
            <span>￥79.9</span>
          </div>
        </li>

      </ul>
    </div>
    <div class="itemBtn">
      <span>进入专题</span>
    </div>
  </div>
</template>
<script>
export default {
}
</script>

<style lang='stylus' rel='stylesheet/stylus'>
.items
  width 100%
  height 700px
  padding 26px 0 38px 0
  // background-color blue
  position relative
  .itemContainers
    width 96%
    height 645px
    background-color #f5b376
    position absolute
    left 50%
    margin-left -48%
    border-radius 10px
    .bigImg
      margin 10px
    .smallImg
      display flex
      >li
        width 240px
        margin 0 17px
        img
          width 100%
          border-radius 10px 10px 0 0
          vertical-align bottom
        .itemText
          width 206px
          height 80px
          background-color #fff
          text-align center
          >p
            white-space nowrap
            overflow hidden
            text-overflow ellipsis
          >span
            margin-top 5px
            display inline-block
            color red
  .itemBtn
    width 100%
    height 70px
    // background-color red
    position absolute
    left 0
    bottom 0
    text-align center
    line-height 80px
    >span
      display inline-block
      width 250px
      height 70px
      background-color #f5b376
      font-size 24px
      border-radius 30px
      line-height 70px
      color #fff
</style>
 