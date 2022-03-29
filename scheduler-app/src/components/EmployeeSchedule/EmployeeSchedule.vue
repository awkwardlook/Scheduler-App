<template>
<div v-if = "user">
	<EmployeeHeader/>
	<h1>Main Schedule</h1>

	<div class="mainschedule">
		<AvailForm/>
		<CancelShiftForm/>
		<div id='calendar' style="width: 80%; height:100%; display: inline-block;padding-right:15px; padding-bottom:20px">
			<Availability/>
		</div> 

	</div>
</div>
</template>

<script>
import AvailForm from './AvailForm.vue'
import EmployeeHeader from '../Header/EmployeeHeader.vue'
import CancelShiftForm from './CancelShift.vue'
import Availability from './Availability.vue'
import firebase from 'firebase'

const auth = firebase.auth();

export default {
	components: {
		AvailForm,
		EmployeeHeader,
		CancelShiftForm,
		Availability,
	},
	data() {
		return {
			user: false
		}
	},
	mounted() {
		auth.onAuthStateChanged((user) => {
			if (user) {
				this.user = user;
			}
		});
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

