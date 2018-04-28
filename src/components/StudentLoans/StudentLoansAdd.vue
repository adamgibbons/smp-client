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
        <input
          type="month"
          v-model="form.graduationDate"
        />
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
      <button class="done add-more" @click="addMore">+ Add more</button>
      <br>
      <button class="done" @click="done">Done</button>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import schools from './universities.json'

export default {
  name: 'StudentLoansAdd',
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
    matchingSchools () {
      return this.schools.filter((school) => {
        return school.toLowerCase().indexOf(this.form.school.toLowerCase()) !== -1
      }).slice(0, 10)
    }
  },
  methods: {
    ...mapActions(['addStudentLoan']),
    foo () {
      console.log('TODO handle change')
    },
    selectSchool (school) {
      this.form.school = school
      this.selected = true
    },
    addMore () {
      this.$emit('scrollTop')
      this.addStudentLoan(this.form)
      this.form = {
        type: null,
        graduationDate: null,
        school: null,
        balance: null
      }
    },
    done () {
      this.addStudentLoan(this.form)
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
