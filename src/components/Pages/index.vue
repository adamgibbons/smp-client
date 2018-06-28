<template>
  <div class="onboarding">
    <div class="content">
      <router-view></router-view>
    </div>
    <div class="cta">
      <button class="next button" @click="next">Next</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Pages',
  methods: {
    next () {
      if (this.$route.name === 'Pages1') {
        return this.$router.push({ name: 'Pages2' })
      }

      return this.$router.push({ name: 'Register' })
    }
  }
}
</script>
