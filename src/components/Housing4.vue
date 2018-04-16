<template>
  <div class="body">
    <div class="title">
      Housing info (cont...)
    </div>

    <smp-number
      title="What is your monthly rent?"
      path="housing.monthlyRent"
      :min="0"
      :max="1000000"
      :value="housing.monthlyRent"
    >
    </smp-number>

    <smp-radios
      title="Does your rent include all utilities?"
      path="housing.rentIncludesUtilities"
      :options="options"
      :value="housing.rentIncludesUtilities"
    >
    </smp-radios>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import smpNumber from './smpNumber'
import smpRadios from './smpRadios'

export default {
  computed: {
    ...mapGetters(['housing'])
  },
  components: { smpNumber, smpRadios },
  data () {
    return {
      options: ['Yes', 'No', 'Some']
    }
  }
}
</script>
