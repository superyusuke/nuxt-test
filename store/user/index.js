export const state = () => ({
  userName: 'nakanishi'
})

export const mutations = {
  changeName(state, newName) {
    state.userName = newName
  }
}

export const actions = {
  changeName({ commit, dispatch, state }, newName) {
    commit('changeName', newName)
  }
}
