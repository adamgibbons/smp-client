<template>
  <onboard>
    <div class="content">
      <h3>
        20% of your income should go to saving and paying off debt.
      </h3>
      <p>Use this category to go above and beyond paying off your debts until they become eliminated, then this category can go solely toward savings.</p>
      <div class="graphic">
      </div>
      <div class="icons">
        <span>icon</span>
        <span>icon</span>
        <span>icon</span>
        <span>icon</span>
      </div>
      <div class="progress">
        <span class="active">•</span>
        <span class="active">•</span>
        <span class="active">•</span>
        <span>•</span>
      </div>
    </div>
  </onboard>
</template>

<script>
import Onboard from './onboard'

export default {
  components: { Onboard },
  methods: {
    next () {
      this.$router.push('/onboard-4')
    }
  }
}
</script>
