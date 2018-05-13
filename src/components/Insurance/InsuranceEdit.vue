<template>
  <div>
    <p style="margin: 2.5em 1.5em 1em;">What do you pay for these expenses per month?</p>
    <div
      v-show="policyIsSelected('multiPolicy')"
      class="remove"
      @click="remove('multiPolicy')">
      <i class="far fa-trash-alt"></i>
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
      <i class="far fa-trash-alt"></i>
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
      <i class="far fa-trash-alt"></i>
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
      <i class="far fa-trash-alt"></i>
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
      <i class="far fa-trash-alt"></i>
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
      <i class="far fa-trash-alt"></i>
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
      <i class="far fa-trash-alt"></i>
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
    <div class="text-center">
      <button class="button" @click="done">Done</button>
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
