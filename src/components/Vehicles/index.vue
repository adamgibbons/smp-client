<template>
  <div class="body">
    <div class="title">Vehicles</div>
    <router-view></router-view>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Vehicles',
  computed: {
    ...mapGetters(['vehicles'])
  }
}
</script>
