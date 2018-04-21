import axios from 'axios'
import { get, set, pickBy } from 'lodash'

function getAuthHeader () {
  return `Bearer ${localStorage.getItem('id_token')}`
}

const state = {
  personal: {
    gender: null,
    education: null,
    educationSpouse: null,
    age: null,
    maritalStatus: null,
    dependents: null,
    occupationSpouse: null,
    occupation: null,
    employmentSpouse: null,
    employment: null
  },
  financial: {
    monthlyHouseholdIncome: null,
    dependents: null,
    creditScore: null
  },
  housing: {
    status: null,
    propertyType: null,
    zip: null,
    monthlyMortgagePayment: null,
    monthlyMortgagePaymentIncludes: [],
    annualPropertyTax: null,
    loanBalance: null,
    currentInterestRate: null,
    termOnCurrentLoan: null,
    monthlyRent: null,
    rentIncludesUtilities: null
  },
  utilities: {
    electricity: {
      include: false,
      amount: null
    },
    waterSewer: {
      include: false,
      amount: null
    },
    trash: {
      include: false,
      amount: null
    },
    naturalGas: {
      include: false,
      amount: null
    },
    hoa: {
      include: false,
      amount: null
    },
    other: {
      include: false,
      amount: null
    }
  },
  savings: {
    retirementPlusInvestment: null,
    cashPlusEmergency: null,
    realEstate: null,
    averageMonthlySavings: null,
    averageMonthlyRetirementContribution: null,
    averageMonthlyDebPayment: null
  }
}

const getters = {
  selectedUtilities: state => {
    return Object.keys(pickBy(state.utilities, (utility) => {
      return utility.include && !utility.amount
    }))
  },
  personal: state => {
    return state.personal
  },
  financial: state => {
    return state.financial
  },
  housing: state => {
    return state.housing
  },
  utilities: state => {
    return state.utilities
  },
  savings: state => {
    return state.savings
  }
}

const actions = {
  toggleItemInList ({ commit }, data) {
    commit('toggleItemInList', data)
  },
  setValueByPath ({ commit }, data) {
    commit('setValueByPath', data)
  },
  update ({ commit }, data) {
    axios.put(`${process.env.API_URL}users/:id/profile`, data, {
      headers: { 'Authorization': getAuthHeader() }
    })
      .then(({ data }) => {
        console.log(data)
      })
      .catch((err) => {
        console.log(err)
      })
  }
}

const mutations = {
  toggleItemInList (state, { path, value }) {
    const index = get(state, path).findIndex(item => item === value)
    if (index === -1) {
      get(state, path).push(value)
      return
    }
    get(state, path).splice(index, 1)
  },
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
