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
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import smpSlider from './smpSlider'
import smpNumber from './smpNumber'

export default {
  methods: {
    ...mapActions(['setValueByPath'])
  },
  computed: {
    ...mapGetters(['housing'])
  },
  components: { smpSlider, smpNumber }
}
</script>
