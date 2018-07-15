Vue.component('lista-tareas', {
    template: `<div>
                    <h1><slot></slot></h1>
                    <ul>
                        <tarea v-for="tarea in tareas" :tarea="tarea"></tarea>
                    </ul>
                    <hr>
                </div>`,
    data(){
        return {
            tareas:[
                'Finalizar sección Componentes',
                'Finalizar sección Componentes 2',
                'Finalizar sección Componentes 3',
                'Finalizar sección Componentes 4',
            ],
        }
    }
})

Vue.component('tarea',{
    props: ['tarea'],
    template: `<li>{{ tarea }}</li>`
})

Vue.component('contacto', {
    template: `<div><a href="mailto:juan@wmedia.es">juan@wmedia.es</a> <hr></div>`
})

Vue.component('bio', {
    template: `<div><p>Lorem ipsum......</p></div>`
})

new Vue({
    el: 'main',
    data: {
        seleccionado: 'lista-tareas'
    }
})