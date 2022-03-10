<template>
    <div class="header">
    <!-- HEADERS ARE HERE -->
    <router-link to="/home">Home</router-link> |
    <router-link to="/employerprof">Profile</router-link> |
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