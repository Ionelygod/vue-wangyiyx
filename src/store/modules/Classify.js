/**
 * Created by Fairy on 2018/12/29.
 */
import {reFenlei} from '../../api'
import {GET_FENLEI} from '../mutation-types'
const state = {
  currentCategory:{},
  categoryGroupList:[],
  categoryL1List:[],
  categoryL2List:[]
}
const mutations = {
  [GET_FENLEI](state,{result}){
    state.currentCategory = result.currentCategory
    state.categoryGroupList = result.categoryGroupList
    state.categoryL1List = result.categoryL1List
    state.categoryL2List = result.categoryL2List
  }
}
const actions = {
  async getfenlei({commit},cb){
   const result =  await reFenlei()
    if(result.code === 0 ){
     commit(GET_FENLEI,{result})
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
