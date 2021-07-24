import apiRoutes from "~/plugins/apiRoutes";

export const state = () => ({
  purchases: [],
  purchase: null
})

export const mutations = {
  setPurchases (state, purchases) {
    state.purchases = purchases
  },
  setPurchase (state, purchase) {
    state.purchase = purchase
  }
}

export const actions = {
  async getAll ({ commit }) {
    try {
      const res = await this.$axios.$get(this.$axios.defaults.baseURL + apiRoutes.purchasesAll)
      commit('setPurchases', res.data)
    } catch (e) {
      throw e
    }
  },
  async fetchPurchase ({ commit }, id) {
    try {
      const res = await this.$axios.$get(this.$axios.defaults.baseURL + apiRoutes.purchase(id))
      commit('setPurchase', res.data)
    } catch (e) {
      throw e
    }
  },
  async postFeedback ({ state }, data) {
    try {
      data.sellerId = state.purchase.sellerInfo.sellerId
      data.keyId = state.purchase.keyId
      const res = await this.$axios.$post(this.$axios.defaults.baseURL + apiRoutes.postPurchaseFeedback, JSON.stringify(data))
    } catch (e) {
      throw e
    }
  }
}

export const getters = {
  getPurchases: (state) => (cb) => {
    return state.purchases.filter(cb)
  }
}
