import Vue from 'vue'
import VueRouter from 'vue-router';
import { routes } from './routes';
import App from './App.vue'
import {store} from './store'

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes
})

router.beforeEach((to, from, next) => {
    console.log('Acceso gloabl a ruta');
    
    console.log(to.meta);
    if(to.meta.privado)
        next(store.state.auth);
    else
        next();
})


new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
})
