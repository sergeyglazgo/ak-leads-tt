import { createRouter, createWebHashHistory } from 'vue-router'
import MainPage from './components/MainPage.vue'
import DataPage from './components/DataPage.vue'

const routes = [
  { path: '/', component: MainPage },
  { path: '/data-page', component: DataPage }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
