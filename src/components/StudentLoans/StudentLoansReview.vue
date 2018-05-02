<template>
  <div class="body">
    <div class="rows">
      <div
        class="row"
        v-for="({ type, balance }, index) in studentLoans"
        :key="index">
        <!-- <div class="cell name">{{name | prettyName}}</div> -->
        <div class="cell name">{{type}}</div>
        <div class="cell amount">${{balance}}</div>
        <div class="cell edit" @click="edit(index)">
          <a>edit</a>
        </div>
      </div>
    </div>
    <div class="page-nav">
      <button class="addMore" @click="addMore">+ add more</button>
    </div>
    <div class="modal" v-if="editingStudentLoan">
      <div class="modal-close" @click="closeModal">x</div>
      <StudentLoansEdit v-on:closeModal="closeModal" :indexOfModalItem="indexOfModalItem" />
    </div>
    <div class="modal" v-if="addingStudentLoan">
      <div class="modal-close" @click="closeModal">x</div>
      <StudentLoansAdd
        v-on:closeModal="closeModal"
        v-on:scrollTop="scrollTop" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import StudentLoansEdit from '@/components/StudentLoans/StudentLoansEdit'
import StudentLoansAdd from '@/components/StudentLoans/StudentLoansAdd'

export default {
  name: 'StudentLoansReview',
  components: { StudentLoansAdd, StudentLoansEdit },
  data () {
    return {
      addingStudentLoan: false,
      editingStudentLoan: false,
      indexOfModalItem: 0
    }
  },
  mounted () {
    if (this.$route.params.addingStudentLoan) {
      this.addingStudentLoan = true
    }
    if (this.$route.params.editingStudentLoan) {
      this.editingStudentLoan = true
    }
  },
  methods: {
    edit (index) {
      this.indexOfModalItem = index
      this.editingStudentLoan = true
    },
    addMore () {
      this.addingStudentLoan = true
    },
    closeModal () {
      this.addingStudentLoan = false
      this.editingStudentLoan = false
    },
    scrollTop () {
      this.$el.querySelector('.modal').scrollTop = 0
    }
  },
  computed: {
    ...mapGetters(['studentLoans'])
  }
  // filters: {
  //   prettyName: (name) => {
  //     return {
  //       gymMembership: 'Gym Membership',
  //       fuel: 'Fuel',
  //       publicTransportation: 'Public Transportation',
  //       healthCare: 'Healthcare',
  //       phoneInternetCable: 'Phone/Internet/Cable',
  //       diningOut: 'Dining Out',
  //       shopping: 'Shopping',
  //       entertainment: 'Entertainment',
  //       childcare: 'Childcare',
  //       other: 'Other'
  //     }[name]
  //   }
  // }
}
</script>

<style scoped>
  button {
    color: white;
    border: 1px solid white;
    padding: 1em;
    background: transparent;
  }
  .page-nav {
    text-align: center;
  }
  button.addMore {
    border-radius: 2em;
    padding: .33em 1em;
    background: transparent;
    color: white;
    border: 2px solid white;
    font-size: 1em;
    margin: 0 auto;
  }
</style>
