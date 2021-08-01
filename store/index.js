import apiRoutes from '~/plugins/apiRoutes'

export const state = () => ({
  mainPage: null
})

export const mutations = {
  SET_MAIN_PAGE (state, page) {
    state.mainPage = page
  }
}

export const actions = {
  nuxtServerInit ({ dispatch }) {
    dispatch('auth/autoLogin')
  },
  async getMainPage ({ commit }) {
    try {
      const res = await this.$axios.$get(apiRoutes.getMainPage)
      commit('SET_MAIN_PAGE', res.data)
    } catch (e) {
      throw e
    }
  }
}
