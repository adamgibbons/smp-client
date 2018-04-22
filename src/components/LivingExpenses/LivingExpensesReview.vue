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
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'LivingExpensesReview',
  methods: {
    edit () {
      this.$router.push({
        name: 'LivingExpensesSplash',
        params: { editingLivingExpenses: true }
      })
    },
    addMore () {
      this.$router.push({
        name: 'LivingExpensesSplash',
        params: { addingLivingExpenses: true }
      })
    }
  },
  computed: {
    ...mapGetters(['livingExpenses']),
    activatedLivingExpenses () {
      return Object.entries(this.livingExpenses)
        .filter(([_, { include }]) => include === true)
        .map(([name, { include, amount }]) => {
          return { name, amount }
        })
    }
  },
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
  .rows {
    display: flex;
    flex-flow: column nowrap;
    align-content: flex-start;
    margin: 1em 0 1em;
  }
  .row {
    border: 1px solid white;
    border-left: none;
    border-right: none;
    display: flex;
    padding: .9em 0;
    flex-flow: row nowrap;
  }
  .cell {
    flex: 1;
    position: relative;
    left: 10%;
    font-size: .9em;
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
