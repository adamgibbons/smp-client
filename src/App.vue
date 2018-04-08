<template>
  <div class="grid-container">
    <header>
      <div id="hamburger">menu</div>
      <div id="home">
        <router-link to="/">π TheSocialMoneyProject</router-link>
      </div>
    </header>
    <router-view/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import axios from 'axios'

export default {
  name: 'App',
  computed: mapGetters(['authenticated']),
  watch: {
    // TODO refine routing logic based on form progress
    authenticated: function (isAuthenticated) {
      if (isAuthenticated) {
        this.$router.push('/flow/personal-1')
      }
    }
  },
  mounted () {
    const token = localStorage.getItem('token')
    if (token) {
      // login user
      axios.get(`${process.env.API_URL}whoami`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      })
        .then((data) => {
          console.log(data)
          this.$router.replace('/flow/personal-1')
        })
        .catch((err) => {
          console.log(err)
          this.$router.replace('/')
        })
    } else {
      this.$router.replace('/')
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
  font-size: 18px;
  line-height: 24px;
  font-family: 'helvetica neue', helvetica;
  background: #234c7b;
}
header div {
  font-size: .9em;
  font-weight: 100;
}
.gradient {
  background: linear-gradient(#234c7b, #4d235f);
}
.grid-container {
  height: 100%;
  display: grid;
  grid-template-rows: 8% 92%;
}
.grid-container > header,
.grid-container .body {
  color: white;
}
.title {
  text-align: center;
}
.block {
  border-top: 1px solid #aaa;
  padding: 2em 1.33em;
}
.block:nth-of-type(2) {
  border-top: none;
}
.block .title {
  text-align: left;
  margin-bottom: .33em;
  font-size: .9em;
}
.block button {
  border: 1px solid #aaa;
  color: #aaa;
  border-radius: 1em;
  background: transparent;
  padding: .3em .66em;
}
#home {
  position: absolute;
  top: 0;
  left: 0;
  padding: .66em 1em;
}
#home a {
  text-decoration: none;
  color: white;
  font-size: .8em;
}
#hamburger {
  position: absolute;
  top: 0;
  right: 0;
  padding: .66em 1em;
}
</style>
