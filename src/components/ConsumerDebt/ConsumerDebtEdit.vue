<template>
  <div class="block">
    <div class="block">
      <div class="title">
        Type of Debt
      </div>
      <div class="select-wrapper">
        <select v-model="form.type">
          <option></option>
          <option
            v-for="({name, value}, index) in debtOptions"
            :key="index"
            :value="value"
          >{{name}}</option>
        </select>
      </div>
      <div class="choose-one">choose one</div>
    </div>

    <div class="block">
      <div class="title">Minimum Monthly Balance</div>

      <div class="control">
        <div class="select-wrapper">
          <span class="unit-symbol">$</span>
          <input
            type="number"
            :min="0"
            :max="100000"
            v-model="form.minMonthlyPayment"
          />
        </div>
      </div>
    </div>

    <div class="block">
      <div class="title">Average Loan Balance</div>

      <div class="control">
        <div class="select-wrapper">
          <span class="unit-symbol">$</span>
          <input
            type="number"
            :min="0"
            :max="100000"
            v-model="form.averageLoanBalance"
          />
        </div>
      </div>
    </div>

    <div class="block">
      <div class="title">Interest Rate</div>

      <div class="slidecontainer">
        <input
          class="slider"
          type="range"
          :min="0"
          :max="25"
          :step="1"
          v-model="form.interestRate"
        />
        <label><span>%</span>{{form.interestRate}}</label>
      </div>
    </div>
    <div class="page-nav">
      <button class="done" @click="done">Next</button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'ConsumerDebtEdit',
  data () {
    return {
      position: 0,
      debtOptions: [
        {
          value: 'creditCard',
          name: 'Credit Card'
        },
        {
          value: 'paydayLoan',
          name: 'Payday Loan'
        },
        {
          value: 'loansFromFamily',
          name: 'Loans from Family'
        },
        {
          value: 'personalLoan',
          name: 'Personal Loan'
        },
        {
          value: 'homeEquityLine',
          name: 'Home Equity Line'
        },
        {
          value: 'other',
          name: 'Other'
        }
      ],
      form: {
        type: null,
        averageLoanBalance: null,
        interestRate: null,
        minMonthlyPayment: null
      }
    }
  },
  computed: {
    ...mapGetters(['consumerDebt', 'selectedConsumerDebt']),
    type () {
      return this.selectedConsumerDebt[this.position]
    }
  },
  methods: {
    ...mapActions(['addConsumerDebt', 'removeConsumerDebt']),
    done () {
      this.addConsumerDebt(this.form)
      if (this.$route.name === 'ConsumerDebtReview') {
        this.$emit('closeModal')
        return
      }
      this.$router.push({
        name: 'ConsumerDebtReview',
        params: {
          addingConsumerDebt: false,
          editingConsumerDebt: false
        }
      })
    },
    remove (name) {
      this.removeConsumerDebt({ name })
    },
    getPath (name) {
      return 'foo'
      // return `consumerDebt[${this.selectedConsumerDebt[this.position]}].${name}`
    }
  }
}
</script>

<style scoped>
  .page-nav {
    text-align: center;
    margin: 1em 0;
  }
  button.done {
    border-radius: 2em;
    padding: .33em 1em;
    background: transparent;
    color: white;
    border: 2px solid white;
    font-size: 1em;
  }
  .remove {
    position: absolute;
    font-size: .8em;
    right: 1rem;
    margin-top: 1.5rem;
    color: lightgray;
    opacity: .8;
    margin-right: .33em;
  }
</style>
