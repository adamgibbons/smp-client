<template>
  <div class="body">
    <div class="rows">
      <div
        class="row"
        v-for="({ name, amount }, index) in activatedInsurance"
        :key="index">
        <div class="cell name">{{name | prettyName}}</div>
        <div class="cell amount">${{amount}}</div>
        <div class="cell edit" @click="edit">
          <a>edit</a>
        </div>
      </div>
    </div>
    <div class="text-center">
      <button class="button" @click="addMore">+ add more</button>
    </div>
    <div class="modal" v-if="editingInsurance">
      <div class="modal-close" @click="closeModal">
        <i class="far fa-times-circle fa-2x"></i>
      </div>
      <InsuranceEdit
        v-on:closeModal="closeModal"
        v-on:update="update" />
    </div>
    <div class="modal" v-if="addingInsurance">
      <div class="modal-close" @click="closeModal">
        <i class="far fa-times-circle fa-2x"></i>
      </div>
      <InsuranceAdd
        v-on:closeModal="closeModal"
        v-on:scrollTop="scrollTop"
        v-on:edit="edit" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import InsuranceAdd from './InsuranceAdd'
import InsuranceEdit from './InsuranceEdit'

export default {
  name: 'InsuranceReview',
  mounted () {
    if (this.$route.params.addingInsurance) {
      this.addingInsurance = true
    }
    if (this.$route.params.editingInsurance) {
      this.editingInsurance = true
    }
  },
  computed: {
    ...mapGetters(['activatedInsurance'])
  },
  methods: {
    edit () {
      this.addingInsurance = false
      this.editingInsurance = true
    },
    addMore () {
      this.addingInsurance = true
    },
    closeModal () {
      this.addingInsurance = false
      this.editingInsurance = false
    },
    scrollTop () {
      this.$el.querySelector('.modal').scrollTop = 0
    },
    update () {
      this.closeModal()
    }
  },
  data () {
    return {
      addingInsurance: false,
      editingInsurance: false
    }
  },
  components: { InsuranceAdd, InsuranceEdit },
  filters: {
    prettyName: (name) => {
      return {
        multiPolicy: 'Multi-Policy',
        health: 'Health',
        car: 'Car',
        homeowners: 'Homeowners',
        life: 'Life',
        disability: 'Disability',
        other: 'Other'
      }[name]
    }
  }
}
</script>
