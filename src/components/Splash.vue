<template>
  <div class="onboarding">
    <div class="content">
      <h1>
        New Perspective on Your Money
      </h1>

      <h2>
          Balancing your money is the key to having enough
      </h2>
    </div>

    <div class="cta">
      <button class="button" @click="next">Show my money score</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    next () {
      this.$router.push({ name: 'Pages1' })
    }
  }
}
</script>
