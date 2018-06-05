<template>
  <div class="block" :class="{muted: value === 'skip'}">
    <a
      v-if="allowSkip"
      class="idk"
      @click="setValueByPath({ path, value: 'skip' })">
      Skip
    </a>

    <div class="title">
      {{title}}
      <span v-show="subtitle" class="subtitle">{{subtitle}}</span>
    </div>

    <div class="control">
      <span v-show="unitSymbol" class="unit-symbol">{{unitSymbol}}</span>
      <input
        type="tel"
        :value="value | hideSkip | currency(unitSymbol)"
        @input="setValueByPath({ path, value: $event.target.value.replace(/,/g, '') })"
      />
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

<style scoped>
  input {
    background-color: white;
    color: black;
    font-size: 1em;
    max-width: 8em;
    padding: .66em;
    border-radius: 5px;
    border: none;
  }
  span, input {
    display: inline;
  }
  .title {
    margin-bottom: .33rem;
  }
  .unit-symbol {
    color: #42b983;
    /*margin-right: .33em;*/
  }
</style>
