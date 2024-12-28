import { createRouter, createWebHistory } from 'vue-router'
import About from '../components/about.vue'
import Skip from '../components/skip.vue'
import Connect from '../components/connect.vue'
import KeepAlive from '../components/keepAlive.vue'
import Isolation from '../components/isolation.vue'

const routes = [
  { path: '/', component: About },
  { path: '/about', component: About },
  { path: '/skip', component: Skip },
  { path: '/connect', component: Connect },
  { path: '/keepAlive', component: KeepAlive },
  { path: '/isolation', component: Isolation }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
