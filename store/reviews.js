import apiRoutes from '~/plugins/apiRoutes'

export const state = () => ({
  reviews: [],
  review: null,
  parentId: null,
  parentNickname: null,
  links: null,
  meta: null,
  currentPage: 1
})

export const mutations = {
  SET_REVIEWS(state, reviews) {
    state.reviews = [...state.reviews, ...reviews]
  },
  SET_REVIEW(state, review) {
    state.review = review
  },
  SET_META(state, data) {
    state.links = data.links
    state.meta = data.meta
  },
  SET_PARENT_ID(state, parentId) {
    state.parentId = parentId
  },
  SET_PARENT_NICKNAME(state, parentNickname) {
    state.parentNickname = parentNickname
  },
  SET_CURRENT_PAGE(state, page) {
    state.currentPage = page
  },
}

export const actions = {
  async getReviews({ commit, state }) {
    const res = await this.$axios.$get(apiRoutes.getReviews(state.currentPage))
    commit('SET_REVIEWS', res.data)
    commit('SET_META', { links: res.links, meta: res.meta })
  },
  async setParentId({ commit }, data) {
    commit('SET_PARENT_ID', data.id)
    commit('SET_PARENT_NICKNAME', data.nickname)
  },
  async clearParentComment({ commit }) {
    commit('SET_PARENT_ID', null)
    commit('SET_PARENT_NICKNAME', null)
  },
  async nextPage({ commit, state }) {
    commit('SET_CURRENT_PAGE', state.currentPage + 1)
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
  async postCreateComments ({ state, dispatch }, data) {
    data.reviewId = state.review.id
    state.parentId !== null ? data.parentId = state.parentId : null
    await this.$axios.$post(apiRoutes.postCreateReviewComment, data)
    dispatch('getReviewById', data.reviewId)
  }
}
