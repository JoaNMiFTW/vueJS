import Vue from 'vue'
import VueRouter from 'vue-router';
import { routes } from './routes';
import App from './App.vue'
import {store} from './store'

Vue.use(VueRouter);

const router = new VueRouter({
    routes
})

router.beforeEach((to, from, next) => {
    console.log('Acceso gloabl a ruta');
    next();
})


new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
})
