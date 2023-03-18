import { createRouter, createWebHistory } from 'vue-router'

import Home from '@renderer/views/Home.vue'
import Connections from '@renderer/views/Connections.vue'
import Identities from '@renderer/views/Identities.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/connections', component: Connections },
    { path: '/identities', component: Identities }
]

export default createRouter({
    history: createWebHistory(),
    linkActiveClass: 'active',
    routes: routes
})