<template>
  <div class="wrapper">
    <p>Add your student loans here</p>
    <div>
      <button @click="add">+ add</button>
    </div>
    <div>
      <button @click="skip">
        skip
      </button>
    </div>
    <div>
      <router-link class="back-btn" :to="{ name: 'InsuranceSplash' }">Back</router-link>
    </div>

    <div class="modal" v-if="addingStudentLoans">
      <div class="modal-close" @click="closeModal">x</div>
      <StudentLoansAdd v-on:scrollTop="scrollTop" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import StudentLoansAdd from '@/components/StudentLoans/StudentLoansAdd'

export default {
  name: 'StudentLoansSplash',
  mounted () {
    if (this.$route.params.addingStudentLoans) {
      this.addingStudentLoans = true
    }
    if (this.studentLoans.length > 0) {
      this.$router.replace({ name: 'StudentLoansReview' })
    }
  },
  data () {
    return {
      addingStudentLoans: false
    }
  },
  components: { StudentLoansAdd },
  computed: {
    ...mapGetters(['studentLoans'])
  },
  methods: {
    add () {
      this.addingStudentLoans = true
    },
    skip () {
      this.$router.push({ name: 'ConsumerDebtSplash' })
    },
    closeModal () {
      this.addingStudentLoans = false
    },
    scrollTop () {
      this.$el.querySelector('.modal').scrollTop = 0
    }
  }
}
</script>

<style scoped>
  a.back-btn {
    text-decoration: none;
    border-radius: 1em;
    border: 2px solid gray;
    background: transparent;
    color: gray;
    padding: 0em .66em;
    font-size: .8em;
    font-weight: 600;
    line-height: 2;
    position: absolute;
    left: 1rem;
    bottom: 1rem;
  }
  .wrapper {
    text-align: center;
    margin: 3em 2em 0;
  }
  .page-nav {
    text-align: center;
    margin-top: 2em;
  }
  button {
    border-radius: 2em;
    padding: .33em 1em;
    background: transparent;
    color: white;
    border: 2px solid white;
    font-size: 1em;
    margin: 1em auto;
  }
</style>
