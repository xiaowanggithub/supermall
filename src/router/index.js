import Vue from 'vue'
import Router from 'vue-router'

// 懒加载
const Home = () => import('../views/home/Home.vue')
const Category = () => import('../views/category/Category.vue')
const Profile = () => import('../views/profile/Profile.vue')
const Cart = () => import('../views/cart/Cart.vue')

Vue.use(Router)


const routes =  [
  {
    path:'',
    redirect: '/home'
  },

  {
    path: '/home',
    component: Home
  },

  {
    path:'/cart',
    component:Cart
  },

  {
    path:'/profile',
    component:Profile,
  },

  {
    path:'/category',
    component:Category,
  }
]



export default new Router({
  routes,
  mode: 'history'
})


