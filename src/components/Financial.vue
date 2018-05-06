<template>
  <div class="body">
    <div class="title">
      Financial info
    </div>

    <Progress />

    <smpNumber
      title="Monthly income"
      subtitle="(after taxes - combined)"
      path="financial.monthlyHouseholdIncome"
      :value="financial.monthlyHouseholdIncome"
      unitSymbol="$"
      :allowSkip="true"
    />

    <smpRadios
      title="Dependents"
      path="financial.dependents"
      :options="dependentsOptions"
      :value="financial.dependents"
    />

    <smpRadios
      title="Credit score"
      path="financial.creditScore"
      :options="creditScoreOptions"
      :value="financial.creditScore"
      :allowSkip="true"
    />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import smpNumber from '@/components/smpNumber'
import smpRadios from '@/components/smpRadios'
import Progress from '@/components/Progress'

export default {
  methods: {
    ...mapActions(['setValueByPath'])
  },
  computed: {
    ...mapGetters(['financial'])
  },
  components: { smpNumber, smpRadios, Progress },
  data () {
    return {
      creditScoreOptions: ['Poor', 'Fair', 'Good', 'Excellent'],
      dependentsOptions: ['1', '2', '3', '4+']
    }
  }
}
</script>
