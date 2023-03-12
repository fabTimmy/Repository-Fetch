import { createApp } from 'vue'
import App from './App.vue'
import {createRouter, createWebHistory} from 'vue-router'
import About from './Views/About.vue'
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
        path: '/about',
        name: 'About',
        component: About,
        children: [
            {
                path: ':id',
                // component: RepoData,
                props: true
            },
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
