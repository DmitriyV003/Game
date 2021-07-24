import Cookie from "cookie";
import Cookies from "js-cookie";

export const state = () => ({
  user: null
})

export const mutations = {
  setUser (state, user) {
    state.user = user
  },
  SET_USER_AVATAR (state, avatar) {
    if (state.user !== null) {
      state.user.avatar = avatar
    }
  }
}

export const actions = {
  setUser ({ commit }, user) {
    Cookies.remove('user')
    Cookies.set('user', user, { expires: 1 })
    
    commit('setUser', user)
  }
}
