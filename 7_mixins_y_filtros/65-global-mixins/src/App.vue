<template>
    <div id="app">
        <h1>Aprender en 2017-2018</h1>
        <form @submit.prevent="agregarTecnologia">
            <input v-model="nuevaTecnologia"
                    type="text" placeholder="Tecnología a aprender">
        </form>
        <ul>
            <li v-for="tecnologia in aprender" :key="tecnologia.nombre">
                {{ tecnologia.nombre }}
            </li>
        </ul>
    </div>
</template>


<script>
    import {mixin} from './mixins';
    export default {
        created() {
            console.log('Created desde el componente');           
        },
        mixins: [mixin],
        nombre: 'App.vue'
    }
</script>