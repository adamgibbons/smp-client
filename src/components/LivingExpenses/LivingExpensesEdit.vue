<template>
  <div>
    <br>
    <div
      v-show="isSelected('gymMembership')"
      class="remove"
      @click="remove('gymMembership')">
      remove
    </div>
    <smp-slider
      title="Gym Membership"
      path="livingExpenses.gymMembership.amount"
      v-show="isSelected('gymMembership')"
      :min="0"
      :max="10000"
      :step="100"
      :value="livingExpenses.gymMembership.amount"
      unitSymbol="$"
    >
    </smp-slider>

    <div
      v-show="isSelected('fuel')"
      class="remove"
      @click="remove('fuel')">
      remove
    </div>
    <smp-slider
      title="Fuel"
      path="livingExpenses.fuel.amount"
      v-show="isSelected('fuel')"
      :min="0"
      :max="10000"
      :step="100"
      :value="livingExpenses.fuel.amount"
      unitSymbol="$"
    >
    </smp-slider>

    <div
      v-show="isSelected('publicTransportation')"
      class="remove"
      @click="remove('publicTransportation')">
      remove
    </div>
    <smp-slider
      title="Public Transportation"
      path="livingExpenses.publicTransportation.amount"
      v-show="isSelected('publicTransportation')"
      :min="0"
      :max="10000"
      :step="100"
      :value="livingExpenses.publicTransportation.amount"
      unitSymbol="$"
    >
    </smp-slider>

    <div
      v-show="isSelected('healthcare')"
      class="remove"
      @click="remove('healthcare')">
      remove
    </div>
    <smp-slider
      title="Healthcare"
      path="livingExpenses.healthcare.amount"
      v-show="isSelected('healthcare')"
      :min="0"
      :max="10000"
      :step="100"
      :value="livingExpenses.healthcare.amount"
      unitSymbol="$"
    >
    </smp-slider>

    <div
      v-show="isSelected('phoneInternetCable')"
      class="remove"
      @click="remove('phoneInternetCable')">
      remove
    </div>
    <smp-slider
      title="Phone/Internet/Cable"
      path="livingExpenses.phoneInternetCable.amount"
      v-show="isSelected('phoneInternetCable')"
      :min="0"
      :max="10000"
      :step="100"
      :value="livingExpenses.phoneInternetCable.amount"
      unitSymbol="$"
    >
    </smp-slider>

    <div
      v-show="isSelected('diningOut')"
      class="remove"
      @click="remove('diningOut')">
      remove
    </div>
    <smp-slider
      title="Dining Out"
      path="livingExpenses.diningOut.amount"
      v-show="isSelected('diningOut')"
      :min="0"
      :max="10000"
      :step="100"
      :value="livingExpenses.diningOut.amount"
      unitSymbol="$"
    >
    </smp-slider>

    <div
      v-show="isSelected('shopping')"
      class="remove"
      @click="remove('shopping')">
      remove
    </div>
    <smp-slider
      title="Shopping"
      path="livingExpenses.shopping.amount"
      v-show="isSelected('shopping')"
      :min="0"
      :max="10000"
      :step="100"
      :value="livingExpenses.shopping.amount"
      unitSymbol="$"
    >
    </smp-slider>

    <div
      v-show="isSelected('entertainment')"
      class="remove"
      @click="remove('entertainment')">
      remove
    </div>
    <smp-slider
      title="Entertainment"
      path="livingExpenses.entertainment.amount"
      v-show="isSelected('entertainment')"
      :min="0"
      :max="10000"
      :step="100"
      :value="livingExpenses.entertainment.amount"
      unitSymbol="$"
    >
    </smp-slider>

    <div
      v-show="isSelected('childcare')"
      class="remove"
      @click="remove('childcare')">
      remove
    </div>
    <smp-slider
      title="Childcare"
      path="livingExpenses.childcare.amount"
      v-show="isSelected('childcare')"
      :min="0"
      :max="10000"
      :step="100"
      :value="livingExpenses.childcare.amount"
      unitSymbol="$"
    >
    </smp-slider>

    <div
      v-show="isSelected('other')"
      class="remove"
      @click="remove('other')">
      remove
    </div>
    <smp-slider
      title="Other"
      path="livingExpenses.other.amount"
      v-show="isSelected('other')"
      :min="0"
      :max="10000"
      :step="100"
      :value="livingExpenses.other.amount"
      unitSymbol="$"
    >
    </smp-slider>
    <div class="page-nav">
      <button class="done" @click="done">Done</button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import smpSlider from '../smpSlider'

export default {
  components: { smpSlider },
  name: 'LivingExpensesEdit',
  computed: {
    ...mapGetters(['livingExpenses'])
  },
  methods: {
    ...mapActions(['removeLivingExpense']),
    isSelected (name) {
      return this.livingExpenses[name].include === true
    },
    done () {
      this.$emit('update')
    },
    remove (name) {
      this.removeLivingExpense({ name })
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
