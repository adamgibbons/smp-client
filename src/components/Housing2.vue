<template>
  <div class="body">
    <div class="title">
      Housing info (cont...)
    </div>
    <smp-slider
      title="What is your current interest rate?"
      path="housing.currentInterestRate"
      :min="0"
      :max="20"
      :step="1"
      :value="housing.currentInterestRate"
      unitSymbol="%"
    >
    </smp-slider>

  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import smpSlider from './smpSlider'

export default {
  methods: {
    ...mapActions(['setValueByPath'])
  },
  computed: {
    ...mapGetters(['housing'])
  },
  components: { smpSlider }
}
</script>
