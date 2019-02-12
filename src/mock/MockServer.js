/**
 * Created by Fairy on 2018/12/29.
 */

import Mock from 'mockjs'
import data from './shouye_data.json'
import classify from './fenlei_zhuanqu.json'


// Mock.mock('/banner',{code:0,focusList:data.focusList})
Mock.mock('/banner',{code:0,...data})
Mock.mock('/fenlei',{code:0,...classify})




