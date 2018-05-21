<template>
  <div>logging out...</div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  methods: {
    ...mapActions(['logout'])
  },
  mounted () {
    // this.logout()
    this.logout()
    this.$router.replace('/login')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
p {
  text-align: center;
}

a {
  color: #42b983;
  text-decoration: none;
}

.text-input-wrapper, p {
  margin: 2em auto;
  width: 100%;
  max-width: 250px;
}

.text-input-wrapper label {
  font-size: .8em;
  font-weight: 200;
  color: lightblue;
}

.text-input, label {
  display: block;
}

.text-input {
  border-radius: 0;
  background: none;
  border: none;
  border-bottom: 1px solid white;
  width: 100%;
  color: white;
  font-size: .9em;
  padding-bottom: .5em;
  margin-bottom: .3em;
}
</style>
