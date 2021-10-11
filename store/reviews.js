import apiRoutes from '~/plugins/apiRoutes'

export const state = () => ({
  reviews: [],
  review: null,
  parentId: null,
})

export const mutations = {
  SET_REVIEWS(state, reviews) {
    state.reviews = reviews
  },
  SET_REVIEW(state, review) {
    state.review = review
  },
  SET_PARENT_ID(state, parentId) {
    state.parentId = parentId
  },
}

export const actions = {
  async getReviews({ commit, dispatch }) {
    const res = await this.$axios.$get(apiRoutes.getReviews)
    commit('SET_REVIEWS', res.data)
  },
  async setParentId({ commit }, parentId) {
    commit('SET_PARENT_ID', parentId)
  },
  async makeCommentTree({ commit }, comments) {
    if (comments.length === 0) {
      return []
    }

    return comments
      .reduce((a, c) => {
        c.children = comments.filter((i) => i.parentId === c.id)
        a.push(c)

        return a
      }, [])
      .filter((x) => x.parentId === null)
  },
  async getReviewById({ commit, dispatch }, id) {
    const res = await this.$axios.$get(apiRoutes.getReviewById(id))
    res.data.reviewComments = await dispatch('makeCommentTree', res.data.reviewComments)
    commit('SET_REVIEW', res.data)
  },
  async postCreateComments ({ state }, data) {
    data.reviewId = state.review.id
    state.parentId !== null ? data.parentId = state.parentId : null
    await this.$axios.$post(apiRoutes.postCreateReviewComment, data)
  }
}
