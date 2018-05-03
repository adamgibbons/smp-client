<template>
  <div class="block">
    <div class="title">
      {{title}}
    </div>
    <div class="select-wrapper">
      <div v-show="!value" class="choose-one">choose one</div>
      <select
        @change="setValueByPath({path, value: $event.target.value })"
        :value="value"
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
  props: ['title', 'path', 'options', 'value'],
  methods: {
    ...mapActions(['setValueByPath'])
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
  font-size: .8em;
  font-weight: 300;
  opacity: .6;
  margin-top: .5em;
  margin-left: .1em;
  z-index: 0;
}
</style>
