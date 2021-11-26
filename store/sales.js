import apiRoutes from '~/plugins/apiRoutes'
import _ from 'lodash'

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
    const sales = _.flattenDeep(_.map(res.data, (el) => {
      return Object.values(el)
    }))
    commit('SET_SALES', sales)
  },
  async changeArchiveStatus({ commit, state }, data) {
    const res = await this.$axios.$put(apiRoutes.putChangeArchiveStatus(data.itemId, state.type), {
      archive: data.archive
    })
  },
  async deleteSaleItem({ commit, state }, data) {
    const res = await this.$axios.$delete(apiRoutes.putChangeArchiveStatus(data.itemId, state.type))
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
