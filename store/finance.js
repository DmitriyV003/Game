import apiRoutes from '~/plugins/apiRoutes'

export const state = () => ({
  balance: null,
  transactions: {
    data: [],
    meta: null,
    links: null
  }
})

export const mutations = {
  SET_BALANCE(state, balance) {
    state.balance = balance
  },
  SET_TRANSACTIONS(state, transactions) {
    state.transactions = transactions
  },
}

export const actions = {
  async getBalance({ commit }) {
    const res = await this.$axios.$get(apiRoutes.getBalance)
    commit('SET_BALANCE', res.data)
  },
  async getTransactions({ commit }) {
    const res = await this.$axios.$get(apiRoutes.getTransactions())
    commit('SET_TRANSACTIONS', {
      data: res.data,
      meta: res.meta,
      links: res.links
    })
  },
  async activatePromoCode({ commit }, data) {
    const res = await this.$axios.$post(apiRoutes.postActivatePromoCode(data.name))
  },
}
