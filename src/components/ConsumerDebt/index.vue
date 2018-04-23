<template>
  <div class="body">
    <div class="title">Consumer Debt</div>
    <router-view></router-view>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'ConsumerDebt',
  computed: {
    ...mapGetters(['consumerDebt'])
  }
}
</script>
