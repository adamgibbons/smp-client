<template>
  <div>
    <!-- type -->
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

    <!-- year/make/model and mileage -->
    <div v-show="form.type === 'Car/SUV'">
      <!-- year/make/model -->
      <div class="block">
        <div class="title">
          Year/Make/Model
        </div>

        <div class="year-make-model-row">
          <div class="year-make-model-cell">
            <div class="select-wrapper">
              <select v-model="form.year">
                <option></option>
                <option
                  v-for="(year, index) in years"
                  :key="index"
                  :value="year"
                >{{year}}</option>
              </select>
            </div>
          </div>

          <div class="year-make-model-cell">
            <div class="select-wrapper">
              <select v-model="form.make">
                <option></option>
                <option
                  v-for="(make, index) in makes"
                  :key="index"
                  :value="make"
                >{{make}}</option>
              </select>
            </div>
          </div>

          <div class="year-make-model-cell">
            <div class="select-wrapper">
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
        </div>

      </div>
      <!-- mileage -->
      <div class="block">
        <div class="title">Mileage</div>

        <div class="modal-number">
          <div class="control">
            <input
              type="tel"
              :min="0"
              :max="250000"
              v-model="form.mileage"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- ownership -->
    <div class="block" v-show="!!form.type">
      <div class="title">Your vehicle is</div>

      <div class="control">
        <label
          v-for="(option, index) in vehicleOwnershipOptions"
          :key="index"
          class="radio" :class="{active: option === form.ownership}" :for="option"
        >
          <input
            type="radio"
            :name="option"
            :id="option"
            :value="option"
            :checked="option === form.ownership"
            v-model="form.ownership"
          />
          {{option}}
        </label>
      </div>
    </div>

    <!-- 9b -->
    <div v-show="form.ownership === 'Owned - Making payments'">
      <!-- monthlyPayment -->
      <div class="block">
        <div class="title">Monthly Payment (Incl taxes)</div>

        <div class="modal-number">
          <div class="control">
            <span class="unit-symbol">$</span>
            <input
              type="tel"
              :min="0"
              :max="250000"
              v-model="form.monthlyPayment"
            />
          </div>
        </div>
      </div>

      <!-- loanBalance -->
      <div class="block">
        <div class="title">Loan Balance</div>

        <div class="modal-number">
          <div class="control">
            <span class="unit-symbol">$</span>
            <input
              type="tel"
              :min="0"
              :max="250000"
              v-model="form.loanBalance"
            />
          </div>
        </div>
      </div>

      <!-- loanPaidOffDate -->
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

      <!-- loanInterestRate -->
      <div class="block">
        <div class="title">What is the interest rate on your loan?</div>

        <div class="control">
          <div class="modal-number">
            <input
              type="number"
              v-model="form.loanInterestRate"
              style="max-width:5em;"
            />
            <span class="unit-symbol">%</span>
          </div>
        </div>
      </div>
    </div>

    <!-- 9c -->
    <div v-show="form.ownership === 'Leased'">
      <!-- monthlyLeasePayment -->
      <div class="block">
        <div class="title">Monthly Lease Payment</div>

        <div class="modal-number">
          <div class="control">
            <span class="unit-symbol">$</span>
            <input
              type="tel"
              :min="0"
              :max="250000"
              v-model="form.monthlyLeasePayment"
            />
          </div>
        </div>
      </div>

      <!-- leaseTermEnds -->
      <div class="block">
        <div class="title">Lease Term Ends</div>

        <div class="control">
          <div class="form-wrapper">
            <input
              type="month"
              v-model="form.leaseTermEnds"
            />
          </div>
        </div>
      </div>
    </div>

    <div class="modal-bottom-menu">
      <div class="text-center">
        <button class="button" @click="done">Done</button>
      </div>
      <div class="pull-left pull-up">
        <button class="remove" @click="remove">
          <i class="far fa-trash-alt"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import { clone, rangeRight } from 'lodash'
import vehicleTypes from './vehicle-types.json'
import vehicleMakesModels from './vehicle-makes-models.json'

const years = rangeRight(1980, 2019)

export default {
  name: 'VehiclesEdit',
  props: ['indexOfModalItem'],
  mounted () {
    // TODO evangelize this
    this.form = clone(this.vehicles[this.indexOfModalItem])
  },
  data () {
    return {
      years,
      vehicleTypes,
      vehicleMakesModels,
      vehicleOwnershipOptions: ['Owned - Making payments', 'Leased', 'Owned - Paid in Full'],
      form: {}
    }
  },
  computed: {
    ...mapGetters(['vehicles']),
    makes () {
      return Object.keys(this.vehicleMakesModels)
    },
    models () {
      if (!this.form.make) return []

      return this.vehicleMakesModels[this.form.make]
    }
  },
  watch: {
    form: function (newVal, oldVal) {
      if (newVal.type === 'Motorcycle') {
        this.form.make = ''
        this.form.model = ''
      }
      this.updateVehicle({ form: this.form, index: this.indexOfModalItem })
    }
  },
  methods: {
    ...mapActions(['updateVehicle', 'removeVehicle']),
    done () {
      this.updateVehicle({ form: this.form, index: this.indexOfModalItem })
      this.$emit('closeModal')
    },
    remove () {
      this.removeVehicle({ index: this.indexOfModalItem })
      this.$emit('closeModal')
    }
  }
}
</script>
