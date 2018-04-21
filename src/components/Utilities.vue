<template>
  <div class="body">
    <div class="title">Utilities</div>
    <router-view></router-view>
    <div class="page-nav">
      <div>
        <button class="done" @click="done">{{buttonCopy}}</button>
      </div>
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
    done () {
      // update the item
      if (this.remainingSelectedUtilities) {
        this.$router.push(`/flow/utilities/bill/${this.selectedUtilities[0]}`)
      } else if (this.$route.path.indexOf('review') === -1) {
        // change copy to add more
        this.$router.push('/flow/utilities/review')
      } else {
        this.$router.push(`/flow/utilities`)
      }
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
