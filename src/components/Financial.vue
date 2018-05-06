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
    />

<!--     <div class="block">
      <div class="title">
        Credit score
      </div>
      <div class="control">
        <label class="radio" :class="{active: financial.creditScore === 'poor'}" for="poor">
          <input id="poor" type="radio" name="poor" :checked="financial.creditScore === 'poor'" @change="setValueByPath({path: 'financial.creditScore', value: 'poor'})" value="poor">
          Poor
        </label>
        <label class="radio" :class="{active: financial.creditScore === 'fair'}" for="fair">
          <input id="fair" type="radio" name="fair" :checked="financial.creditScore === 'fair'" @change="setValueByPath({path: 'financial.creditScore', value: 'fair'})" value="fair">
          Fair
        </label>
        <label class="radio" :class="{active: financial.creditScore === 'good'}" for="good">
          <input id="good" type="radio" name="good" :checked="financial.creditScore === 'good'" @change="setValueByPath({path: 'financial.creditScore', value: 'good'})" value="good">
          Good
        </label>
        <label class="radio" :class="{active: financial.creditScore === 'excellent'}" for="excellent">
          <input id="excellent" type="radio" name="excellent" :checked="financial.creditScore === 'excellent'" @change="setValueByPath({path: 'financial.creditScore', value: 'excellent'})" value="excellent">
          Excellent
        </label>
      </div>
    </div> -->
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
