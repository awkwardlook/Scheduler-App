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
import AvailForm from './AvailForm.vue'
import EmployeeHeader from '../Header/EmployeeHeader.vue'
import CancelShiftForm from './CancelShift.vue'
import Availability from './Availability.vue'

export default {
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