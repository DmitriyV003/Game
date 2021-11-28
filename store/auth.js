import apiRoutes from '~/plugins/apiRoutes'

export const state = () => ({
  token: null,
})

export const mutations = {
  setToken(state, token) {
    state.token = token
  },
}

export const actions = {
  async signInByEmail({ commit, dispatch }, data) {
    const res = await this.$axios.$post(apiRoutes.postSignInByEmail, data)
    if (res.status === 200) {
      dispatch('user/setUser', res.data, { root: true })
      dispatch('setToken', res.token)
      await this.$router.push('/')
    }
  },
  async autoLogin({ dispatch }) {
    const token = this.$cookiz.get('gameInComeToken')

    if (token) {
      dispatch('setToken', token)
      const user = await this.$axios.$get(apiRoutes.getProfile)
      dispatch('user/setUser', user.data, { root: true })
    }
  },
  async logOut({ commit }) {
    commit('setToken', null)
    commit('user/setUser', null, { root: true })
    this.$cookiz.remove('gameInComeToken')
    this.$cookiz.remove('user')
    await this.$router.push('/')
  },
  setToken({ commit }, token) {
    commit('setToken', token)
    this.$cookiz.remove('gameInComeToken')
    this.$cookiz.set('gameInComeToken', token)
  },
  async forgetPassword(ctx, data) {
    const res = await this.$axios.$get(apiRoutes.forgetPassword +`?email=${data.email}`)
    console.log(res)
  },
  async renewPassword(ctx, data) {
    try {
    } catch (e) {
      throw e
    }
  },
}

export const getters = {
  getToken: (state) => state.token,
}
