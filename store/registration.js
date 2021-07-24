import apiRoutes from '~/plugins/apiRoutes'

export const actions = {
  async signUpByEmail (ctx, data) {
    try {
      return await this.$axios.$post(`${this.$axios.defaults.baseURL + apiRoutes.signUpByEmail}`, data, { headers: {
        'Content-Type': 'application/json'
        } })
    } catch (e) {
      console.log(e)
      throw e
    }
  }
}
