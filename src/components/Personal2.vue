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

    <smp-select
      title="Employment status"
      path="personal.employment"
      :options="employmentOptions"
      :value="personal.employment"
    >
    </smp-select>

    <smp-select
      title="Occupation"
      path="personal.occupation"
      :options="occupationOptions"
      :value="personal.occupation"
    >
    </smp-select>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import smpSelect from './smpSelect'

import formatOptionsList from '../utils/format-options-list'

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
      educationOptions: formatOptionsList([
        'No Diploma',
        'High School',
        'Bachelor\'s',
        'Master\'s',
        'Doctoral Degree',
        'Other'
      ]),
      employmentOptions: formatOptionsList([
        'Full-Time',
        'Part-Time',
        'Self Employee',
        'Internship',
        'Active in Military',
        'Stay at home parent',
        'Commission',
        'Retainer',
        'Unemployed',
        'Pending a Job Offer',
        'Retired',
        'Other'
      ]),
      occupationOptions: formatOptionsList([
        'Accountant',
        'Philosopher',
        'Web Designer',
        'Zoologist'
      ])
    }
  }
}
</script>

<style scoped>
  select option {
    color: red;
  }
</style>
