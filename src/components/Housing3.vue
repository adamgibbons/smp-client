<template>
  <div class="body">
    <div class="title">
      Housing info (cont...)
    </div>

    <Progress />

    <smp-number
      title="What is your Loan Balance?"
      path="housing.loanBalance"
      :min="0"
      :max="1000000"
      :value="housing.loanBalance"
      unitSymbol="$"
      :allowSkip="true"
    >
    </smp-number>

    <smp-number
      title="What is your current interest rate?"
      path="housing.currentInterestRate"
      :min="0"
      :max="10"
      :step="0.1"
      :value="housing.currentInterestRate"
      unitSymbol="%"
      :floatingPoint="true"
    />

    <smp-select
      title="What is the term on your current loan?"
      path="housing.termOnCurrentLoan"
      :options="termOptions"
      :value="housing.termOnCurrentLoan"
      :allowSkip="true"
    >
    </smp-select>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import smpSlider from '@/components/smpSlider'
import smpNumber from '@/components/smpNumber'
import smpSelect from '@/components/smpSelect'
import Progress from '@/components/Progress'

import formatOptionsList from '../utils/format-options-list'

export default {
  methods: {
    ...mapActions(['setValueByPath'])
  },
  computed: {
    ...mapGetters(['housing'])
  },
  components: { smpSlider, smpNumber, smpSelect, Progress },
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
