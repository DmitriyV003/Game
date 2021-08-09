import apiRoutes from '~/plugins/apiRoutes'

export const state = () => ({
    comments: null,
    comment: null
})

export const mutations = {
    SET_COMMENTS (state, comments) {
        state.comments = comments
    },
    SET_COMMENT (state, comment) {
        state.comment = comment
    }
}

export const actions = {
    async getComments ({ commit }) {
        try {
            const res = await this.$axios.$get(apiRoutes.getComments)
            commit('SET_COMMENTS', res.data)
        } catch (e) {
            throw e
        }
    },
    async getCommentById ({ commit }, id) {
        try {
            const res = await this.$axios.$get(apiRoutes.getCommentById(id))
            commit('SET_COMMENT', res.data)
        } catch (e) {
            throw e
        }
    },
}
