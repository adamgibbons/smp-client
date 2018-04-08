<template>
  <div class="body gradient">
    <slot></slot>
    <div class="cta">
      <button @click="next">Next</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    next () {
      if (this.$route.path === '/onboard-4') {
        return this.$router.push('/register')
      }

      return this.$router.push(`/onboard-${parseInt(this.$route.path.slice(-1)) + 1}`)
    }
  }
}
</script>

<style scoped>
  h3 {
    font-weight: 400;
    font-size: .8em;
    margin: .66em 0;
    line-height: 1.4;
  }
  p {
    color: #bbb;
    font-size: .7em;
    line-height: 1.4;
  }
  button {
    border: 2px solid white;
    color: white;
    background: transparent;
    border-radius: 2em;
    padding: .66em .8em;
    font-size: 1em;
  }
  .body {
    padding-bottom: 2em;
    margin: 0;
    text-align: center;
    font-size: 1em;
    line-height: 1.2;
    display: flex;
    flex-flow: column;
    justify-content: flex-end;
  }
  .content {
    margin: 0 2em;
  }
  .icons {
    border-top: 1px solid gray;
    border-bottom: 1px solid gray;
    padding: 1em 0;
  }
  .progress {
    padding: 1em 0;
  }
  .progress span {
    margin: 0 .33em;
    font-size: 2em;
  }
  .progress span.active {
    color: #42b983;
  }
  .cta {

  }
  .graphic {
    height: 100px;
    width :100px;
    border: 4px solid white;
    border-radius: 100%;
    margin: 1em auto;
  }
</style>
