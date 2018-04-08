<template>
  <div class="body">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'foo'
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
  h3 {
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
