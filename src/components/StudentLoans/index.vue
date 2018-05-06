<template>
  <div class="body">
    <div class="title">Student Loans</div>
    <Progress fallbackRoute="StudentLoansSplash" />
    <router-view></router-view>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Progress from '@/components/Progress'

export default {
  name: 'StudentLoans',
  components: { Progress },
  computed: {
    ...mapGetters(['studentLoans'])
  }
}
</script>
