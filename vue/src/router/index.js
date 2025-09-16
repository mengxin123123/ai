import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import WorkshopView from '../views/WorkshopView.vue'
import IndexView from '../views/IndexView.vue'
import MemberCenter from '../views/MemberCenter.vue'
import LoginView from '../views/LoginView.vue'
import AiAssistant from '../views/AiAssistant.vue'
import Profile from '../views/Profile.vue'
import Assistant from '../views/Assistant.vue'
import Wallet from '../views/Wallet.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    children: [
      {
        path: '',
        name: 'index',
        component: IndexView
      },
      {
        path: 'workshop',
        name: 'workshop',
        component: WorkshopView
      },
      {
        path: 'member',
        name: 'member',
        component: MemberCenter
      }
    ]
  },
  {
    path: '/assistant',
    name: 'assistant',
    component: Assistant
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile
  },
  {
    path: '/wallet',
    name: 'wallet',
    component: Wallet
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: "/exhibitpage",
    name: "Exhibitpage",
    component: ()=> import('../views/Exhibitpage')
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/ai-assistant',
    name: 'aiAssistant',
    component: AiAssistant
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router