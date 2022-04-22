import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import '../node_modules/timeline-vuejs/dist/timeline-vuejs.css'

import '@/assets/styles/main.scss'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
