<template>
    <EmployeeHeader/>
    <br><br>
    <h1>Employee Timesheet Page</h1>
    <div id='calendar' style="width: 80%; height:100%; display: inline-block;padding-right:15px; padding-bottom:20px">
		<Timesheet/>
	</div> 
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
