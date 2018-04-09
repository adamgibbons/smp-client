<template>
  <div class="body">
    <div class="title">
      Personal info (cont...)
    </div>

    <div class="block">
      <div class="title">
        Marital Status
      </div>

      <div class="control">
        <label class="radio" :class="{active: personal.maritalStatus === 'married'}" for="married">
          <input id="married" type="radio" name="married" :checked="personal.maritalStatus === 'married'" @change="setValueByPath({path: 'personal.maritalStatus', value: 'married'})" value="married">
          Married
        </label>
        <label class="radio" :class="{active: personal.maritalStatus === 'divorced'}" for="divorced">
          <input id="divorced" type="radio" name="divorced" :checked="personal.maritalStatus === 'divorced'" @change="setValueByPath({path: 'personal.maritalStatus', value: 'divorced'})" value="divorced">
          Divorced
        </label>
        <label class="radio" :class="{active: personal.maritalStatus === 'single'}" for="single">
          <input id="single" type="radio" name="single" :checked="personal.maritalStatus === 'single'" @change="setValueByPath({path: 'personal.maritalStatus', value: 'single'})" value="single">
          Single
        </label>
      </div>
    </div>

    <div class="block">
      <div class="title">
        Dependents
      </div>

      <div class="control">
        <label class="radio" :class="{active: personal.dependents === 'married'}" for="one">
          <input id="one" type="radio" name="one" :checked="personal.dependents === 'one'" @change="setValueByPath({path: 'personal.dependents', value: $event.target.value})" value=1>
          1
        </label>
        <label class="radio" :class="{active: personal.dependents === 'two'}" for="two">
          <input id="two" type="radio" name="two" :checked="personal.dependents === 'two'" @change="setValueByPath({path: 'personal.dependents', value: $event.target.value})" value=2>
          2
        </label>
        <label class="radio" :class="{active: personal.dependents === 'three'}" for="three">
          <input id="three" type="radio" name="three" :checked="personal.dependents === 'three'" @change="setValueByPath({path: 'personal.dependents', value: $event.target.value})" value=3>
          3
        </label>
        <label class="radio" :class="{active: personal.dependents === 'four'}" for="four">
          <input id="four" type="radio" name="four" :checked="personal.dependents === 'four'" @change="setValueByPath({path: 'personal.dependents', value: $event.target.value})" value="4+">
          4+
        </label>
      </div>
    </div>

    <div class="block">
      <div class="title">
        Occupation
      </div>
      <div class="select-wrapper">
        <select @change="setValueByPath({path: 'personal.occupation', value: $event.target.value})">
          <option>Accountant</option>
          <option>Philosopher</option>
          <option>Web Designer</option>
          <option>Zoologist</option>
        </select>
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
    ...mapGetters(['personal'])
  }
}
</script>
