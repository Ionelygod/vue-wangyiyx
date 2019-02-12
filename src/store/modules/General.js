/**
 * Created by Fairy on 2018/12/29.
 */
import {reTabs,reTuijian,reTalent,rePlioncene,reHomeData,reCollection,reNewestList} from '../../api'
import {
  GET_TABS,
  GET_TUIJIAN,
  GET_DAREN,
  GET_PLIONCENE,
  GET_HOMEDATA,
  GET_COLLECTION,
  GET_NEWESTLIST
} from '../mutation-types'
const state = {
  tlist:[],
  data:[],
  TalentList:[],
  OnTheNewList:[],
  homeData:{},
  collection:{},
}
const mutations = {
  [GET_TABS](state,{tlist}){
    state.tlist = tlist
  },
  [GET_TUIJIAN](state,{data}){
    state.data = data
  },
  [GET_DAREN](state,{TalentList}){
    state.TalentList = TalentList
  },
  [GET_PLIONCENE](state,{OnTheNewList}){
    state.OnTheNewList = OnTheNewList
  },
  [GET_HOMEDATA](state,{homeData}){
    state.homeData = homeData
  },
  [GET_COLLECTION](state,{collection}){
    state.collection = collection
  },
}
const actions = {
  async getTabs({commit}){
   const result = await reTabs()
    if(result.code === '200'){
     const tlist = result.data
     commit(GET_TABS,{tlist})
    }
  },
  async getTuijian({commit},cb){
    const result = await reTuijian()
    if(result.code === '200'){
      const data = result.data
      let arr = []
      for (let i = 0; i < data.length; i++) {
        const item = data[i].topics
        for (let j = 0; j < item.length; j++) {
          const li = item[j]
          arr.push(li)
        }
      }
      //arr = arr.splice(0, 10)
      arr = Array.from(arr);
      commit(GET_TUIJIAN,{data: arr})
      typeof cb === 'function' && cb()
    }
  },
  async getdaren({commit,state},{page,size,tabId,cb}){
    const result = await reTalent({page, size, tabId})
    if(result.code === '200'){
      const data = result.data.result
      const arr = []
      for (var i = 0; i < data.length; i++) {
        const item = data[i]
        arr.push(item)
      }
      const TalentList = state.TalentList.concat(arr)
      commit(GET_DAREN,{TalentList})
      typeof cb === 'function' && cb()
    }
  },
  async getplioncene({commit,state},{page,size,tabId,cb}){
    const result = await rePlioncene({page, size, tabId})
    if(result.code === '200'){
      const data = result.data.result
      const arr = []
      for (var i = 0; i < data.length; i++) {
        const item = data[i]
        arr.push(item)
      }
      const OnTheNewList = state.OnTheNewList.concat(arr)
      commit(GET_PLIONCENE,{OnTheNewList})
      typeof cb === 'function' && cb()
    }
  },
  async gethomeData({commit}){
    const result = await reHomeData()
    if(result.code === '200'){
      const homeData = result.data
      commit(GET_HOMEDATA,{homeData})
    }
  },
  async getcollection({commit},id){
    const result = await reCollection(id)
    if(result.code === '200'){
      const collection = result.data
      commit(GET_COLLECTION,{collection})
    }
  },

}
const getters = {

}
export default {
  state,
  mutations,
  actions,
  getters
}
