<template>
  <div class="page">
    <div class="content">
      <router-view></router-view>
    </div>
    <nav>
      <button class="next button" @click="next">Next</button>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Pages',
  methods: {
    next () {
      if (this.$route.name === 'Pages1') {
        return this.$router.push({ name: 'Pages2' })
      }

      return this.$router.push({ name: 'Register' })
    }
  }
}
</script>

<style type="text/css">
  .page {
    color: white;
    display: flex;
    flex-flow: column nowrap;
  }
  .page .content {
    margin: 3em 2em;
    text-align: center;
  }
  ol {
    margin: 0;
    padding: 0 0 0 1em;
    line-height: 1.4;
    font-size: .85em;
    list-style-position: inside;
  }
  ol li {
    margin: .33em 0;
  }
  .block .button,
  .button  {
    border-radius: 2em;
    padding: .33em 1em;
    background: transparent;
    color: white;
    border: 2px solid white;
    font-size: 1em;
    margin: 1em auto;
  }
  nav {
    margin: 0 auto;
    text-align: center;
    position: absolute;
    bottom: 1rem;
    width: 100%;
    color: white;
  }

  .next {
    border-radius: 2em;
    padding: .33em 1em;
    background: transparent;
    color: white;
    border: 2px solid white;
    font-size: 1em;
    transition: all 0.2s ease-in-out;
    position: relative;
    top: 0;
    opacity: 1;
  }
</style>
