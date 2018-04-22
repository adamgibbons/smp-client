<template>
  <div class="gradient flow body">
    <router-view></router-view>
    <nav v-show="!blacklisted">
      <button class="back" @click="back">Back</button>
      <button class="next" @click="next">Next</button>
    </nav>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data () {
    return {
      progress: [
        'personal-1',
        'personal-2',
        'personal-3',
        'financial',
        'housing-1',
        'housing-2',
        'housing-3',
        'housing-4',
        'utilities/splash',
        'insurance/splash',
        'savings-1',
        'savings-2'
      ],
      position: 0
    }
  },
  computed: {
    blacklisted () {
      if (!this.$route.name) return false

      return [
        'UtilitiesSplash',
        'UtilitiesEdit',
        'UtilitiesAdd',
        'InsuranceSplash',
        'InsuranceEdit',
        'InsuranceAdd'
      ].indexOf(this.$route.name) !== -1
    }
  },
  methods: {
    ...mapActions(['update']),
    back () {
      if (this.position === 0) return

      this.$router.go(-1)
      this.position = this.position - 1
    },
    next () {
      this.update()
      if (this.position + 1 === this.progress.length) return

      if (this.$route.name === 'UtilitiesReview') {
        this.$router.push('/flow/savings-1')
        this.position = this.progress.indexOf('savings-1')
      } else {
        this.$router.push('/flow/' + this.progress[this.position + 1])
        this.position += 1
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
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
}
.back {
  border-radius: 1em;
  background: transparent;
  border: 2px solid gray;
  color: gray;
  position: absolute;
  bottom: 0;
  left: 1rem;
  padding: 0em .66em;
  font-size: .8em;
  font-weight: 600;
  line-height: 2;
}
select {
  font-size: .9em;
  color: white;
  display: inline-block;
}
.button  {
  border: 1px solid white;
}
.control input[type="radio"] {
  display: none;
}
.control label {
  border: 1px solid #aaa;
  color: #aaa;
  border-radius: 2em;
  padding: .1em .7em;
  font-size: .8em;
  display: inline-block;
  margin: 0 .33em .33em 0;
}
.radio.active {
  background-color: #6F9FF8;
  border: 1px solid #6F9FF8;
  color: white;
}
.select-wrapper {
  border-bottom: 1px solid white;
  color: white;
  background: transparent;
  display: inline-block;
}
.select-wrapper select {
  color: white;
  background: transparent;
  border: none;
  margin: .5em 0;
}
.select-wrapper .unit-symbol {
  font-size: .8em;
  font-weight: 300;
}
.select-wrapper input[type="number"] {
  color: white;
  background: transparent;
  border: none;
  font-size: 1.1em;
  margin: .5em 0;
  min-width: 5em;
}
.progress-bar {
  height: 4px;
  background: white;
}
.choose-one, .info {
  font-size: .7em;
  font-weight: 200;
  margin-top: .33em;
  color: white;
}
</style>
