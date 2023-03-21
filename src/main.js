import { createApp } from 'vue'
import router from './router.js'
import { store } from './store.js'
import './style.css'
import App from './App.vue'

createApp(App).use(store).use(router).mount('#app')
