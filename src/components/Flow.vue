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
        'Personal1',
        'Personal2',
        'Personal3',
        'Financial',
        'Housing1',
        'Housing2',
        'Housing3',
        'Housing4',
        'UtilitiesSplash',
        'InsuranceSplash',
        'ConsumerDebtSplash',
        'LivingExpensesSplash',
        'Savings1',
        'Savings2'
      ]
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
        'InsuranceAdd',
        'LivingExpensesSplash',
        'LivingExpensesEdit',
        'LivingExpensesAdd',
        'ConsumerDebtSplash',
        'ConsumerDebtAdd'
      ].indexOf(this.$route.name) !== -1
    },
    position () {
      return this.progress.indexOf(this.$route.name)
    }
  },
  methods: {
    ...mapActions(['update']),
    back () {
      if (this.$route.name === 'UtilitiesReview') {
        this.$router.replace({ name: 'Housing4' })
        return
      }

      if (this.$route.name === 'InsuranceReview') {
        this.$router.replace({ name: 'UtilitiesSplash' })
        return
      }

      if (this.$route.name === 'ConsumerDebtReview') {
        this.$router.replace({ name: 'InsuranceSplash' })
        return
      }

      if (this.$route.name === 'LivingExpensesReview') {
        this.$router.replace({ name: 'ConsumerDebtSplash' })
        return
      }

      if (this.position === 0) return

      this.$router.replace({ name: this.progress[this.position - 1] })
    },
    next () {
      // this.update()
      if (this.$route.name === 'UtilitiesReview') {
        this.$router.push({ name: 'InsuranceSplash' })
        return
      }

      if (this.$route.name === 'InsuranceReview') {
        this.$router.push({ name: 'ConsumerDebtSplash' })
        return
      }

      if (this.$route.name === 'ConsumerDebtReview') {
        this.$router.push({ name: 'LivingExpensesSplash' })
        return
      }

      if (this.$route.name === 'LivingExpensesReview') {
        this.$router.push({ name: 'Savings1' })
        return
      }

      if (this.position + 1 === this.progress.length) return

      this.$router.push({ name: this.progress[this.position + 1] })
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
.select-wrapper,
.search-wrapper,
.form-wrapper {
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
.form-wrapper input[type="month"] {
  color: white;
  background: transparent;
  border: none;
  font-size: 1.1em;
  margin: .5em 0;
  min-width: 5em;
}
.search-wrapper input[type="text"] {
  color: white;
  background: transparent;
  border: none;
  font-size: 1.1em;
  margin: .5em 0;
  min-width: 5em;
}
.search-results {
  width: 113%;
  /*background-color: #031b36;*/
  margin-left: -1em;
  max-width: 300px;
}
.search-results .search-result {
  margin: 2px;
  background: #031b36;
  font-size: .8em;
  padding: .5em;
  line-height: 1.1;
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
