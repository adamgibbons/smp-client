<template>
  <div class="body">
    <div class="title">
      Personal info
    </div>
    <div class="block">
      <div class="title">
        Gender
      </div>
      <button @click="setValueByPath({path: 'personalInfo.gender', value: 'male'})">male</button>
      <button @click="setValueByPath({path: 'personalInfo.gender', value: 'female'})">female</button>
    </div>
    <div class="block">
      <div class="title">
        Education
      </div>
      <button @click="setValueByPath({ path: 'personalInfo.education', value: 'high school'})">high school</button>
      <button @click="setValueByPath({ path: 'personalInfo.education', value: 'some college'})">some college</button>
      <button @click="setValueByPath({ path: 'personalInfo.education', value: 'college'})">college</button>
    </div>
    <div class="block">
      <div class="title">
        Age
      </div>
      <select>
        <option>18</option>
        <option>19</option>
        <option>20</option>
        <option>21</option>
        <option>22</option>
      </select>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  methods: {
    ...mapActions(['setValueByPath'])
  }
}
</script>
