<template>
  <onboard>
    <div class="body">
      <h3>
        20% of your income should go
        <br>
        to saving and paying off debt.
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
      this.$router.push('/onboard-4')
    }
  }
}
</script>
