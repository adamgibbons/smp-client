<template>
  <div class="body">
    <div class="title">Vehicles</div>
    <Progress fallbackRoute="VehiclesSplash" />
    <router-view></router-view>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Progress from '@/components/Progress'

export default {
  name: 'Vehicles',
  components: { Progress },
  computed: {
    ...mapGetters(['vehicles'])
  }
}
</script>
