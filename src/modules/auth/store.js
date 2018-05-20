import axios from 'axios'

const state = {
  user: {
    name: null,
    email: null
  },
  auth: false,
  token: null,
  authenticating: false,
  forgotMessage: {
    success: false,
    error: null
  },
  resetMessage: {
    success: false,
    error: null
  }
}

const getters = {
  authenticated: state => {
    return state.auth
  },
  user: state => {
    return state.user
  },
  authenticating: state => {
    return state.authenticating
  },
  forgotMessage: state => {
    return state.forgotMessage
  },
  resetMessage: state => {
    return state.resetMessage
  }
}

const actions = {
  createResetToken ({ commit }, { email }) {
    axios.post(`${process.env.API_URL}forgot`, { email })
      .then(() => {
        commit('setForgotMessage', { success: true, error: null })
      })
      .catch((error) => {
        commit('setForgotMessage', { success: false, error: error.response.data })
      })
  },
  resetPassword ({ commit }, { token, password }) {
    axios.post(`${process.env.API_URL}forgot/${token}`, { password })
      .then(({ data }) => {
        commit('setResetMessage', { success: true, error: null })
      })
      .catch((error) => {
        commit('setResetMessage', { success: false, error: error.response.data })
      })
  },
  register ({ commit }, { name, email, password }) {
    commit('toggleAuthenticating', { isAuthenticating: true })

    axios.post(`${process.env.API_URL}register`, { name, email, password })
      .then(({ data }) => {
        const { auth, token } = data

        if (auth) {
          localStorage.setItem('token', token)
        }

        commit('login', { name, email, token, auth })
        commit('toggleAuthenticating', { isAuthenticating: false })
      })
      .catch((err) => {
        console.log(err)
      })
  },
  login ({ commit }, { email, password }) {
    commit('toggleAuthenticating', { isAuthenticating: true })

    axios.post(`${process.env.API_URL}login`, { email, password })
      .then(({ data }) => {
        const { auth, token } = data

        if (auth) {
          localStorage.setItem('token', token)
        }

        // TODO set name
        commit('login', { token, auth, email })
        commit('toggleAuthenticating', { isAuthenticating: false })
      })
      .catch((err) => {
        console.log(err)
      })
  },
  logout ({ commit }) {
    localStorage.removeItem('id_token')
    commit('logout')
  }
}

const mutations = {
  setForgotMessage (state, { success, error }) {
    state.forgotMessage = { success, error }
  },
  setResetMessage (state, { success, error }) {
    state.resetMessage = { success, error }
  },
  toggleAuthenticating (state, { isAuthenticating }) {
    state.authenticating = isAuthenticating
  },
  login (state, { name, email, token, auth }) {
    state.user.name = name
    state.user.email = email
    state.auth = auth
    state.token = token
  },
  logout (state) {
    state.user.name = null
    state.user.email = null
    state.auth = false
    state.token = null
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
