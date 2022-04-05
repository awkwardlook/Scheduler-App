
<template>
<div v-if = "user">
	<EmployeeHeader/>
	<h1>Main Schedule</h1>

	<div class="mainschedule">
		<AvailForm/>
		<CancelShiftForm/>
		<div id='calendar'>
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

.mainschedule {
	display: flex;
	align-items: center;
	justify-content: center;
    /* overflow: hidden;  
    margin: auto;
    padding: 1px;  
    background: #ffffff;  
    border-radius: 15px ; */
}
.calendar {
    width: 80%; 
    height: 100%;
    display: inline-block;
    /* background: aliceblue;
    overflow: hidden; 
    margin: auto;
    padding: 40px;  
    background: #ffffff;  
    border-radius: 15px ; */
}
h1 {
	text-align: center;	
}

</style>