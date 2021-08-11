import apiRoutes from '~/plugins/apiRoutes'

export const state = () => ({
    comments: null,
    comment: null,
    recommendedGames: null,
    additionalComments: null
})

export const mutations = {
    SET_COMMENTS (state, comments) {
        state.comments = comments
    },
    SET_COMMENT (state, comment) {
        state.comment = comment
    },
    SET_RECOMMENDED_GAMES (state, recommendedGames) {
        state.recommendedGames = recommendedGames
    },
    SET_ADDITIONAL_COMMENTS (state, additionalComments) {
        state.additionalComments = additionalComments
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
    async getCommentRecommendedGames ({ commit }, id) {
        try {
            const res = await this.$axios.$get(apiRoutes.getCommentRecommendedGames)
            commit('SET_RECOMMENDED_GAMES', res.data)
        } catch (e) {
            throw e
        }
    },
    async getAdditionalComments ({ commit }, id) {
        try {
            const res = await this.$axios.$get(apiRoutes.getAdditionalComments(id))
            commit('SET_ADDITIONAL_COMMENTS', res.data)
        } catch (e) {
            throw e
        }
    }
}
