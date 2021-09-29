import apiRoutes from '~/plugins/apiRoutes'

export const state = () => ({
  comments: null,
  comment: null,
  recommendedGames: null,
  additionalComments: null,
  currentPage: 1,
  lastPage: 1
})

export const mutations = {
  SET_COMMENTS(state, comments) {
    state.comments = comments
  },
  SET_COMMENT(state, comment) {
    state.comment = comment
  },
  SET_CURRENT_PAGE(state, currentPage) {
    state.currentPage = currentPage
  },
  SET_LAST_PAGE(state, lastPage) {
    state.lastPage = lastPage
  },
  INCREMENT_CURRENT_PAGE(state) {
    if (state.currentPage < state.lastPage) {
      state.currentPage += 1
    }
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
    commit('SET_LAST_PAGE', res.meta.last_page)
  },
  async getMoreComments({ commit, state }) {
    commit('INCREMENT_CURRENT_PAGE')
    const res = await this.$axios.$get(apiRoutes.getComments + `?page=${state.currentPage}`)
    commit('SET_COMMENTS', [...state.comments, ...res.data])
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
