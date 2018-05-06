<template>
  <div class="body">
    <div class="title">Living Expenses</div>
    <Progress fallbackRoute="LivingExpensesSplash" />
    <router-view></router-view>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Progress from '@/components/Progress'

export default {
  name: 'LivingExpenses',
  components: { Progress },
  computed: {
    ...mapGetters(['livingExpenses'])
  }
}
</script>
