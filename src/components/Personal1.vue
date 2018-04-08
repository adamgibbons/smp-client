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
        Education
      </div>
      <div class="control">
        <label class="radio" :class="{active: personal.education === 'highSchool'}" for="highSchool">
          <input id="highSchool" type="radio" name="highSchool" :checked="personal.education === 'highSchool'" @change="setValueByPath({path: 'personal.education', value: 'highSchool'})" value="highSchool">
          High School
        </label>
        <label class="radio" :class="{active: personal.education === 'someCollege'}" for="someCollege">
          <input id="someCollege" type="radio" name="someCollege" :checked="personal.education === 'someCollege'" @change="setValueByPath({path: 'personal.education', value: 'someCollege'})" value="someCollege">
          Some College
        </label>
        <label class="radio" :class="{active: personal.education === 'college'}" for="college">
          <input id="college" type="radio" name="college" :checked="personal.education === 'college'" @change="setValueByPath({path: 'personal.education', value: 'college'})" value="college">
          College
        </label>
      </div>
    </div>
    <div class="block">
      <div class="title">
        Age
      </div>
      <div class="select-wrapper">
        <select>
          <option>18</option>
          <option>19</option>
          <option>20</option>
          <option>21</option>
          <option>22</option>
        </select>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  methods: {
    ...mapActions(['setValueByPath']),
    foo (e) {
      console.log(e.target)
    }
  },
  computed: {
    ...mapGetters(['personal'])
  }
}
</script>
