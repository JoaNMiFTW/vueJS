<template>
    <section>
        <h2>Dónde encontrarme</h2>
        <p>c/lo que sea, valencia</p>
        <h5>{{ newsletter }}</h5>
        <pre>{{numero}}</pre>
        <template v-if="newsletter">
            <form action="">
                <h3>Newsletter</h3>
                <label for="correoe">Correo-e</label>
                <input type="email" id="correoe" placeholder="Tu correo-e">
            </form>
        </template>
    </section>
</template>

<script>
    export default {
        props: ['newsletter'],
        data(){
            return {
                numero: null
            }
        },
        beforeRouteEnter: ((to, from, next) => {
            console.info('Antes de entrar');
            setTimeout(() => {
                next((vm) => {
                    vm.numero = Math.floor(Math.random()*1000);      
                })
            }, 2000);
        })
    }
</script>