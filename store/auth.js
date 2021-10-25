import apiRoutes from '~/plugins/apiRoutes'
import Cookie from 'cookie'
import Cookies from 'js-cookie'

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
    try {
      const res = await this.$axios.$get(
          apiRoutes.signInByEmail +
          `?email=${data.email}&password=${data.password}`
      )

      if (res.status === 200) {
        dispatch('user/setUser', res.data, { root: true })
        dispatch('setToken', res.token)
        await this.$router.push('/')
      }
    } catch (e) {
      throw e
    }
  },
  autoLogin({ dispatch }) {
    const cookieStr = process.browser
      ? document.cookie
      : this.app.context.req.headers.cookie

    try {
      const cookies = Cookie.parse(cookieStr || '') || {}
      const token = cookies.gameInComeToken
      const user = cookies.user

      dispatch('setToken', token)
      dispatch('user/setUser', user ? JSON.parse(user) : null, { root: true })
    } catch (e) {
      console.log(e)
    }
  },
  async logOut({ commit }) {
    commit('setToken', null)
    commit('user/setUser', null, { root: true })
    Cookies.remove('gameInComeToken')
    await this.$router.push('/')
  },
  setToken({ commit }, token) {
    commit('setToken', token)
    Cookies.remove('gameInComeToken')
    Cookies.set('gameInComeToken', token, { expires: 1 })
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
