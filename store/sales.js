import apiRoutes from '~/plugins/apiRoutes'

export const state = () => ({
  sales: null,
  searchItems: [],
  saleItem: null,
})

export const mutations = {
  SET_SEARCH_ITEMS(state, items) {
    state.searchItems = items
  },
  SET_SALE_ITEM(state, item) {
    state.saleItem = item
  },
}

export const actions = {
  async getSearchItems({ commit }, data) {
    const res = await this.$axios.$get(apiRoutes.getSearchItems('name=' + data))
    commit('SET_SEARCH_ITEMS', res.items)
  },
  async getSaleItem({ commit }, id) {
    const res = await this.$axios.$get(apiRoutes.getSaleItem('id=' + id))
    commit('SET_SALE_ITEM', res.data)
  },
  async postNewSale({ commit, rootState }, data) {
    const copy = {}
    Object.assign(copy, data)
    copy.keys = rootState.key.keys.join(',')
    copy.itemId = rootState.sales.saleItem.id
    copy.price = data.price * 100
    const res = await this.$axios.$post(apiRoutes.postNewSale, copy)
  },
}
