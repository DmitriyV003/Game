import apiRoutes from '~/plugins/apiRoutes'

export const state = () => ({
  messages: null,
})

export const mutations = {
  SET_MESSAGES(state, messages) {
    state.messages = messages
  },
}

export const actions = {
  async getQuestionMessages({ commit, rootGetters }, questionId) {
    try {
      const res = await this.$axios.$get(
        this.$axios.defaults.baseURL +
          apiRoutes.getQuestionMessages(
            rootGetters['questions/getQuestionCategory'].value,
            questionId
          )
      )
      commit('SET_MESSAGES', res.data)
    } catch (e) {
      throw e
    }
  },
  async postCreateMessage({ commit }, { id, data }) {
    try {
      const res = await this.$axios.$post(
        this.$axios.defaults.baseURL + apiRoutes.postCreateMessage(id),
        JSON.stringify(data)
      )
      commit('SET_MESSAGES', res.data)
    } catch (e) {
      throw e
    }
  },
}
