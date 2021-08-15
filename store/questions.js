import apiRoutes           from '~/plugins/apiRoutes'
import questionsCategories from '~/plugins/questionsCategories'
import { eventBus }        from '~/plugins/event-bus'

export const state = () => ({
  questions: null,
  category: questionsCategories.general,
  // TODO Delete this shit
  newAnswer: false
})

export const mutations = {
  SET_QUESTIONS(state, questions) {
    state.questions = questions
  },
  SET_CATEGORY(state, category) {
    state.category = category
  },
  ADD_QUESTION(state, question) {
    state.questions.push(question)
  },
}

export const actions = {
  // TODO delete this shit
  async getRetry({ commit, rootState }) {
    if (rootState.auth.token == null) {
      return
    }
    try {
      let newAnswer = false
      const data = await this.$axios.$get(
        apiRoutes.getAppeals('general')
      )
      let interval = setInterval(async () => {
        data.data = data.data.filter(x => x.appealAnswered === 0)

        for (const item of data.data) {
          const res = await this.$axios.$get('/personal-area/appeals/general/to/' + item.appealId + '/get-status')
          if (res.appealStatus === 1) {
            newAnswer = true
            eventBus.$emit('newAnswer')
          }
        }

        if (data.data.length === 0) {
          clearInterval(interval)
        }
      }, 120000)
    } catch (e) {
      console.log(e)
    }
  },
  async getQuestions({ commit, state }, category) {
    try {
      commit('SET_CATEGORY', category)
      const res = await this.$axios.$get(
        apiRoutes.getAppeals(state.category.value)
      )
      commit('SET_QUESTIONS', res.data)
    } catch (e) {
      throw e
    }
  },
  async postCreateQuestion({ commit, state }, data) {
    try {
      const res = await this.$axios.$post(
        apiRoutes.postCreateQuestion(state.category.value),
        JSON.stringify(data)
      )
      //commit('ADD_QUESTION', res.data)
      console.log(res.data)
    } catch (e) {
      throw e
    }
  },
}

export const getters = {
  getQuestionCategory: (state) => state.category,
  getQuestionById: (state) => (id) => {
    return state.questions.find((el) => el.appealId === id)
  },
}
