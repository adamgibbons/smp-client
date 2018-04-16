<template>
  <div class="body">
    <div class="title">
      Utilities
    </div>
    <div class="block">
      <div class="title">
        Select all your utilities expenses
        <span>(Check all that apply to you)</span>
      </div>
      <div class="control">
        <label class="radio" :class="{active: utilities.electricity.include === true}" for="electricity">
          <input
            id="electricity"
            type="checkbox"
            @change="setValueByPath({ path: 'utilities.electricity.include', value: $event.target.checked })"
          >
          Electricity
        </label>

        <label class="radio" :class="{active: utilities.waterSewer.include === true}" for="waterSewer">
          <input
            id="waterSewer"
            type="checkbox"
            @change="setValueByPath({ path: 'utilities.waterSewer.include', value: $event.target.checked })"
          >
          Water/Sewer
        </label>

        <label class="radio" :class="{active: utilities.trash.include === true}" for="trash">
          <input
            id="trash"
            type="checkbox"
            @change="setValueByPath({ path: 'utilities.trash.include', value: $event.target.checked })"
          >
          Trash
        </label>

        <label class="radio" :class="{active: utilities.naturalGas.include === true}" for="naturalGas">
          <input
            id="naturalGas"
            type="checkbox"
            @change="setValueByPath({ path: 'utilities.naturalGas.include', value: $event.target.checked })"
          >
          Natural Gas
        </label>

        <label class="radio" :class="{active: utilities.hoa.include === true}" for="hoa">
          <input
            id="hoa"
            type="checkbox"
            @change="setValueByPath({ path: 'utilities.hoa.include', value: $event.target.checked })"
          >
          HOA
        </label>

        <label class="radio" :class="{active: utilities.other.include === true}" for="other">
          <input
            id="other"
            type="checkbox"
            @change="setValueByPath({ path: 'utilities.other.include', value: $event.target.checked })"
          >
          Other
        </label>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  methods: {
    ...mapActions(['setValueByPath'])
  },
  computed: {
    ...mapGetters(['utilities'])
  }
}
</script>

<style scoped>
  input {
    display: none;
  }
</style>
