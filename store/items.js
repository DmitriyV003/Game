import apiRoutes from '~/plugins/apiRoutes'

export const state = () => ({
  item: null,
  proposals: null,
})

export const actions = {
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
  SET_ITEM_PROPOSALS(state, items) {
    state.proposals = items
  },
}
