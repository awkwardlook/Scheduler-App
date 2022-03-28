<template>
    <EmployerHeader/>
    <br><br>
    <h1>Employer Schedule Page</h1>
    <div id='calendar' style="width: 80%; height:100%; display: inline-block;padding:15px; padding-bottom:20px">
        <Availability/>
    </div> 
    
</template>

<style>
</style>

<script>
import EmployerHeader from '../components/Header/EmployerHeader.vue'
import Availability from '../components/EmployeeSchedule/Availability.vue'
export default {
    name: 'Employer Schedule',
    components: {
        EmployerHeader,
        Availability,
    }
}
</script>
