<template>
<EmployeeHeader/>
<h1>Main Schedule</h1>

<div class="mainschedule">
	<AvailForm/>
	<!-- <CancelShiftForm/> -->

</div>
</template>

<script>
import AvailForm from '../components/MainSchedule/AvailForm.vue'
import EmployeeHeader from '../components/Header/EmployeeHeader.vue'
// import CancelShiftForm from '../components/MainSchedule/CancelShift.vue'

export default {
	name: 'MainSchedule',
	components: {
		AvailForm,
		EmployeeHeader,
		// CancelShiftForm
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