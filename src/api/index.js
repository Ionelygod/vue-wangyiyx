/**
 * Created by Fairy on 2018/12/28.
 */
import ajax from './ajax'

const prefix = '/api'
// const prefix = ''

export const reBanner = () => ajax('/banner')
export const reFenlei = () => ajax('/fenlei')
export const reTabs = () => ajax(prefix + '/topic/v1/find/getTabs.json')
export const reTuijian = () => ajax(prefix + '/topic/v1/find/recManual.json')
export const reTalent = ({page,size,tabId}) => ajax(prefix + '/topic/v1/find/getTabData.json',{page,size,tabId})
export const rePlioncene = ({page,size,tabId}) => ajax(prefix + '/topic/v1/find/getTabData.json',{page,size,tabId})
export const reHomeData = () => ajax(prefix + '/topic/v1/look/homeData.json')
export const reCollection = id => ajax(prefix + '/topic/v1/look/getCollection.json',{id:id})
export const reNewestList = ({page,size,type}) => ajax(prefix + '/topic/v1/look/getList.json',{page,size,type})
