<template>
  <div class="header">
    <!-- <div class="logo"
         slot="left"></div> -->
    <slot name='left'>
      <!-- <div class="logo"></div> -->
    </slot>

    <span class="search">
      <span class="searchImg"></span>
      搜索商品，共22717款好物
    </span>

    <slot name='right'>
      <!-- <span class="loginBtn">登录</span> -->
    </slot>
  </div>
</template>
<script>
export default {
}
</script>

<style lang='stylus' rel='stylesheet/stylus'>
.header
  padding 16px 30px
  display flex
  align-items center
  background-color #fff
  .logo
    width 138px
    height 40px
    background-image url('http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png')
    background-repeat no-repeat
    margin-right 20px
  .search
    width 442px
    height 56px
    background-color #ededed
    border-radius 10px
    color #666
    text-align center
    line-height 56px
    font-size 27px
    .searchImg
      width 28px
      height 28px
      // margin-right 10px
      display inline-block
      background-image url('http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-553dba3aff.png')
      background-repeat no-repeat
  .loginBtn
    width 74px
    height 40px
    line-height 40px
    text-align center
    border 1px solid #b4282d
    border-radius 10px
    color #b4282d
    font-size 24px
    margin-left 16px
</style>
 