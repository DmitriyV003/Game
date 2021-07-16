import apiRoutes from '~/plugins/apiRoutes'

export const state = () => ({
  token: 'token'
})

export const mutations = {
  setToken (sate, token) {
    state.token = token
  }
}

export const actions = {
  async signInByEmail (ctx, data) {
    try {
      const res = await this.$axios.$get(this.$axios.defaults.baseURL + apiRoutes.signInByEmail + `?email=${data.email}&password=${data.password}`)
      console.log(res)
    } catch (e) {
      throw e
    }
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

}
