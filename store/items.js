import apiRoutes from '~/plugins/apiRoutes'

export const state = () => ({
  item: null,
  proposals: null,
  form: {
    rating: null,
    comment: null
  }
})

export const actions = {
  async postComment({ commit, rootGetters, state }, keyId) {
    const form = {}
    const item = rootGetters['cart/getItemByKey'](keyId)
    form.keyId = keyId
    form.sellerId = item.sellerId
    form.itemType = item.itemType
    form.rate = state.form.rating
    form.comment = state.form.comment
    const res = await this.$axios.$post(apiRoutes.postPurchaseFeedback, form)
    commit('SET_FORM_FIELD', { field: 'rating', value: null })
    commit('SET_FORM_FIELD', { field: 'comment', value: null })
  },
  async getItemById({ commit, rootState }, id) {
    // TODO Unified catalog/product type
    const res = await this.$axios.$get(apiRoutes.getItem(id, rootState['catalog'].type === 'games' ? 'game' : 'software'))
    commit('SET_ITEM', res.data)
  },
  async getItemProposals({ commit, state, rootState }, id) {
    // TODO Unified catalog/product type
    const res = await this.$axios.$get(apiRoutes.getItemProposals(rootState['catalog'].type === 'games' ? 'game' : 'software', id, state.item.sellerId))
    commit('SET_ITEM_PROPOSALS', res.data)
  },
}

export const mutations = {
  SET_ITEM(state, item) {
    state.item = item
  },
  SET_FORM_FIELD(state, { value, field }) {
    state.form[field] = value
  },
  SET_ITEM_PROPOSALS(state, items) {
    state.proposals = items
  },
}
