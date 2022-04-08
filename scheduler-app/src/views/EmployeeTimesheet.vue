<template>
    <EmployeeHeader/>
    <br><br>
    <div class="page">
            <h1>Timesheet</h1>
            <h3>Here are your shifts for the week.</h3>
            <br><br>
    <div id='calendar' style="width: 80%; height:100%; display: inline-block;padding-right:15px; padding-bottom:20px">
		<Timesheet/>
	</div> 
    </div>
    <br><br>
</template>

<script>
import EmployeeHeader from '../components/Header/EmployeeHeader.vue'
import Timesheet from '../components/Timesheet/EmployeeTimesheet.vue'
export default {
    name: 'Employee Timesheet',
    components: {
        EmployeeHeader,
        Timesheet,
    }
}
</script>

<style scoped>
.page {
    text-align: center;
    background: white;
    padding-top: 30px;
    padding-bottom: 30px;
    width: 90%;
    margin: auto;
    border-radius: 15px;
}
</style>
