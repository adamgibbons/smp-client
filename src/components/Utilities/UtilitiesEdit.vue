<template>
  <div>
    <p style="margin: 2.5em 1.5em 1em;">What do you pay for these expenses per month?</p>
    <div
      v-show="utilityIsSelected('electricity')"
      class="remove"
      @click="remove('electricity')">
      <i class="far fa-trash-alt"></i>
    </div>
    <smp-modal-number
      title="Electricity"
      path="utilities.electricity.amount"
      v-show="utilityIsSelected('electricity')"
      :min="0"
      :max="500"
      :step="5"
      :value="utilities.electricity.amount"
      unitSymbol="$"
    >
    </smp-modal-number>

    <div
      v-show="utilityIsSelected('waterSewer')"
      class="remove"
      @click="remove('waterSewer')">
      <i class="far fa-trash-alt"></i>
    </div>
    <smp-slider
      title="Water/Sewer"
      path="utilities.waterSewer.amount"
      v-show="utilityIsSelected('waterSewer')"
      :min="0"
      :max="500"
      :step="5"
      :value="utilities.waterSewer.amount"
      unitSymbol="$"
    >
    </smp-slider>

    <div
      v-show="utilityIsSelected('trash')"
      class="remove"
      @click="remove('trash')">
      <i class="far fa-trash-alt"></i>
    </div>
    <smp-slider
      title="Trash"
      path="utilities.trash.amount"
      v-show="utilityIsSelected('trash')"
      :min="0"
      :max="500"
      :step="5"
      :value="utilities.trash.amount"
      unitSymbol="$"
    >
    </smp-slider>

    <div
      v-show="utilityIsSelected('naturalGas')"
      class="remove"
      @click="remove('naturalGas')">
      <i class="far fa-trash-alt"></i>
    </div>
    <smp-slider
      title="Natural Gas"
      path="utilities.naturalGas.amount"
      v-show="utilityIsSelected('naturalGas')"
      :min="0"
      :max="500"
      :step="5"
      :value="utilities.naturalGas.amount"
      unitSymbol="$"
    >
    </smp-slider>

    <div
      v-show="utilityIsSelected('hoa')"
      class="remove"
      @click="remove('hoa')">
      <i class="far fa-trash-alt"></i>
    </div>
    <smp-slider
      title="HOA"
      path="utilities.hoa.amount"
      v-show="utilityIsSelected('hoa')"
      :min="0"
      :max="500"
      :step="5"
      :value="utilities.hoa.amount"
      unitSymbol="$"
    >
    </smp-slider>

    <div
      v-show="utilityIsSelected('other')"
      class="remove"
      @click="remove('other')">
      <i class="far fa-trash-alt"></i>
    </div>
    <smp-slider
      title="Other"
      path="utilities.other.amount"
      v-show="utilityIsSelected('other')"
      :min="0"
      :max="500"
      :step="5"
      :value="utilities.other.amount"
      unitSymbol="$"
    >
    </smp-slider>
    <div class="text-center">
      <button class="button" @click="done">Done</button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import smpSlider from '../smpSlider'
import smpModalNumber from '../smpModalNumber'

export default {
  components: { smpSlider, smpModalNumber },
  name: 'UtilitiesEdit',
  computed: {
    ...mapGetters(['utilities'])
  },
  methods: {
    ...mapActions(['removeUtility']),
    utilityIsSelected (utility) {
      return this.utilities[utility].include === true
    },
    done () {
      this.$emit('update')
    },
    remove (billName) {
      this.removeUtility({ billName })
    }
  }
}
</script>
