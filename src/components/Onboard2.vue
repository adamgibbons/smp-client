<template>
  <onboard>
    <div class="content">
      <h3>
        30% of your income should go to the things you want but don't need.
      </h3>
      <p>
        Stuff that you buy to enjoy life, but is not necessary to survive, i.e. Starbucks, clothes, cable, restaurants, etc.
      </p>
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
        <span>•</span>
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
      this.$router.push('/onboard-3')
    }
  }
}
</script>
