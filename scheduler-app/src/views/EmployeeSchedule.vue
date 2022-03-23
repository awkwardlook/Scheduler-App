<template>
<div v-if="user && this.$store.state.usertype == 'employee'">
	<EmployeeHeader/>
	<h1>Main Schedule</h1>

	<div class="mainschedule">
		<AvailForm/>
		<CancelShiftForm/>
		<div id='calendar' style="width: 80%; height:100%; display: inline-block;padding-right:15px">
			<Availability/>
		</div> 

	</div>
</div>
</template>

<script>
import AvailForm from '../components/EmployeeSchedule/AvailForm.vue'
import EmployeeHeader from '../components/Header/EmployeeHeader.vue'
import CancelShiftForm from '../components/EmployeeSchedule/CancelShift.vue'
import Availability from '../components/EmployeeSchedule/Availability.vue'
import firebase from 'firebase'

export default {
	name: 'EmployeeSchedule',
	components: {
		AvailForm,
		EmployeeHeader,
		CancelShiftForm,
		Availability,
	},
	data() {
		return {
			user: false,
			usertype: null
		}
	},
	mounted() {
		const auth = firebase.auth();
		auth.onAuthStateChanged((user) => {
			this.user = user;
			this.usertype = this.$store.state.usertype;
		})
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

