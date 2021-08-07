import apiRoutes from '~/plugins/apiRoutes'

export const state = () => ({
  keys: []
})

export const mutations = {
  SET_KEYS (state, keys) {
    state.keys = [...state.keys, ...keys]
  },
  DELETE_KEY (state, key) {
    state.keys = state.keys.filter(x => x !== key )
  },
  ADD_KEY (state, key) {
    state.keys.push(key)
  }
}

export const actions = {
  async postKeysFile ({ commit }, file) {
    try {
      const res = await this.$axios.$post(
        apiRoutes.postKeysFile, 
        file, 
        { headers: { 'Content-Type': 'multipart/form-data' } }
        )
      commit('SET_KEYS', res.keys)
      console.log(res)
    } catch (e) {
      throw e
    }
  },
  deleteKey ({ commit }, key) {
    commit('DELETE_KEY', key)
  },
  addKey ({ commit }, key) {
    commit('ADD_KEY', key)
  }
}
