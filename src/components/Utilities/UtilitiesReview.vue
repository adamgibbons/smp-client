<template>
  <div class="body">
    <div class="rows">
      <div
        class="row"
        v-for="({ billName, amount }, index) in activatedUtilities"
        :key="index">
        <div class="cell name">{{billName | prettyName}}</div>
        <div class="cell amount">${{amount}}</div>
        <div class="cell edit" @click="edit">
          <a>edit</a>
        </div>
      </div>
    </div>
    <div class="text-center">
      <button class="button" @click="addMore">+ add more</button>
    </div>
    <div class="modal" v-if="editingUtilities">
      <div class="modal-close" @click="closeModal">x</div>
      <UtilitiesEdit
        v-on:closeModal="closeModal"
        v-on:update="update" />
    </div>
    <div class="modal" v-if="addingUtilities">
      <div class="modal-close" @click="closeModal">x</div>
      <UtilitiesAdd
        v-on:closeModal="closeModal"
        v-on:scrollTop="scrollTop"
        v-on:edit="edit" />
    </div>
  </div>
</template>

<script>
import UtilitiesAdd from './UtilitiesAdd'
import UtilitiesEdit from './UtilitiesEdit'
import { mapGetters } from 'vuex'

export default {
  name: 'UtilitiesReview',
  mounted () {
    if (this.$route.params.addingUtilities) {
      this.addingUtilities = true
    }
    if (this.$route.params.editingUtilities) {
      this.editingUtilities = true
    }
  },
  methods: {
    edit () {
      this.addingUtilities = false
      this.editingUtilities = true
    },
    addMore () {
      this.addingUtilities = true
    },
    closeModal () {
      this.addingUtilities = false
      this.editingUtilities = false
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
      addingUtilities: false,
      editingUtilities: false
    }
  },
  computed: {
    ...mapGetters(['activatedUtilities'])
  },
  components: { UtilitiesAdd, UtilitiesEdit },
  filters: {
    prettyName: (name) => {
      return {
        electricity: 'Electricity',
        waterSewer: 'Water/Sewer',
        trash: 'Trash',
        naturalGas: 'Natural Gas',
        hoa: 'HOA',
        other: 'Other'
      }[name]
    }
  }
}
</script>
