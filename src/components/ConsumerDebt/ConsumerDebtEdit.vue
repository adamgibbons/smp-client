<template>
  <div class="block">
    <pre>{{consumerDebt}}</pre>
    <!-- <pre>{{consumerDebt[selectedConsumerDebt[0]].interestRate}}</pre> -->
<!--     <div
      v-show="isSelected('gymMembership')"
      class="remove"
      @click="remove('gymMembership')">
      remove
    </div> -->

    <smp-slider
      title="Interest Rate"
      :path="getPath('interestRate')"
      :min="0"
      :max="10000"
      :step="100"
      :value="consumerDebt[type].interestRate"
      unitSymbol="$"
    >
    </smp-slider>
    <div class="page-nav">
      <button class="done" @click="done">Next</button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import smpSlider from '../smpSlider'

export default {
  components: { smpSlider },
  name: 'ConsumerDebtEdit',
  data () {
    return {
      position: 0
    }
  },
  computed: {
    ...mapGetters(['consumerDebt', 'selectedConsumerDebt']),
    type () {
      return this.selectedConsumerDebt[this.position]
    }
  },
  methods: {
    ...mapActions(['removeConsumerDebt']),
    done () {
      if (this.selectedConsumerDebt.length - 1 === this.position) {
        this.$router.push('/flow/consumer-debt/review')
        return
      }

      this.position += 1
    },
    remove (name) {
      this.removeConsumerDebt({ name })
    },
    getPath (name) {
      return `consumerDebt[${this.selectedConsumerDebt[this.position]}].${name}`
    }
  }
}
</script>

<style scoped>
  .page-nav {
    text-align: center;
    margin: 1em 0;
  }
  button.done {
    border-radius: 2em;
    padding: .33em 1em;
    background: transparent;
    color: white;
    border: 2px solid white;
    font-size: 1em;
  }
  .remove {
    position: absolute;
    font-size: .8em;
    right: 1rem;
    margin-top: 1.5rem;
    color: lightgray;
    opacity: .8;
    margin-right: .33em;
  }
</style>
