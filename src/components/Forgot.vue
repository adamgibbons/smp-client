<template>
  <form class="flow gradient body" @submit="handleSubmit">

    <p>Enter your email address below and we'll send you a link to reset your password.</p>

    <div class="text-input-wrapper">
      <input :disable="!forgotMessage.success" class="text-input" type="email" v-model="form.email" required>
      <label>email</label>
    </div>

    <!-- Success message -->
    <p v-show="forgotMessage.success">
      An email containing instructions to reset your password was sent to {{form.email}}. If you don't see it, make sure it didn't land in your spam folder.
    </p>

    <!-- Error message -->
    <p v-show="!forgotMessage.success && forgotMessage.error">
      Error: {{forgotMessage.error}}
    </p>

    <nav v-show="!forgotMessage.success">
      <button type="submit">Reset password</button>
    </nav>

  </form>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  data () {
    return {
      form: {
        email: null
      }
    }
  },
  computed: mapGetters(['forgotMessage']),
  methods: {
    ...mapActions(['createResetToken']),
    handleSubmit (e) {
      e.preventDefault()

      this.createResetToken(this.form)
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
  bottom: 1em;
  width: 100%;
  margin: auto;
  text-align: center;
}

button {
  border-radius: 2em;
  padding: .33em 1em;
  background: transparent;
  color: white;
  border: 2px solid white;
  font-size: 1em;
}
</style>
