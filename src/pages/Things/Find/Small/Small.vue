<template>
  <div>
    <div class="findOne"
         v-for="(item,index) in topic"
         :key="index">
      <div class="findOneTitle">
        <img :src="item.avatar"
             alt="">
        <span>{{item.nickname}}</span>
      </div>
      <p class="text1">{{item.title}}</p>
      <p class="text2">{{item.subTitle}}</p>
      <p class="findOneLooked">{{item.readCount}}人看过</p>
      <div class="findOneImg">
        <img :src="item.picUrl"
             alt="">
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    topic: Array
  }
}
</script>

<style lang='stylus' rel='stylesheet/stylus'>
.findOne
  // height 336px
  margin 20px 0
  padding 32px 30px
  box-sizing border-box
  background-color #fff
  position relative
  .findOneTitle
    img
      width 54px
      height 54px
      border-radius 50%
      vertical-align middle
    span
      font-size 28px
      color #333
      vertical-align middle
      margin-left 10px
  .text1
    font-size 36px
    color #333
    padding-top 32px
    width 400px
  .text2
    color #7f7f7f
    font-size 28px
    padding-top 20px
  .findOneLooked
    font-size 22px
    color #999
    margin-top 50px
  .findOneImg
    position absolute
    right 0
    top 25px
    width 272px
    height 272px
    img
      width 100%
      height 100%
</style>
 