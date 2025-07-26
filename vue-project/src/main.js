import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // 👈 import du routeur

import './assets/main.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import 'bootstrap-icons/font/bootstrap-icons.css'


const app = createApp(App)

app.use(router) // 👈 activation du routeur
app.mount('#app')
