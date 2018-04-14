<template>
  <div class="body">
    <div class="title">
      Personal info (cont...)
    </div>

    <smp-select
      title="Highest level of education"
      path="personal.education"
      :options="educationOptions"
      :value="personal.education"
    >
    </smp-select>

    <div class="block">
      <div class="title">
        Employment status
      </div>
      <div class="select-wrapper">
        <select
          @change="setValueByPath({path: 'personal.employmentStatus', value: $event.target.value})"
          :value="personal.employmentStatus"
        >
          <option></option>
          <option>Full-Time</option>
          <option>Part-Time</option>
          <option>Self Employee</option>
          <option>Internship</option>
          <option>Active in Military</option>
          <option>Stay at home parent</option>
          <option>Commission</option>
          <option>Retainer</option>
          <option>Unemployed</option>
          <option>Pending a Job Offer</option>
          <option>Retired</option>
          <option>Other</option>
        </select>
      </div>
      <div class="choose-one">choose one</div>
    </div>

    <div class="block">
      <div class="title">
        Occupation - TODO
      </div>
      <div class="select-wrapper">
        <select
          @change="setValueByPath({path: 'personal.occupation', value: $event.target.value})"
          :value="personal.occupation"
        >
          <option></option>
          <option>Accountant</option>
          <option>Philosopher</option>
          <option>Web Designer</option>
          <option>Zoologist</option>
        </select>
      </div>
      <div class="choose-one">choose one</div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import smpSelect from './smpSelect'

export default {
  methods: {
    ...mapActions(['setValueByPath'])
  },
  computed: {
    ...mapGetters(['personal'])
  },
  components: { smpSelect },
  data () {
    return {
      educationOptions: [
        'No Diploma',
        'High School',
        'Bachelor\'s',
        'Master\'s',
        'Doctoral Degree',
        'Other'
      ].map((option) => {
        return { name: option, value: option }
      })
    }
  }
}
</script>
