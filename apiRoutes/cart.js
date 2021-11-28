export default {
  postBuyFromCart: '/v1/cart/buy',
  postCreateDispute: (type, keyId) => `/cart/dispute/${type}/${keyId}`,
  getBalance: '/cart/balance',
  postDisputeFromCart: '/v1/personal-area/appeals/dispute'
}
