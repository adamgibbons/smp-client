<template>
  <div class="body">
    <div class="title">
      Utilities (cont...)
    </div>

    <smp-slider
      title="Electricity"
      path="utilities.electricity.amount"
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
import { mapGetters } from 'vuex'
import smpSlider from './smpSlider'

export default {
  components: { smpSlider },
  computed: {
    ...mapGetters(['utilities'])
  }

}
</script>
