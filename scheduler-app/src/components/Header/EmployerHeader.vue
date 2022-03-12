<template>
    <div class="header">
        <button @click="$router.push('/employerschedule')">Schedule</button>
        <button @click="$router.push('/employerprof')">Profiles</button>
        <button @click="$router.push('/analytics')">Analytics</button>
        <button @click="$router.push('/addemployee')">Add Employee</button>
        <button @click="$router.replace('/')">Sign Out</button>
    </div>
</template>

<style>
</style>

<script>
    export default {
        mounted(){}
    }
    
</script>