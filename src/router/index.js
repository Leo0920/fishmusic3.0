import Vue from 'vue'
import VueRouter from 'vue-router'
import Recommend from '../components/recommend'
import Singer from '../components/singer'
import Rank from '../components/rank'
import Search from '../components/search'
Vue.use(VueRouter)


 export default new VueRouter({
 	routes:[
 	{
   path:'/',
   redirect: '/recommend'
 	},
   {
    path:'/recommend',
   component:Recommend
   },
   {
    path:'/singer',
   component:Singer
   },
   {
    path:'/rank',
   component:Rank
   },
   {
    path:'/search',
   component:Search
   }
 	]

 })