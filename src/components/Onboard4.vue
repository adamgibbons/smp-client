<template>
  <onboard>
    <div class="content">
      <h3>
        The 50/30/20 rule is the ideal way to spend your money.
      </h3>
      <p>
        We will calculate where you money is currently going, allocate it into the three 50/30/20 categories, and let you compare it with the model to see what areas are giving you financial peace and which ones could use some tweaking.
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
        <span class="active">•</span>
        <span class="active">•</span>
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
      this.$router.push('/register')
    }
  }
}
</script>
