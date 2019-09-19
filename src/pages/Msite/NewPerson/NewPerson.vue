<template>
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
</template>
<script>
export default {
}
</script>

<style lang='stylus' rel='stylesheet/stylus'>
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
      right 53px
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
 