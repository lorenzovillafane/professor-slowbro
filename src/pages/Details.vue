<script setup>
import {useRoute} from 'vue-router'
const route = useRoute()

console.log(route.params.id)
</script>
<template>
    <div>
        <h1>Detalles</h1>
        <router-link to="/">Home</router-link>
    </div>
</template>

