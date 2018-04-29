<template>
  <div class="wrapper">
    <p>Add your utilities like electricity, gas, etc. here</p>
    <div>
      <button @click="addUtilities">+ add</button>
    </div>
    <div>
      <button @click="skip">
        skip
      </button>
    </div>

    <div class="modal" v-show="addingUtilities">
      <div class="modal-close" @click="closeAddModal">x</div>
      <UtilitiesAdd v-on:edit="edit" />
    </div>

    <div class="modal" v-show="editingUtilities">
      <div class="modal-close" @click="closeEditModal">x</div>
      <UtilitiesEdit v-on:update="update" />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import UtilitiesAdd from '@/components/Utilities/UtilitiesAdd'
import UtilitiesEdit from '@/components/Utilities/UtilitiesEdit'

export default {
  name: 'UtilitiesSplash',
  mounted () {
    if (this.$route.params.addingUtilities) {
      this.addingUtilities = true
    }
    if (this.activatedUtilities.length > 0) {
      this.$router.replace({ name: 'UtilitiesReview' })
    }
  },
  data () {
    return {
      addingUtilities: false,
      editingUtilities: false
    }
  },
  components: { UtilitiesAdd, UtilitiesEdit },
  computed: {
    ...mapGetters(['utilities', 'selectedUtilities', 'activatedUtilities']),
    remainingSelectedUtilities () {
      return this.selectedUtilities.length > 0
    },
    buttonCopy () {
      if (this.$route.path.indexOf('review') !== -1) {
        return 'Add more'
      }

      return 'Done'
    }
  },
  methods: {
    ...mapActions(['setValueByPath']),
    addUtilities () {
      this.addingUtilities = true
    },
    skip () {
      this.$router.push({ name: 'VehiclesSplash' })
    },
    closeAddModal () {
      this.addingUtilities = false
    },
    closeEditModal () {
      this.editingUtilities = false
    },
    edit (e) {
      this.addingUtilities = false
      this.editingUtilities = true
    },
    update () {
      this.$router.push({ name: 'UtilitiesReview' })
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
