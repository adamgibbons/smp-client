<template>
  <div class="body">
    <div class="rows">
      <div
        class="row"
        v-for="({ policyName, amount }, index) in activatedInsurancePolicies"
        :key="index">
        <div class="cell name">{{policyName | prettyName}}</div>
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
  name: 'InsuranceReview',
  methods: {
    edit () {
      this.$router.push({
        name: 'InsuranceSplash',
        params: { editingInsurance: true }
      })
    },
    addMore () {
      this.$router.push({
        name: 'InsuranceSplash',
        params: { addingInsurance: true }
      })
    }
  },
  computed: {
    ...mapGetters(['insurance']),
    activatedInsurancePolicies () {
      return Object.entries(this.insurance)
        .filter(([_, { include }]) => include === true)
        .map(([policyName, { include, amount }]) => {
          return { policyName, amount }
        })
    }
  },
  filters: {
    prettyName: (name) => {
      return {
        multiPolicy: 'Multi-Policy',
        health: 'Health',
        car: 'Car',
        homeowners: 'Homeowners',
        life: 'Life',
        disability: 'Disability',
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
