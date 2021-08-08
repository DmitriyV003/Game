import apiRoutes from '~/plugins/apiRoutes'

export const state = () => ({
    items: null,
    meta: null,
    filters: null
})

export const mutations = {
    SET_GAMES (state, games) {
        state.items = games
    },
    SET_META (state, meta) {
        state.meta = meta
    },
    SET_FILTERS (state, filters) {
        state.filters = filters
    }
}

export const actions = {
    async getCatalogGames ({ commit }) {
        try {
            const res = await this.$axios.$get(apiRoutes.getGameCatalog)
            commit('SET_GAMES', res.data)
            res.meta.links = res.links
            commit('SET_META', res.meta)
        } catch (e) {
            throw e
        }
    },
    async getCatalogGamesFilters ({ commit }) {
        try {
            const res = await this.$axios.$get(apiRoutes.getGameCatalogFilters)
            commit('SET_FILTERS', res.data)
        } catch (e) {
            throw e
        }
    }
}

