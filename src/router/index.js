import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import ProfilePage from '../views/ProfilePage.vue'
import Search from '../views/Search.vue'
import MovieDetailsPage from '../views/MovieDetailsPage.vue'
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
    component: App,
  },
  {
    path: '/movie/399566',
    name: 'Movie Details',
    component: MovieDetailsPage
  }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
