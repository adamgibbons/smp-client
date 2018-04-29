<template>
  <div class="block">
    <div class="title">
      Select all your utilities expenses
    </div>
    <div class="subtitle">(Check all that apply to you)</div>
    <br>
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
    <div class="page-nav">
      <button class="done" @click="next">Next</button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'UtilitiesAdd',
  computed: {
    ...mapGetters(['utilities', 'selectedUtilities'])
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
  button {
    color: white;
    border: 1px solid white;
    padding: 1em;
    background: transparent;
  }
  .page-nav {
    text-align: center;
    margin-top: 2em;
  }
  button.done {
    border-radius: 2em;
    padding: .33em 1em;
    background: transparent;
    color: white;
    border: 2px solid white;
    font-size: 1em;
    margin: auto;
  }
  .back {
    position: absolute;
    bottom: 1em;
    left: 1em;
    text-decoration: none;
  }
</style>
