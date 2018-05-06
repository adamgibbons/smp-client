<template>
  <div class="body">
    <div class="title">Consumer Debt</div>
    <Progress fallbackRoute="ConsumerDebtSplash" />
    <router-view></router-view>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Progress from '@/components/Progress'

export default {
  name: 'ConsumerDebt',
  components: { Progress },
  computed: {
    ...mapGetters(['consumerDebt'])
  }
}
</script>
