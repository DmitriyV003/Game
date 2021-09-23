import apiRoutes from '~/plugins/apiRoutes'

export const state = () => ({
  item: null,
  proposals: null,
})

export const actions = {
  async getItemById({ commit }, { id, type }) {
    const res = await this.$axios.$get(apiRoutes.getItem(id, type))
    commit('SET_ITEM', res.data)
    console.log(res)
  },
  async getItemProposals({ commit }, { itemId, keyId }) {
    const res = await this.$axios.$get(apiRoutes.getItemProposals(itemId, keyId))
    commit('SET_ITEM_PROPOSALS', res.data)
    console.log(res)
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
