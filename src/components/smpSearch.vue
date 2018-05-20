<template>
  <div class="block" :class="{muted: value === 'skip'}">
    <a
      v-if="allowSkip"
      class="idk"
      @click="skip">
      Skip
    </a>

    <div class="title">
      {{title}}
    </div>

    <div class="control">
      <div class="search-wrapper">
        <input
          type="text"
          v-model="selectedResult"
          placeholder="Type to search"
          @focus="reset"
        />
      </div>
    </div>
    <div
      v-if="results && results.length > 2 && selected === false"
      class="search-results">
      <div
        class="search-result"
        v-for="(result, index) in results"
        :key="index"
        @click="selectResult(result)">
        {{result}}
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  props: ['title', 'path', 'options', 'value', 'allowSkip'],
  data () {
    return {
      selected: false,
      selectedResult: null
    }
  },
  computed: {
    results () {
      if (!this.selectedResult) return []
      if (this.selectedResult.length < 3) return []
      return this.options.filter((option) => {
        return option.toLowerCase().indexOf((this.selectedResult).toLowerCase()) !== -1
      }).slice(0, 10)
    }
  },
  methods: {
    ...mapActions(['setValueByPath']),
    selectResult (value) {
      this.selectedResult = value
      this.setValueByPath({ path: this.path, value })
      this.selected = true
    },
    hideSkip (val) {
      return val === 'skip' ? '' : val
    },
    reset () {
      this.setValueByPath({ path: this.path, value: null })
      this.selectedResult = null
      this.selected = false
    },
    skip () {
      this.setValueByPath({ path: this.path, value: 'skip' })
      this.selectedResult = null
      this.selected = false
    }
  }
}
</script>
