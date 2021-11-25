import apiRoutes from '~/plugins/apiRoutes'
import cart      from '~/apiRoutes/cart'

const _ = require('lodash');

export const state = () => ({
  paymentMethod: {},
  items: [],
  isPaid: false,
  step: 1,
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
  async buy({ commit, state }) {
    const data = {
      paymentMethod: state.paymentMethod.id,
      items: state.items
    }
    const result = await this.$axios.$post(cart.postBuyFromCart, data)

    commit('SET_PAY_STATUS', true)
  },
  async postNewDisputeFromCart({ commit, rootState }) {
    const data = {
      text: rootState.items.form.comment,
      image: 'iamge'
    }
    const result = await this.$axios.$post(cart.postDisputeFromCart(rootState.purchases.purchase.keyId, rootState.purchases.type), data)
    console.log(result)

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
