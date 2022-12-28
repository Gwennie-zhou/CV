import { createApp } from 'vue'
import router from '@/router/index'
import '@/assets/style/reset.css'
import '@/assets/style/common.css'


import App from './App.vue'

createApp(App).use(router).mount('#app')
