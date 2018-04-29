<template>
  <div class="body">
    <div class="title">Living Expenses</div>
    <router-view></router-view>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'LivingExpenses',
  computed: {
    ...mapGetters(['livingExpenses'])
  }
}
</script>
