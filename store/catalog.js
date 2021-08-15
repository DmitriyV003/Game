import apiRoutes from '~/plugins/apiRoutes'

export const state = () => ({
  items: null,
  meta: null,
  filters: null,
  type: 'games',
  acceptedFilters: {
    categories: [],
    services: [],
    platforms: [],
    genres: [],
    minPrice: 0,
    maxPrice: 0,
  },
})

export const mutations = {
  SET_ITEMS(state, games) {
    state.items = games
  },
  SET_META(state, meta) {
    state.meta = meta
  },
  SET_TYPE(state, type) {
    state.type = type
  },
  SET_FILTERS(state, filters) {
    state.filters = filters
  },
  SET_FILTER_BY_TYPE(state, { filterType, filter }) {
    state.acceptedFilters[filterType] = filter
  },
  ADD_FILTER_TO_ARRAY(state, { filterType, filter }) {
    state.acceptedFilters[filterType] = [...state.acceptedFilters[filterType], ...filter]
  },
  CLEAR_FILTERS(state) {
    state.acceptedFilters.categories = []
    state.acceptedFilters.platforms = []
    state.acceptedFilters.services = []
    state.acceptedFilters.genres = []
  },
  DELETE_FILTER_BY_TYPE(state, { filterType, filter }) {
    state.acceptedFilters[filterType] = state.acceptedFilters[
      filterType
    ].filter((x) => x !== filter)
  },
  SET_PRICE_FILTER(state, { minPrice, maxPrice }) {
    if (minPrice) {
      state.acceptedFilters.minPrice = minPrice
    }
    if (maxPrice) {
      state.acceptedFilters.maxPrice = maxPrice
    }
  },
}

export const actions = {
  deleteFilter({ commit }, filterData) {
    commit('DELETE_FILTER_BY_TYPE', filterData)
  },
  setCatalogType({ commit }, type) {
    commit('SET_TYPE', type)
  },
  clearFilters({ commit, state }) {
    commit('CLEAR_FILTERS')
    commit('SET_PRICE_FILTER', {
      minPrice: state.filters.price.minPrice,
      maxPrice: state.filters.price.maxPrice,
    })
  },
  async getCatalogItems({ commit, state }) {
    try {
      const res = await this.$axios.$get(apiRoutes.getCatalogItems(state.type))
      commit('SET_ITEMS', res.data)
      res.meta.links = res.links
      commit('SET_META', res.meta)
    } catch (e) {
      throw e
    }
  },
  addFilter({ commit, dispatch }, filterData) {
    commit('SET_FILTER_BY_TYPE', filterData)
  },
  addFilterToArray({ commit, dispatch }, filterData) {
    commit('ADD_FILTER_TO_ARRAY', filterData)
  },
  changePriceFilter({ commit, dispatch }, prices) {
    commit('SET_PRICE_FILTER', prices)
  },
  async getFilteredItems({ commit, state }) {
    try {
      const data = {
        minPrice: state.acceptedFilters.minPrice,
        maxPrice: state.acceptedFilters.maxPrice,
        categories: state.acceptedFilters.categories.join(','),
        services: state.acceptedFilters.services.join(','),
        platforms: state.acceptedFilters.platforms.join(','),
        genres: state.acceptedFilters.genres.join(','),
      }
      let query = ''

      for (let item in data) {
        if (data[item]) {
          query += `${item}=${data[item]}&`
        }
      }

      const res = await this.$axios.$get(
        apiRoutes.getFilteredItemsCatalog(state.type, query)
      )
      commit('SET_ITEMS', res.data)
      res.meta.links = res.links
      commit('SET_META', res.meta)
    } catch (e) {
      throw e
    }
  },
  async getCatalogFilters({ commit, state }, type = null) {
    try {
      const res = await this.$axios.$get(apiRoutes.getCatalogFilters(state.type === null ? type : state.type))
      commit('SET_FILTERS', res.data)
      commit('SET_PRICE_FILTER', {
        minPrice: res.data.price.minPrice,
        maxPrice: res.data.price.maxPrice,
      })
    } catch (e) {
      throw e
    }
  },
  async getCatalogGamesByPage({ commit }, page) {
    try {
      const res = await this.$axios.$get(
        apiRoutes.getCatalogItems + `?page=${page}`
      )
      commit('SET_ITEMS', res.data)
      res.meta.links = res.links
      commit('SET_META', res.meta)
    } catch (e) {
      throw e
    }
  },
}

export const getters = {
  getFilterNameForTag:
    (state) =>
    ({ filterType, filter }) => {
      return state.filters[filterType].find((x) => x.id === filter)
    },
}
