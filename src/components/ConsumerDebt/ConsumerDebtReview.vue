<template>
  <div class="body">
    <div class="rows">
      <div
        class="row"
        v-for="({ type, averageLoanBalance }, index) in consumerDebt"
        :key="index">
        <div class="cell name" style="flex-basis:30%;">{{type | prettyName}}</div>
        <div class="cell amount" style="text-align:left;">
          <span class="currency">$</span>{{averageLoanBalance | currency}}
        </div>
        <div class="cell edit" @click="edit(index)">
          <i class="fas fa-pencil-alt"></i>
        </div>
      </div>
    </div>
    <div class="text-center">
      <button class="button" @click="addMore">+ add more</button>
    </div>
    <div class="modal" v-if="editingConsumerDebt">
      <div class="modal-close" @click="closeModal">
        <i class="far fa-times-circle fa-2x"></i>
      </div>
      <ConsumerDebtEdit v-on:closeModal="closeModal" :indexOfModalItem="indexOfModalItem" />
    </div>
    <div class="modal" v-if="addingConsumerDebt">
      <div class="modal-close" @click="closeModal">
        <i class="far fa-times-circle fa-2x"></i>
      </div>
      <ConsumerDebtAdd
        v-on:closeModal="closeModal"
        v-on:scrollTop="scrollTop" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ConsumerDebtEdit from '@/components/ConsumerDebt/ConsumerDebtEdit'
import ConsumerDebtAdd from '@/components/ConsumerDebt/ConsumerDebtAdd'
import currency from '@/utils/format-currency'

export default {
  name: 'ConsumerDebtReview',
  components: { ConsumerDebtAdd, ConsumerDebtEdit },
  data () {
    return {
      addingConsumerDebt: false,
      editingConsumerDebt: false,
      indexOfModalItem: 0
    }
  },
  mounted () {
    if (this.$route.params.addingConsumerDebt) {
      this.addingConsumerDebt = true
    }
    if (this.$route.params.editingConsumerDebt) {
      this.editingConsumerDebt = true
    }
  },
  methods: {
    edit (index) {
      this.indexOfModalItem = index
      this.editingConsumerDebt = true
    },
    addMore () {
      this.addingConsumerDebt = true
    },
    closeModal () {
      this.addingConsumerDebt = false
      this.editingConsumerDebt = false
    },
    scrollTop () {
      this.$el.querySelector('.modal').scrollTop = 0
    }
  },
  computed: {
    ...mapGetters(['consumerDebt'])
  },
  filters: {
    currency,
    prettyName: (name) => {
      return {
        creditCard: 'Credit Card',
        paydayLoan: 'Payday Loan',
        loansFromFamily: 'Loans from Family',
        personalLoan: 'Personal Loan',
        homeEquityLine: 'Home Equity Line',
        other: 'Other'
      }[name]
    }
  }
}
</script>
