
<template>
<div v-if = "user">
	<EmployeeHeader/>
	<br><br>
	<div class="content">
		<h1>Main Schedule</h1>

		<div class="mainschedule">

			<div id='calendar'>
				<!-- availabilities of own and other employees -->
				<Availability/>
			</div> 
			
		</div>
		<!-- add availabilties for employees -->
		<AvailForm/>

	</div>
	<br><br>

</div>
</template>

<script>
import AvailForm from './AvailForm.vue'
import EmployeeHeader from '../Header/EmployeeHeader.vue'
import Availability from './Availability.vue'
import firebase from 'firebase'
const auth = firebase.auth();
export default {
	components: {
		AvailForm,
		EmployeeHeader,
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
}

h1 {
	text-align: center;	
}

.content {
	text-align: center;
	background: white;
	padding-top: 30px;
	padding-bottom: 30px;
	width: 95%;
	margin: auto;
	border-radius: 15px;
}

</style>