<template>
  <div class="block" :class="{muted: value === 'skip'}">
    <a v-if="allowSkip" class="idk" @click="setValueByPath({ path,
      value: 'skip' })">Skip</a>
    <div class="title">
      {{title}}
      <span v-show="subtitle" class="subtitle">{{subtitle}}</span>
    </div>

    <div class="control">
      <div class="select-wrapper">
        <span v-show="unitSymbol" class="unit-symbol">{{unitSymbol}}</span>
        <input
          type="tel"
          :value="value | hideSkip"
          @input="setValueByPath({ path, value: $event.target.value })"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  props: [
    'title',
    'path',
    'min',
    'max',
    'value',
    'unitSymbol',
    'subtitle',
    'allowSkip'
  ],
  methods: {
    ...mapActions(['setValueByPath'])
  },
  filters: {
    hideSkip (val) {
      return val === 'skip' ? '' : val
    }
  }
}
</script>
