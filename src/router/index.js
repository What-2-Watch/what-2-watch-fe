import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Profile from '../views/Profile.vue'
import Search from '../views/Search.vue'
import App from '../App'
const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/search',
    name: 'Search',
    component: Search
  },
  {
    path: '/',
    name: 'Login',
    component: App,
  }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
