<template>
  <form class="flow gradient body" @submit="signUp">

    <p>First, let's start with your name and email so we can send you your results. Don't worry,no spam.</p>

    <div class="text-input-wrapper">
      <input class="text-input" type="text" v-model="form.name" required>
      <span v-show="nameIsValid"><i class="far fa-check-circle"></i></span>
      <label>first name</label>
    </div>

    <div class="text-input-wrapper">
      <input class="text-input" type="email" v-model="form.email" required>
      <span v-show="emailIsValid"><i class="far fa-check-circle"></i></span>
      <label>email</label>
    </div>

    <div class="text-input-wrapper">
      <input class="text-input" type="password" v-model="form.password" required>
      <span v-show="passwordIsValid"><i class="far fa-check-circle"></i></span>
      <label>password (at least five characters)</label>
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
      form: {
        name: null,
        email: null,
        password: null
      }
    }
  },
  computed: {
    ...mapGetters(['authenticating', 'registerMessage']),
    nameIsValid () {
      return (this.form.name && this.form.name.length > 0) || false
    },
    emailIsValid () {
      return this.form.email && this.validateEmail(this.form.email)
    },
    passwordIsValid () {
      return this.form.password && this.form.password.length > 4
    },
    allFieldsAreValid () {
      return !!(this.nameIsValid && this.emailIsValid && this.passwordIsValid)
    }
  },
  methods: {
    ...mapActions(['register', 'acknowledgeRegisterError']),
    validateEmail (emailAddress) {
      const pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i)

      return pattern.test(emailAddress)
    },
    signUp (e) {
      e.preventDefault()
      if (!this.allFieldsAreValid) return

      this.register(this.form)
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

.text-input-wrapper span {
  float:right;
  color: #6ad265;
  position: relative;
  top: -2em;
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
