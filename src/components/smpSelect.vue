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
    </div>
    <div class="select-wrapper">
      <div v-show="!value" class="choose-one">choose one</div>
      <select
        @change="setValueByPath({path, value: $event.target.value })"
        :value="value | hideSkip"
      >
        <option value="" disabled></option>
        <option
          v-for="(option, index) in options"
          :value="option.value"
          :key="index"
        >{{option.name}}</option>
      </select>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  props: ['title', 'path', 'options', 'value', 'allowSkip'],
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

<style>
select {
  position: relative;
  z-index: 1;
}
.choose-one {
  position: absolute;
  font-size: .75em;
  font-weight: 100;
  opacity: .5;
  margin-top: .66em;
  margin-left: .1em;
  z-index: 0;
}
</style>
