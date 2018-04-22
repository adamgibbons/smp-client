<template>
  <div class="body">
    <div class="rows">
      <div
        class="row"
        v-for="({ billName, amount }, index) in activatedUtilities"
        :key="index">
        <div class="cell name">{{billName | prettyName}}</div>
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
  name: 'UtilitiesReview',
  methods: {
    edit () {
      this.$router.push({
        name: 'UtilitiesSplash',
        params: { editingUtilities: true }
      })
    },
    addMore () {
      this.$router.push({
        name: 'UtilitiesSplash',
        params: { addingUtilities: true }
      })
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
