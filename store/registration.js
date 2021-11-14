import apiRoutes from '~/plugins/apiRoutes'

export const actions = {
  async signUpByEmail(ctx, data) {
    return await this.$axios.$post(apiRoutes.signUpByEmail, data)
  },
  async submitEmail(ctx, data) {
    await this.$axios.$post(apiRoutes.postConfirmEmail, data)
  }
}
