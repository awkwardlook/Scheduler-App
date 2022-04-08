
<template>
<div v-if = "user">
	<EmployeeHeader/>

	<div class="content">
		<h1>Main Schedule</h1>

		<div class="mainschedule">

			<div id='calendar'>
				<!-- availabilities of own and other employees -->
				<Availability/>
			</div> 
			
		</div>

		<div class="btns">
		<!-- add availabilties for employees -->
			<AvailForm/>
		</div>
	</div>

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
    /* overflow: hidden;  
    margin: auto;
    padding: 1px;  
    background: #ffffff;  
    border-radius: 15px ; */
}
#calendar {
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

.btns{
	display:inline-block;
	margin-right: 5px;
}

h1 {
	text-align: center;	
}

</style>