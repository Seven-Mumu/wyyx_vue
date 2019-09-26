<template>
  <div class="findTwo">
    <div class="findTwoHeader">
      <img :src="look.avatar"
           alt="">
      <span>{{look.nickname}}</span>
    </div>
    <span class="findTwoText">{{look.content}}</span>
    <img :src="look.lookPics[0].picUrl"
         alt="">
    <p class="findTwoFooter">{{look.readCount}}人看过</p>
  </div>
</template>
<script>
export default {
  props: {
    look: Object
  }
}
</script>

<style lang='stylus' rel='stylesheet/stylus'>
.findTwo
  // height 674px
  background-color #fff
  margin 20px 0
  padding 36px 30px
  box-sizing border-box
  .findTwoHeader
    margin-bottom 10px
    img
      width 54px
      height 54px
      border-radius 50%
      vertical-align middle
    span
      color #333
      font-size 28px
      margin-left 10px
      vertical-align middle
  .findTwoText
    color #333
    height 50px
    line-height 50px
    font-size 36px
  img
    width 690px
    height 376px
    border-radius 10px
    margin-top 10px
  .findTwoFooter
    color #999
    font-size 22px
    margin-top 30px
</style>
 