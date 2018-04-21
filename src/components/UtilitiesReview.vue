<template>
  <div class="body">
    <div class="rows">
      <div
        class="row"
        v-for="({ billName, amount }, index) in activatedUtilities"
        :key="index">
        <div class="cell name">{{billName | prettyName}}</div>
        <div class="cell amount">${{amount}}</div>
        <div @click="edit(billName)" class="cell edit">
          <a>edit</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'utilities',
  methods: {
    edit (billName) {
      this.$router.push(`/flow/utilities/bill/${billName}`)
    }
  },
  computed: {
    ...mapGetters(['utilities']),
    activatedUtilities () {
      return Object.entries(this.utilities)
        .filter(([_, { include }]) => include === true)
        .map(([billName, { include, amount }]) => {
          return { billName, amount }
        })
    }
  },
  filters: {
    prettyName: (name) => {
      return {
        electricity: 'Electricity',
        waterSewer: 'Water/Sewer',
        trash: 'Trash',
        naturalGas: 'Natural Gas',
        hoa: 'HOA',
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
    margin-top: 1em;
  }
  .row {
    border: 1px solid white;
    border-left: none;
    border-right: none;
    display: flex;
    padding: 1em 0;
    flex-flow: row nowrap;
  }
  .cell {
    flex: 1;
    position: relative;
    left: 10%;
  }
</style>
