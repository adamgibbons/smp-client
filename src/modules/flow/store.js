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
  },
  insurance: {
    multiPolicy: {
      include: false,
      amount: null
    },
    health: {
      include: false,
      amount: null
    },
    car: {
      include: false,
      amount: null
    },
    homeowners: {
      include: false,
      amount: null
    },
    life: {
      include: false,
      amount: null
    },
    disability: {
      include: false,
      amount: null
    },
    other: {
      include: false,
      amount: null
    }
  },
  livingExpenses: {
    gymMembership: {
      include: false,
      amount: null
    },
    fuel: {
      include: false,
      amount: null
    },
    publicTransportation: {
      include: false,
      amount: null
    },
    healthcare: {
      include: false,
      amount: null
    },
    phoneInternetCable: {
      include: false,
      amount: null
    },
    diningOut: {
      include: false,
      amount: null
    },
    shopping: {
      include: false,
      amount: null
    },
    entertainment: {
      include: false,
      amount: null
    },
    childcare: {
      include: false,
      amount: null
    },
    other: {
      include: false,
      amount: null
    }
  },
  consumerDebt: [],
  studentLoans: [],
  vehicles: []
}

const getters = {
  selectedUtilities: state => {
    return Object.keys(pickBy(state.utilities, (utility) => {
      return utility.include && !utility.amount
    }))
  },
  selectedInsurance: state => {
    return Object.keys(pickBy(state.insurance, (policy) => {
      return policy.include && !policy.amount
    }))
  },
  selectedLivingExpenses: state => {
    return Object.keys(pickBy(state.livingExpenses, (expense) => {
      return expense.include && !expense.amount
    }))
  },
  selectedConsumerDebt: state => {
    return Object.keys(pickBy(state.consumerDebt, ({ include, minMonthlyPayment, averageLoanBalance, interestRate }) => {
      return include === true
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
  },
  insurance: state => {
    return state.insurance
  },
  livingExpenses: state => {
    return state.livingExpenses
  },
  consumerDebt: state => {
    return state.consumerDebt
  },
  studentLoans: state => {
    return state.studentLoans
  },
  vehicles: state => {
    return state.studentLoans
  }
}

const actions = {
  removeConsumerDebt ({ commit }, { index }) {
    commit('removeConsumerDebt', { index })
  },
  updateConsumerDebt ({ commit }, { index, form }) {
    commit('updateConsumerDebt', { index, form })
  },
  addConsumerDebt ({ commit }, { type, minMonthlyPayment, averageLoanBalance, interestRate }) {
    commit('addConsumerDebt', { type, minMonthlyPayment, averageLoanBalance, interestRate })
  },

  removeStudentLoan ({ commit }, { index }) {
    commit('removeStudentLoan', { index })
  },
  updateStudentLoan ({ commit }, { index, form }) {
    commit('updateStudentLoan', { index, form })
  },
  addStudentLoan ({ commit }, { type, graduationDate, school, balance }) {
    commit('addStudentLoan', { type, graduationDate, school, balance })
  },

  removeVehicle ({ commit }, { index }) {
    commit('removeVehicle', { index })
  },
  updateVehicle ({ commit }, { index, form }) {
    commit('updateVehicle', { index, form })
  },
  addVehicle ({ commit }, {
    type,
    year,
    make,
    model,
    mileage,
    monthlyPayment,
    loanBalance,
    loanPaidOffDate,
    loanInterestRate,
    monthlyLeastPayment,
    leaseTermEndsDate
  }) {
    commit('addVehicle', {
      type,
      year,
      make,
      model,
      mileage,
      monthlyPayment,
      loanBalance,
      loanPaidOffDate,
      loanInterestRate,
      monthlyLeastPayment,
      leaseTermEndsDate
    })
  },

  toggleItemInList ({ commit }, data) {
    commit('toggleItemInList', data)
  },
  setValueByPath ({ commit }, data) {
    commit('setValueByPath', data)
  },
  removeUtility ({ commit }, { billName }) {
    commit('removeUtility', { billName })
  },
  removeInsurance ({ commit }, { policyName }) {
    commit('removeInsurance', { policyName })
  },
  removeLivingExpense ({ commit }, { name }) {
    commit('removeLivingExpense', { name })
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
  updateConsumerDebt (state, { index, form }) {
    state.consumerDebt.splice(index, 1, form)
  },
  addConsumerDebt (state, { type, minMonthlyPayment, averageLoanBalance, interestRate }) {
    state.consumerDebt.push({ type, minMonthlyPayment, averageLoanBalance, interestRate })
  },
  removeConsumerDebt (state, { index }) {
    state.consumerDebt.splice(index, 1)
  },

  updateStudentLoan (state, { index, form }) {
    state.studentLoans.splice(index, 1, form)
  },
  addStudentLoan (state, { type, graduationDate, school, balance }) {
    state.studentLoans.push({ type, graduationDate, school, balance })
  },
  removeStudentLoan (state, { index }) {
    state.studentLoans.splice(index, 1)
  },

  updateVehicle (state, { index, form }) {
    state.Vehicles.splice(index, 1, form)
  },
  addVehicle (state, {
    type,
    year,
    make,
    model,
    mileage,
    monthlyPayment,
    loanBalance,
    loanPaidOffDate,
    loanInterestRate,
    monthlyLeastPayment,
    leaseTermEndsDate
  }) {
    state.vehicles.push({
      type,
      year,
      make,
      model,
      mileage,
      monthlyPayment,
      loanBalance,
      loanPaidOffDate,
      loanInterestRate,
      monthlyLeastPayment,
      leaseTermEndsDate
    })
  },
  removeVehicle (state, { index }) {
    state.studentLoans.splice(index, 1)
  },

  toggleItemInList (state, { path, value }) {
    const index = get(state, path).findIndex(item => item === value)
    if (index === -1) {
      get(state, path).push(value)
      return
    }
    get(state, path).splice(index, 1)
  },
  removeUtility (state, { billName }) {
    state.utilities[billName] = {
      include: false,
      amount: null
    }
  },
  removeInsurance (state, { policyName }) {
    state.insurance[policyName] = {
      include: false,
      amount: null
    }
  },
  removeLivingExpense (state, { name }) {
    state.livingExpenses[name] = {
      include: false,
      amount: null
    }
  },
  setValueByPath (state, { path, value }) {
    state = set(state, path, value)
  },
  update (state, { path, value }) {
    console.log('update')
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
