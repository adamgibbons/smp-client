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
    <div>
      <router-link class="back-btn" to="/flow/housing-4">Back</router-link>
    </div>

    <div class="modal" v-show="addingUtilities">
      <div class="modal-close" @click="closeAddModal">x</div>
      <UtilitiesAdd v-on:editUtilities="handleEditUtilities" />
    </div>

    <div class="modal" v-show="editingUtilities">
      <div class="modal-close" @click="closeEditModal">x</div>
      <UtilitiesEdit />
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
  },
  data () {
    return {
      addingUtilities: false,
      editingUtilities: false
    }
  },
  components: { UtilitiesAdd, UtilitiesEdit },
  computed: {
    ...mapGetters(['utilities', 'selectedUtilities']),
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
      // this.$router.push({ name: 'UtilitiesAdd' })
      this.addingUtilities = true
      // UtilitiesAdd
    },
    skip () {
      this.$router.push('/flow/savings-1')
    },
    closeAddModal () {
      this.addingUtilities = false
    },
    closeEditModal () {
      this.editingUtilities = false
    },
    handleEditUtilities (e) {
      this.addingUtilities = false
      this.editingUtilities = true
    }
  }
}
</script>

<style scoped>
  a.back-btn {
    text-decoration: none;
    border-radius: 1em;
    border: 2px solid gray;
    background: transparent;
    color: gray;
    padding: 0em .66em;
    font-size: .8em;
    font-weight: 600;
    line-height: 2;
    position: absolute;
    left: 1rem;
    bottom: 1rem;
  }
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
