import apiRoutes from '~/plugins/apiRoutes'

export const state = () => ({
  purchases: [],
  purchase: null,
  type: 'games',
  form: {
    rating: null,
    comment: null
  }
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
  SET_FORM_FIELD(state, { value, field }) {
    state.form[field] = value
  },
}

export const actions = {
  async getAll({ commit, state }) {
    const res = await this.$axios.$get(apiRoutes.getAllPurchases(state.type))
    commit('SET_PURCHASES', res.data)
  },
  async postComment({ commit, rootGetters, state }, keyId) {
    const form = {}
    form.keyId = state.purchase.keyId
    form.sellerId = state.purchase.sellerId
    form.itemType = state.type === 'games' ? 'game' : 'software'
    form.rate = state.form.rating
    form.comment = state.form.comment
    const res = await this.$axios.$post(apiRoutes.postPurchaseFeedback, form)
    commit('SET_FORM_FIELD', { field: 'rating', value: null })
    commit('SET_FORM_FIELD', { field: 'comment', value: null })
  },
  async getPurchase({ commit, state }, id) {
    const res = await this.$axios.$get(apiRoutes.getPurchase(id, state.type === 'games' ? 'game' : 'software'))
    commit('SET_PURCHASE', res.data)
  },
}
