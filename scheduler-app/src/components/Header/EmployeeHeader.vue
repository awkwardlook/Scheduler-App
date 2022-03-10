<template>
    <div class="header">
    <!-- schedule, timesheet, profile, signout empty page headers -->
    <router-link to="/employeeschedule">Schedule</router-link> |
    <router-link to="/employeetimesheet">Timesheet</router-link> |
    <router-link to="/employeeprof">Profile</router-link> |
    <router-link to="/signout">Sign Out</router-link> |
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