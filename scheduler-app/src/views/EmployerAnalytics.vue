<template>
    <EmployerHeader/>
    <div class="analytics">
        <h1>Analytics Page</h1><br><br>
        <Charts/>
    </div>
</template>

<script>
import EmployerHeader from '../components/Header/EmployerHeader.vue'
import Charts from '../components/Analytics/Chart.vue'

export default {
    name: 'Analytics',
    components: {
        EmployerHeader,
        Charts
    }
}
</script>

<style>
    .analytics {
        padding: 80px;
    }
</style>
