<template>
  <div class="body">
    <div class="title">
      Personal info (cont...)
    </div>
    <div class="block">
      <div class="title">
        Marital Status
      </div>
      <button @click="setValueByPath({path: 'personalInfo.maritalStatus', value: 'married'})">married</button>
      <button @click="setValueByPath({path: 'personalInfo.maritalStatus', value: 'divorced'})">divorced</button>
      <button @click="setValueByPath({path: 'personalInfo.maritalStatus', value: 'single'})">single</button>
    </div>
    <div class="block">
      <div class="title">
        Dependents
      </div>
      <button @click="setValueByPath({ path: 'personalInfo.dependents', value: 1})">1</button>
      <button @click="setValueByPath({ path: 'personalInfo.dependents', value: 2})">2</button>
      <button @click="setValueByPath({ path: 'personalInfo.dependents', value: 3})">3</button>
      <button @click="setValueByPath({ path: 'personalInfo.dependents', value: 4})">4</button>
    </div>
    <div class="block">
      <div class="title">
        Occupation
      </div>
      <select>
        <option>Web Designer</option>
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
