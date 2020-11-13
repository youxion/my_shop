import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions.js'
import mutations from './mutations.js'
import getters from './getters.js'

Vue.use(Vuex)


const state = {
  cartList: ['actions', 'conponents', 'default', 'export', 'getter']


}

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters

})

export default store