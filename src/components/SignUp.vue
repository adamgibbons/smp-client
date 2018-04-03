<template>
  <div class="body">

    <p>First, let's start with your name and email so we can send you your results. Don't worry,no spam.</p>

    <input class="text-input" type="text" v-model="registrationForm.name" placeholder="First name">
    <input class="text-input" type="text" v-model="registrationForm.email" placeholder="Email">
    <input class="text-input" type="text" v-model="registrationForm.password" placeholder="Password">
    <button @click="signUp">Sign up</button>
    <!-- <button @click="start">Start</button> -->
  </div>
</template>

<script>
import axios from 'axios'

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
    // start () {
    //   this.$router.push('/flow/personal-1')
    // },
    // ping () {
    //   axios.get('//localhost:8000/api/whoami')
    //     .then((success) => { console.log(success) })
    //     .catch((err) => { console.log(err) })
    // },
    handleInput (e) {
      console.log(e)
    },
    signUp (e) {
      console.log(this.registrationForm)

      axios.post('//localhost:8000/api/register', this.registrationForm)
        .then((success) => { console.log(success) })
        .catch((err) => { console.log(err) })
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
</style>
