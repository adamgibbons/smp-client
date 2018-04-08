<template>
  <div class="body">
    <div class="title">
      Housing info
    </div>
    <div class="block">
      <div class="title">
        Current housing situation
      </div>
      <button class="button" @click="setValueByPath({ path: 'housing.creditScore', value: 'poor'})">Poor</button>
      <button class="button" @click="setValueByPath({ path: 'housing.creditScore', value: 'good'})">Good</button>
    </div>
    <div class="block">
      <div class="title">
        Credit score
      </div>
      <button class="button" @click="setValueByPath({ path: 'financial.creditScore', value: 'poor'})">Poor</button>
      <button class="button" @click="setValueByPath({ path: 'financial.creditScore', value: 'good'})">Good</button>
      <button class="button" @click="setValueByPath({ path: 'financial.creditScore', value: 'excellent'})">Excellent</button>

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
