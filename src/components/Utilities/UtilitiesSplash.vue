<template>
  <div class="splash">
    <p>Add your utilities like electricity, gas, etc. here</p>
    <div>
      <button class="button" @click="addUtilities">+ add</button>
    </div>
    <div>
      <button class="button" @click="skip">
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
    ...mapGetters(['utilities', 'activatedUtilities'])
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
    edit () {
      this.addingUtilities = false
      this.editingUtilities = true
    },
    update () {
      this.$router.push({ name: 'UtilitiesReview' })
    }
  }
}
</script>
