<template>
    <EmployerHeader/>
    <br><br>
    <div class="analytics">
        <h1>Analytics Page</h1><br><br>
        <Charts/>
    </div>
    <br><br>
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
        margin: auto;
        padding: 70px;
        background: #ffffff;  
        border-radius: 15px ;
        width: 700px;  
        overflow: hidden;  
        
    }
</style>
