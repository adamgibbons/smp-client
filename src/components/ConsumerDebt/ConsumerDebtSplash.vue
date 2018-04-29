<template>
  <div class="wrapper">
    <p>Add your consumer debt here</p>
    <div>
      <button @click="add">+ add</button>
    </div>
    <div>
      <button @click="skip">
        skip
      </button>
    </div>

    <div class="modal" v-if="addingConsumerDebt">
      <div class="modal-close" @click="closeModal">x</div>
      <ConsumerDebtAdd v-on:scrollTop="scrollTop" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ConsumerDebtAdd from '@/components/ConsumerDebt/ConsumerDebtAdd'

export default {
  name: 'ConsumerDebtSplash',
  // mounted () {
  //   if (this.$route.params.addingConsumerDebt) {
  //     this.addingConsumerDebt = true
  //   }
  //   if (this.consumerDebt.length > 0) {
  //     this.$router.replace({ name: 'ConsumerDebtReview' })
  //   }
  // },
  data () {
    return {
      addingConsumerDebt: false
    }
  },
  components: { ConsumerDebtAdd },
  computed: {
    ...mapGetters(['consumerDebt'])
  },
  methods: {
    add () {
      this.addingConsumerDebt = true
    },
    skip () {
      this.$router.push({ name: 'LivingExpensesSplash' })
    },
    closeModal () {
      this.addingConsumerDebt = false
    },
    scrollTop () {
      this.$el.querySelector('.modal').scrollTop = 0
    }
  }
}
</script>

<style scoped>
  .wrapper {
    text-align: center;
    margin: 3em 2em 0;
  }
  .page-nav {
    text-align: center;
    margin-top: 2em;
  }
  button {
    border-radius: 2em;
    padding: .33em 1em;
    background: transparent;
    color: white;
    border: 2px solid white;
    font-size: 1em;
    margin: 1em auto;
  }
</style>
