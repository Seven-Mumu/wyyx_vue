<template>
  <div class="findContainer">
    <div class="findWrap"
         style="padding-top:180px">
      <!-- <ul>
        <li v-for="(find,index) in findFirstArr"
            :key="index">
          <Small :topic="find.topics" />
          <Big :extra="find.extra" />
        </li>
      </ul> -->
      <ul>
        <li v-for="(find,rIndex) in findArr"
            :key="rIndex">
          <Small :topic="find.topics" />
          <Big :look="find.look" />
        </li>
      </ul>

    </div>
  </div>
</template>
<script>
import BScroll from 'better-scroll'
import { mapState } from 'vuex'
import Small from './Small/Small'
import Big from './Big/Big'
export default {
  name: 'find',
  components: {
    Small,
    Big
  },
  data () {
    return {
      moreDataPage: 1
    }
  },
  computed: {
    ...mapState({
      findArr: state => state.find.findArr,
      findFirstArr: state => state.find.findFirstArr
    })
  },
  async mounted () {

    this.$nextTick(() => {
      try {
        const height = document.documentElement.clientHeight - 101
        const findContainer = document.querySelector('.findContainer')
        findContainer.style.height = height + 'px'
        if (!this.bscroll) {
          this.bscroll = new BScroll('.findContainer', {
            click: true,
            probeType: 2,
            scrollX: false,
            scrollY: true,
            bounce: false,    // 当滚动超过边缘的时候会有一小段回弹动画。设置为 true 则开启动画
            //下拉刷新：可以配置顶部下拉的距离（threshold） 来决定刷新时机以及回弹停留的距离（stop）
            //这个配置用于做上拉加载功能，默认为 false。当设置为 true 或者是一个 Object 的时候，可以开启上拉加载
            pullUpLoad: true
          })
          this.bscroll.on("pullingUp", async () => {
            this.moreDataPage++;
            await this.$store.dispatch('getFindData', { page: this.moreDataPage, size: 5 })
            this.bscroll.finishPullUp();    // 可以多次执行上拉刷新
          })
        } else {
          this.bscroll.refresh()
        }
      } catch (error) {
        console.log(error)
      }
    })
    await this.$store.dispatch('getFindData', { page: 1, size: 5 })
    // await this.$store.dispatch('getFindFirst')
  },
}
</script>

<style lang='stylus' rel='stylesheet/stylus'></style>
 