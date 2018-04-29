<template>
  <div>
    <div class="block">
      <div class="title">Type of Vehicle</div>

      <div class="control">
        <label
          v-for="(option, index) in vehicleTypes"
          :key="index"
          class="radio" :class="{active: option === form.type}" :for="option"
        >
          <input
            type="radio"
            :name="option"
            :id="option"
            :value="option"
            :checked="option === form.type"
            v-model="form.type"
          />
          {{option}}
        </label>
      </div>
    </div>

    <div class="block">
      <div class="title">
        Year/Make/Model
      </div>
      <div class="select-wrapper inline" style="margin-left: 0;">
        <select v-model="form.year">
          <option></option>
          <option
            v-for="(year, index) in years"
            :key="index"
            :value="year"
          >{{year}}</option>
        </select>
      </div>
      <div class="select-wrapper inline">
        <select v-model="form.make">
          <option></option>
          <option
            v-for="(make, index) in makes"
            :key="index"
            :value="make"
          >{{make}}</option>
        </select>
      </div>
      <div class="select-wrapper inline">
        <select v-model="form.model">
          <option></option>
          <option
            v-for="(model, index) in models"
            :key="index"
            :value="model"
          >{{model}}</option>
        </select>
      </div>
    </div>

    <div class="block">
      <div class="title">When does this loan get paid off?</div>

      <div class="control">
        <div class="form-wrapper">
          <input
            type="month"
            v-model="form.loanPaidOffDate"
          />
        </div>
      </div>
    </div>

    <div class="block">
      <div class="title">Lease Term Ends</div>

      <div class="control">
        <div class="form-wrapper">
          <input
            type="month"
            v-model="form.leaseTermEndsDate"
          />
        </div>
      </div>
    </div>

    <div class="page-nav">
      <button class="done add-more" @click="addMore">+ Add more</button>
      <br>
      <button class="done" @click="done">Done</button>
    </div>
  </div>
</template>

<script>
import { rangeRight } from 'lodash'
import { mapActions } from 'vuex'
import vehicleTypes from './vehicle-types.json'
import vehicleMakesModels from './vehicle-makes-models.json'

const years = rangeRight(1980, 2019)

export default {
  name: 'VehiclesAdd',
  data () {
    return {
      years,
      vehicleTypes,
      vehicleMakesModels,
      form: {
        type: null,
        year: null,
        make: null,
        model: null,
        mileage: null,
        monthlyPayment: null,
        loanBalance: null,
        loanPaidOffDate: null,
        loanInterestRate: null,
        monthlyLeastPayment: null,
        leaseTermEndsDate: null
      }
    }
  },
  computed: {
    matchingSchools () {
      return this.schools.filter((school) => {
        return school.toLowerCase().indexOf(this.form.school.toLowerCase()) !== -1
      }).slice(0, 10)
    },
    makes () {
      return Object.keys(this.vehicleMakesModels)
    },
    models () {
      if (!this.form.make) return []

      return this.vehicleMakesModels[this.form.make]
    }
  },
  methods: {
    ...mapActions(['addVehicle']),
    selectVehicle (vehicle) {
      // this.form.school = school
      // this.selected = true
    },
    addMore () {
      this.$emit('scrollTop')
      this.addVehicle(this.form)
      this.form = {
        type: null,
        year: null,
        make: null,
        model: null,
        mileage: null,
        monthlyPayment: null,
        loanBalance: null,
        loanPaidOffDate: null,
        loanInterestRate: null,
        monthlyLeastPayment: null,
        leaseTermEndsDate: null
      }
    },
    done () {
      this.addVehicle(this.form)
      if (this.$route.name === 'StudentLoansReview') {
        this.$emit('closeModal')
        return
      }
      this.$router.push({ name: 'StudentLoansReview' })
    }
  }
}
</script>

<style scoped>
  .inline {
    display: inline;
    margin-left: .1em;
  }
  .page-nav {
    text-align: center;
    margin: 1em 0;
  }
  .add-more {
    margin-bottom: 2em;
  }
  button.done {
    border-radius: 2em;
    padding: .33em 1em;
    background: transparent;
    color: white;
    border: 2px solid white;
    font-size: 1em;
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
</style>
