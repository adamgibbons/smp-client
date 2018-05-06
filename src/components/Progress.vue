<template>
  <div class="progress-wrapper">
    <div class="progress-bar" :style="{width: width + '%'}"></div>
  </div>
</template>

<script>
import routesList from '@/data/routes-list.json'

export default {
  props: ['fallbackRoute'],
  computed: {
    width () {
      const index = routesList.indexOf(this.$route.name)

      if (index !== -1) {
        return ((index + 1) / routesList.length) * 100
      }

      if (this.fallbackRoute && routesList.indexOf(this.fallbackRoute) !== -1) {
        return ((routesList.indexOf(this.fallbackRoute) + 1) / routesList.length) * 100
      }

      return 0
    }
  }
}
</script>

<style scoped>
  .progress-wrapper {
    color: red;
    height: 1px;
    width: 100%;
    background-color: #a92ee0;
  }
  .progress-bar {
    position: relative;
    top: -1px;
    height: 3px;
    background-color: #5790ff;
  }
</style>
