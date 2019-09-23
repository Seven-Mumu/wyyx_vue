import {
  RECEIVE_HOME_NAV,
  RECEIVE_HOME,
  RECEIVE_HOME_ITEMS
} from '../mutations-type'

import {
  reqHome
} from '../../api'
const state = {
  homeNav: [],
  homeSwiperImg: [],
  homeItems: []
}
const mutations = {
  // 导航
  [RECEIVE_HOME_NAV](state, homeNav) {
    state.homeNav = homeNav
  },
  // 轮播图
  [RECEIVE_HOME](state, homeSwiperImg) {
    state.homeSwiperImg = homeSwiperImg
  },
  // 轮播图以下
  [RECEIVE_HOME_ITEMS](state, homeItems) {
    state.homeItems = homeItems
  }
}
const actions = {
  // 导航
  async getHomeNav({
    commit
  }) {
    const result = await reqHome()
    if (result.code === 0) {
      const homeNav = result.data.kingKongModule.kingKongList
      commit(RECEIVE_HOME_NAV, homeNav)
    }
  },
  // 轮播图
  async getHomeItem({
    commit
  }) {
    const result = await reqHome()
    if (result.code === 0) {
      const homeSwiperImg = result.data.focusList
      commit(RECEIVE_HOME, homeSwiperImg)
    }
  },
  // 轮播图以下
  async getHomeItems({
    commit
  }) {
    const result = await reqHome()
    if (result.code === 0) {
      const homeItems = result.data
      commit(RECEIVE_HOME_ITEMS, homeItems)
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