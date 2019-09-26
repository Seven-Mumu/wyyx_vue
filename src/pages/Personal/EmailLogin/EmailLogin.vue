<template>
  <div class="phoneLoginContainer">
    <!-- <HeaderPersonal class="phoneLoginHeader">
      <span slot="title"
            class="titleText"></span>
    </HeaderPersonal> -->
    <div class="phoneLoginImg">
      <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png"
           alt="">
    </div>
    <div class="formItem">
      <div class="phoneNumber">
        <input type="tel"
               placeholder="请输入手机号"
               maxlength="11"
               v-model="user.phone">
      </div>
      <div class="validate">
        <p>{{phone_tips}}</p>
      </div>
      <div class="yanzhengma">
        <input type="tel"
               placeholder="请输入短信验证码"
               maxlength="6"
               v-model="user.code">
        <span>获取验证码</span>
      </div>
      <div class="validate">
        <p>{{code_tips}}</p>
      </div>
      <div class="bottom">
        <span>遇到问题？</span>
        <span>使用密码验证登录</span>
      </div>
      <div class="btn">登录</div>
      <div class="check">
        <input type="checkbox">
        <span>我同意</span>
        <span class="ls">《服务条款》</span>
        <span>和</span>
        <span class="ls">《网易隐私政策》</span>
      </div>
      <div class="other"
           @click="$router.replace('/personal')">
        其他登录方式 >
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      code_tips: '',
      phone_tips: '',
      user: {
        phone: '',
        code: ''
      }
    }
  },
  watch: {
    user: {
      deep: true,
      handler (newVal, oldVal) {
        if (/^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/.test(newVal.phone)) {
          this.phone_tips = ''
        } else {
          this.phone_tips = '请输入正确的手机号码'
        }
        if (/^[0-9]{6}$/.test(newVal.code)) {
          this.code_tips = ''
        } else {
          this.code_tips = '请输入正确的验证码'
        }
      }
    }
  },
}
</script>

<style lang='stylus' rel='stylesheet/stylus'>
.phoneLoginContainer
  background-color #fff
  height 1500px
  .phoneLoginHeader
    border-bottom 1px solid #999
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
  .phoneLoginImg
    width 100%
    height 54px
    text-align center
    // margin-top 46px
    padding-top 46px
    >img
      width 162px
      height 54px
  .formItem
    height 566px
    // background-color blue
    padding 20px 40px 0 40px
    margin-top 60px
    .validate
      height 40px
      // background-color red
      line-height 40px
      >p
        height 40px
        color red
    .phoneNumber
      height 90px
      border-bottom 1px solid #ccc
      margin-bottom 20px
      // background-color yellow
      >input[type='tel']
        height 50px
        margin 26px 0
        font-size 30px
        outline none
    .yanzhengma
      height 90px
      border-bottom 1px solid #ccc
      // background-color yellow
      >input[type='tel']
        height 50px
        margin 26px 0
        font-size 30px
        outline none
      >span
        width 164px
        height 52px
        display inline-block
        border 1px solid #333
        border-radius 5px
        font-size 28px
        text-align center
        line-height 52px
        margin-left 100px
    .bottom
      font-size 28px
      height 40px
      margin-top 50px
      display flex
      justify-content space-between
      // background-color yellow
      // color #7f7f7f
      >span
        &:first-child
          color #7f7f7f
    .btn
      height 90px
      background-color #dd1a21
      font-size 28px
      // font-weight 700
      text-align center
      line-height 90px
      border-radius 10px
      margin-top 25px
      color #fff
    .check
      margin-top 20px
      display flex
      align-items center
      >input[type='checkbox']
        width 28px
        height 28px
        margin-right 20px
      .ls
        color #007aff
    .other
      font-size 28px
      margin-top 46px
      text-align center
</style>
 