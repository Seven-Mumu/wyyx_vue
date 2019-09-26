<template>
  <div class="timeBuyContainer">
    <div class="timeBuyHeader">
      <span class="title">限时购</span>
      <div class="timer">
        <span class="num">{{h}}</span>:
        <span class="num">{{m}}</span>:
        <span class="num">{{s}}</span>
      </div>
      <span class="more">更多 ></span>
    </div>
    <div class="timeBuyContent">
      <ul>
        <li v-for="(item,index) in homeTimeBuy.itemList">
          <div class="picture">
            <img :src="item.picUrl"
                 alt="">
          </div>
          <div class="price">
            <span class="newPrice">￥{{item.activityPrice}}</span>
            <span class="oldPrice">￥{{item.originPrice}}</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex';
export default {
  computed: {
    ...mapState({
      homeTimeBuy: state => state.home.homeTimeBuy
    })
  },
  data () {
    return {
      h: '',
      m: '',
      s: ''
    }
  },
  async mounted () {
    await this.$store.dispatch('getTimeBuy')
    // 倒计时
    setInterval(() => {
      // 获取当前时间
      var date = new Date();
      var now = date.getTime();
      //设置截止时间
      var endDate = new Date("2019-11-24 23:59:59");
      var end = endDate.getTime();
      //时间差
      var leftTime = end - now;
      //定义变量 d,h,m,s保存倒计时的时间
      if (leftTime >= 0) {
        // this.day = parseInt(leftTime / 1000 / 60 / 60 / 24, 10)
        const h = Math.floor((leftTime / 1000 / 60 / 60) % 24);
        if (h < 10) {
          this.h = `0${h}`
        } else {
          this.h = h
        }
        const m = Math.floor((leftTime / 1000 / 60) % 60);
        if (m < 10) {
          this.m = `0${m}`
        } else {
          this.m = m
        }
        const s = Math.floor((leftTime / 1000) % 60);
        if (s < 10) {
          this.s = `0${s}`
        } else {
          this.s = s
        }
      }
    }, 1000);
  },
}
</script>

<style lang='stylus' rel='stylesheet/stylus'>
.timeBuyContainer
  width 100%
  height 699px
  // background-color yellow
  .timeBuyHeader
    width 100%
    height 100px
    background-color #fff
    padding 0 30px
    box-sizing border-box
    display flex
    align-items center
    position relative
    .title
      color #333
      font-size 32px
    .timer
      margin-left 10px
      .num
        width 36px
        height 36px
        display inline-block
        background-color #333
        color #fff
        margin 0 10px
        text-align center
        line-height 36px
    .more
      font-size 28px
      position absolute
      right 0
      top 35px
  .timeBuyContent
    height 599px
    padding 0 10px 0 30px
    background-color #fff
    // background-color yellow
    >ul
      display flex
      flex-wrap wrap
      >li
        display flex
        flex-direction column
        align-items center
        width 216px
        height 299px
        margin-right 20px
        padding-bottom 30px
        box-sizing border-box
        .picture
          background-color #f5f5f5
          >img
            width 216px
            height 216px
        .price
          margin-top 10px
          width 216px
          height 41px
          text-align center
          line-height 41px
          .newPrice
            color #b4282d
            font-size 28px
          .oldPrice
            margin-left 10px
            color #7f7f7f
            font-size 24px
            text-decoration line-through
</style>
 