<template>
  <div class="body">
    <div class="title">
      Personal info (cont...)
    </div>

    <div class="block">
      <div class="title">
        Highest level of education
      </div>
      <div class="select-wrapper">
        <select
          @change="setValueByPath({path: 'personal.education', value: $event.target.value})"
          :value="personal.employmentStatus"
        >
          <option>No Diploma</option>
          <option>High School</option>
          <option>Bachelor's</option>
          <option>Master's</option>
          <option>Doctoral Degree</option>
          <option>Other</option>
        </select>
      </div>
    </div>

    <div class="block">
      <div class="title">
        Employment status
      </div>
      <div class="select-wrapper">
        <select
          @change="setValueByPath({path: 'personal.employmentStatus', value: $event.target.value})"
          :value="personal.employmentStatus"
        >
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
