import apiRoutes from '~/plugins/apiRoutes'

export const state = () => ({
})

export const mutations = {

}

export const actions = {
  async postFeedback({ rootState }, data ) {
    data.sellerId = rootState.purchases.purchase.sellerId
    data.keyId = rootState.purchases.purchase.keyId
    data.itemType = rootState.purchases.purchase.type === 'games' ? 'game' : 'software'
    const res = await this.$axios.$post(apiRoutes.postFeedback, data)
  },
}
