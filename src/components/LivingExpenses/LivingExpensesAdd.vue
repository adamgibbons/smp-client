<template>
  <div class="block">
    <div class="title">
      Select all your living expense
    </div>
    <div class="subtitle">(Check all that apply to you)</div>
    <br>
    <div class="control">
      <label class="radio" :class="{active: livingExpenses.gymMembership.include === true}" for="gymMembership">
        <input
          id="gymMembership"
          type="checkbox"
          @change="setValueByPath({ path: 'livingExpenses.gymMembership.include', value: $event.target.checked })"
        >
        Gym Membership
      </label>

      <label class="radio" :class="{active: livingExpenses.fuel.include === true}" for="fuel">
        <input
          id="fuel"
          type="checkbox"
          @change="setValueByPath({ path: 'livingExpenses.fuel.include', value: $event.target.checked })"
        >
        Fuel
      </label>

      <label class="radio" :class="{active: livingExpenses.publicTransportation.include === true}" for="publicTransportation">
        <input
          id="publicTransportation"
          type="checkbox"
          @change="setValueByPath({ path: 'livingExpenses.publicTransportation.include', value: $event.target.checked })"
        >
        Public Transportation
      </label>

      <label class="radio" :class="{active: livingExpenses.healthcare.include === true}" for="healthcare">
        <input
          id="healthcare"
          type="checkbox"
          @change="setValueByPath({ path: 'livingExpenses.healthcare.include', value: $event.target.checked })"
        >
        Health Care Bills
      </label>

      <label class="radio" :class="{active: livingExpenses.phoneInternetCable.include === true}" for="phoneInternetCable">
        <input
          id="phoneInternetCable"
          type="checkbox"
          @change="setValueByPath({ path: 'livingExpenses.phoneInternetCable.include', value: $event.target.checked })"
        >
        Phone/Internet/Cable
      </label>

      <label class="radio" :class="{active: livingExpenses.diningOut.include === true}" for="diningOut">
        <input
          id="diningOut"
          type="checkbox"
          @change="setValueByPath({ path: 'livingExpenses.diningOut.include', value: $event.target.checked })"
        >
        Dining Out
      </label>

      <label class="radio" :class="{active: livingExpenses.shopping.include === true}" for="shopping">
        <input
          id="shopping"
          type="checkbox"
          @change="setValueByPath({ path: 'livingExpenses.shopping.include', value: $event.target.checked })"
        >
        Shopping
      </label>

      <label class="radio" :class="{active: livingExpenses.entertainment.include === true}" for="entertainment">
        <input
          id="entertainment"
          type="checkbox"
          @change="setValueByPath({ path: 'livingExpenses.entertainment.include', value: $event.target.checked })"
        >
        Entertainment
      </label>

      <label class="radio" :class="{active: livingExpenses.childcare.include === true}" for="childcare">
        <input
          id="childcare"
          type="checkbox"
          @change="setValueByPath({ path: 'livingExpenses.childcare.include', value: $event.target.checked })"
        >
        Childcare
      </label>

      <label class="radio" :class="{active: livingExpenses.other.include === true}" for="other">
        <input
          id="other"
          type="checkbox"
          @change="setValueByPath({ path: 'livingExpenses.other.include', value: $event.target.checked })"
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
    ...mapGetters(['livingExpenses', 'selectedLivingExpenses'])
  },
  methods: {
    ...mapActions(['setValueByPath']),
    next () {
      this.$emit('editLivingExpenses')
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
