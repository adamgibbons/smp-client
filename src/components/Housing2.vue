<template>
  <div class="body">
    <div class="title">
      Housing info (cont...)
    </div>

    <smp-number
      title="What is your monthly mortgage payment?"
      path="housing.monthlyMortgagePayment"
      :min="0"
      :max="1000000"
      :value="housing.monthlyMortgagePayment"
      unitSymbol="$"
    >
    </smp-number>

    <smp-checkboxes
      title="Your monthly mortgage payment includes?"
      subtitle="(Check all that apply)"
      path="housing.monthlyMortgagePaymentIncludes"
      :options="options"
      :value="housing.monthlyMortgagePaymentIncludes"
    >
    </smp-checkboxes>

    <smp-number
      v-show="!monthlyMortgagePaymentIncludesPropertyTax"
      title="What is your Annual Property Tax?"
      path="housing.annualPropertyTax"
      :min="0"
      :max="1000000"
      :value="housing.annualPropertyTax"
      unitSymbol="$"
    >
    </smp-number>

  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import smpNumber from './smpNumber'
import smpCheckboxes from './smpCheckboxes'

export default {
  methods: {
    ...mapActions(['setValueByPath'])
  },
  computed: {
    ...mapGetters(['housing', 'monthlyMortgagePaymentIncludesPropertyTax'])
  },
  components: { smpNumber, smpCheckboxes },
  data () {
    return {
      options: ['Property Tax', 'Home Insurance', 'PMI', 'HOA']
    }
  }
}
</script>
