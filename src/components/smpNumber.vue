<template>
  <div class="block" :class="{muted: value === 'skip'}">
    <a
      v-if="allowSkip"
      class="idk"
      @click="setValueByPath({ path, value: 'skip' })">
      <img src="../assets/skip.png" alt="Skip">
    </a>

    <div class="title">
      {{title}}
      <span v-show="subtitle" class="subtitle">{{subtitle}}</span>
    </div>

    <div v-if="!newStyle" class="control">
      <div class="select-wrapper">
        <span v-show="unitSymbol" class="unit-symbol">{{unitSymbol}}</span>
        <input
          :type="!!floatingPoint ? 'number' : 'tel'"
          :value="value | hideSkip | currency(unitSymbol)"
          @input="setValueByPath({ path, value: $event.target.value.replace(/,/g, '') })"
        />
      </div>
    </div>

    <div v-else class="modal-number">
      <div class="tiny">{{tiny}}</div>
      <div class="control">
        <span v-show="unitSymbol" class="unit-symbol">{{unitSymbol}}</span>
        <input
          type="tel"
          :value="value | hideSkip | currency(unitSymbol)"
          @input="setValueByPath({ path, value: $event.target.value.replace(/,/g, '') })"
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
    'allowSkip',
    'newStyle',
    'tiny',
    'floatingPoint'
  ],
  methods: {
    ...mapActions(['setValueByPath'])
  },
  filters: {
    hideSkip (val) {
      return val === 'skip' ? '' : val
    },
    currency (val, unitSymbol) {
      if (val && val.length && unitSymbol === '$') {
        return parseInt(val.replace(/,/gi, '')).toLocaleString()
      }

      return val
    }
  }
}
</script>
