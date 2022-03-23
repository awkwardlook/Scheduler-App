<template>
    <EmployerHeader/>
    <br><br>
    <h1>Employer Schedule Page</h1>
    <AvailList/>
</template>

<style>
</style>

<script>
import EmployerHeader from '../components/Header/EmployerHeader.vue'
import AvailList from '../components/EmployerSchedule/AvailList.vue'

export default {
    name: 'Employer Schedule',
    components: {
        EmployerHeader,
        AvailList
    }
}
</script>
