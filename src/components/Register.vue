<template>
  <form class="flow gradient body" @submit="signUp">

    <p>First, let's start with your name and email so we can send you your results. Don't worry,no spam.</p>

    <div class="text-input-wrapper">
      <input class="text-input" type="text" v-model="registrationForm.name" required>
      <label>first name</label>
    </div>

    <div class="text-input-wrapper">
      <input class="text-input" type="email" v-model="registrationForm.email" required>
      <label>email</label>
    </div>

    <div class="text-input-wrapper">
      <input class="text-input" type="password" v-model="registrationForm.password" required>
      <label>password</label>
    </div>

    <!-- Error message -->
    <p v-show="!registerMessage.success && registerMessage.error" class="error error-modal">
      {{registerMessage.error}}
      <br>
      <button type="button" class="button" @click.prevent="acknowledgeRegisterError">Ok</button>
    </p>

    <nav class="auth-nav">
      <button class="button" v-show="!authenticating" type="submit">Sign up</button>
      <p v-show="authenticating">
        Hang on, creating your account...
      </p>
      <p v-show="!authenticating">
        <router-link to="/login">I already have an account</router-link>
      </p>

    </nav>
  </form>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  data () {
    return {
      registrationForm: {
        name: null,
        email: null,
        password: null
      }
    }
  },
  computed: mapGetters(['authenticating', 'registerMessage']),
  methods: {
    ...mapActions(['register', 'acknowledgeRegisterError']),
    signUp (e) {
      e.preventDefault()
      this.register(this.registrationForm)
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

.error-modal {
  position: absolute;
  top: 33%;
  width: 100%;
  margin: auto;
  left: 0;
  right: 0;
  padding: 2em 1em;
  box-shadow: 0px 0px 400px black;
}
</style>
