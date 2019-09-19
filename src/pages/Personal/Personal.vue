<template>
  <div class="personalContainer">
    <HeaderPersonal>
      <span slot="title"
            class="titleText"></span>
    </HeaderPersonal>
    <div class="loginType">
      <div class="img">
        <div class="imgLogin">
          <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png"
               alt="">
        </div>
        <div class="btn">
          <div class="phone">
            <span></span>
            <span>手机号快捷登录</span>
          </div>
          <div class="email">
            <span></span>
            <span>邮箱账号登录</span>
          </div>
        </div>
      </div>
      <div class="wechat">
        <div class="weixin">
          <span></span>
          <span>微信</span>
        </div>
        <div class="qq">
          <span></span>
          <span>QQ</span>
        </div>
        <div class="weibo">
          <span></span>
          <span>微博</span>
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
.personalContainer
  .titleText
    width 172px
    height 54px
    display inline-block
    background-image url('//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/hd-s9f33319f5a-b1aa4c35e6.png')
    background-repeat no-repeat
    background-position 0 -118px
    position absolute
    top 0
    right 300px
  .loginType
    background-color #F2F5F4
    .img
      width 100%
      height 482px
      padding 160px 0 232px 0
      box-sizing border-box
      text-align center
      .imgLogin
        width 268px
        height 90px
        position relative
        >img
          width 268px
          height 90px
          position absolute
          left 50%
          margin-left 134px
      .btn
        width 100%
        height 220px
</style>
 