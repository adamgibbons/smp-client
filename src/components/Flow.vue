<template>
  <div class="gradient flow body">
    <router-view></router-view>
    <nav>
      <button
        v-show="backButtonIsVisible"
        class="back"
        @click.prevent="back">
        <i class="fas fa-chevron-left"></i>
      </button>
      <button
        v-show="nextButtonIsVisible"
        class="next"
        :class="{disabled: isValid === false}"
        @click.prevent="next"
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
      'savings2IsValid',
      'personal',
      'housing',
      'skipHousingInfo',
      'user',
      'authenticated'
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
        'Savings1',
        'Savings2'
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
      if (this.$route.name === 'Savings2') return this.savings2IsValid

      return true
    }
  },
  mounted () {
    if (this.$route.query.loadUser) {
      this.loadUserProfile({ userId: this.user.id })
    }
  },
  methods: {
    ...mapActions(['update', 'loadUserProfile', 'setValueByPath']),
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
      this.update({ id: this.user.id })

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

      if (this.$route.name === 'Savings2') {
        return this.$router.push({ name: 'Results' })
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
  background: transparent;
  border: none;
  color: gray;
  position: absolute;
  bottom: 0;
  left: .66rem;
  padding: .2em .66em;
  font-size: 1.33em;
  font-weight: 900;
}
select {
  color: white;
  display: inline-block;
  font-size: 1em;
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
  border-bottom: 1px solid white;
  color: white;
  background: transparent;
  padding-bottom: 0.33em;
}

.select-wrapper,
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
  border-radius: 0;
  color: white;
  background: transparent;
  border: none;
  font-size: 1.1em;
  margin: .5em 0 .1em;
  min-width: 5em;
  width: 100%;
  text-overflow: ellipsis;
}
.search-wrapper input[type="text"]::-webkit-input-placeholder {
  color: white;
  opacity: .4;
  font-weight: 100;
  font-size: 13px;
}
.search-wrapper input[type="text"]::-moz-placeholder {
  color: white;
  opacity: .4;
  font-weight: 100;
  font-size: 13px;
}
.search-wrapper input[type="text"]:-ms-input-placeholder {
  color: white;
  opacity: .4;
  font-weight: 100;
  font-size: 13px;
}
.search-wrapper input[type="text"]:-moz-placeholder {
  color: white;
  opacity: .4;
  font-weight: 100;
  font-size: 13px;
}
.search-wrapper.active {
  position: absolute;
  top: 2em;
  bottom: 2em;
  right: 1em;
  left: 1em;
  background-color: #222;
  z-index: 100;
  border-bottom: none;
  width: 80%;
  max-width: 50em;
  margin: auto;
  display: block;
}
.search-wrapper nav {
  position: absolute;
  bottom: 0;
}
.search-wrapper.active input {
  padding: 1em 0.5em 0.5em;
  border-bottom: 2px solid #aaa;
  width: 90%;
  margin: auto;
  display: block;
}
.search-results {
  position: relative;
  max-height: 70%;
  overflow-y: scroll;
}
.search-results .search-result {
  margin: 2px 0;
  padding: .6em 1em;
  line-height: 1.1;
  color: white;
  background-color: #333;
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
  font-size: 1rem;
  font-weight: 200;
  position: relative;
  z-index: 100;
  width: 1.33rem;
  margin: 0 0 0 0.3rem;
  top: -0.5rem;
  left: 0.5rem;
}

.idk img {
  width: 100%;
  opacity: .9;
}

.currency {
  font-size: .8em;
  margin-right: 2px;
}

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
    height: 4em; /* Specified height */
    border-bottom: 1px solid white;
    background: transparent;
    outline: none; /* Remove outline */
    -webkit-transition: .2s; /* 0.2 seconds transition on hover */
    transition: opacity .2s;
    border-radius: 0;
}

.slider:hover {
    opacity: 1; /* Fully shown on mouse-over */
}

.slider::-webkit-slider-thumb {
    -webkit-appearance: none; /* Override default look */
    appearance: none;
    width: 30px; /* Set a specific slider handle width */
    height: 30px; /* Slider handle height */
    background: white;
    border-radius: 100%;
    cursor: pointer; /* Cursor on hover */
    position: relative;
    top: 2em;
}

.slider::-moz-range-thumb {
    width: 30px; /* Set a specific slider handle width */
    height: 30px; /* Slider handle height */
    background: white;
    border-radius: 100%;
    cursor: pointer; /* Cursor on hover */
    position: relative;
    top: 2em;
}

.modal-bottom-menu .remove {
  position: static;
  margin: -3em 0 0 0;
  padding: 1em;
  font-size: .8em;
  color: white;
  opacity: .8;
  border: none;
  background: transparent;
}
.modal-bottom-menu .pull-up {
  margin-top: -2em;
}
</style>
