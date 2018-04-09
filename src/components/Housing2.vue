<template>
  <div class="body">
    <div class="title">
      Housing info (cont...)
    </div>
    <div class="block">
      <div class="title">
        What is your current interest rate?
      </div>

      <div class="slidecontainer">
        <input class="slider" type="range" min="0" max="30" step="1" @input="setValueByPath({path: 'housing.currentInterestRate', value: $event.target.value})">
        <label>
          <span>$</span>
          {{housing.currentInterestRate}}</label>

        <!-- <label class="radio" :class="{active: housing.monthlyPayment === 'married'}" for="one">
          <input id="one" type="radio" name="one" :checked="housing.monthlyPayment === 'one'" @change="setValueByPath({path: 'housing.monthlyPayment', value: $event.target.value})" value=1>
          1
        </label> -->
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
    ...mapGetters(['housing'])
  }
}
</script>

<style scoped>
.slidecontainer {
    width: 100%; /* Width of the outside container */
}

label {
  float: left;
  position: relative;
  top: -2em;
  left: 1em;
  font-size: 1.33em;
  font-weight: 300;
}

label span {
  font-size: .6em;
  vertical-align: text-bottom;
}

/* The slider itself */
.slider {
    -webkit-appearance: none;  /* Override default CSS styles */
    appearance: none;
    width: 100%; /* Full-width */
    height: 5em; /* Specified height */
    border: 1px solid lightblue;
    background: transparent;
    outline: none; /* Remove outline */
    opacity: 0.7; /* Set transparency (for mouse-over effects on hover) */
    -webkit-transition: .2s; /* 0.2 seconds transition on hover */
    transition: opacity .2s;
}

.slider:hover {
    opacity: 1; /* Fully shown on mouse-over */
}

.slider::-webkit-slider-thumb {
    -webkit-appearance: none; /* Override default look */
    appearance: none;
    width: 25px; /* Set a specific slider handle width */
    height: 25px; /* Slider handle height */
    background: white;
    border-radius: 100%;
    cursor: pointer; /* Cursor on hover */
    position: relative;
    top: 2.6em;
}

.slider::-moz-range-thumb {
    width: 25px; /* Set a specific slider handle width */
    height: 25px; /* Slider handle height */
    background: white;
    border-radius: 100%;
    cursor: pointer; /* Cursor on hover */
    position: relative;
    top: 2.6em;
}
</style>
