import apiRoutes from '~/plugins/apiRoutes'

export const state = () => ({
  sales: [],
  searchItems: [],
  saleItem: null,
  type: 'games',
  status: 'bought'
})

export const mutations = {
  SET_SEARCH_ITEMS(state, items) {
    state.searchItems = items
  },
  SET_SALE_ITEM(state, item) {
    state.saleItem = item
  },
  SET_SALES_STATUS(state, status) {
    state.status = status
  },
  SET_TYPE(state, type) {
    state.type = type
  },
  SET_SALES(state, sales) {
    state.sales = sales
  },
}

export const actions = {
  changeSaleType({commit}, type) {
    commit('SET_TYPE', type)
  },
  changeSalesStatus({commit}, status) {
    commit('SET_SALES_STATUS', status)
  },
  async getSearchItems({ commit }, data) {
    const res = await this.$axios.$get(apiRoutes.getSearchItems('name=' + data))
    commit('SET_SEARCH_ITEMS', res.data)
  },
  async getSales({ commit, state }) {
    const res = await this.$axios.$get(apiRoutes.getSales(state.type))
    commit('SET_SALES', res.data)
  },
  async getSaleItem({ commit, state }, id) {
    const res = await this.$axios.$get(apiRoutes.getSaleItem(`id=${id}&itemType=${state.type}`))
    commit('SET_SALE_ITEM', res.data)
  },
  async postNewSale({ commit, rootState }, data) {
    const copy = {}
    Object.assign(copy, data)
    copy.keys = rootState.key.keys.join(',')
    copy.itemId = rootState.sales.saleItem.id
    copy.price = data.price
    copy.itemType = rootState.sales.type
    const res = await this.$axios.$post(apiRoutes.postNewSale, copy)
  },
}
