/**
 * Created by Fairy on 2018/12/29.
 */

import {reBanner} from '../../api'

import {
  GET_BANNER,
  GET_HOME
} from '../mutation-types'

const state = {
  newItemList:[],
  sceneLightShoppingGuideModule:[],
  kingKongModule:{},
  moduleColorCfg:{},
  categoryModule:[],
  tagList:[],
  policyDescList:[],
  popularItemList:[],
  categoryHotSellModule:{},
  freshmanFlag:true,
  flashSaleModule:{},
  focusList:[],
  indexActivityModule:[]
}
const mutations = {
  [GET_HOME](state,{result}){
    state.newItemList = result.newItemList
    state.sceneLightShoppingGuideModule = result.sceneLightShoppingGuideModule
    state.kingKongModule = result.kingKongModule
    state.moduleColorCfg = result.moduleColorCfg
    state.categoryModule = result.categoryModule
    state.tagList = result.tagList
    state.policyDescList = result.policyDescList
    state.popularItemList = result.popularItemList
    state.categoryHotSellModule = result.categoryHotSellModule
    state.freshmanFlag = result.freshmanFlag
    state.freshmanFlag = result.freshmanFlag
    state.flashSaleModule = result.flashSaleModule
    state.indexActivityModule = result.indexActivityModule
    //state.focusList = result.focusList
  },
  [GET_BANNER](state,{focusList}){
    state.focusList = focusList
  }

}
const actions = {
  async getbanner({commit},cb){
    const result = await reBanner()
    if(result.code === 0){
      const focusList = result.focusList;
      commit(GET_BANNER,{focusList})
      typeof cb === 'function' && cb()
    }
  },
  async gethome({commit},cb){
    const result = await reBanner()
    if(result.code === 0){
      // const focusList = result.focusList;
      commit(GET_HOME,{result})
      typeof cb === 'function' && cb()
    }
  }
}
const getters = {

}
export default {
  state,
  mutations,
  actions,
  getters
}
