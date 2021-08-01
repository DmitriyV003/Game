import apiRoutes from '~/plugins/apiRoutes'

export const state = () => ({
  sliderNews: null,
  cardNews: null,
  news: null
})

export const mutations = {
  SET_SLIDER_NEWS (state, news) {
    state.sliderNews = news
  },
  SET_CARD_NEWS (state, news) {
    state.cardNews = news
  },
  SET_NEWS (state, news) {
    state.news = news
  }
}

export const actions = {
  async getSliderNews ({ commit }) {
    try {
      const res = await this.$axios.$get(apiRoutes.getSliderNews)
      commit('SET_SLIDER_NEWS', res.data)
    } catch (e) {
      throw e
    }
  },
  async getCardNews ({ commit }) {
    try {
      const res = await this.$axios.$get(apiRoutes.getCardNews)
      commit('SET_CARD_NEWS', res.data)
    } catch (e) {
      throw e
    }
  },
  async getNewsById ({ commit }, id) {
    try {
      const res = await this.$axios.$get(apiRoutes.getNewsById(id))
      commit('SET_NEWS', res.data)
    } catch (e) {
      throw e
    }
  }
}
