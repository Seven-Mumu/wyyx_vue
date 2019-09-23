<template>
  <div class="timeBuyContainer">
    <div class="timeBuyHeader">
      <span class="title">限时购</span>
      <div class="timer">
        <span class="num">03</span>:
        <span class="num">04</span>:
        <span class="num">05</span>
      </div>
      <span class="more">更多 ></span>
    </div>
    <div class="timeBuyContent">
      <ul>
        <li>
          <div class="picture">
            <img src="https://yanxuan-item.nosdn.127.net/da8d784e8f44d736dac03905cf4162ef.png?imageView&thumbnail=216x216&quality=75"
                 alt="">
          </div>
          <div class="price">
            <span class="newPrice">￥29</span>
            <span class="oldPrice">￥36</span>
          </div>
        </li>
        <li>
          <div class="picture">
            <img src="https://yanxuan-item.nosdn.127.net/da8d784e8f44d736dac03905cf4162ef.png?imageView&thumbnail=216x216&quality=75"
                 alt="">
          </div>
          <div class="price">
            <span class="newPrice">￥29</span>
            <span class="oldPrice">￥36</span>
          </div>
        </li>
        <li>
          <div class="picture">
            <img src="https://yanxuan-item.nosdn.127.net/da8d784e8f44d736dac03905cf4162ef.png?imageView&thumbnail=216x216&quality=75"
                 alt="">
          </div>
          <div class="price">
            <span class="newPrice">￥29</span>
            <span class="oldPrice">￥36</span>
          </div>
        </li>
        <li>
          <div class="picture">
            <img src="https://yanxuan-item.nosdn.127.net/da8d784e8f44d736dac03905cf4162ef.png?imageView&thumbnail=216x216&quality=75"
                 alt="">
          </div>
          <div class="price">
            <span class="newPrice">￥29</span>
            <span class="oldPrice">￥36</span>
          </div>
        </li>
        <li>
          <div class="picture">
            <img src="https://yanxuan-item.nosdn.127.net/da8d784e8f44d736dac03905cf4162ef.png?imageView&thumbnail=216x216&quality=75"
                 alt="">
          </div>
          <div class="price">
            <span class="newPrice">￥29</span>
            <span class="oldPrice">￥36</span>
          </div>
        </li>
        <li>
          <div class="picture">
            <img src="https://yanxuan-item.nosdn.127.net/da8d784e8f44d736dac03905cf4162ef.png?imageView&thumbnail=216x216&quality=75"
                 alt="">
          </div>
          <div class="price">
            <span class="newPrice">￥29</span>
            <span class="oldPrice">￥36</span>
          </div>
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
 