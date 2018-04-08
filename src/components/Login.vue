<template>
  <form class="body" @submit="handleLogin">
    <input class="text-input" type="text" v-model="loginForm.email" placeholder="Email">
    <input class="text-input" type="text" v-model="loginForm.password" placeholder="Password">

    <button type="button" class="button" @click.native="handleLogin">Sign in, click.native</button>

    <button type="submit" class="button">Sign in</button>

    <v-touch tag="a" v-on:tap="handleLogin">Sign in, v-touch</v-touch>
    <!-- <button @click="start">Start</button> -->
  </form>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data () {
    return {
      loginForm: {
        email: null,
        password: null
      }
    }
  },
  methods: {
    ...mapActions(['login']),
    handleLogin (e) {
      e.preventDefault()
      console.log('foo')

      this.login(this.loginForm)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.text-input {
  border: 1px solid gray;
  display: block;
  margin: 1em auto;
  padding: .33em;
}
button {
  background: red;
  padding: 1em;
}
</style>
