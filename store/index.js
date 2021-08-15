import apiRoutes from '~/plugins/apiRoutes'

export const state = () => ({
  mainPage: null,
  sellerPage: null,
  warning: null,
})

export const mutations = {
  SET_MAIN_PAGE(state, page) {
    state.mainPage = page
  },
  SET_SELLER_PAGE(state, page) {
    state.sellerPage = page
  },
  SET_WARNING(state, data) {
    if ('warning' in data) {
      state.warning = data.warning
    }
  },
}

export const actions = {
  nuxtServerInit({ dispatch }) {
    dispatch('auth/autoLogin')
  },
  async getMainPage({ commit }) {
    try {
      const res = await this.$axios.$get(apiRoutes.getMainPage)
      commit('SET_MAIN_PAGE', res.data)
    } catch (e) {
      throw e
    }
  },
  async getSellerPage({ commit }, id) {
    try {
      const res = await this.$axios.$get(apiRoutes.getSellerPage(id))
      commit('SET_SELLER_PAGE', res.data)
    } catch (e) {
      throw e
    }
  },
}
