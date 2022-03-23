<template>
<EmployeeHeader/>
<h1>Main Schedule</h1>

<div class="mainschedule">
	<AvailForm/>
	<CancelShiftForm/>
	<Availability/>

</div>
</template>

<script>
import AvailForm from '../components/EmployeeSchedule/AvailForm.vue';
import EmployeeHeader from '../components/Header/EmployeeHeader.vue';
import CancelShiftForm from '../components/EmployeeSchedule/CancelShift.vue';
import Availability from '../components/EmployeeSchedule/Availability.vue';
export default {
	name: 'EmployeeSchedule',
	components: {
		AvailForm,
		EmployeeHeader,
		CancelShiftForm,
		Availability,
	}

}
</script>

<style scoped>
h1 {
	text-align: center;	
}
.mainschedule {
	display: flex;
	align-items: center;
	justify-content: center;
}


</style>
