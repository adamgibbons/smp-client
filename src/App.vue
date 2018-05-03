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
  padding: 0;
  margin: 0;
  overflow: hidden;
  font-size: 17px;
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
  font-size: .8rem;
  margin-bottom: 1em;
}
.block {
  border-top: 1px solid rgba(255, 255, 255, .25);
  padding: 1.5em 1.66em;
  font-size: 1em
}
.block:nth-of-type(2) {
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
  margin: 2em 1em;
  background-color: #2F4161;
  overflow-y: scroll;
  overflow-x: none;
  text-align: left;
  box-shadow: 0px -10px 100px black;
  z-index: 100;
}
.modal .block {
  border-top: none;
}

.modal-close {
  position: fixed;
  right: 1.8rem;
  top: 2.5rem;
  color: white;
  font-size: 2em;
  opacity: .8;
}

/*BEGIN SLIDER*/

.slidecontainer {
    width: 100%; /* Width of the outside container */
}

.slidecontainer label {
  float: left;
  position: relative;
  top: -2em;
  left: 1em;
  font-size: 1.33em;
  font-weight: 300;
}

.slidecontainer label span {
  font-size: .6em;
  vertical-align: text-bottom;
}

/* The slider itself */
.slider {
    -webkit-appearance: none;  /* Override default CSS styles */
    appearance: none;
    width: 100%; /* Full-width */
    height: 5em; /* Specified height */
    border: 1px solid lightblue;
    background: transparent;
    outline: none; /* Remove outline */
    opacity: 0.7; /* Set transparency (for mouse-over effects on hover) */
    -webkit-transition: .2s; /* 0.2 seconds transition on hover */
    transition: opacity .2s;
}

.slider:hover {
    opacity: 1; /* Fully shown on mouse-over */
}

.slider::-webkit-slider-thumb {
    -webkit-appearance: none; /* Override default look */
    appearance: none;
    width: 25px; /* Set a specific slider handle width */
    height: 25px; /* Slider handle height */
    background: white;
    border-radius: 100%;
    cursor: pointer; /* Cursor on hover */
    position: relative;
    top: 2.6em;
}

.slider::-moz-range-thumb {
    width: 25px; /* Set a specific slider handle width */
    height: 25px; /* Slider handle height */
    background: white;
    border-radius: 100%;
    cursor: pointer; /* Cursor on hover */
    position: relative;
    top: 2.6em;
}
/*END SLIDER*/

/*TODO better naming - this is nav wrapper*/
.text-center {
  text-align: center;
  margin-top: 1em;
}
</style>
