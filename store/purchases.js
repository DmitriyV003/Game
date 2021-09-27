import apiRoutes from '~/plugins/apiRoutes'

export const state = () => ({
  purchases: [],
  purchase: null,
  type: 'games'
})

export const mutations = {
  SET_PURCHASES(state, purchases) {
    state.purchases = purchases
  },
  SET_PURCHASE(state, purchase) {
    state.purchase = purchase
  },
  SET_TYPE(state, type) {
    state.type = type
  },
}

export const actions = {
  async getAll({ commit, state }) {
    const res = await this.$axios.$get(apiRoutes.getAllPurchases(state.type))
    commit('SET_PURCHASES', res.data)
  },
  async fetchPurchase({ commit, state }, id) {
    const res = await this.$axios.$get(apiRoutes.getPurchase(id, state.type === 'games' ? 'game' : 'software'))
    commit('SET_PURCHASE', res.data)
  },
  async postFeedback({ state }, data) {
    data.sellerId = state.purchase.sellerInfo.sellerId
    data.keyId = state.purchase.keyId
    const res = await this.$axios.$post(apiRoutes.postPurchaseFeedback, JSON.stringify(data))
  },
}
