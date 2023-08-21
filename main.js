import {createApp} from 'vue'
import App from './App.vue'

import { createRouter, createWebHistory } from 'vue-router'
import Login from './components/login.vue'
import Liste from './components/liste.vue'
import Neueingabe from './components/neueingabe.vue'

const routes = [
  {
    path: '/login',
    component: Login
  },
  {
    path: '/liste',
    component: Liste,
  },
  {
    path: '/neueingabe',
    component: Neueingabe
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes
})

const app = createApp(App)
app.use(router)
app.mount('#app')
