import { createRouter, createWebHistory } from 'vue-router';
import login from '../components/auth/login.vue';
import register from '../components/auth/register.vue';
import auth from '../components/auth/main.vue'


const router = createRouter({
    history: createWebHistory(),
    routes: [
        
        // { path: '/' },
        {
            path: '/auth',
            component:auth,
            children: [
                { path: 'login', component: login },
                { path: 'register', component: register }
            ]
        }
        // { path: '/:notFound(.*)', component: NotFound },

    ],

});


export default router;