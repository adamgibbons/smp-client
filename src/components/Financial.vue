<template>
  <div class="body">
    <div class="title">
      Financial info
    </div>
    <div class="block">
      <div class="title">
        Monthly income (after taxes - combined)
      </div>
      <input type="number" value="30000" />
    </div>
    <div class="block">
      <div class="title">
        Credit score
      </div>
      <button @click="setValueByPath({ path: 'financial.creditScore', value: 'poor'})">Poor</button>
      <button @click="setValueByPath({ path: 'financial.creditScore', value: 'good'})">Good</button>
      <button @click="setValueByPath({ path: 'financial.creditScore', value: 'excellent'})">Excellent</button>

      <p>
        <a >I don't know</a>
      </p>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  methods: {
    ...mapActions(['setValueByPath'])
  }
}
</script>
