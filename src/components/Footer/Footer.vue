<template>
  <div class="footerContainer"
       v-show="$route.meta.isShowFooter">
    <ul class="footerUl">
      <li class="item"
          :class="{active:$route.path==='/msite'}"
          @click="goto('/msite')">
        <div class="icon-img "
             :class="$route.path==='/msite'?'icon1-active':'icon-img1'">
        </div>
        <span>首页</span>
      </li>
      <li class="item "
          :class="{active:$route.path==='/category'}"
          @click="goto('/category')">
        <div class="icon-img  "
             :class="$route.path==='/category'?'icon2-active':'icon-img2'">
        </div>
        <span>分类</span>
      </li>
      <li class="item"
          :class="{active:$route.path==='/things/find'||$route.path==='/things/zxj'}"
          @click="goto('/things')">
        <div class="icon-img "
             :class="$route.path==='/things/find'||$route.path==='/things/zxj'?'icon3-active':'icon-img3'">
        </div>
        <span>识物</span>
      </li>
      <li class="item"
          :class="{active:$route.path==='/shopcar'}"
          @click="goto('/shopcar')">
        <div class="icon-img "
             :class="$route.path==='/shopcar'?'icon4-active':'icon-img4'">
        </div>
        <span>购物车</span>
      </li>
      <li class="item"
          :class="{active:$route.path==='/personal'}"
          @click="goto('/personal')">
        <div class="icon-img"
             :class="$route.path==='/personal'?'icon5-active':'icon-img5'">
        </div>
        <span>个人</span>
      </li>

    </ul>
  </div>
</template>
<script>
export default {
  methods: {
    goto (path) {
      this.$router.replace(path)
    }
  },
}
</script>

<style lang='stylus' rel='stylesheet/stylus'>
.footerContainer
  position fixed
  left 0
  bottom 0
  width 100%
  height 100px
  background-color #fff
  border-top 1px solid #d9d9d9
  .footerUl
    width 100%
    height 100%
    display flex
    align-items center
    .item
      flex 1
      text-align center
      &.active
        color #b4282d
      .icon-img
        display inline-block
        margin-bottom 15px
        width 40px
        height 40px
        background-image url('http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/tabBar-s43a0dc8a7d-2a8cea5605.png')
        background-repeat no-repeat
        background-size 40px 490px
      .icon-img1
        background-position 0 -250px
      .icon1-active
        background-position 0 -200px
      .icon-img2
        background-position 0 -150px
      .icon2-active
        background-position 0 -100px
      .icon-img3
        background-position 0 -350px
      .icon3-active
        background-position 0 -300px
      .icon-img4
        background-position 0 -50px
      .icon4-active
        background-position 0 0px
      .icon-img5
        background-position 0 -450px
      .icon5-active
        background-position 0 -400px
      span
        display block
        margin-top -15px
</style>
 