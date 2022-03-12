<template>
    <EmployeeHeader/>
    <br><br>
    <h1>Employee Profile Page</h1>
</template>

<script>
import EmployeeHeader from '../components/Header/EmployeeHeader.vue'

export default {
    name: 'Employee Profile',
    components: {
        EmployeeHeader
    }
}
</script>