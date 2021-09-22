import apiRoutes from '~/plugins/apiRoutes'

export const state = () => ({
  comments: null,
  comment: null,
  recommendedGames: null,
  additionalComments: null,
})

export const mutations = {
  SET_COMMENTS(state, comments) {
    state.comments = comments
  },
  SET_COMMENT(state, comment) {
    state.comment = comment
  },
  SET_RECOMMENDED_GAMES(state, recommendedGames) {
    state.recommendedGames = recommendedGames
  },
  SET_ADDITIONAL_COMMENTS(state, additionalComments) {
    state.additionalComments = additionalComments
  },
}

export const actions = {
  async getComments({ commit }) {
    const res = await this.$axios.$get(apiRoutes.getComments)
    commit('SET_COMMENTS', res.data)
  },
  async getCommentById({ commit }, id) {
    const res = await this.$axios.$get(apiRoutes.getCommentById(id))
    commit('SET_COMMENT', res.data)
  },
  async getCommentRecommendedGames({ commit }, id) {
    const res = await this.$axios.$get(apiRoutes.getCommentRecommendedGames)
    commit('SET_RECOMMENDED_GAMES', res.data)
  },
  async getAdditionalComments({ commit }, id) {
    const res = await this.$axios.$get(apiRoutes.getAdditionalComments(id))
    commit('SET_ADDITIONAL_COMMENTS', res.data)
  },
}
