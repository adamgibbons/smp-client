import Vue from 'vue'
import Vuex from 'vuex'
import flow from '@/modules/flow/store'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    flow
  }
})
