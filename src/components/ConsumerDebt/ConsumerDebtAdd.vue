<template>
  <div>
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
    <div class="text-center">
      <button class="button" @click="addMore">+ Add more</button>
      <br>
      <button class="button" @click="done">Done</button>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'ConsumerDebtAdd',
  data () {
    return {
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
  methods: {
    ...mapActions(['addConsumerDebt']),
    addMore () {
      this.$emit('scrollTop')
      this.addConsumerDebt(this.form)
      this.form = {
        type: null,
        averageLoanBalance: null,
        interestRate: null,
        minMonthlyPayment: null
      }
    },
    done () {
      this.addConsumerDebt(this.form)
      if (this.$route.name === 'ConsumerDebtReview') {
        this.$emit('closeModal')
        return
      }
      this.$router.push({ name: 'ConsumerDebtReview' })
    }
  }
}
</script>
