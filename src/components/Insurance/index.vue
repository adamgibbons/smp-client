<template>
  <div class="body">
    <div class="title">Insurance</div>
    <Progress fallbackRoute="InsuranceSplash" />
    <router-view></router-view>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Progress from '@/components/Progress'

export default {
  name: 'Insurance',
  components: { Progress },
  computed: {
    ...mapGetters(['insurance'])
  },
  methods: {
    ...mapActions(['setValueByPath'])
  }
}
</script>
