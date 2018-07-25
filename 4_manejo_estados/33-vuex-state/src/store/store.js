import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        nombre: 'Juan Andrés',
        apellidos: 'Nuñez Charro',
        profesion: 'Developer',
        ciudad: 'Valencia'
    }
})