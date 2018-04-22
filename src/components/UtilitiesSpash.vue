<template>
  <div>
    <p>Add your utilities like electricity, gas, etc. here</p>
    <div>
      <button @click="add">Add</button>
    </div>
    <div>
      <button @click="skip">
        skip
      </button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'utilities',
  computed: {
    ...mapGetters(['utilities', 'selectedUtilities']),
    remainingSelectedUtilities () {
      return this.selectedUtilities.length > 0
    },
    buttonCopy () {
      if (this.$route.path.indexOf('review') !== -1) {
        return 'Add more'
      }

      return 'Done'
    }
  },
  methods: {
    ...mapActions(['setValueByPath']),
    add () {
      this.$router.push({ name: 'add-utilities' })
    },
    skip () {
      this.$router.push('/flow/savings-1')
    }
  }
}
</script>

<style scoped>
  .page-nav {
    text-align: center;
    margin-top: 2em;
  }
  button.done {
    border-radius: 2em;
    padding: .33em 1em;
    background: transparent;
    color: white;
    border: 2px solid white;
    font-size: 1em;
    margin: auto;
  }
</style>
