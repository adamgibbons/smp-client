<template>
  <div class="flow gradient body">

    <p>First, let's start with your name and email so we can send you your results. Don't worry,no spam.</p>

    <div class="text-input-wrapper">
      <input class="text-input" type="text" v-model="registrationForm.name">
      <label>first name</label>
    </div>

    <div class="text-input-wrapper">
      <input class="text-input" type="text" v-model="registrationForm.email">
      <label>email</label>
    </div>

    <div class="text-input-wrapper">
      <input class="text-input" type="text" v-model="registrationForm.password">
      <label>password</label>
    </div>

    <button @click="signUp">Sign up</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

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
  methods: {
    ...mapActions(['register']),
    signUp () {
      this.register(this.registrationForm)
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

.text-input-wrapper, p {
  margin: 2em auto;
  width: 100%;
  max-width: 250px;
}

p {
  text-align: center;
  margin-bottom: 3em;
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
