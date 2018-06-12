<template>
  <div>
    <div class="block">
      <div class="title">Type of Loan</div>

      <div class="control">
        <label
          v-for="(option, index) in loanOptions"
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
      <div class="title">Graduation Date</div>

      <div class="control">
        <div class="form-wrapper">
          <input
            type="month"
            v-model="form.graduationDate"
          />
        </div>
      </div>
    </div>

    <div class="block">
      <div class="title">School</div>

      <div class="control">
        <div class="search-wrapper modal-search-wrapper" :class="{'active': focused === true}">
          <input
            type="text"
            v-model="form.school"
            placeholder="Type to search"
            @focus="focus"
          />
          <div
            v-if="matchingSchools && matchingSchools.length > 2 && selected === false"
            class="search-results">
            <div
              class="search-result"
              v-for="(school, index) in matchingSchools"
              :key="index"
              @click="selectSchool(school)">
              {{school}}
            </div>
          </div>
          <nav v-show="focused === true">
            <button class="button done" @click="closeSearch">Done</button>
          </nav>
        </div>
      </div>
    </div>

    <div class="block">
      <div class="title">Student Loan Balance</div>

      <div class="modal-number">
        <div class="control">
          <span class="unit-symbol">$</span>
          <input
            type="tel"
            :min="0"
            :max="500000"
            v-model="form.balance"
          />
        </div>
      </div>
    </div>

    <div class="block">
      <div class="title">Minimum Monthly Payment</div>

      <div class="modal-number">
        <div class="control">
          <span class="unit-symbol">$</span>
          <input
            type="tel"
            :min="0"
            :max="500000"
            v-model="form.minMonthlyPayment"
          />
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
import { clone } from 'lodash'
import schools from './universities.json'

export default {
  name: 'StudentLoansEdit',
  props: ['indexOfModalItem'],
  mounted () {
    this.form = clone(this.studentLoans[this.indexOfModalItem])
  },
  data () {
    return {
      loanOptions: ['Myself', 'Spouse/Partner', 'Child'],
      form: {
        type: null,
        graduationDate: null,
        school: null,
        balance: null,
        minMonthlyPayment: null
      },
      focused: false,
      schools,
      selected: false
    }
  },
  computed: {
    ...mapGetters(['studentLoans']),
    matchingSchools () {
      try {
        return this.schools.filter((school) => {
          return school.toLowerCase().indexOf(this.form.school.toLowerCase()) !== -1
        }).slice(0, 10)
      } catch (e) {}
      return []
    }
  },
  methods: {
    ...mapActions(['updateStudentLoan', 'removeStudentLoan']),
    focus () {
      this.$el.querySelector('.modal-search-wrapper').scrollTop = 0
      this.focused = true
      this.selected = false
      this.form.school = null
    },
    selectSchool (school) {
      this.form.school = school
      this.selected = true
      this.focused = false
    },
    done () {
      this.updateStudentLoan({ form: this.form, index: this.indexOfModalItem })
      this.$emit('closeModal')
    },
    remove () {
      this.removeStudentLoan({ index: this.indexOfModalItem })
      this.$emit('closeModal')
    },
    closeSearch () {
      this.selected = true
      this.focused = false
    }
  }
}
</script>

<style scoped>
  .modal-search-wrapper.active {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    z-index: 200;
    overflow: hidden;
  }
</style>
