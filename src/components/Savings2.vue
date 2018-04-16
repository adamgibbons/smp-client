<template>
  <div class="body">
    <div class="title">
      Savings (cont...)
    </div>

    <smp-number
      title="Average Amount you save per month"
      subtitle="(Cash)"
      path="savings.averageMonthlySavings"
      :min="0"
      :max="1000000"
      :value="savings.averageMonthlySavings"
    >
    </smp-number>

    <smp-number
      title="Average savings towards retirement"
      subtitle="(401k, etc)"
      path="savings.averageMonthlyRetirementContribution"
      :min="0"
      :max="1000000"
      :value="savings.averageMonthlyRetirementContribution"
    >
    </smp-number>

    <smp-number
      title="Extra amount you pay towards any of your debt"
      subtitle="(This is payments to any of your legal obligations above the Minimum amount due)"
      path="savings.averageMonthlyDebPayment"
      :min="0"
      :max="1000000"
      :value="savings.averageMonthlyDebPayment"
    >
    </smp-number>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import smpNumber from './smpNumber'

export default {
  computed: {
    ...mapGetters(['savings'])
  },
  components: { smpNumber }
}
</script>
