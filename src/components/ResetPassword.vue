<template>
  <form class="flow gradient body" @submit="handleSubmit">

    <p>Reset password</p>

    <div class="text-input-wrapper">
      <input class="text-input" type="password" v-model="form.password" required>
      <span v-show="form.password && form.password.length > 4"><i class="far fa-check-circle"></i></span>
      <label>password (at least five characters)</label>
    </div>

    <div class="text-input-wrapper">
      <input class="text-input" type="password" v-model="form.secondPassword" required>
      <span v-show="form.secondPassword && form.secondPassword.length > 4 && passwordsMatch"><i class="far fa-check-circle"></i></span>
      <label>confirm password</label>
    </div>

    <!-- Success message -->
    <p v-show="resetMessage.success">
      Your password was successfully reset. You may now <router-link to="/login">login</router-link>.
    </p>

    <!-- Error message -->
    <p v-show="!resetMessage.success && resetMessage.error">
      Error: {{resetMessage.error}}. Please <router-link to="/forgot">reset</router-link> your password.
    </p>

    <nav v-show="passwordsMatch && !resetMessage.success && form.secondPassword.length > 4">
      <button type="submit">Reset password</button>
    </nav>
  </form>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  data () {
    return {
      resetToken: null,
      form: {
        password: null,
        secondPassword: null
      }
    }
  },
  mounted () {
    this.resetToken = this.$route.params.resetToken
  },
  computed: {
    ...mapGetters(['resetMessage']),
    passwordsMatch () {
      return (this.form.password && this.form.secondPassword && this.form.password === this.form.secondPassword && this.form.secondPassword.length > 4) || false
    }
  },
  methods: {
    ...mapActions(['resetPassword']),
    handleSubmit (e) {
      e.preventDefault()

      this.resetPassword({ password: this.form.password, token: this.resetToken })
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
