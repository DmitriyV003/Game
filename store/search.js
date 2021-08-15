import apiRoutes from '~/plugins/apiRoutes'

export const state = () => ({
  value: null,
  result: null,
})

export const mutations = {
  SET_RESULT(state, res) {
    state.result = res
  },
}

export const actions = {
  async getSearch({ commit }, data) {
    try {
      const res = await this.$axios.$get(apiRoutes.getSearch(data))
      commit('SET_RESULT', res.data)
    } catch (e) {
      throw e
    }
  },
}
