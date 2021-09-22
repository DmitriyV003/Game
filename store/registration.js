import apiRoutes from '~/plugins/apiRoutes'

export const actions = {
  async signUpByEmail(ctx, data) {
    return await this.$axios.$post(apiRoutes.signUpByEmail, data)
  },
}
