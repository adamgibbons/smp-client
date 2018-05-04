<template>
  <div class="body">
    <div class="rows">
      <div
        class="row"
        v-for="({year, model}, index) in vehicles"
        :key="index">
        <div class="cell name">{{year}} {{model}}</div>
        <div class="cell edit" @click="edit(index)">
          <i class="fas fa-pencil-alt"></i>
        </div>
      </div>
    </div>
    <div class="text-center">
      <button class="button" @click="addMore">+ add more</button>
    </div>
    <div class="modal" v-if="editingVehicle">
      <div class="modal-close" @click="closeModal">
        <i class="far fa-times-circle fa-2x"></i>
      </div>
      <VehiclesEdit v-on:closeModal="closeModal" :indexOfModalItem="indexOfModalItem" />
    </div>
    <div class="modal" v-if="addingVehicle">
      <div class="modal-close" @click="closeModal">
        <i class="far fa-times-circle fa-2x"></i>
      </div>
      <VehiclesAdd
        v-on:closeModal="closeModal"
        v-on:scrollTop="scrollTop" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import VehiclesEdit from '@/components/Vehicles/VehiclesEdit'
import VehiclesAdd from '@/components/Vehicles/VehiclesAdd'

export default {
  name: 'VehiclesReview',
  components: { VehiclesAdd, VehiclesEdit },
  data () {
    return {
      addingVehicle: false,
      editingVehicle: false,
      indexOfModalItem: 0
    }
  },
  mounted () {
    if (this.$route.params.addingVehicle) {
      this.addingVehicle = true
    }
    if (this.$route.params.editingVehicle) {
      this.editingVehicle = true
    }
  },
  methods: {
    edit (index) {
      this.indexOfModalItem = index
      this.editingVehicle = true
    },
    addMore () {
      this.addingVehicle = true
    },
    closeModal () {
      this.addingVehicle = false
      this.editingVehicle = false
    },
    scrollTop () {
      this.$el.querySelector('.modal').scrollTop = 0
    }
  },
  computed: {
    ...mapGetters(['vehicles'])
  }
}
</script>
