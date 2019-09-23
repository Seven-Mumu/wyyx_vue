import {
  RECEIVE_CATEGORYS
} from '../mutations-type'
import {
  reqCategory
} from '../../api'
const state = {
  categorys: []
}
const mutations = {
  [RECEIVE_CATEGORYS](state, categorys) {
    state.categorys = categorys
  }
}
const actions = {
  async getCategorys({
    commit
  }) {
    const result = await reqCategory()
    if (result.code === 0) {
      const categorys = result.data
      commit(RECEIVE_CATEGORYS, categorys)
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