<template>
  <div class="body">
    <div class="title">
      Savings (cont...)
    </div>

    <Progress />

    <smp-number
      title="Average Amount you save per month"
      subtitle="(Cash)"
      path="savings.averageMonthlySavings"
      :min="0"
      :max="1000000"
      :value="savings.averageMonthlySavings"
      :allowSkip="true"
      unitSymbol="$"
    >
    </smp-number>

    <smp-number
      title="Average savings towards retirement"
      subtitle="(401k, etc)"
      path="savings.averageMonthlyRetirementContribution"
      :min="0"
      :max="1000000"
      :value="savings.averageMonthlyRetirementContribution"
      :allowSkip="true"
      unitSymbol="$"
    >
    </smp-number>

    <smp-number
      title="Extra amount you pay towards debt"
      tiny="This is payments to any of your legal obligations above the Minimum amount due"
      path="savings.averageMonthlyDebtPayment"
      :min="0"
      :max="1000000"
      :value="savings.averageMonthlyDebtPayment"
      :allowSkip="true"
      unitSymbol="$"
    >
    </smp-number>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import smpNumber from './smpNumber'
import Progress from '@/components/Progress'

export default {
  computed: {
    ...mapGetters(['savings'])
  },
  components: { smpNumber, Progress }
}
</script>
