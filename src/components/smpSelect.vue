<template>
  <div class="block">
    <div class="title">
      {{title}}
    </div>
    <div class="select-wrapper">
      <select
        @change="setValueByPath({path, value: $event.target.value })"
        :value="value"
      >
        <option></option>
        <option
          v-for="(option, index) in options"
          :value="option.value"
          :key="index"
        >{{option.name}}</option>
      </select>
    </div>
    <div class="choose-one">choose one</div>
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
