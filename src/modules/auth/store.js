import axios from 'axios'

const state = {
  user: {
    name: null,
    email: null,
    id: null
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
  },
  loginMessage: {
    success: false,
    error: null
  },
  registerMessage: {
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
  },
  loginMessage: state => {
    return state.loginMessage
  },
  registerMessage: state => {
    return state.registerMessage
  }
}

const actions = {
  setUserId ({ commit }, { userId }) {
    commit('setUserId', { userId })
  },
  acknowledgeRegisterError ({ commit }) {
    commit('acknowledgeError', { messageType: 'registerMessage' })
  },
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
    commit('setRegisterMessage', { success: false, error: null })

    axios.post(`${process.env.API_URL}register`, { name, email, password })
      .then(({ data }) => {
        const { auth, token, id } = data

        if (auth) {
          localStorage.setItem('token', token)
        }

        commit('login', { id, name, email, token, auth })
        commit('toggleAuthenticating', { isAuthenticating: false })
      })
      .catch((error) => {
        commit('setRegisterMessage', { success: false, error: error.response.data })
        commit('toggleAuthenticating', { isAuthenticating: false })
      })
  },
  login ({ commit }, { email, password }) {
    commit('toggleAuthenticating', { isAuthenticating: true })
    commit('setLoginMessage', { success: false, error: null })

    axios.post(`${process.env.API_URL}login`, { email, password })
      .then(({ data }) => {
        const { id, auth, token } = data

        if (auth) {
          localStorage.setItem('token', token)
        }

        // TODO set name
        commit('login', { id, token, auth, email })
        commit('toggleAuthenticating', { isAuthenticating: false })
      })
      .catch((error) => {
        commit('toggleAuthenticating', { isAuthenticating: false })
        commit('setLoginMessage', { success: false, error: error.response.data })
      })
  },
  logout ({ commit }) {
    localStorage.removeItem('id_token')
    commit('logout')
  }
}

const mutations = {
  setUserId (state, { userId }) {
    state.user.id = userId
  },
  acknowledgeError (state, { messageType }) {
    state[messageType].success = false
    state[messageType].error = null
  },
  setForgotMessage (state, { success, error }) {
    state.forgotMessage = { success, error }
  },
  setResetMessage (state, { success, error }) {
    state.resetMessage = { success, error }
  },
  setLoginMessage (state, { success, error }) {
    state.loginMessage = { success, error }
  },
  setRegisterMessage (state, { success, error }) {
    state.registerMessage = { success, error }
  },
  toggleAuthenticating (state, { isAuthenticating }) {
    state.authenticating = isAuthenticating
  },
  login (state, { id, name, email, token, auth }) {
    state.user.name = name
    state.user.email = email
    state.user.id = id
    state.auth = auth
    state.token = token
  },
  logout (state) {
    state.user.name = null
    state.user.email = null
    state.user.id = null
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
