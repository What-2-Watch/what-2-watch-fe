import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import ProfilePage from '../views/ProfilePage.vue'
import Search from '../views/Search.vue'
import ErrorPage from '../views/ErrorPage.vue'
const routes = [
  {
    path: '/home',
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
  {
    path: '/',
    name: 'Login',
    redirect: '/login'
  },
  { 
    path: '/:pathMatch(.*)*', 
    name: 'not-found', 
    component: ErrorPage 
  },


]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
