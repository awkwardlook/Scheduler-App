<template>
    <div class="header">
    <button @click="$router.push('/login')">Login</button>
    </div>
    <router-view/>
</template>

<style scoped>
    .header{
        height: 50px;
        background-color: grey;
        text-align: center;
    }
</style>

<script>
    export default {
        mounted(){}
    }
    
</script>