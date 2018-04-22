<template>
  <div class="body">
    <div class="title">Insurance</div>
    <router-view></router-view>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'insurance',
  computed: {
    ...mapGetters(['insurance', 'selectedInsurance']),
    remainingSelectedPolicies () {
      return this.selectedInsurance.length > 0
    }
  },
  methods: {
    ...mapActions(['setValueByPath'])
  }
}
</script>
