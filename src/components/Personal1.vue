<template>
  <div>
    <div class="title">
      Personal info
    </div>
    <div class="block">
      <div class="title">
        Gender
      </div>

      <div class="control">
        <label class="radio" :class="{active: personal.gender === 'male'}" for="male">
          <input id="male" type="radio" name="male" :checked="personal.gender === 'male'" @change="setValueByPath({path: 'personal.gender', value: 'male'})" value="male">
          Male
        </label>
        <label class="radio" :class="{active: personal.gender === 'female'}" for="female">
          <input id="female" type="radio" name="female" :checked="personal.gender === 'female'" @change="setValueByPath({path: 'personal.gender', value: 'female'})" value="female">
          Female
        </label>
      </div>
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
        Age
      </div>
      <div class="select-wrapper">
        <select
          @change="setValueByPath({path: 'personal.age', value: $event.target.value})"
          :value="personal.age"
        >
          <option v-for="age in ages" :key="age">{{age}}</option>
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
  },
  data () {
    return {
      ages: Array.apply(null, {length: 99}).map(Number.call, Number)
    }
  }
}
</script>
