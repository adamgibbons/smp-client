<template>
  <onboard>
    <div class="body">
      <h3>
        30% of your income should go to
        <br>
        the things you want but don't need.
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
      this.$router.push('/onboard-3')
    }
  }
}
</script>
