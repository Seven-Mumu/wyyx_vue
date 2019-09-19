<template>
  <div class="shopCarContainer">
    <header class="header">
      <span class="span1">购物车</span>
      <span class="span2">领券</span>
    </header>
    <ul class="titleList">
      <li>
        <span class="point"></span>
        <span>30天无忧退货</span>
      </li>
      <li>
        <span class="point"></span>
        <span>48小时快速退款</span>
      </li>
      <li>
        <span class="point"></span>
        <span>满88元免邮费</span>
      </li>
    </ul>
    <div class="loginBtn">
      <div class="container">
        <div class="loginImg">
          <div class="text">去添加点什么吧</div>
          <div class="btn">登录</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
}
</script>

<style lang='stylus' rel='stylesheet/stylus'>
.shopCarContainer
  .header
    width 100%
    height 88px
    padding 0 30px
    box-sizing border-box
    text-align justify
    display flex
    justify-content space-between
    background-color #fff
    .span1
      color #333
      font-size 36px
    .span2
      color #b4282d
      font-size 30px
  .titleList
    width 100%
    height 70px
    background-color #eee
    padding 0 30px
    box-sizing border-box
    display flex
    align-items center
    justify-content space-around
    li
      .point
        display inline-block
        width 10px
        height 10px
        margin-right 6px
        background-image url('//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/servicePolicy-0ec842d966.png')
        background-repeat no-repeat
  .loginBtn
    width 100%
    height 1246px
    position relative
    background-color #f4f4f4
    .container
      position absolute
      top -50px
      right 0
      bottom 0
      left 0
      height 300px
      margin auto
      text-align center
      .loginImg
        position absolute
        left 50%
        margin-left -124px
        width 248px
        height 248px
        background-image url('//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/noCart-d6193bd6e4.png')
        background-repeat no-repeat
        .text
          margin 230px 0 50px 0
          color #999
          font-size 28px
        .btn
          color #ffffff
          background-color #b4282d
          width 480px
          height 92px
          font-size 30px
          margin 0 -120px
          line-height 92px
</style>
 