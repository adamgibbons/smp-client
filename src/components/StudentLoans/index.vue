<template>
  <div class="body">
    <div class="title">Student Loans</div>
    <router-view></router-view>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'StudentLoans',
  computed: {
    ...mapGetters(['studentLoans'])
  }
}
</script>
