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
    const res = await this.$axios.$get(
      apiRoutes.getQuestionMessages(
        rootGetters['questions/getQuestionCategory'].value,
        questionId
      )
    )
    commit('SET_MESSAGES', res.data)
  },
  async postCreateMessage({ commit }, { id, data }) {
    const res = await this.$axios.$post(
      apiRoutes.postCreateMessage(id),
      JSON.stringify(data)
    )
    commit('SET_MESSAGES', res.data)
  },
}
