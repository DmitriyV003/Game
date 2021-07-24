import apiRoutes from '~/plugins/apiRoutes'
import Cookie from 'cookie'
import Cookies from 'js-cookie'

export const state = () => ({
  token: null
})

export const mutations = {
  setToken (state, token) {
    state.token = token
  }
}

export const actions = {
  async signInByEmail ({ commit, dispatch }, data) {
    try {
      const res = await this.$axios.$get(this.$axios.defaults.baseURL + apiRoutes.signInByEmail + `?email=${data.email}&password=${data.password}`)
      
      if (res.status === 200) {
        console.log(res)
        dispatch('user/setUser', res.data, { root: true })
        dispatch('setToken', res.token)
        await this.$router.push('/')
      }
    } catch (e) {
      throw e
    }
  },
  autoLogin ({ dispatch, commit }) {
    const cookieStr = process.browser
      ? document.cookie
      : this.app.context.req.headers.cookie

    try {
      const cookies = Cookie.parse(cookieStr || '') || {}
      const token = cookies.token
      const user = cookies.user

      console.log(user)

      dispatch('setToken', token)
      dispatch('user/setUser', JSON.parse(user), { root: true })
    } catch (e) {
      console.log(e)
    }
  },
  logOut ({ commit, dispatch }) {
    dispatch('setToken', null)
    commit('user/setUser', null, { root: true })
    Cookies.remove('token')
  },
  setToken ({ commit }, token) {
    this.$axios.setToken(token, 'Bearer')
    commit('setToken', token)
    Cookies.remove('token')
    Cookies.set('token', token, { expires: 1 })
  },
  async forgetPassword (ctx, data) {
    try {
      const res = await this.$axios.$get(this.$axios.defaults.baseURL + apiRoutes.forgetPassword + `?email=${data.email}`)
      console.log(res)
    } catch (e) {
      throw e
    }
  },
  async renewPassword (ctx, data) {
    try {
      
    } catch (e) {
      throw e
    }
  }
}

export const getters = {
  getToken: state => state.token
}
