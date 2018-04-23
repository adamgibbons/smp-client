<template>
  <div class="block">
    <div class="title">
      Select all of your forms of consumer debt
    </div>
    <div class="subtitle">(Check all that apply to you)</div>
    <br>
    <div class="control">
      <label class="radio" :class="{active: consumerDebt.creditCard.include === true}" for="creditCard">
        <input
          id="creditCard"
          type="checkbox"
          @change="setValueByPath({ path: 'consumerDebt.creditCard.include', value: $event.target.checked })"
        >
        Credit Card
      </label>

      <label class="radio" :class="{active: consumerDebt.paydayLoan.include === true}" for="paydayLoan">
        <input
          id="paydayLoan"
          type="checkbox"
          @change="setValueByPath({ path: 'consumerDebt.paydayLoan.include', value: $event.target.checked })"
        >
        Payday Loan
      </label>

      <label class="radio" :class="{active: consumerDebt.loansFromFamily.include === true}" for="loansFromFamily">
        <input
          id="loansFromFamily"
          type="checkbox"
          @change="setValueByPath({ path: 'consumerDebt.loansFromFamily.include', value: $event.target.checked })"
        >
        Loans From Family
      </label>

      <label class="radio" :class="{active: consumerDebt.personalLoan.include === true}" for="personalLoan">
        <input
          id="personalLoan"
          type="checkbox"
          @change="setValueByPath({ path: 'consumerDebt.personalLoan.include', value: $event.target.checked })"
        >
        Personal Loan
      </label>

      <label class="radio" :class="{active: consumerDebt.homeEquityLine.include === true}" for="homeEquityLine">
        <input
          id="homeEquityLine"
          type="checkbox"
          @change="setValueByPath({ path: 'consumerDebt.homeEquityLine.include', value: $event.target.checked })"
        >
        Home Equity Line
      </label>

      <label class="radio" :class="{active: consumerDebt.other.include === true}" for="other">
        <input
          id="other"
          type="checkbox"
          @change="setValueByPath({ path: 'consumerDebt.other.include', value: $event.target.checked })"
        >
        Other
      </label>
    </div>
    <div class="page-nav">
      <button class="done" @click="next">Next</button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'LivingExpensesAdd',
  computed: {
    ...mapGetters(['consumerDebt'])
  },
  methods: {
    ...mapActions(['setValueByPath']),
    next () {
      this.$emit('editConsumerDebt')
    }
  }
}
</script>

<style scoped>
  input {
    display: none;
  }
  button {
    color: white;
    border: 1px solid white;
    padding: 1em;
    background: transparent;
  }
  .page-nav {
    text-align: center;
    margin-top: 2em;
  }
  button.done {
    border-radius: 2em;
    padding: .33em 1em;
    background: transparent;
    color: white;
    border: 2px solid white;
    font-size: 1em;
    margin: auto;
  }
  .back {
    position: absolute;
    bottom: 1em;
    left: 1em;
    text-decoration: none;
  }
</style>
