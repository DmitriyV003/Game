export const state = () => ({
  user: null,
})

export const mutations = {
  setUser(state, user) {
    state.user = user
  },
  SET_USER_AVATAR(state, avatar) {
    if (state.user !== null) {
      state.user.avatar = avatar
    }
  },
}

export const actions = {
  setUser({ commit }, user) {
    this.$cookiz.remove('user')
    this.$cookiz.set('user', user)

    commit('setUser', user)
  },
}
