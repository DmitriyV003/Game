import apiRoutes from '~/plugins/apiRoutes'

export const state = () => ({
  reviews: [],
  review: null,
})

export const mutations = {
  SET_REVIEWS(state, reviews) {
    state.reviews = reviews
  },
  SET_REVIEW(state, comment) {
    state.comment = comment
  },
}

export const actions = {
  async getReviews({ commit }) {
    const res = await this.$axios.$get(apiRoutes.getReviews)
    commit('SET_REVIEWS', res.data)
  },
  async getReviewById({ commit }, id) {
    const res = await this.$axios.$get(apiRoutes.getReviewById(id))
    commit('SET_REVIEW', res.data)
  },
}
