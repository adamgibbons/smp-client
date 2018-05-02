<template>
  <div class="splash">
    <p>
      Select all the insurances you pay premium for
      <br>
      (Check all that apply to you)
    </p>
    <div>
      <button class="button" @click="addInsurance">+ add</button>
    </div>
    <div>
      <button class="button" @click="skip">
        skip
      </button>
    </div>

    <div class="modal" v-show="addingInsurance">
      <div class="modal-close" @click="closeAddModal">x</div>
      <InsuranceAdd v-on:edit="edit" />
    </div>

    <div class="modal" v-show="editingInsurance">
      <div class="modal-close" @click="closeEditModal">x</div>
      <InsuranceEdit v-on:update="update" />
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
    if (this.activatedInsurance.length > 0) {
      this.$router.replace({ name: 'InsuranceReview' })
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
    ...mapGetters(['insurance', 'activatedInsurance'])
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
    edit () {
      this.addingInsurance = false
      this.editingInsurance = true
    },
    update () {
      this.$router.push({ name: 'InsuranceReview' })
    }
  }
}
</script>
