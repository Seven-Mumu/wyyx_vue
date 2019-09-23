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
          <div class="phone"
               @click="$router.replace('/phonelogin')">
            <span class="phoneImg"></span>
            <span class="phoneText">手机号快捷登录</span>
          </div>
          <div class="email">
            <span class="emailImg"></span>
            <span class="emailText">邮箱账号登录</span>
          </div>
        </div>
      </div>
      <div class="wechat">
        <div class="weixin">
          <span class="weixinImg iconfont icon-weixin"></span>
          <span class="weixinText">微信</span>
        </div>
        <div class="qq">
          <span class="qqImg iconfont icon-qq"></span>
          <span class="qqText">QQ</span>
        </div>
        <div class="weibo">
          <span class="weiboImg iconfont icon-weibo"></span>
          <span class="weiboText">微博</span>
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
    height 1500px
    position relative
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
        margin-top 235px
        display flex
        flex-direction column
        align-items center
        .phone
          width 670px
          height 94px
          background-color #dd1a21
          margin-bottom 32px
          border-radius 5px
          display flex
          justify-content center
          align-items center
          .phoneImg
            display inline-block
            width 40px
            height 50px
            margin-right 16px
            background-image url('//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/login-s5ca4cb2b91-2c606efd24.png')
            background-repeat no-repeat
            background-position 0 -40px
            margin-bottom 10px
          .phoneText
            color #ffffff
            font-size 28px
        .email
          width 670px
          height 94px
          border 1px solid #dd1a21
          border-radius 5px
          display flex
          justify-content center
          align-items center
          .emailImg
            display inline-block
            width 40px
            height 50px
            margin-right 16px
            background-image url('//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/login-s5ca4cb2b91-2c606efd24.png')
            background-repeat no-repeat
            background-position 0 0px
            margin-top 10px
          .emailText
            color #dd1a21
            font-size 28px
    .wechat
      width 100%
      height 40px
      // background-color pink
      position absolute
      bottom 325px
      left 0
      display flex
      justify-content center
      .weixin
        width 182px
        height 40px
        padding 0 40px
        box-sizing border-box
        display flex
        align-items center
        justify-content center
        .weixinImg
          width 40px
          height 40px
          font-size 60px
          margin 0 10px 15px 0
        .weixinText
          color #333
          font-size 22px
      .qq
        width 182px
        height 40px
        padding 0 40px
        box-sizing border-box
        display flex
        align-items center
        justify-content center
        .qqImg
          width 40px
          height 40px
          font-size 60px
          margin 0 5px 20px 0
        .qqText
          color #333
          font-size 22px
      .weibo
        width 182px
        height 40px
        padding 0 40px
        box-sizing border-box
        display flex
        align-items center
        justify-content center
        .weiboImg
          width 40px
          height 40px
          font-size 30px
          margin 15px 0 0 0
        .weiboText
          color #333
          font-size 22px
</style>
 