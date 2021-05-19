import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import ProfilePage from '../views/ProfilePage.vue'
import Search from '../views/Search.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/profile',
    name: 'Profile',
    component: ProfilePage
  },
  {
    path: '/search',
    name: 'Search',
    component: Search
  },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
