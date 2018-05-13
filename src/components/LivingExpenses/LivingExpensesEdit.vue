<template>
  <div>
    <p style="margin: 2.5em 1.5em 1em;">What do you pay for these expenses per month?</p>
    <div
      v-show="isSelected('gymMembership')"
      class="remove"
      @click="remove('gymMembership')">
      <i class="far fa-trash-alt"></i>
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
      <i class="far fa-trash-alt"></i>
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
      <i class="far fa-trash-alt"></i>
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
      <i class="far fa-trash-alt"></i>
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
      <i class="far fa-trash-alt"></i>
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
      <i class="far fa-trash-alt"></i>
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
      <i class="far fa-trash-alt"></i>
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
      <i class="far fa-trash-alt"></i>
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
      <i class="far fa-trash-alt"></i>
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
      <i class="far fa-trash-alt"></i>
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
    <div class="text-center">
      <button class="button" @click="done">Done</button>
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
