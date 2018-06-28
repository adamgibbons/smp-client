<template>
  <div class="body">
    <div class="title">
      Spouse/Partner
    </div>

    <Progress />

    <smp-select
      title="Highest level of education"
      path="personal.educationSpouse"
      :options="educationOptions"
      :value="personal.educationSpouse"
    >
    </smp-select>

    <smp-select
      title="Employment status"
      path="personal.employmentSpouse"
      :options="employmentOptions"
      :value="personal.employmentSpouse"
    >
    </smp-select>

    <smp-search
      title="Occupation"
      path="personal.occupationSpouse"
      :options="occupationOptions"
      :value="personal.occupationSpouse"
      :allowSkip="true"
    >
    </smp-search>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import smpSelect from '@/components/FormElements/smpSelect'
import smpSearch from '@/components/FormElements/smpSearch'
import Progress from '@/components/Progress'

import formatOptionsList from '../utils/format-options-list'
import occupationOptions from '@/data/occupations.json'

export default {
  methods: {
    ...mapActions(['setValueByPath'])
  },
  computed: {
    ...mapGetters(['personal'])
  },
  components: { smpSelect, smpSearch, Progress },
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
      occupationOptions
    }
  }
}
</script>
