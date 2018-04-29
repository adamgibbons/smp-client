<template>
  <div class="block">
    <div
      v-show="policyIsSelected('multiPolicy')"
      class="remove"
      @click="remove('multiPolicy')">
      remove
    </div>
    <smp-slider
      title="Multi-Policy"
      path="insurance.multiPolicy.amount"
      v-show="policyIsSelected('multiPolicy')"
      :min="0"
      :max="10000"
      :step="100"
      :value="insurance.multiPolicy.amount"
      unitSymbol="$"
    >
    </smp-slider>

    <div
      v-show="policyIsSelected('health')"
      class="remove"
      @click="remove('health')">
      remove
    </div>
    <smp-slider
      title="Health"
      path="insurance.health.amount"
      v-show="policyIsSelected('health')"
      :min="0"
      :max="10000"
      :step="100"
      :value="insurance.health.amount"
      unitSymbol="$"
    >
    </smp-slider>

    <div
      v-show="policyIsSelected('car')"
      class="remove"
      @click="remove('car')">
      remove
    </div>
    <smp-slider
      title="Car"
      path="insurance.car.amount"
      v-show="policyIsSelected('car')"
      :min="0"
      :max="10000"
      :step="100"
      :value="insurance.car.amount"
      unitSymbol="$"
    >
    </smp-slider>

    <div
      v-show="policyIsSelected('homeowners')"
      class="remove"
      @click="remove('homeowners')">
      remove
    </div>
    <smp-slider
      title="Homeowners"
      path="insurance.homeowners.amount"
      v-show="policyIsSelected('homeowners')"
      :min="0"
      :max="10000"
      :step="100"
      :value="insurance.homeowners.amount"
      unitSymbol="$"
    >
    </smp-slider>

    <div
      v-show="policyIsSelected('life')"
      class="remove"
      @click="remove('life')">
      remove
    </div>
    <smp-slider
      title="Life"
      path="insurance.life.amount"
      v-show="policyIsSelected('life')"
      :min="0"
      :max="10000"
      :step="100"
      :value="insurance.life.amount"
      unitSymbol="$"
    >
    </smp-slider>

    <div
      v-show="policyIsSelected('disability')"
      class="remove"
      @click="remove('disability')">
      remove
    </div>
    <smp-slider
      title="Disability"
      path="insurance.disability.amount"
      v-show="policyIsSelected('disability')"
      :min="0"
      :max="10000"
      :step="100"
      :value="insurance.disability.amount"
      unitSymbol="$"
    >
    </smp-slider>

    <div
      v-show="policyIsSelected('other')"
      class="remove"
      @click="remove('other')">
      remove
    </div>
    <smp-slider
      title="Other"
      path="insurance.other.amount"
      v-show="policyIsSelected('other')"
      :min="0"
      :max="10000"
      :step="100"
      :value="insurance.other.amount"
      unitSymbol="$"
    >
    </smp-slider>
    <div class="page-nav">
      <button class="done" @click="done">Done</button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import smpSlider from '../smpSlider'

export default {
  components: { smpSlider },
  name: 'InsuranceEdit',
  computed: {
    ...mapGetters(['insurance'])
  },
  methods: {
    ...mapActions(['removeInsurance']),
    policyIsSelected (policy) {
      return this.insurance[policy].include === true
    },
    done () {
      this.$emit('update')
    },
    remove (name) {
      this.removeInsurance({ name })
    }
  }
}
</script>

<style scoped>
  .page-nav {
    text-align: center;
    margin: 1em 0;
  }
  button.done {
    border-radius: 2em;
    padding: .33em 1em;
    background: transparent;
    color: white;
    border: 2px solid white;
    font-size: 1em;
  }
  .remove {
    position: absolute;
    font-size: .8em;
    right: 1rem;
    margin-top: 1.5rem;
    color: lightgray;
    opacity: .8;
    margin-right: .33em;
  }
</style>
