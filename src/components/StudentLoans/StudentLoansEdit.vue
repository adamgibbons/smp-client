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
        <div class="search-wrapper">
          <input
            type="text"
            v-model="form.school"
            placeholder="Type to search"
            @input="selected = false"
          />
        </div>
      </div>
      <div
        v-if="form.school && form.school.length > 2 && selected === false"
        class="search-results">
        <div
          class="search-result"
          v-for="(school, index) in matchingSchools"
          :key="index"
          @click="selectSchool(school)">
          {{school}}
        </div>
      </div>
    </div>

    <div class="block">
      <div class="title">Student Loan Balance</div>

      <div class="control">
        <div class="select-wrapper">
          <span class="unit-symbol">$</span>
          <input
            type="number"
            :min="0"
            :max="500000"
            v-model="form.balance"
          />
        </div>
      </div>
    </div>

    <div class="page-nav">
      <button class="done" @click="done">Done</button>
      <button class="remove" @click="remove">Remove</button>
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
        balance: null
      },
      schools,
      selected: false
    }
  },
  computed: {
    ...mapGetters(['studentLoans'])
  },
  methods: {
    ...mapActions(['updateStudentLoan', 'removeStudentLoan']),
    done () {
      this.updateStudentLoan({ form: this.form, index: this.indexOfModalItem })
      this.$emit('closeModal')
    },
    remove () {
      this.removeStudentLoan({ index: this.indexOfModalItem })
      this.$emit('closeModal')
    }
  }
}
</script>

<style scoped>
  .page-nav {
    text-align: center;
    margin: 1em 0;
  }
  button.done {
    border-radius: 2em;
    padding: .33em 1em;
    background: transparent;
    color: white;
    border: 2px solid white;
    font-size: 1em;
  }
  button.remove {
    font-size: .8em;
    color: white;
    opacity: .8;
    border: none;
    position: absolute;
    left: .5em;
    margin-top: 1.5em;
    background: transparent;
  }
</style>