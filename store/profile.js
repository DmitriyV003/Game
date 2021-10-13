import apiRoutes from '~/plugins/apiRoutes'
import Cookies   from 'js-cookie'

export const state = () => ({
  profile: null,
})

export const mutations = {
  setProfile(state, profile) {
    state.profile = profile
  },
  SET_USER_AVATAR(state, avatar) {
    if (state.profile !== null) {
      state.profile.data.avatar = avatar
    }
  },
  SET_PROFILE_FIELD(state, payload) {
    console.log(payload)
    state.profile.data[payload.field] = payload.value
  },
}

export const actions = {
  async getProfile({ commit }) {
    const res = await this.$axios.$get(apiRoutes.getProfile)
    commit('setProfile', res)
  },
  editProfileField({ commit }, payload) {
    commit('SET_PROFILE_FIELD', payload)
  },
  setAvatar({ commit }, avatar) {
    commit('SET_USER_AVATAR', avatar)
    commit('user/SET_USER_AVATAR', avatar, { root: true })
  },
  async postEditProfile({ state }) {
    const res = await this.$axios.$post(
      apiRoutes.postEditProfile,
      JSON.stringify({
        name: state.profile.data.name,
        surname: state.profile.data.surname,
        nickname: state.profile.data.nickname,
      })
    )

    Cookies.remove('user')
  },
  async postChangeAvatar({ dispatch, rootState }, data) {
    await this.$axios.$post(
      apiRoutes.postChangeAvatar,
      data,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
    )
    await dispatch('getProfile')
    await dispatch('user/setUser', rootState.profile.profile.data, { root: true })
  },
}
