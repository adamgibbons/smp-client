<template>
  <div class="body">
    <div class="title">Utilities</div>
    <router-view></router-view>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'utilities',
  computed: {
    ...mapGetters(['utilities', 'selectedUtilities']),
    remainingSelectedUtilities () {
      return this.selectedUtilities.length > 0
    }
  },
  methods: {
    ...mapActions(['setValueByPath'])
  }
}
</script>
