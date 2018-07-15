<template>
    <div>
        <h2>Tareas por hacer</h2>
        <ul>
            <li v-for="tarea in tareasPendientes" :key="tarea.nombre">
                <a href="#" @click="actualizarTarea(tarea)" v-text="tarea.nombre"></a>
            </li>
        </ul>

        <h2>Tareas por finalizar</h2>
        <ul>
            <li v-for="tarea in tareasFinalizadas"  :key="tarea.nombre">
                <a href="#" @click="actualizarTarea(tarea)" v-text="tarea.nombre"></a>
            </li>
        </ul>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                tareas: [
                    {nombre: 'Aprender Vue,js', completado: false},
                    {nombre: 'Grabar el modulo asdk jasd', completado: false},
                    {nombre: 'REsponder askdj aksjd', completado: false},
                    {nombre: 'Diseñar asdkh asjdh asd', completado: false},
                    {nombre: 'Salir asjdh ajsdh jasd', completado: false},
                    {nombre: 'Lorem ipsum asdhja sdhasd', completado: false},
                    {nombre: 'fdjhsad jhsdf jhsdfjg dhfgj', completado: false}
                ],
                finalizadas: []
            }
        },
        methods: {
            actualizarTarea(tarea) {
                tarea.completado = !tarea.completado;
            }
        },
        computed: {
            tareasPendientes(){
                return this.tareas.filter((tarea) => !tarea.completado)
            },
            tareasFinalizadas(){
                return this.tareas.filter((tarea) => tarea.completado);
            }
        }
    }
</script>
<style>
    li a {
        color: red;
        font-size: 20px;
    }
</style>
