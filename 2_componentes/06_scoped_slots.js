Vue.component('mis-tareas', {
    props: ['listado'],
    template: '#mis-tareas-template'
})

new Vue({
    el: 'main',
    data: {
        tareas: [
            {titulo: 'salir a correr'},
            {titulo: 'Recoger la casa'},
            {titulo: 'Aprender'},
            {titulo: 'Comer'},
            {titulo: 'Jugar'},
        ]
    }
})