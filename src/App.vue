<template>
  <div class="grid-container">
    <UserMenu />
    <header>
      <div id="login" @click="toggleUserMenu">
        <span class="fa fa-bars"></span>
      </div>
      <div id="home">
        <router-link to="/">
          <img class="logo" src="@/assets/logo.png" />
          <!-- <span>TheSocialMoneyProject</span> -->
        </router-link>
      </div>
    </header>
    <router-view/>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import UserMenu from '@/components/UserMenu'
import axios from 'axios'

export default {
  name: 'App',
  computed: mapGetters(['authenticated', 'user']),
  methods: mapActions(['loadUserProfile', 'setUserId', 'logout', 'toggleUserMenu']),
  components: { UserMenu },
  watch: {
    // TODO refine routing logic based on form progress
    authenticated: function (isAuthenticated) {
      if (isAuthenticated) {
        this.$router.push('/flow/personal-1')
        this.loadUserProfile({ userId: this.user.id })
      }
    },
    'user.id': function (newToken, oldToken) {
      // user logged out
      if (!newToken && oldToken) {
        this.$router.push('/login')
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
        .then(({ data }) => {
          const { userId } = data
          this.setUserId({ userId })
          this.loadUserProfile({ userId })
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
  font-family: 'Raleway', 'helvetica neue', helvetica, sans-serif;
  letter-spacing: 1px;
  background: #234c7b;
}
header {
  position: relative;
  z-index: 100;
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

.onboarding {
  color: white;
  background: url('assets/home.jpg') center no-repeat;
  background-size: cover;
  margin: -3.5em 0;
  position: relative;
  text-align: center;
  line-height: 1.2;
  display: flex;
  flex-flow: column;
  justify-content: center;
}

.onboarding .content {
  margin: 0 auto 1em;
  max-width: 600px;
  width: 86%;
  line-height: 1.33;
}
.onboarding h1 {
  margin: 1.5em 0 .66em;
  font-weight: 400;
  font-size: 1.5em;
}
.onboarding h2 {
  font-weight: 300;
  font-size: 1em;
  margin: 1em 0;
}
.onboarding ol {
  font-weight: 300;
  margin: 1em 0;
  text-align: left;
  font-size: .85em;
}
.onboarding li {
  margin: .33em 0;
}

.logo {
  height: 20px;
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
.button,
.onboarding .button  {
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
  grid-template-rows: 6% 94%;
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
  padding: 1.33em;
  font-size: 1em;
}
.block.muted .control label,
.block.muted .title {
  opacity: .5;
}
.progress-wrapper + .block {
  border-top: none;
}
.block .title {
  text-align: left;
  margin-bottom: .33em;
  font-size: .8rem;
  margin-bottom: .1em;
  line-height: 1.33em;
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
}
#home span {
  color: white;
  vertical-align: top;
  font-size: .66em;
  font-weight: 300;
  position: relative;
  top: 2px;
}
#login {
  position: absolute;
  top: 0;
  right: 0;
  padding: .66em 1em;
  font-weight: 400;
  font-size: 1em;
  opacity: .8;
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

.auth-nav {
  position: absolute;
  bottom: 0;
  width: 100%;
}

.auth-nav button {
  margin: 0;
}

.auth-nav p {
  font-size: .8em;
  /*margin: .33em 0;*/
  margin: 0;
  padding: 0;
  max-width: unset;
}
.error {
  background-color: #b32a2a;
  color: white;
  padding-top: .66em;
  padding-bottom: .66em;
}
.fa-home {
  opacity: 0.8;
}

.modal-number input {
  background-color: white;
  color: black;
  font-size: 1em;
  max-width: 8em;
  padding: .66em;
  border-radius: 5px;
  border: none;
}
.modal-number span, input {
  display: inline;
}
.modal-number .unit-symbol {
  color: #42b983;
  /*margin-right: .33em;*/
}

.tiny {
  font-size: .6rem;
  line-height: 1.3em;
  font-weight: 300;
  margin: .33rem 0 .66rem;
}
</style>
