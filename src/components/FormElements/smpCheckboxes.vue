<template>
  <div class="block" :class="{muted: isSkipped === true}">
    <a v-if="allowSkip" class="idk" @click="clearList({ path, value: 'skip' })">
      <img src="@/assets/skip.png" alt="Skip">
    </a>
    <div class="title">
      {{title}}
      <span v-show="subtitle" class="subtitle">{{subtitle}}</span>
    </div>

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
  props: ['title', 'subtitle', 'path', 'options', 'value', 'allowSkip'],
  methods: {
    ...mapActions(['toggleItemInList', 'setValueByPath']),
    isActive (option) {
      return this.value.some(item => item === option)
    },
    clearList () {
      this.setValueByPath({ path: this.path, value: ['skip'] })
    }
  },
  computed: {
    isSkipped () {
      return this.value.indexOf('skip') !== -1
    }
  },
  watch: {
    isSkipped: (truthy) => {
      if (truthy) {
        this.value = ['skip']
      }
    }
  }
}
</script>

<style scoped>
  input {
    display: none;
  }
</style>
