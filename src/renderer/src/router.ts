import { createRouter, createWebHistory } from 'vue-router'

import Dashboard from '@renderer/views/Dashboard.vue'
import Connections from '@renderer/views/Connections.vue'
import Identities from '@renderer/views/Identities.vue'

const routes = [
    { path: '/', component: Dashboard },
    { path: '/connections', component: Connections },
    { path: '/identities', component: Identities }
]

export default createRouter({
    history: createWebHistory(),
    linkActiveClass: 'active',
    routes: routes
})