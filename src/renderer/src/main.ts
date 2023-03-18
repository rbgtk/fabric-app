import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import "bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import "@fortawesome/fontawesome-free/js/all"

createApp(App)
    .use(createPinia())
    .use(router)
    .mount('#app')
