<template>
  <div class="onboarding">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'foo'
}
</script>

<style scoped>
  .onboarding {
    max-width: 300px;
    margin: 0 auto;
    text-align: center;
    font-size: 1em;
    line-height: 1.2;
  }
  h3 {
    color: white;
    font-weight: 200;
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
