/**
 * Created by Fairy on 2018/12/28.
 */
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import home from './modules/Home'
import search from './modules/Search'
import classify from './modules/Classify'
import general from './modules/General'
import actions from './actions'
import getters from './getters'


export default new Vuex.Store({
  modules:{
    home,
    search,
    classify,
    general
  },
  actions,
  getters
})
