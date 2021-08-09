import apiRoutes from '~/plugins/apiRoutes'

export const state = () => ({
    items: null,
    meta: null,
    filters: null,
    acceptedFilters: {
        categories: [],
        services: [],
        platforms: [],
        genres: [],
        minPrice: 0,
        maxPrice: 0
    }
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
    },
    ADD_FILTER (state, { filterType, filter }) {
        state.acceptedFilters[filterType] = filter
    },
    CLEAR_FILTERS (state) {
        state.acceptedFilters.categories = []
        state.acceptedFilters.platforms = []
        state.acceptedFilters.services = []
        state.acceptedFilters.genres = []
    },
    DELETE_FILTER (state, { filterType, filter }) {
        state.acceptedFilters[filterType] = state.acceptedFilters[filterType].filter(x => x !== filter)
    },
    SET_PRICE_FILTER (state, { minPrice, maxPrice }) {
        if (minPrice) {
            state.acceptedFilters.minPrice = minPrice
        }
        if (maxPrice) {
            state.acceptedFilters.maxPrice = maxPrice
        }
    }
}

export const actions = {
    deleteFilter ({ commit }, { filterType, filter }) {
        commit('DELETE_FILTER', { filterType, filter })
    },
    clearFilters ({ commit, state }) {
        commit('CLEAR_FILTERS')
        commit('SET_PRICE_FILTER', { minPrice: state.filters.price.minPrice, maxPrice: state.filters.price.maxPrice })
    },
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
    addFilter ({ commit, dispatch }, { filterType, filter }) {
        commit('ADD_FILTER', { filterType, filter })
    },
    changePriceFilter ({ commit, dispatch }, { minPrice, maxPrice }) {
        commit('SET_PRICE_FILTER', { minPrice, maxPrice })
    },
    async getFilteredItems ({ commit, state }) {
      try {
          const data = {
              minPrice: state.acceptedFilters.minPrice,
              maxPrice: state.acceptedFilters.maxPrice,
              categories: state.acceptedFilters.categories.join(','),
              services: state.acceptedFilters.services.join(','),
              platforms: state.acceptedFilters.platforms.join(','),
              genres: state.acceptedFilters.genres.join(',')
          }
          let query = ''
          
          for (let item in data) {
              if (data[item]) {
                  query += `${item}=${data[item]}&`
              }
          }
          
          const res = await this.$axios.$get(apiRoutes.getFilteredGameCatalog(query))
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
            commit('SET_PRICE_FILTER', { minPrice: res.data.price.minPrice, maxPrice: res.data.price.maxPrice })
        } catch (e) {
            throw e
        }
    }
}

export const getters = {
    getFilterNameForTag: (state) => ({ filterType, filter }) => {
        return state.filters[filterType].find(x => x.id === filter)
    }
}

