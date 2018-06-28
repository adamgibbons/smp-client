const state = {
  userMenuIsOpen: false
}

const getters = {
  userMenuIsOpen: state => {
    return state.userMenuIsOpen
  }
}

const actions = {
  toggleUserMenu ({ commit }) {
    commit('toggleUserMenu')
  }
}

const mutations = {
  toggleUserMenu (state) {
    state.userMenuIsOpen = !state.userMenuIsOpen
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
