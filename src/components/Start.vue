<template>
  <div class="body">
    <div>Hey {{user.name}}!</div>

    <div class="title">
      Welcome to TheSocialMoneyProject
    </div>

    <div>
      <router-link to="/flow/personal-1">Start</router-link>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['user'])
  }
}
</script>
