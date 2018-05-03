<template>
  <div class="body">
    <div class="title">
      Financial info
    </div>

    <smp-number
      title="Monthly income"
      subtitle="(after taxes - combined)"
      path="financial.monthlyHouseholdIncome"
      :value="financial.monthlyHouseholdIncome"
      unitSymbol="$"
    >
    </smp-number>

    <div class="block">
      <div class="title">
        Dependents
      </div>

      <div class="control">
        <label class="radio" :class="{active: financial.dependents === '1'}" for="one">
          <input id="one" type="radio" name="one" :checked="financial.dependents === '1'" @change="setValueByPath({path: 'financial.dependents', value: $event.target.value})" value=1>
          1
        </label>
        <label class="radio" :class="{active: financial.dependents === '2'}" for="two">
          <input id="two" type="radio" name="two" :checked="financial.dependents === '2'" @change="setValueByPath({path: 'financial.dependents', value: $event.target.value})" value=2>
          2
        </label>
        <label class="radio" :class="{active: financial.dependents === '3'}" for="three">
          <input id="three" type="radio" name="three" :checked="financial.dependents === '3'" @change="setValueByPath({path: 'financial.dependents', value: $event.target.value})" value=3>
          3
        </label>
        <label class="radio" :class="{active: financial.dependents === '4'}" for="four">
          <input id="four" type="radio" name="four" :checked="financial.dependents === '4'" @change="setValueByPath({path: 'financial.dependents', value: $event.target.value})" value="4+">
          4+
        </label>
      </div>
    </div>

    <div class="block">
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

      <p>
        <a class="info">I don't know</a>
      </p>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import smpNumber from './smpNumber'

export default {
  methods: {
    ...mapActions(['setValueByPath'])
  },
  computed: {
    ...mapGetters(['financial'])
  },
  components: { smpNumber }
}
</script>
