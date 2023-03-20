import { createRouter, createWebHistory } from 'vue-router'

import Dashboard from './views/Dashboard.vue'

const routes = [
    { path: '/', component: Dashboard }
]

const router = createRouter({
    history: createWebHistory(),
    linkActiveClass: 'active',
    routes: routes
})


export default router