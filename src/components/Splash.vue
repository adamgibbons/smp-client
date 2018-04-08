<template>
  <div class="body">
    <div class="content">
      <h1>
        New Perspective on Your Money
      </h1>

      <h2>
          Balancing your money is the key to having enough
      </h2>
    </div>

    <div class="cta">
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
    margin: 0 auto 3em;
    text-align: center;
    font-size: 1em;
    line-height: 1.2;
    display: flex;
    flex-flow: column;
    justify-content: center;
  }
  .content {
    margin: 0 2em;
  }
  .cta {

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
