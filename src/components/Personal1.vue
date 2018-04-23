<template>
  <div>
    <div class="title">
      Personal info
    </div>

    <smp-radios
      title="Gender"
      path="personal.gender"
      :options="genderOptions"
      :value="personal.gender"
    >
    </smp-radios>

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
        <br>
      </div>
      <div class="choose-one">choose one</div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import smpRadios from './smpRadios'

export default {
  name: 'Personal1',
  methods: {
    ...mapActions(['setValueByPath'])
  },
  computed: {
    ...mapGetters(['personal'])
  },
  components: { smpRadios },
  data () {
    return {
      ages: Array.apply(null, {length: 100}).map(Number.call, Number).slice(16),
      genderOptions: ['Male', 'Female']
    }
  }
}
</script>
