<template>
  <div class="splash">
    <p>Add your vehicles here</p>
    <div>
      <button class="button" @click="add">+ add</button>
    </div>
    <div>
      <button class="button" @click="skip">
        skip
      </button>
    </div>

    <div class="modal" v-if="addingVehicles">
      <div class="modal-close" @click="closeModal">x</div>
      <VehiclesAdd v-on:scrollTop="scrollTop" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import VehiclesAdd from '@/components/Vehicles/VehiclesAdd'

export default {
  name: 'VehiclesSplash',
  mounted () {
    if (this.$route.params.addingVehicles) {
      this.addingVehicles = true
    }
    if (this.vehicles.length > 0) {
      this.$router.replace({ name: 'VehiclesReview' })
    }
  },
  data () {
    return {
      addingVehicles: false
    }
  },
  components: { VehiclesAdd },
  computed: {
    ...mapGetters(['vehicles'])
  },
  methods: {
    add () {
      this.addingVehicles = true
    },
    skip () {
      this.$router.push({ name: 'InsuranceSplash' })
    },
    closeModal () {
      this.addingVehicles = false
    },
    scrollTop () {
      this.$el.querySelector('.modal').scrollTop = 0
    }
  }
}
</script>
