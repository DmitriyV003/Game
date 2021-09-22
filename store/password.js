import apiRoutes from '~/plugins/apiRoutes'

export const mutations = {
  setProfile(state, profile) {
    state.profile = profile
  },
}

export const actions = {
  async changePassword(ctx, data) {
    const res = await this.$axios.$post(apiRoutes.changePassword, JSON.stringify(data))
    console.log(res)
  },
}
