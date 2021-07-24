import apiRoutes from "~/plugins/apiRoutes";

export const state = () => ({
  profile: null
})

export const mutations = {
  setProfile (state, profile) {
    state.profile = profile
  },
  SET_USER_AVATAR (state, avatar) {
    if (state.profile !== null) {
      state.profile.data.avatar = avatar
    }
  }
}

export const actions = {
  async getProfile ({ commit }) {
    try {
      const res = await this.$axios.$get(this.$axios.defaults.baseURL + apiRoutes.getProfile)
      commit('setProfile', res)
    } catch (e) {
      throw e
    }
  },
  setAvatar ({ commit }, avatar) {
    commit('SET_USER_AVATAR', avatar)
    commit('user/SET_USER_AVATAR', avatar, { root: true })
  },
  async postChangeAvatar (ctx, data) {
    try {
      await this.$axios.$post(this.$axios.defaults.baseURL + apiRoutes.postChangeAvatar, 
        data, 
        { headers: { 'Content-Type': 'multipart/form-data' } }
        )
    } catch (e) {
      throw e
    }
  }
}
