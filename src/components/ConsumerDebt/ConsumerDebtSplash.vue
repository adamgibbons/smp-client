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
    <div>
      <router-link class="back-btn" :to="{ name: 'InsuranceSplash' }">Back</router-link>
    </div>

    <div class="modal" v-if="addingConsumerDebt">
      <div class="modal-close" @click="closeAddModal">x</div>
      <ConsumerDebtEdit v-on:editConsumerDebt="handleEditConsumerDebt" />
    </div>

    <div class="modal" v-if="editingConsumerDebt">
      <div class="modal-close" @click="closeEditModal">x</div>
      <ConsumerDebtEdit />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ConsumerDebtEdit from '@/components/ConsumerDebt/ConsumerDebtEdit'

export default {
  name: 'ConsumerDebtSplash',
  mounted () {
    if (this.$route.params.addingConsumerDebt) {
      this.addingConsumerDebt = true
    }
    if (this.$route.params.editingConsumerDebt) {
      this.editingConsumerDebt = true
    }
    if (this.consumerDebt.length > 0) {
      this.$router.replace({ name: 'ConsumerDebtReview' })
    }
  },
  data () {
    return {
      addingConsumerDebt: false,
      editingConsumerDebt: false
    }
  },
  components: { ConsumerDebtEdit },
  computed: {
    ...mapGetters(['consumerDebt'])
  },
  methods: {
    add () {
      this.editingConsumerDebt = true
    },
    skip () {
      this.$router.push({ name: 'LivingExpensesSplash' })
    },
    closeAddModal () {
      this.addingConsumerDebt = false
    },
    closeEditModal () {
      this.editingConsumerDebt = false
    },
    handleEditConsumerDebt (e) {
      this.addingConsumerDebt = false
      this.editingConsumerDebt = true
    }
  }
}
</script>

<style scoped>
  a.back-btn {
    text-decoration: none;
    border-radius: 1em;
    border: 2px solid gray;
    background: transparent;
    color: gray;
    padding: 0em .66em;
    font-size: .8em;
    font-weight: 600;
    line-height: 2;
    position: absolute;
    left: 1rem;
    bottom: 1rem;
  }
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
