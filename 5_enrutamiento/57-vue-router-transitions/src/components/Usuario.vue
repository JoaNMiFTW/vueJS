<template>
    <section>
        <h1>El identificador es: {{ $route.params.id }}</h1>
        <h2>Juan Andrés Nuéz</h2>
        <h5>juan@wmedia.es</h5>
    </section>
</template>

<script>
    export default {
        beforeRouteEnter: ((to, from, next) => {
            console.info('Antes de entrar');
            next((vm) => console.log(vm));
        }),
        //no funciona en modo history (url sin #)
        beforeRouteUpdate: ((to, from, next) => {
            console.info('Antes de cambiar la ruta sobre el mismo componente');
            console.log(this);
        }),
        beforeRouteLeave: ((to, from, next) => {
            console.info('Antes de salir');
        })
    }
</script>