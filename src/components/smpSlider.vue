<template>
  <div class="block">
    <div class="title">{{title}}</div>

    <div class="slidecontainer">
      <input
        class="slider"
        type="range"
        :min="min"
        :max="max"
        :step="step"
        @input="setValueByPath({ path, value: $event.target.value})"
      />
      <label>
        <span v-if="unitSymbol !== '%'">
          {{unitSymbol}}
        </span>
        {{value}}
        <span v-if="unitSymbol === '%'">
          {{unitSymbol}}
        </span>
      </label>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  props: ['title', 'path', 'min', 'max', 'step', 'value', 'unitSymbol'],
  methods: {
    ...mapActions(['setValueByPath'])
  }
}
</script>
