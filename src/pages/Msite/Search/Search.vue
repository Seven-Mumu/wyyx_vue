<template>
  <div class="searchContainers">
    <div class="searchHeader">
      <span class="fdj"></span>
      <input type="text"
             v-model="searchText"
             @input="search"
             placeholder="请输入搜索内容">
      <span @click="$router.back()">取消</span>
    </div>
    <ul class="searchListItem"
        v-show="searchText!==''">
      <li v-for="(item,index) in searchArr"
          :key="index">{{item}}</li>
    </ul>
    <div class="searchLists"
         v-show="searchText===''">
      <p>热门搜索</p>
      <ul>
        <span v-for="(keyWord,index) in searchHotKeyWords"
              :key="index"
              :class="{active:keyWord.highlight===1}">{{keyWord.keyword}}</span>
      </ul>
    </div>
  </div>
</template>
<script>
// import { reqSearch, reqHotKeyWords } from '../../../api'
import { mapState } from 'vuex'
export default {
  data () {
    return {
      searchText: '',
      // searchArr: [],
      // searchHotKeyWords: []
    }
  },
  computed: {
    ...mapState({
      searchArr: state => state.search.searchArr,
      searchHotKeyWords: state => state.search.searchHotKeyWords
    })
  },
  methods: {
    search () {
      this.$store.dispatch('getSearch', this.searchText)
      //   this.clearTimer();
      //   if (this.searchText && this.searchText.length > 0) {
      //     //获取当前延时函数的ID，便于后面clearTimeout清除该ID对应的延迟函数
      //     this.timer = setTimeout(async () => {
      //       const searchText = this.searchText
      //       const result = await reqSearch(searchText)
      //       console.log(result)
      //       if (result.code === '200') {
      //         this.searchArr = result.data
      //       }
      //     }, 500);
      //   }
      // },
      // clearTimer () {
      //   if (this.timer) {
      //     clearTimeout(this.timer);
      //   }
    }
  },
  mounted () {
    // const result = await reqHotKeyWords()
    // // console.log(result)
    // this.searchHotKeyWords = result.data.hotKeywordVOList
    // console.log(this.searchHotKeyWords)
    this.$store.dispatch('getHotWords')
  },
}
</script>

<style lang='stylus' rel='stylesheet/stylus'>
.searchContainers
  .searchHeader
    width 100%
    height 75px
    text-align center
    line-height 75px
    position relative
    background-color #fff
    >input
      width 515px
      height 47px
      background-color #f4f4f4
      margin-left 30px
      outline none
    >span
      margin-left 30px
    .fdj
      width 50px
      height 47px
      display inspanne-block
      background-color #f4f4f4
      position absolute
      top 15px
      left 13px
      background-image url('//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-553dba3aff.png')
      background-repeat no-repeat
      background-position 13px 8px
  .searchLists
    width 100%
    height 376px
    background-color #fff
    margin-bottom 17px
    padding 0 25px 25px
    >p
      width 589px
      height 77px
      spanne-height 77px
      color #999
      margin-left 15px
    >ul
      width 589px
      height 274px
      margin-left 15px
      >span
        height 41px
        line-height 41px
        padding 0 13px
        margin 0 27px 27px 0
        display inline-block
        border 1px solid #999
        border-radius 10px
        &.active
          color #b4282d
          border-color #b4282d
  .searchListItem
    position absolute
    top 75px
    left 0px
    background-color #fff
    width 100%
    >li
      width 100%
      height 50px
      line-height 50px
      margin-left 40px
      border-bottom 4px solid #eee
</style>
 