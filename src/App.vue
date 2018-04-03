<template>
  <div class="grid-container">
    <header>
      <div id="hamburger">hamburger</div>
      <div id="home">home</div>
    </header>
    <router-view/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'App',
  computed: mapGetters(['authenticated']),
  watch: {
    authenticated: function (isAuthenticated) {
      if (isAuthenticated) {
        this.$router.push('/flow/personal-1')
      }
    }
  }
}
</script>

<style>
html, body {
  height: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden;
  font-size: 16px;
  line-height: 24px;
  font-family: 'helvetica neue', helvetica;
}
.grid-container {
  height: 100%;
  display: grid;
  grid-template-rows: 8% 92%;
}
.grid-container > header,
.grid-container .body {
  border: 1px solid black;
}
.title {
  text-align: center;
}
.block {
  border-top: 1px solid #aaa;
  padding: 1em;
}
.block .title {
  text-align: left;
}
.block button {
  border: 1px solid;
  border-radius: 1em;
  background: transparent;
}
#home {
  position: absolute;
  top: 0;
  left: 0;
  padding: .66em 1em;
}
#hamburger {
  position: absolute;
  top: 0;
  right: 0;
  padding: .66em 1em;
}
</style>
