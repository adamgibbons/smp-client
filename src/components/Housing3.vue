<template>
  <div class="body">
    <div class="title">
      Housing info (cont...)
    </div>

    <smp-number
      title="What is your Loan Balance?"
      path="housing.loanBalance"
      :min="0"
      :max="1000000"
      :value="housing.loanBalance"
    >
    </smp-number>

    <smp-slider
      title="What is your current interest rate?"
      path="housing.currentInterestRate"
      :min="0"
      :max="20"
      :step="1"
      :value="housing.currentInterestRate"
      unitSymbol="%"
    >
    </smp-slider>

    <smp-select
      title="What is the term on your current loan?"
      path="housing.termOnCurrentLoan"
      :options="termOptions"
      :value="housing.termOnCurrentLoan"
    >
    </smp-select>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import smpSlider from './smpSlider'
import smpNumber from './smpNumber'
import smpSelect from './smpSelect'

import formatOptionsList from '../utils/format-options-list'

export default {
  methods: {
    ...mapActions(['setValueByPath'])
  },
  computed: {
    ...mapGetters(['housing'])
  },
  components: { smpSlider, smpNumber, smpSelect },
  data () {
    return {
      termOptions: formatOptionsList([
        '30 Yr Fixed',
        '20 Yr Fixed',
        '15 Yr Fixed',
        '10 Yr Fixed',
        '7/1 ARM',
        '5/1 ARM',
        'Other'
      ])
    }
  }
}
</script>
