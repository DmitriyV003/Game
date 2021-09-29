import apiRoutes from '~/plugins/apiRoutes'

export const state = () => ({
})

export const mutations = {

}

export const actions = {
  async postDispute({ rootState }, data) {
    const type = rootState.purchases.purchase.type === 'games' ? 'game' : 'software'
    const res = await this.$axios.$post(apiRoutes.postDispute(rootState.purchases.purchase.keyId, type), JSON.stringify(data))
  },
}
