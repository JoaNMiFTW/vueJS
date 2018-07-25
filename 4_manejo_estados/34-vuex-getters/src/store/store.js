import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        tareas: [
            {nombre: 'Hacer la compra', completado: false},
            {nombre: 'Aprender Vue.js', completado: true},
            {nombre: 'Aprender Firebase', completado: false},
            {nombre: 'Dominar ES6', completado: true},
            {nombre: 'Salir a correr', completado: false},
        ]
    },
    getters: {
        tareasCompletadas: (state) => {
            return state.tareas.filter((tarea) => tarea.completado).length;
        }
    }
})