import { createApp } from 'vue'
import App from './App.vue'
import router from './router' 

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import 'bootstrap-icons/font/bootstrap-icons.css' //d'abord importer bootsrap avant base et main.css (fichier perso)

import './assets/base.css'
import './assets/main.css'

const app = createApp(App)
app.use(router)
app.mount('#app')