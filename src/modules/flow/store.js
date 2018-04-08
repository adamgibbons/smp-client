import axios from 'axios'
import { set } from 'lodash'

function getAuthHeader () {
  return `Bearer ${localStorage.getItem('id_token')}`
}

const state = {
  personal: {
    gender: null,
    education: null,
    age: null,
    maritalStatus: null,
    dependents: null,
    occupation: null
  },
  financial: {
    monthlyIncome: null,
    creditScore: null
  },
  housing: {
    situation: null,
    monthlyPayment: null,
    zip: null,
    monthlyPaymentIncludes: null
  }
}

const getters = {
  personal: state => {
    return state.personal
  }
}

const actions = {
  setValueByPath ({ commit }, data) {
    commit('setValueByPath', data)
  },
  update ({ commit }, data) {
    axios.put(`${process.env.API_URL}users/:id/profile`, data, {
      headers: { 'Authorization': getAuthHeader() }
    })
      .then(({ data }) => {
        console.log(data, commit)
      })
      .catch((err) => {
        console.log(err)
      })
  }
}

const mutations = {
  setValueByPath (state, { path, value }) {
    state = set(state, path, value)
  },
  update (state, { path, value }) {

  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
