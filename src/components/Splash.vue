<template>
  <div class="body">
  <h1>
    New Perspective
    <br>
    on Your Money
  </h1>

  <h2>
    Balancing your money is
    <br>
    the key to having enough
  </h2>

  <div>
      <button @click="next">Show my money score</button>
  </div>
  </div>
</template>

<script>
export default {
  methods: {
    next () {
      this.$router.push('/onboard-1')
    }
  }
}
</script>

<style scoped>
  .body {
    max-width: 300px;
    margin: 0 auto;
    text-align: center;
    font-size: 1em;
    line-height: 1.2;
  }
  h1 {
    margin: 5em 0 .66em;
    font-weight: 400;
    font-size: 1.66em;
  }
  h2 {
    font-weight: 200;
    font-size: 1.1em;
    margin: .66em 0 3em;
  }
  button {
    border: 2px solid white;
    color: white;
    background: transparent;
    border-radius: 2em;
    padding: .66em .8em;
    font-size: 1em;
  }
</style>
