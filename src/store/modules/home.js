import {
  RECEIVE_HOME_NAV,
  RECEIVE_HOME,
  RECEIVE_HOME_ITEMS,
  RECEIVE_HOME_HOTSELL,
  RECEIVE_HOME_TIMEBUY
} from '../mutations-type'

import {
  reqHome
} from '../../api'
const state = {
  homeNav: [],
  homeSwiperImg: [],
  homeItems: [],
  homeHotSell: [],
  homeTimeBuy: []
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
  },
  // 类目热销榜
  [RECEIVE_HOME_HOTSELL](state, homeHotSell) {
    state.homeHotSell = homeHotSell
  },
  // 限时购
  [RECEIVE_HOME_TIMEBUY](state, homeTimeBuy) {
    state.homeTimeBuy = homeTimeBuy
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
  },
  // 热销榜
  async getHomeHotSell({
    commit
  }) {
    const result = await reqHome()
    if (result.code === 0) {
      const homeHotSell = result.data.categoryHotSellModule
      commit(RECEIVE_HOME_HOTSELL, homeHotSell)
    }
  },
  // 限时购
  async getTimeBuy({
    commit
  }) {
    const result = await reqHome()
    if (result.code === 0) {
      const homeTimeBuy = result.data.flashSaleModule
      commit(RECEIVE_HOME_TIMEBUY, homeTimeBuy)
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