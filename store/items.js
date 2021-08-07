import apiRoutes from '~/plugins/apiRoutes'

export const state = () => ({
  item: null,
  proposals: null
})

export const actions = {
  async getItemById ({ commit }, id) {
    try {
      const res = await this.$axios.$get(apiRoutes.getItem(id))
      commit('SET_ITEM', res.data)
      console.log(res)
    } catch (e) {
      throw e
    }
  },
  async getItemProposals ({ commit }, { itemId, keyId }) {
    try {
      const res = await this.$axios.$get(apiRoutes.getItemProposals(itemId, keyId))
      commit('SET_ITEM_PROPOSALS', res.data)
      console.log(res)
    } catch (e) {
      throw e
    }
  }
}

export const mutations = {
  SET_ITEM (state, item) {
    state.item = item
  },
  SET_ITEM_PROPOSALS (state, items) {
    state.proposals = items
  }
}
