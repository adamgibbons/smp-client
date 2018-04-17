<template>
  <div class="body">
    <div class="title">Utilities</div>
    <router-view></router-view>
    <div>
      <button @click="remove">Remove</button>
      <button @click="accept">OK</button>
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
    }
  },
  methods: {
    ...mapActions(['setValueByPath']),
    accept () {
      // update the item
      console.log('accept')
      if (this.remainingSelectedUtilities) {
        console.log('utilities remaining')
        this.$router.push(`/flow/utilities/${this.selectedUtilities[0]}`)
      } else {
        this.$router.push('/flow/savings-1')
      }
    },
    remove () {
      // update the item
      if (this.remainingSelectedUtilities) {
        this.$router.push(`/flow/utilities`)
      } else {
        this.$router.push('/flow/savings-1')
      }
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
</style>
