<template>
  <onboard>
    <div class="body">
      <h3>
        The 50/30/20 rule is the ideal
        <br>
        way to spend your money.
      </h3>
      <div>
        <button @click="next">Next</button>
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
      // this.$router.push('/onboarding-1')
      console.log('clicked next')
    }
  }
}
</script>
