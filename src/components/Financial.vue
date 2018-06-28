<template>
  <div class="body">
    <div class="title">
      Financial info
    </div>

    <Progress />

    <smpNumber
      title="Monthly Household Income"
      subtitle="(after taxes - combined)"
      tiny="Include all automatic deductions ex: 401K, Health Insurance, etc. We will enter those expenses in other sections"
      path="financial.monthlyHouseholdIncome"
      :value="financial.monthlyHouseholdIncome"
      unitSymbol="$"
      :newStyle="true"
    />

    <smpRadios
      title="Dependents (including yourself)"
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
import smpNumber from '@/components/FormElements/smpNumber'
import smpRadios from '@/components/FormElements/smpRadios'
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
