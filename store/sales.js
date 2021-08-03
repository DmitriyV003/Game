import apiRoutes from '~/plugins/apiRoutes'

export const state = () => ({
  sales: null
})

export const mutations = {
  
}

export const actions = {
  async getSearchItems ({ commit }, data) {
      try {
        const res = await this.$axios.$get(apiRoutes.getSearchItems('name=' + data))
        console.log(res)
      } catch (e) {
        throw e
      }
  },
  async getSaleItem ({ commit }, id) {
    try {
      const res = await this.$axios.$get(apiRoutes.getSaleItem('name=' + id))
    } catch (e) {
      throw e
    }
  }
}
