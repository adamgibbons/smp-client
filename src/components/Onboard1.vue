<template>
  <onboard>
    <div class="content">
      <h3>
        50% of your income should go
        <br>
        to absolute necessities in life.
      </h3>
    </div>
    <div class="cta">
      <button @click="next">Next</button>
    </div>
  </onboard>
</template>

<script>
import Onboard from './onboard'

export default {
  components: { Onboard },
  methods: {
    next () {
      this.$router.push('/onboard-2')
    }
  }
}
</script>
