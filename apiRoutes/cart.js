export default {
  postBuyFromCart: '/v1/cart/buy',
  postCreateDispute: (type, keyId) => `/cart/dispute/${type}/${keyId}`,
  getBalance: '/cart/balance',
  postDisputeFromCart: (keyId, type) => `/v1/cart/dispute/${type}/${keyId}`
}
