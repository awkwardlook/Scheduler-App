<template>
    <div class="header">
        <button @click="$router.push('/employeeschedule')">Schedule</button>
        <button @click="$router.push('/employeetimesheet')">Timesheet</button>
        <button @click="$router.push('/employeeprof')">Profile</button>
        <button @click="$router.replace('/')">Sign Out</button>
    </div>
</template>

<style>
.header {
    align-content: center;
}
</style>

<script>
    export default {
        mounted(){}
    }
    
</script>