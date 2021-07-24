export default {
  signUpByEmail: '/authorization/registration',
  signInByEmail: '/authorization/login',
  signInByVk: '/authorization/login/socialite/vk',
  forgetPassword: '/authorization/send-link-for-change-password',
  purchasesAll: '/personal-area/purchases',
  purchase: (id) => '/personal-area/purchases/show-key-card/' + id,
  postPurchaseFeedback: '/seller/create-feedback',
  getProfile: '/personal-area/profile',
  changePassword: '/personal-area/security',
  postChangeAvatar: '/personal-area/profile/edit-avatar',
  getAppeals: (category) => '/personal-area/appeals/' + category,
  getQuestionMessages: (category, id) => '/personal-area/appeals/' + category + '/to/' + id,
  postCreateQuestion: (category) => '/personal-area/appeals/' + category + '/create',
  postCreateMessage: (id) => '/personal-area/appeals/general/create-message/' + id 
}
