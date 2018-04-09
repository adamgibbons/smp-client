<template>
  <form class="flow gradient body" @submit="handleLogin">

    <br>
    <br>
    <br>

    <div class="text-input-wrapper">
      <input class="text-input" type="email" v-model="loginForm.email" required>
      <label>email</label>
    </div>

    <div class="text-input-wrapper">
      <input class="text-input" type="password" v-model="loginForm.password" required>
      <label>password</label>
    </div>

    <nav>
      <button v-show="!authenticating" type="submit">Sign in</button>
      <p v-show="authenticating">
        Hang on, signing in...
      </p>
      <p v-show="!authenticating">
        <router-link to="/register">I don't have an account</router-link>
      </p>
    </nav>

  </form>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  data () {
    return {
      loginForm: {
        email: null,
        password: null
      }
    }
  },
  computed: mapGetters(['authenticating']),
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

nav {
  position: absolute;
  bottom: 0;
  width: 100%;
}

button {
  display: block;
  border-radius: 2em;
  padding: .33em 1em;
  background: transparent;
  color: white;
  border: 2px solid white;
  font-size: 1em;
  margin: 0 auto;
  position: relative;
  left: 50%;
  margin-left: -3em;
}

nav p {
  font-size: .8em;
  margin-top: 1em;
}
</style>
