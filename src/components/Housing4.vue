<template>
  <div class="body">
    <div class="title">
      Housing info (cont...)
    </div>

    <Progress />

    <smp-number
      title="What is your monthly rent?"
      path="housing.monthlyRent"
      :min="0"
      :max="1000000"
      :value="housing.monthlyRent"
      unitSymbol="$"
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
import smpNumber from '@/components/smpNumber'
import smpRadios from '@/components/smpRadios'
import Progress from '@/components/Progress'

export default {
  computed: {
    ...mapGetters(['housing'])
  },
  components: { smpNumber, smpRadios, Progress },
  data () {
    return {
      options: ['Yes', 'No', 'Some']
    }
  }
}
</script>
