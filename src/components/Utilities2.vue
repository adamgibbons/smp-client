<template>
  <div class="body modal">
    <div class="remove" @click="remove">x</div>
    <smp-slider
      title="Electricity"
      path="utilities.electricity.amount"
      v-show="utilityIsSelected('electricity')"
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
      v-show="utilityIsSelected('waterSewer')"
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
      v-show="utilityIsSelected('trash')"
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
      v-show="utilityIsSelected('naturalGas')"
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
      v-show="utilityIsSelected('hoa')"
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
      v-show="utilityIsSelected('other')"
      :min="0"
      :max="10000"
      :step="100"
      :value="utilities.other.amount"
      unitSymbol="$"
    >
    </smp-slider>
    <div>
      <div><button class="done" @click="done">Done</button></div>
    </div>
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
    utilityIsSelected (utility) {
      return this.utilities[utility].include === true
    },
    done () {
      this.$router.push('/flow/utilities/review')
    },
    remove () {
      this.removeUtility(this.$route.params)
      this.$router.push('/flow/utilities/review')
    }
  }
}
</script>

<style scoped>
  .done {
    font-size: 2em;
    color: white;
  }
  .remove {
    position: absolute;
    right: 1rem;
    margin-top: .66em;
    color: white;
    font-size: 2em;
    font-weight: 900;
    opacity: .8;
    margin-right: .33em;
  }
  .modal {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: black;
    overflow-y: scroll;
  }
</style>
