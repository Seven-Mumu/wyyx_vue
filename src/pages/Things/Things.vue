<template>
  <div class="thingsContainer">
    <div class="headerContainer"
         style="z-index:1">
      <!-- header -->
      <HeaderPersonal>
        <div slot="title"
             class="titleContainer">
          <router-link class="find"
                       to="/things/find"
                       :class="{'active':$route.path==='/things/find'}">发现</router-link>
          <router-link class="zhenxuanjia"
                       to="/things/zxj"
                       :class="{'active':$route.path==='/things/zxj'}">甄选家</router-link>

        </div>
      </HeaderPersonal>
      <!-- nav -->
      <div class="thingsNav">
        <ul class="thingsNavList">
          <!-- <li v-for="(nav,index) in navArr"
              :key="index"><a href="javascript:;">{{nav}}</a></li> -->
          <li v-for="(nav,index) in findTabs"
              :key="index">{{nav.tabName}}</li>
        </ul>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
// 引入better-scroll
import BScroll from 'better-scroll'
import { mapState } from 'vuex'
export default {
  data () {
    return {
      crrA: 0,
      // crrIndex: 0,
    }
  },
  computed: {
    ...mapState({
      findTabs: state => state.find.findTabs
    })
  },
  async mounted () {
    await this.$store.dispatch('getTabs')
    // this.$nextTick(() => {
    //   if (!this.bscroll) {
    //     this.bscroll = new BScroll('.thingsNav', {
    //       scrollX: true,
    //       click: true,
    //       bounce: false
    //     })
    //   }
    // })
  }
}
</script>

<style lang='stylus' rel='stylesheet/stylus'>
.thingsContainer
  position relative
  .titleContainer
    display inline-block
    position absolute
    top 0
    left 250px
    .find
      font-size 28px
      color #7f7f7f
    .zhenxuanjia
      font-size 28px
      color #7f7f7f
      margin-left 20px
    .active
      color #b4282d
      font-size 40px
      font-weight bold
  .thingsNav
    width 100%
    height 92px
    padding-bottom 20px
    box-sizing border-box
    background-color #fff
    border-top 1px solid #ccc
    border-bottom 1px solid #ccc
    .thingsNavList
      display flex
      line-height 92px
      height 92px
      justify-content space-around
      >li
        font-size 28px
        color #333
        &.active
          color #b4282d
          border-bottom 4px solid #b4282d
</style>
 