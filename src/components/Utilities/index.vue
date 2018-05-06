<template>
  <div class="body">
    <div class="title">Utilities</div>
    <Progress fallbackRoute="UtilitiesSplash" />
    <router-view></router-view>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Progress from '@/components/Progress'

export default {
  name: 'utilities',
  components: { Progress },
  computed: {
    ...mapGetters(['utilities'])
  },
  methods: {
    ...mapActions(['setValueByPath'])
  }
}
</script>
