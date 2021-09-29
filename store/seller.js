import apiRoutes from '~/plugins/apiRoutes'

export const state = () => ({
  sellerGames: null,
})

export const mutations = {
  SET_SELLER_GAMES(state, games) {
    state.sellerGames = games
  },
}

export const actions = {
  async getSellerItems({ commit }, id) {
    const res = await this.$axios.$get(apiRoutes.getSellerItems(id))
    commit('SET_SELLER_GAMES', res.data)
  },
  async postBecomeSeller({ commit }) {
    try {
      const res = await this.$axios.$post(apiRoutes.postBecomeSeller)
      // console.log(res)
    } catch (e) {
      commit('SET_WARNING', e.response.data, { root: true })
      throw e
    }
  },
}
