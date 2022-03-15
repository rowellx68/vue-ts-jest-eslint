import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import './styles.css'

const app = createApp(App)
const state = createPinia()

app.use(state)
app.use(router)
app.mount('#app')
