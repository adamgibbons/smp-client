<template>
  <div class="block" :class="{muted: value === 'skip'}">
    <a
      v-if="allowSkip"
      class="idk"
      @click="skip">
      <img src="@/assets/skip.png" alt="Skip">
    </a>

    <div class="title">
      {{title}}
    </div>

    <div class="control">
      <div class="search-wrapper" :class="{'active': focused === true}">
        <input
          type="text"
          v-model="selectedResult"
          placeholder="Type to search"
          @focus="focus"
        />
        <div
          v-if="results && results.length > 0 && selected === false"
          class="search-results">
          <div
            class="search-result"
            v-for="(result, index) in results"
            :key="index"
            @click="selectResult(result)">
            {{result}}
          </div>
        </div>
        <nav v-show="focused === true">
          <button class="button done" @click="done">Done</button>
        </nav>
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
      selectedResult: null,
      focused: false
    }
  },
  computed: {
    results () {
      if (!this.selectedResult) return []
      return this.options.filter((option) => {
        return option.toLowerCase().indexOf((this.selectedResult).toLowerCase()) !== -1
      }).slice(0, 10)
    }
  },
  mounted () {
    if (this.value) {
      this.selectedResult = this.value
      this.selected = true
    }
    if (this.value === 'skip') {
      this.selectedResult = ''
    }
  },
  methods: {
    ...mapActions(['setValueByPath']),
    selectResult (value) {
      this.selectedResult = value
      this.setValueByPath({ path: this.path, value })
      this.selected = true
      this.focused = false
    },
    done () {
      this.setValueByPath({ path: this.path, value: this.selectedResult })
      this.selected = true
      this.focused = false
    },
    hideSkip (val) {
      return val === 'skip' ? '' : val
    },
    focus () {
      // this.setValueByPath({ path: this.path, value: null })
      this.focused = true
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
