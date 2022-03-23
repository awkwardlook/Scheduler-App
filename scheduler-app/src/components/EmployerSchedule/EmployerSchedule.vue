<template>
    <EmployerHeader/>
    <br><br>
    <h1>Employer Schedule Page</h1>
    <AvailList/>
</template>

<style>
</style>

<script>
import EmployerHeader from '../Header/EmployerHeader.vue'
import AvailList from './AvailList.vue'

export default {
    components: {
        EmployerHeader,
        AvailList
    }
}
</script>
