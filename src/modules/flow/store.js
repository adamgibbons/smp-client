import axios from 'axios'
import { get, set } from 'lodash'

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
  activatedUtilities () {
    return Object.entries(state.utilities)
      .filter(([_, { include }]) => include === true)
      .map(([billName, { include, amount }]) => {
        return { billName, amount }
      })
  },
  activatedInsurance () {
    return Object.entries(state.insurance)
      .filter(([_, { include }]) => include === true)
      .map(([name, { include, amount }]) => {
        return { name, amount }
      })
  },
  activatedLivingExpenses () {
    return Object.entries(state.livingExpenses)
      .filter(([_, { include }]) => include === true)
      .map(([name, { include, amount }]) => {
        return { name, amount }
      })
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
    return state.vehicles
  },
  personal1IsValid: state => {
    return !!state.personal.gender &&
      !!state.personal.maritalStatus &&
      !!state.personal.age
  },
  personal2IsValid: state => {
    return !!state.personal.education &&
      !!state.personal.employment &&
      !!state.personal.occupation
  },
  personal3IsValid: state => {
    return !!state.personal.educationSpouse &&
      !!state.personal.employmentSpouse &&
      !!state.personal.occupationSpouse
  },
  financialIsValid: state => {
    return !!state.financial.monthlyHouseholdIncome &&
      !!state.financial.dependents &&
      !!state.financial.creditScore
  },
  housing1IsValid: state => {
    return !!state.housing.status &&
      !!state.housing.propertyType &&
      !!state.housing.zip
  },
  housing2IsValid: state => {
    return !!state.housing.monthlyMortgagePayment &&
      !!state.housing.annualPropertyTax
  },
  housing3IsValid: state => {
    return !!state.housing.loanBalance &&
      !!state.housing.currentInterestRate &&
      !!state.housing.termOnCurrentLoan
  },
  housing4IsValid: state => {
    return !!state.housing.monthlyRent &&
      !!state.housing.rentIncludesUtilities
  },
  savings1IsValid: state => {
    return !!state.savings.retirementPlusInvestment &&
      !!state.savings.cashPlusEmergency &&
      !!state.savings.realEstate
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
  removeInsurance ({ commit }, { name }) {
    commit('removeInsurance', { name })
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
  // consumerDebt
  updateConsumerDebt (state, { index, form }) {
    state.consumerDebt.splice(index, 1, form)
  },
  addConsumerDebt (state, { type, minMonthlyPayment, averageLoanBalance, interestRate }) {
    state.consumerDebt.push({ type, minMonthlyPayment, averageLoanBalance, interestRate })
  },
  removeConsumerDebt (state, { index }) {
    state.consumerDebt.splice(index, 1)
  },

  // studentLoans
  updateStudentLoan (state, { index, form }) {
    state.studentLoans.splice(index, 1, form)
  },
  addStudentLoan (state, { type, graduationDate, school, balance }) {
    state.studentLoans.push({ type, graduationDate, school, balance })
  },
  removeStudentLoan (state, { index }) {
    state.studentLoans.splice(index, 1)
  },

  // vehicles
  updateVehicle (state, { index, form }) {
    state.vehicles.splice(index, 1, form)
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
    state.vehicles.splice(index, 1)
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
  removeInsurance (state, { name }) {
    state.insurance[name] = {
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
