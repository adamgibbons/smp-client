<template>
  <div class="body">
    <div class="rows">
      <div
        class="row"
        v-for="({ name, amount }, index) in activatedLivingExpenses"
        :key="index">
        <div class="cell name">{{name | prettyName}}</div>
        <div class="cell amount">
          <span class="currency">$</span>{{amount | currency}}
        </div>
        <div class="cell edit" @click="edit">
          <i class="fas fa-pencil-alt"></i>
        </div>
      </div>
    </div>
    <div class="text-center">
      <button class="button" @click="addMore">+ add more</button>
    </div>
    <div class="modal" v-if="editingLivingExpenses">
      <div class="modal-close" @click="closeModal">
        <i class="far fa-times-circle fa-2x"></i>
      </div>
      <LivingExpensesEdit
        v-on:closeModal="closeModal"
        v-on:update="update" />
    </div>
    <div class="modal" v-if="addingLivingExpenses">
      <div class="modal-close" @click="closeModal">
        <i class="far fa-times-circle fa-2x"></i>
      </div>
      <LivingExpensesAdd
        v-on:closeModal="closeModal"
        v-on:scrollTop="scrollTop"
        v-on:edit="edit" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import LivingExpensesAdd from './LivingExpensesAdd'
import LivingExpensesEdit from './LivingExpensesEdit'
import currency from '@/utils/format-currency'

export default {
  name: 'LivingExpensesReview',
  mounted () {
    if (this.$route.params.addingLivingExpenses) {
      this.addingLivingExpenses = true
    }
    if (this.$route.params.editingLivingExpenses) {
      this.editingLivingExpenses = true
    }
  },
  computed: {
    ...mapGetters(['activatedLivingExpenses'])
  },
  methods: {
    edit () {
      this.addingLivingExpenses = false
      this.editingLivingExpenses = true
    },
    addMore () {
      this.addingLivingExpenses = true
    },
    closeModal () {
      this.addingLivingExpenses = false
      this.editingLivingExpenses = false
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
      addingLivingExpenses: false,
      editingLivingExpenses: false
    }
  },
  components: { LivingExpensesAdd, LivingExpensesEdit },
  filters: {
    currency,
    prettyName: (name) => {
      return {
        gymMembership: 'Gym Membership',
        fuel: 'Fuel',
        publicTransportation: 'Public Transportation',
        healthcare: 'Healthcare',
        phoneInternetCable: 'Phone/Internet/Cable',
        diningOut: 'Dining Out',
        shopping: 'Shopping',
        entertainment: 'Entertainment',
        childcare: 'Childcare',
        other: 'Other'
      }[name]
    }
  }
}
</script>
