import apiRoutes from '~/plugins/apiRoutes'

export const mutations = {
  setProfile(state, profile) {
    state.profile = profile
  },
}

export const actions = {
  async changePassword(ctx, data) {
    try {
      const res = await this.$axios.$post(
        this.$axios.defaults.baseURL + apiRoutes.changePassword,
        JSON.stringify(data)
      )
      console.log(res)
    } catch (e) {
      throw e
    }
  },
}
