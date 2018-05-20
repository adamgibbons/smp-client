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
    }
  }
}
</script>

<style>
html, body {
  height: 100%;
  padding: 0;
  margin: 0;
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

a {
  color: #42b983;
}
nav {
  margin: 0 auto;
  text-align: center;
  position: absolute;
  bottom: 1rem;
  width: 100%;
  color: white;
}

.next {
  border-radius: 2em;
  padding: .33em 1em;
  background: transparent;
  color: white;
  border: 2px solid white;
  font-size: 1em;
  transition: all 0.2s ease-in-out;
  position: relative;
  top: 0;
  opacity: 1;
}
.block .button,
.button  {
  border-radius: 2em;
  padding: .33em 1em;
  background: transparent;
  color: white;
  border: 2px solid white;
  font-size: 1em;
  margin: 1em auto;
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
  font-size: .8rem;
  margin-bottom: 1em;
}
.block {
  border-top: 1px solid rgba(255, 255, 255, .25);
  padding: 1.5em 1.66em;
  font-size: 1em
}
.block.muted .control label,
.block.muted .title {
  opacity: .6;
}
.progress-wrapper + .block {
  border-top: none;
}
.block .title {
  text-align: left;
  margin-bottom: .33em;
  font-size: .8rem;
  margin-bottom: .1em;
}
.block .subtitle {
  font-size: .9em;
  line-height: 1.33em;
  font-weight: 300;
  margin-left: .33em;
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

.modal {
  position: absolute;
  top: 0;
  left: 0;
  height: 90%;
  right: 0;
  bottom: 0;
  margin: 2em 1.33em;
  background-color: #2F4161;
  overflow-y: scroll;
  overflow-x: none;
  text-align: left;
  box-shadow: 0px -15px 100px black;
  z-index: 100;
}
.modal .block {
  border-top: none;
}

.modal-close {
  position: fixed;
  right: 1.5em;
  top: 2.1em;
}

/*TODO better naming - this is nav wrapper*/
.text-center {
  text-align: center;
  margin-top: 1em;
}
</style>
