import { set } from 'lodash'

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
  personalInfo: state => {
    return state.personalInfo
  }
}

const actions = {
  setValueByPath ({ commit }, data) {
    commit('setValueByPath', data)
  }
}

const mutations = {
  setValueByPath (state, { path, value }) {
    state = set(state, path, value)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
