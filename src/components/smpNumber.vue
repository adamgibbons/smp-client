<template>
  <div class="block">
    <div class="title">{{title}}</div>

    <div class="control">
      <div class="select-wrapper">
        $
        <input
          type="number"
          :min="min"
          :max="max"
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
  props: ['title', 'path', 'min', 'max', 'value', 'unitSymbol'],
  methods: {
    ...mapActions(['setValueByPath'])
  }
}
</script>
