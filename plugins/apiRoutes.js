export default {
  postSignUpByEmail: '/v1/auth/registration',//
  postSignInByEmail: '/v1/auth/login',//
  signInByVk: '/authorization/login/socialite/vk',//
  forgetPassword: '/authorization/send-link-for-change-password',//
  getAllPurchases: (type) => '/personal-area/purchases/' + type,
  getPurchase: (id, type) => '/personal-area/purchases/show-key-card/' + type + '/' + id,
  postPurchaseFeedback: '/seller/feedbacks/create-feedback',
  getProfile: '/personal-area/profile',//
  changePassword: '/personal-area/security',//
  postChangeAvatar: '/personal-area/profile/edit/avatar',
  getAppeals: (category) => '/personal-area/appeals/' + category,
  getQuestionMessages: (category, id) => '/personal-area/appeals/' + category + '/to/' + id,
  postCreateQuestion: (category) => '/personal-area/appeals/' + category + '/create',
  postCreateMessage: (type, id) => `/personal-area/appeals/${type}/create-message/${id}`,
  getSliderNews: '/news/small',
  getCardNews: '/news/big',
  getNewsById: (id) => '/news/' + id,
  getMainPage: '/main-page ',
  postEditProfile: '/personal-area/profile/edit/info',
  getSearchItems: (query) => '/personal-area/sale/add-item/key/search-item?' + query,
  getSaleItem: (query) => '/personal-area/sale/add-item/key/get-item-info?' + query,
  getItem: (id, type) => '/to-item/' + type + '/' + id,
  getItemProposals: (type, itemId, sellerId) =>
    `/to-item/${type}/${itemId}/${sellerId}/more-sellers`,
  postKeysFile: '/personal-area/sale/add-item/key/download-keys',
  postNewSale: '/personal-area/sale/add-item/key',
  getSellerPage: (id) => '/seller/profile/' + id,
  getSellerItems: (id) => '/seller/profile/' + id + '/items',
  getSearch: (name) => '/search?name=' + name,
  getCatalogItems: (type, order = 'desc') => '/catalog/items/' + type + '/' + order,
  getCatalogFilters: (type) => '/catalog/filter/' + type,
  getFilteredItemsCatalog: (query) => '/catalog/after-filters?' + query,
  getComments: '/seller/feedbacks',
  getCommentById: (id) => `/seller/feedbacks/${id}`,
  getCommentRecommendedGames: '/seller/feedbacks/recommendations',
  getAdditionalComments: (id) => `/seller/feedbacks/${id}/more-feedbacks`,
  postCreateNewsComment: '/news/create-comment',
  postBecomeSeller: '/seller/be-seller',
  postDispute: (id, type) => `/personal-area/appeals/dispute/create/${type}/${id}`,
  postFeedback: '/seller/feedbacks/create-feedback',
  getReviews: (page = 1) => `/reviews?page=${page}`,
  getReviewById: (id) => `/reviews/${id}`,
  getBalance: '/v1/personal-area/finance/balance',
  getTransactions: (page = 1) => `/v1/personal-area/finance/transactions?page=${page}`,
  postActivatePromoCode: (name) => `/v1/personal-area/finance/promo-code/${name}/activate`,
  postCreateReviewComment: '/reviews/create-comment',
  getCheckItemsInCart: '/cart/check-items-in-cart',
  getBuyCartItems: (items, method) => `/buy?items=${items}&method=${method}`,
  postConfirmEmail: '/authorization/registration/accept-email',
  getSales: (type) => `/v1/personal-area/sales/${type}`,
  postCreateSale: (type) => `/personal-area/sales/${type}`,
  deleteSale: (itemId, itemType) => `/v1/personal-area/sales/${itemType}/${itemId}`,
  putChangeArchiveStatus: (itemId, itemType) => `/v1/personal-area/sales/${itemType}/${itemId}`
}
