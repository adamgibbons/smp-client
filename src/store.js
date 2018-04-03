import Vue from 'vue'
import Vuex from 'vuex'
import auth from '@/modules/auth/store'
import flow from '@/modules/flow/store'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: { auth, flow }
})
