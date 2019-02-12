/**
 * Created by Fairy on 2018/12/28.
 */
import Home from '../pages/Home/Home.vue'
import Classify from '../pages/Classify/Classify.vue'

import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'
import Search from '../pages/Search/Search.vue'
import General from '../pages/General/General.vue'
import Tuijian from '../pages/General/Tuijian/Tuijian.vue'
import Talent from '../pages/General/Talent/Talent.vue'
import Plioncene from '../pages/General/Plioncene/Plioncene.vue'
import Shaidan from '../pages/General/Shaidan/Shaidan.vue'
import HOME from '../pages/General/HOME/HOME.vue'

export default [
  {
    path:'/home',
    component:Home
  },
  {
    path:'/classify',
    component:Classify
  },
  {
    path:'/general',
    component:General,
    children:[
      {
        path:'/general/tuijian',
        component:Tuijian
      },
      {
        path:'/general/talent',
        component:Talent
      },
      {
        path:'/general/plioncene',
        component:Plioncene
      },
      {
        path:'/general/shaidan',
        component:Shaidan
      },
      {
        path:'/general/home',
        component:HOME
      },


      {
        path:'/general',
        redirect:'/general/tuijian'
      }
    ]
  },
  {
    path:'/order',
    component:Order
  },
  {
    path:'/profile',
    component:Profile
  },
  {
    path:'/search',
    component:Search,
    meta:{
      noShowFooter:true
    }
  },


  {
    path:'/',
    redirect:'/home'
  }
]
