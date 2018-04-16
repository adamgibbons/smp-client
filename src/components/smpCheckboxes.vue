<template>
  <div class="block">
    <div class="title">{{title}}</div>
    <div v-show="subtitle" class="subtitle">{{subtitle}}</div>

    <div class="control">
      <label
        v-for="(option, index) in options"
        :key="index"
        class="radio"
        :class="{active: isActive(option)}"
        :for="option"
      >
        <input
          type="checkbox"
          :id="option"
          :value="option"
          :checked="isActive(option)"
          @change="toggleItemInList({ path, value: $event.target.value })"
        />
        {{option}}
      </label>

    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  props: ['title', 'subtitle', 'path', 'options', 'value'],
  methods: {
    ...mapActions(['toggleItemInList']),
    isActive (option) {
      return this.value.some(item => item === option)
    }
  }
}
</script>

<style scoped>
  input {
    display: none;
  }
</style>
