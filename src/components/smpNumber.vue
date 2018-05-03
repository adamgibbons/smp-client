<template>
  <div class="block">
    <div class="title">
      {{title}}
      <span v-show="subtitle" class="subtitle">{{subtitle}}</span>
    </div>

    <div class="control">
      <div class="select-wrapper">
        <span v-show="unitSymbol" class="unit-symbol">{{unitSymbol}}</span>
        <input
          type="tel"
          :value="value"
          @input="setValueByPath({ path, value: $event.target.value })"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  props: ['title', 'path', 'min', 'max', 'value', 'unitSymbol', 'subtitle'],
  methods: {
    ...mapActions(['setValueByPath'])
  }
}
</script>
