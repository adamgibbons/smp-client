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
    <div class="page-nav">
      <button class="addMore" @click="addMore">+ add more</button>
    </div>
    <div class="modal" v-if="editingInsurance">
      <div class="modal-close" @click="closeModal">x</div>
      <InsuranceEdit
        v-on:closeModal="closeModal"
        v-on:update="update" />
    </div>
    <div class="modal" v-if="addingInsurance">
      <div class="modal-close" @click="closeModal">x</div>
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

<style scoped>
  button {
    color: white;
    border: 1px solid white;
    padding: 1em;
    background: transparent;
  }
  .rows {
    display: flex;
    flex-flow: column nowrap;
    align-content: flex-start;
    margin: 1em 0 1em;
  }
  .row {
    border: 1px solid white;
    border-left: none;
    border-right: none;
    display: flex;
    padding: .9em 0;
    flex-flow: row nowrap;
  }
  .cell {
    flex: 1;
    position: relative;
    left: 10%;
    font-size: .9em;
  }
  .page-nav {
    text-align: center;
  }
  button.addMore {
    border-radius: 2em;
    padding: .33em 1em;
    background: transparent;
    color: white;
    border: 2px solid white;
    font-size: 1em;
    margin: 0 auto;
  }
</style>
