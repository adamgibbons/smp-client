<template>
  <div class="body">
    <div class="title">
      Savings
    </div>

    <Progress />

    <smp-number
      title="Retirement + Investment + 401K saved?"
      path="savings.retirementPlusInvestment"
      :min="0"
      :max="1000000"
      :value="savings.retirementPlusInvestment"
      :allowSkip="true"
      unitSymbol="$"
    >
    </smp-number>

    <smp-number
      title="Cash + Emergency Fund saved?"
      path="savings.cashPlusEmergency"
      :min="0"
      :max="1000000"
      :value="savings.cashPlusEmergency"
    >
    </smp-number>

    <smp-number
      title="Approximate Real estate Investments"
      subtitle="(This is just the approx. equity in your real estate investments)"
      path="savings.realEstate"
      :min="0"
      :max="1000000"
      :value="savings.realEstate"
    >
    </smp-number>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import smpNumber from '@/components/smpNumber'
import Progress from '@/components/Progress'

export default {
  computed: {
    ...mapGetters(['savings'])
  },
  components: { smpNumber, Progress }
}
</script>
