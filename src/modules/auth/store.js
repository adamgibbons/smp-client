import axios from 'axios'

// function isAuthenticated () {
//   const expiresAt = JSON.parse(localStorage.getItem('expires_at'))
//   return new Date().getTime() < expiresAt
// }

const state = {
  user: {
    name: null,
    email: null
  },
  auth: false,
  token: null
}

const getters = {
  authenticated: state => {
    return state.auth
  },
  user: state => {
    return state.user
  }
}

const actions = {
  register ({ commit }, { name, email, password }) {
    axios.post(`${process.env.API_URL}register`, { name, email, password })
      .then(({ data }) => {
        const { auth, token } = data

        if (auth) {
          localStorage.setItem('token', token)
        }

        commit('login', { name, email, token, auth })
      })
      .catch((err) => {
        console.log(err)
      })
  },
  login ({ commit }, { email, password }) {
    axios.post(`${process.env.API_URL}login`, { email, password })
      .then(({ data }) => {
        const { auth, token } = data

        if (auth) {
          localStorage.setItem('token', token)
        }

        // TODO set name
        commit('login', { token, auth, email })
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
