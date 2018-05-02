<template>
  <div class="block">
    <div class="title">
      Select all your insurance policies
    </div>
    <div class="subtitle">(Check all that apply to you)</div>
    <br>
    <div class="control">
      <label class="radio" :class="{active: insurance.multiPolicy.include === true}" for="multiPolicy">
        <input
          id="multiPolicy"
          type="checkbox"
          @change="setValueByPath({ path: 'insurance.multiPolicy.include', value: $event.target.checked })"
        >
        Multi-Policy
      </label>

      <label class="radio" :class="{active: insurance.health.include === true}" for="health">
        <input
          id="health"
          type="checkbox"
          @change="setValueByPath({ path: 'insurance.health.include', value: $event.target.checked })"
        >
        Health
      </label>

      <label class="radio" :class="{active: insurance.car.include === true}" for="car">
        <input
          id="car"
          type="checkbox"
          @change="setValueByPath({ path: 'insurance.car.include', value: $event.target.checked })"
        >
        Car
      </label>

      <label class="radio" :class="{active: insurance.homeowners.include === true}" for="homeowners">
        <input
          id="homeowners"
          type="checkbox"
          @change="setValueByPath({ path: 'insurance.homeowners.include', value: $event.target.checked })"
        >
        Homeowners
      </label>

      <label class="radio" :class="{active: insurance.life.include === true}" for="life">
        <input
          id="life"
          type="checkbox"
          @change="setValueByPath({ path: 'insurance.life.include', value: $event.target.checked })"
        >
        Life
      </label>

      <label class="radio" :class="{active: insurance.disability.include === true}" for="disability">
        <input
          id="disability"
          type="checkbox"
          @change="setValueByPath({ path: 'insurance.disability.include', value: $event.target.checked })"
        >
        Disability
      </label>

      <label class="radio" :class="{active: insurance.other.include === true}" for="other">
        <input
          id="other"
          type="checkbox"
          @change="setValueByPath({ path: 'insurance.other.include', value: $event.target.checked })"
        >
        Other
      </label>
    </div>
    <div class="text-center">
      <button class="button" @click="next">Next</button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'InsuranceAdd',
  computed: {
    ...mapGetters(['insurance'])
  },
  methods: {
    ...mapActions(['setValueByPath']),
    next () {
      this.$emit('edit')
    }
  }
}
</script>

<style scoped>
  input {
    display: none;
  }
</style>
