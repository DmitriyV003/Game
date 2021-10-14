import apiRoutes from '~/plugins/apiRoutes'

const _ = require('lodash');

export const state = () => ({
  paymentMethod: {},
  items: [],
  isPaid: false
})

export const mutations = {
  setPaymentMethod(state, method) {
    state.paymentMethod = method
  },
  ADD_ITEM(state, item) {
    state.items.push(item)
  },
  SET_ITEMS(state, items) {
    state.items = items
  },
  SET_PAY_STATUS(state, status) {
    state.isPaid = status
  }
}

export const actions = {
  addItem({ commit, rootState, state }) {
    const item = {
      keyId: rootState['items'].item.keyId,
      itemType: rootState['items'].item.itemType,
      name: rootState['items'].item.name,
      itemPrice: rootState['items'].item.itemPrice,
      image: rootState['items'].item.headerImage,
      sellerNickname: rootState['items'].item.sellerNickname,
      sellerId: rootState['items'].item.sellerId,
      sellerName: rootState['items'].item.sellerName,
      sellerSurname: rootState['items'].item.sellerSurname,
      sellerAvatar: rootState['items'].item.sellerAvatar
    }

    if (!_.findKey(state.items, function (i) {
        return i.keyId === item.keyId
    })) {
      commit('ADD_ITEM', item)
      this.$cookiz.set('gameInComeCart', state.items)
    }
  },
  getItemsFromCookies({ commit }, app) {
    const items = app.$cookiz.get('gameInComeCart')
    if (items) {
      commit('SET_ITEMS', items)
    }
  },
  // TODO: buy action doesn't work
  async buy({ commit, state }) {
    // await this.$axios.$get(apiRoutes.getBuyCartItems(JSON.stringify(state.items), state.paymentMethod.name))

    commit('SET_PAY_STATUS', true)
  },
  deleteItem({ commit, state }, keyId) {
    commit('SET_ITEMS', _.filter(state.items, function (i) {
      return i.keyId !== keyId
    }))
    this.$cookiz.set('gameInComeCart', state.items)
  },
  deleteAllItems({ commit, state }) {
    commit('SET_ITEMS', [])
    this.$cookiz.set('gameInComeCart', state.items)
  },
  // TODO: cannot check items in cart
  async checkItemsInCart({ state }) {
    const res = await this.$axios.$post(apiRoutes.getCheckItemsInCart, state.items)
    console.log(res)
  }
}

export const getters = {
  getItems: (state) => {
    return _.groupBy(state.items, 'sellerNickname')
  },
  getCartTotalSum: (state) => {
    return _.sumBy(state.items, function (item) {
      return item.itemPrice.old
    })
  },
  getItemByKey: (state) => (keyId) => {
    return _.find(state.items, function (item) {
      return item.keyId === keyId
    })
  },
}
