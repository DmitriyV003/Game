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
    const res = await this.$axios.$get(apiRoutes.signInByEmail +`?email=${data.email}&password=${data.password}`)
    if (res.status === 200) {
      dispatch('user/setUser', res.data, { root: true })
      await this.$router.push('/')
    }
  },
  autoLogin({ dispatch }) {
    const token = this.$cookiz.get('gameInComeToken')
    const user = this.$cookiz.get('user')

    if (user) {
      dispatch('user/setUser', user, { root: true })
    }

    if (token) {
      dispatch('setToken', token)
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
