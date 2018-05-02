<template>
  <div class="body">
    <div class="rows">
      <div
        class="row"
        v-for="({ name, amount }, index) in activatedLivingExpenses"
        :key="index">
        <div class="cell name">{{name | prettyName}}</div>
        <div class="cell amount">${{amount}}</div>
        <div class="cell edit" @click="edit">
          <a>edit</a>
        </div>
      </div>
    </div>
    <div class="page-nav">
      <button class="addMore" @click="addMore">+ add more</button>
    </div>
    <div class="modal" v-if="editingLivingExpenses">
      <div class="modal-close" @click="closeModal">x</div>
      <LivingExpensesEdit
        v-on:closeModal="closeModal"
        v-on:update="update" />
    </div>
    <div class="modal" v-if="addingLivingExpenses">
      <div class="modal-close" @click="closeModal">x</div>
      <LivingExpensesAdd
        v-on:closeModal="closeModal"
        v-on:scrollTop="scrollTop"
        v-on:edit="edit" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import LivingExpensesAdd from './LivingExpensesAdd'
import LivingExpensesEdit from './LivingExpensesEdit'

export default {
  name: 'LivingExpensesReview',
  mounted () {
    if (this.$route.params.addingLivingExpenses) {
      this.addingLivingExpenses = true
    }
    if (this.$route.params.editingLivingExpenses) {
      this.editingLivingExpenses = true
    }
  },
  computed: {
    ...mapGetters(['activatedLivingExpenses'])
  },
  methods: {
    edit () {
      this.addingLivingExpenses = false
      this.editingLivingExpenses = true
    },
    addMore () {
      this.addingLivingExpenses = true
    },
    closeModal () {
      this.addingLivingExpenses = false
      this.editingLivingExpenses = false
    },
    scrollTop () {
      this.$el.querySelector('.modal').scrollTop = 0
    },
    update () {
      this.closeModal()
    }
  },
  data () {
    return {
      addingLivingExpenses: false,
      editingLivingExpenses: false
    }
  },
  components: { LivingExpensesAdd, LivingExpensesEdit },
  filters: {
    prettyName: (name) => {
      return {
        gymMembership: 'Gym Membership',
        fuel: 'Fuel',
        publicTransportation: 'Public Transportation',
        healthCare: 'Healthcare',
        phoneInternetCable: 'Phone/Internet/Cable',
        diningOut: 'Dining Out',
        shopping: 'Shopping',
        entertainment: 'Entertainment',
        childcare: 'Childcare',
        other: 'Other'
      }[name]
    }
  }
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
