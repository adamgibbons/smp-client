<template>
  <div>
    <div class="title">
      Personal info
    </div>

    <Progress />

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
        <Info questionId="myQuestionId" />
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

    <smp-number
      title="Age"
      path="personal.age"
      :value="personal.age"
    />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import smpRadios from './smpRadios'
import smpNumber from './smpNumber'
import Info from './Info'
import Progress from './Progress'

export default {
  name: 'Personal1',
  methods: {
    ...mapActions(['setValueByPath'])
  },
  computed: {
    ...mapGetters(['personal'])
  },
  components: { smpRadios, Info, smpNumber, Progress },
  data () {
    return {
      ages: Array.apply(null, {length: 100}).map(Number.call, Number).slice(16),
      genderOptions: ['Male', 'Female']
    }
  }
}
</script>
