import apiRoutes from '~/plugins/apiRoutes'

export const state = () => ({
  purchases: [],
  purchase: null,
})

export const mutations = {
  setPurchases(state, purchases) {
    state.purchases = purchases
  },
  setPurchase(state, purchase) {
    state.purchase = purchase
  },
}

export const actions = {
  async getAll({ commit }, type) {
    const res = await this.$axios.$get(apiRoutes.getAllPurchases(type))
    commit('setPurchases', res.data)
  },
  async fetchPurchase({ commit }, { id, type }) {
    const res = await this.$axios.$get(apiRoutes.getPurchase(id))
    commit('setPurchase', res.data)
  },
  async postFeedback({ state }, data) {
    data.sellerId = state.purchase.sellerInfo.sellerId
    data.keyId = state.purchase.keyId
    const res = await this.$axios.$post(apiRoutes.postPurchaseFeedback, JSON.stringify(data))
  },
}

export const getters = {
  getPurchases: (state) => (cb) => {
    return state.purchases.filter(cb)
  },
}
