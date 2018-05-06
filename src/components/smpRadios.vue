<template>
  <div class="block" :class="{muted: value === 'skip'}">
    <a v-if="allowSkip" class="idk" @click="setValueByPath({ path, value: 'skip' })">Don't know</a>
    <div class="title">{{title}}</div>

    <div class="control">
      <label
        v-for="(option, index) in options"
        :key="index"
        class="radio" :class="{active: option === value}" :for="option"
      >
        <input
          type="radio"
          :name="option"
          :id="option"
          :value="option"
          :checked="option === value"
          @change="setValueByPath({ path, value: $event.target.value })"
        />
        {{option}}
      </label>

    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  props: ['title', 'path', 'options', 'value', 'allowSkip'],
  methods: {
    ...mapActions(['setValueByPath'])
  }
}
</script>

<style scoped>
  .idk {
    float: right;
    font-size: .7em;
    font-weight: 200;
    opacity: .8;
    position: relative;
    z-index: 100;
  }
</style>
