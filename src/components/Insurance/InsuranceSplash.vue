<template>
  <div class="wrapper">
    <p>
      Select all the insurances you pay premium for
      <br>
      (Check all that apply to you)
    </p>
    <div>
      <button @click="addInsurance">+ add</button>
    </div>
    <div>
      <button @click="skip">
        skip
      </button>
    </div>

    <div class="modal" v-show="addingInsurance">
      <div class="modal-close" @click="closeAddModal">x</div>
      <InsuranceAdd v-on:editInsurance="handleEditInsurance" />
    </div>

    <div class="modal" v-show="editingInsurance">
      <div class="modal-close" @click="closeEditModal">x</div>
      <InsuranceEdit />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import InsuranceAdd from '@/components/Insurance/InsuranceAdd'
import InsuranceEdit from '@/components/Insurance/InsuranceEdit'

export default {
  name: 'InsuranceSplash',
  mounted () {
    if (this.$route.params.addingInsurance) {
      this.addingInsurance = true
    }
    if (this.$route.params.editingInsurance) {
      this.editingInsurance = true
    }
  },
  data () {
    return {
      addingInsurance: false,
      editingInsurance: false
    }
  },
  components: { InsuranceAdd, InsuranceEdit },
  computed: {
    ...mapGetters(['insurance', 'selectedInsurance'])
  },
  methods: {
    ...mapActions(['setValueByPath']),
    addInsurance () {
      this.addingInsurance = true
    },
    skip () {
      this.$router.push({ name: 'StudentLoansSplash' })
    },
    closeAddModal () {
      this.addingInsurance = false
    },
    closeEditModal () {
      this.editingInsurance = false
    },
    handleEditInsurance (e) {
      this.addingInsurance = false
      this.editingInsurance = true
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
