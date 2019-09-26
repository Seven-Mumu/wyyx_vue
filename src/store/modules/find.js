import {
  RECEIVE_FIND,
  RECEIVE_FIND_TAB,
  RECEIVE_FIND_FIRST
} from '../mutations-type'
import {
  reqAutoRecommendData,
  reqTabs,
  reqRecommendData
} from '../../api'
const state = {
  findArr: [],
  findTabs: [],
  findFirstArr: []
}
const mutations = {
  [RECEIVE_FIND](state, findArr) {
    state.findArr.push(...findArr.result)
    // let arr = findArr.result
    // state.findArr = state.findArr.concat(arr)
  },


  // tabs
  [RECEIVE_FIND_TAB](state, findTabs) {

    state.findTabs = findTabs
  },
  // 推荐页面数据
  [RECEIVE_FIND_FIRST](state, findFirstArr) {
    state.findFirstArr = findFirstArr
  }
}
const actions = {
  async getFindData({
    commit
  }, {
    page,
    size
  }) {
    const result = await reqAutoRecommendData(page, size)
    if (result.code === '200') {
      const findArr = result.data
      commit(RECEIVE_FIND, findArr)
    }
  },
  // tabs
  async getTabs({
    commit
  }) {
    const result = await reqTabs()
    if (result.code === '200') {
      const findTabs = result.data
      commit(RECEIVE_FIND_TAB, findTabs)
    }
  },
  // 首屏推荐
  async getFindFirst({
    commit
  }) {
    const result = await reqRecommendData()
    if (result.code === '200') {
      const findFirstArr = result.data
      commit(RECEIVE_FIND_FIRST, findFirstArr)
    }
  }
}
const getters = {}
export default {
  state,
  mutations,
  actions,
  getters
}