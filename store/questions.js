import apiRoutes from '~/plugins/apiRoutes'
import questionsCategories from '~/plugins/questionsCategories'

export const state = () => ({
  questions: null,
  category: questionsCategories.general
})

export const mutations = {
  SET_QUESTIONS (state, questions) {
    state.questions = questions
  },
  SET_CATEGORY (state, category) {
    state.category = category
  },
  ADD_QUESTION (state, question) {
    state.questions.push(question)
  }
}

export const actions = {
  async getQuestions ({ commit, state }, category) {
    try {
      commit('SET_CATEGORY', category)
      const res = await this.$axios.$get(apiRoutes.getAppeals(state.category.value))
      commit('SET_QUESTIONS', res.data)
    } catch (e) {
      throw e
    }
  },
  async postCreateQuestion ({ commit, state }, data) {
    try {
      const res = await this.$axios.$post(apiRoutes.postCreateQuestion(state.category.value), JSON.stringify(data))
      //commit('ADD_QUESTION', res.data)
      console.log(res.data)
    } catch (e) {
      throw e
    }
  }
}

export const getters = {
  getQuestionCategory: state => state.category,
  getQuestionById: (state) => (id) => {
    return state.questions.find(el => el.appealId === id)
  }
}
