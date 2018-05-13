<template>
  <div class="gradient flow body">
    <router-view></router-view>
    <nav>
      <button
        v-show="backButtonIsVisible"
        class="back"
        @click="back">
        &lsaquo;
      </button>
      <button
        v-show="nextButtonIsVisible"
        class="next"
        :class="{disabled: isValid === false}"
        @click="next"
        :disabled="!isValid">
        Next
      </button>
    </nav>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import routesList from '@/data/routes-list.json'

export default {
  data () {
    return { routesList }
  },
  computed: {
    ...mapGetters([
      'personal1IsValid',
      'personal2IsValid',
      'personal3IsValid',
      'financialIsValid',
      'housing1IsValid',
      'housing2IsValid',
      'housing3IsValid',
      'housing4IsValid',
      'savings1IsValid',
      'personal',
      'housing',
      'skipHousingInfo'
    ]),
    backButtonIsVisible () {
      if (this.$route.name === 'Personal1') return false

      return true
    },
    nextButtonIsVisible () {
      if (!this.$route.name) return false

      return [
        'Personal1',
        'Personal2',
        'Personal3',
        'Financial',
        'Housing1',
        'Housing2',
        'Housing3',
        'Housing4',
        'Housing4',
        'UtilitiesReview',
        'VehiclesReview',
        'InsuranceReview',
        'StudentLoansReview',
        'ConsumerDebtReview',
        'LivingExpensesReview',
        'Savings1'
      ].indexOf(this.$route.name) !== -1
    },
    position () {
      return this.routesList.indexOf(this.$route.name)
    },
    isValid () {
      if (this.$route.name === 'Personal1') return this.personal1IsValid
      if (this.$route.name === 'Personal2') return this.personal2IsValid
      if (this.$route.name === 'Personal3') return this.personal3IsValid
      if (this.$route.name === 'Financial') return this.financialIsValid
      if (this.$route.name === 'Housing1') return this.housing1IsValid
      if (this.$route.name === 'Housing2') return this.housing2IsValid
      if (this.$route.name === 'Housing3') return this.housing3IsValid
      if (this.$route.name === 'Housing4') return this.housing4IsValid
      if (this.$route.name === 'Savings1') return this.savings1IsValid

      return true
    }
  },
  methods: {
    ...mapActions(['update']),
    back () {
      if (this.$route.name === 'Financial') {
        if (this.personal.maritalStatus === 'married') {
          return this.$router.replace({ name: 'Personal3' })
        }

        return this.$router.replace({ name: 'Personal2' })
      }

      if (this.$route.name === 'Housing4') {
        return this.$router.replace({ name: 'Housing1' })
      }

      if (this.$route.name === 'UtilitiesReview' || this.$route.name === 'UtilitiesSplash') {
        if (this.housing.status === 'own') {
          return this.$router.replace({ name: 'Housing3' })
        }

        return this.$router.replace({ name: 'Housing4' })
      }

      if (this.$route.name === 'VehiclesReview' || this.$route.name === 'VehiclesSplash') {
        if (this.skipHousingInfo) {
          return this.$router.replace({ name: 'Housing1' })
        }

        if (this.housing.rentIncludesUtilities === 'Yes') {
          return this.$router.replace({ name: 'Housing4' })
        }

        return this.$router.replace({ name: 'UtilitiesSplash' })
      }

      if (this.$route.name === 'VehiclesReview') {
        return this.$router.push({ name: 'UtilitiesSplash' })
      }

      if (this.$route.name === 'InsuranceReview') {
        return this.$router.push({ name: 'VehiclesSplash' })
      }

      if (this.$route.name === 'StudentLoansReview') {
        return this.$router.push({ name: 'InsuranceSplash' })
      }

      if (this.$route.name === 'ConsumerDebtReview') {
        return this.$router.push({ name: 'StudentLoansSplash' })
      }

      if (this.$route.name === 'LivingExpensesReview') {
        return this.$router.push({ name: 'ConsumerDebtSplash' })
      }

      if (this.position === 0) return

      this.$router.replace({ name: this.routesList[this.position - 1] })
    },
    next () {
      // this.update()

      if (this.$route.name === 'Personal2') {
        if (this.personal.maritalStatus === 'married') {
          return this.$router.push({ name: 'Personal3' })
        }

        this.$router.push({ name: 'Financial' })
        return
      }

      if (this.$route.name === 'Housing1') {
        if (this.housing.status === 'own') {
          return this.$router.push({ name: 'Housing2' })
        }

        if (this.skipHousingInfo) {
          return this.$router.push({ name: 'VehiclesSplash' })
        }

        return this.$router.push({ name: 'Housing4' })
      }

      if (this.$route.name === 'Housing3') {
        return this.$router.push({ name: 'UtilitiesSplash' })
      }

      if (this.$route.name === 'Housing4') {
        if (this.housing.rentIncludesUtilities === 'Yes') {
          return this.$router.push({ name: 'VehiclesSplash' })
        }

        return this.$router.push({ name: 'UtilitiesSplash' })
      }

      if (this.$route.name === 'UtilitiesReview') {
        return this.$router.push({ name: 'VehiclesSplash' })
      }

      if (this.$route.name === 'VehiclesReview') {
        return this.$router.push({ name: 'InsuranceSplash' })
      }

      if (this.$route.name === 'InsuranceReview') {
        return this.$router.push({ name: 'StudentLoansSplash' })
      }

      if (this.$route.name === 'StudentLoansReview') {
        return this.$router.push({ name: 'ConsumerDebtSplash' })
      }

      if (this.$route.name === 'ConsumerDebtReview') {
        return this.$router.push({ name: 'LivingExpensesSplash' })
      }

      if (this.$route.name === 'LivingExpensesReview') {
        return this.$router.push({ name: 'Savings1' })
      }

      if (this.position + 1 === this.routesList.length) return

      this.$router.push({ name: this.routesList[this.position + 1] })
    }
  }
}
</script>

<style>
.next.disabled {
  opacity: 0;
  top: 1em;
}
.back {
  border-radius: 1em;
  background: transparent;
  border: 2px solid gray;
  color: gray;
  position: absolute;
  bottom: 0;
  left: 1rem;
  padding: .33em .66em;
  font-size: 1em;
  font-weight: 900;
}
select {
  font-size: .9em;
  color: white;
  display: inline-block;
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
  margin: .33em .33em .33em 0;
  line-height: 1.6;
}
.radio.active {
  background-color: #6F9FF8;
  border: 1px solid #6F9FF8;
  color: white;
}
.search-wrapper {
  width: 100%;
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
.select-wrapper input[type="number"],
.select-wrapper input[type="tel"] {
  color: white;
  background: transparent;
  border: none;
  font-size: 1.1em;
  margin: 0 0 .3em;
  width: 100%;
  max-width: 6em;
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
  width: 100%;
}
.search-wrapper input[type="text"]::-webkit-input-placeholder {
  color: white;
  opacity: .5;
  font-weight: 100;
  font-size: 13px;
}
.search-wrapper input[type="text"]::-moz-placeholder {
  color: white;
  opacity: .5;
  font-weight: 100;
  font-size: 13px;
}
.search-wrapper input[type="text"]:-ms-input-placeholder {
  color: white;
  opacity: .5;
  font-weight: 100;
  font-size: 13px;
}
.search-wrapper input[type="text"]:-moz-placeholder {
  color: white;
  opacity: .5;
  font-weight: 100;
  font-size: 13px;
}
.search-results {
  width: 113%;
  /*background-color: #031b36;*/
  margin-left: -1em;
  max-width: 300px;
}
.search-results .search-result {
  margin: 2px;
  background: #65758e;
  font-size: .8em;
  padding: 1.5em 1em;
  line-height: 1.1;
  color: white;
}
.year-make-model-row {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-content: flex-start;
}
.year-make-model-cell {
  flex: 1 0 30%;
  margin-right: 5px;
}
.year-make-model-cell > div {
  width: 100%;
}

.rows {
  display: flex;
  flex-flow: column nowrap;
  align-content: flex-start;
  margin: 0 0 1em;
  border-bottom: 1px solid rgba(255, 255, 255, .25);
}
.row {
  border-top: 1px solid rgba(255, 255, 255, .25);
  display: flex;
  padding: .9em 0;
  flex-flow: row nowrap;
}

.cell {
  flex: 1;
  position: relative;
  font-size: .85em;
}
.cell.name {
  padding-left: 1.5em;
}
.cell.amount {
  text-align: center;
}
.cell.edit {
  padding-right: 1.5em;
  text-align: right;
}

.splash {
  text-align: center;
  margin: 3em 2em 0;
}

.remove {
  position: absolute;
  font-size: .8em;
  right: 1rem;
  margin-top: 1.5rem;
  color: lightgray;
  opacity: .8;
  margin-right: .33em;
}

.idk {
  float: right;
  font-size: .7em;
  font-weight: 200;
  opacity: .8;
  position: relative;
  z-index: 100;
}
</style>
