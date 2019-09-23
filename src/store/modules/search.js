import {
  RECEIVE_SEARCH,
  RECEIVE_HOT_WORDS
} from '../mutations-type'
import {
  reqSearch,
  reqHotKeyWords
} from '../../api'
const state = {
  searchArr: [],
  searchHotKeyWords: []
}
const mutations = {
  [RECEIVE_SEARCH](state, searchArr) {
    state.searchArr = searchArr
  },
  [RECEIVE_HOT_WORDS](state, searchHotKeyWords) {
    state.searchHotKeyWords = searchHotKeyWords
  }
}
const actions = {
  async getSearch({
    commit
  }, searchText) {

    if (this.timer) {
      clearTimeout(this.timer);
    }
    if (searchText && searchText.length > 0) {
      //获取当前延时函数的ID，便于后面clearTimeout清除该ID对应的延迟函数
      this.timer = setTimeout(async () => {
        const result = await reqSearch(searchText)
        if (result.code === '200') {
          const searchArr = result.data
          commit(RECEIVE_SEARCH, searchArr)
        }
      }, 500);
    }
  },
  async getHotWords({
    commit
  }) {
    const result = await reqHotKeyWords()
    if (result.code === '200') {
      const searchHotKeyWords = result.data.hotKeywordVOList
      commit(RECEIVE_HOT_WORDS, searchHotKeyWords)
    }
  }
}
const getters = {}

export default {
  state,
  actions,
  mutations,
  getters
}