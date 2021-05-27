export const state = () => ({
  paymentMethod: {},
  items: []
})

export const mutations = {
  setPaymentMethod (state, method) {
    state.paymentMethod = method
  }
}
