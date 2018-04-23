<template>
  <div class="wrapper">
    <p>
      Last step to add your expenses.<br>
      Select all the rest of your expenses that we didn’t capture.<br>
      (Select All that Apply)
    </p>
    <div>
      <button @click="addLivingExpense">+ add</button>
    </div>
    <div>
      <button @click="skip">
        skip
      </button>
    </div>
    <div>
      <router-link class="back-btn" :to="{ name: 'ConsumerDebtSplash' }">Back</router-link>
    </div>

    <div class="modal" v-show="addingLivingExpenses">
      <div class="modal-close" @click="closeAddModal">x</div>
      <LivingExpensesAdd v-on:editLivingExpenses="handleEditLivingExpenses" />
    </div>

    <div class="modal" v-show="editingLivingExpenses">
      <div class="modal-close" @click="closeEditModal">x</div>
      <LivingExpensesEdit />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import LivingExpensesAdd from '@/components/LivingExpenses/LivingExpensesAdd'
import LivingExpensesEdit from '@/components/LivingExpenses/LivingExpensesEdit'

export default {
  name: 'LivingExpensesSplash',
  mounted () {
    if (this.$route.params.addingLivingExpenses) {
      this.addingLivingExpenses = true
    }
    if (this.$route.params.editingLivingExpenses) {
      this.editingLivingExpenses = true
    }
  },
  data () {
    return {
      addingLivingExpenses: false,
      editingLivingExpenses: false
    }
  },
  components: { LivingExpensesAdd, LivingExpensesEdit },
  computed: {
    ...mapGetters(['livingExpenses', 'selectedLivingExpenses'])
  },
  methods: {
    ...mapActions(['setValueByPath']),
    addLivingExpense () {
      // this.$router.push({ name: 'LivingExpensesAdd' })
      this.addingLivingExpenses = true
      // LivingExpensesAdd
    },
    skip () {
      this.$router.push('/flow/savings-1')
    },
    closeAddModal () {
      this.addingLivingExpenses = false
    },
    closeEditModal () {
      this.editingLivingExpenses = false
    },
    handleEditLivingExpenses (e) {
      this.addingLivingExpenses = false
      this.editingLivingExpenses = true
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
