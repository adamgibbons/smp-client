<template>
  <div class="body">
    <div class="remove" @click="remove">&#10006;</div>
    <smp-slider
      title="Electricity"
      path="utilities.electricity.amount"
      v-show="$route.params.billName === 'electricity'"
      :min="0"
      :max="10000"
      :step="100"
      :value="utilities.electricity.amount"
      unitSymbol="$"
    >
    </smp-slider>

    <smp-slider
      title="Water/Sewer"
      path="utilities.waterSewer.amount"
      v-show="$route.params.billName === 'waterSewer'"
      :min="0"
      :max="10000"
      :step="100"
      :value="utilities.waterSewer.amount"
      unitSymbol="$"
    >
    </smp-slider>

    <smp-slider
      title="Trash"
      path="utilities.trash.amount"
      v-show="$route.params.billName === 'trash'"
      :min="0"
      :max="10000"
      :step="100"
      :value="utilities.trash.amount"
      unitSymbol="$"
    >
    </smp-slider>

    <smp-slider
      title="Natural Gas"
      path="utilities.naturalGas.amount"
      v-show="$route.params.billName === 'naturalGas'"
      :min="0"
      :max="10000"
      :step="100"
      :value="utilities.naturalGas.amount"
      unitSymbol="$"
    >
    </smp-slider>

    <smp-slider
      title="HOA"
      path="utilities.hoa.amount"
      v-show="$route.params.billName === 'hoa'"
      :min="0"
      :max="10000"
      :step="100"
      :value="utilities.hoa.amount"
      unitSymbol="$"
    >
    </smp-slider>

    <smp-slider
      title="Other"
      path="utilities.other.amount"
      v-show="$route.params.billName === 'other'"
      :min="0"
      :max="10000"
      :step="100"
      :value="utilities.other.amount"
      unitSymbol="$"
    >
    </smp-slider>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import smpSlider from './smpSlider'

export default {
  components: { smpSlider },
  computed: {
    ...mapGetters(['utilities', 'selectedUtilities', 'remainingSelectedUtilities']),
    remainingSelectedUtilities () {
      return this.selectedUtilities.length > 0
    }
  },
  methods: {
    ...mapActions(['removeUtility']),
    remove () {
      this.removeUtility(this.$route.params)

      if (this.remainingSelectedUtilities) {
        this.$router.push(`/flow/utilities/bill/${this.selectedUtilities[0]}`)
      } else {
        this.$router.push('/flow/utilities')
      }
    }
  }
}
</script>

<style scoped>
  .remove {
    position: absolute;
    right: 1rem;
    margin-top: .66em;
    color: white;
    font-size: 1.5em;
    font-weight: 900;
    opacity: .8;
  }
</style>
