import { createApp } from 'vue'
import App from './App.vue'
import {createRouter, createWebHistory} from 'vue-router'
import SingleRepo from './Views/SingleRepo.vue'
import Home from './Views/Home.vue'
import NotFound from './Views/NotFound.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [{
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/singleRepo',
        name: 'SingleRepo',
        component: SingleRepo,
        children: [
            {path: '/singleRepo/:id', component: () => import('./components/SingleRepoData.vue')},
        ]
    },
    {
        path: '/:catchAll(.*)',
        name: 'NotFound',
        component: NotFound
    }
] 
})

createApp(App).use(router).mount('#app')
