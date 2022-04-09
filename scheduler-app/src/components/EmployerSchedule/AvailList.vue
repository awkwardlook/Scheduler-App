<template>
<!-- Table component to display all indicated availability by employees -->
<table class="table">
	<thead>
		<tr>
			<th class="shift">Shift</th>
			<th class="employee">Employee</th>
			<th class="action">Action</th>
		</tr>
	</thead>
	
	<!-- loop through all documents in availabilities collection -->
	<tbody v-for="{ id, employees, states } in avails" :key="id">
		
		<!-- loop through all employees (e) in each doc -->
		<tr  v-for="e in employees" v-bind:key="e">
			
			<!-- 1st column -->
			<td class="shift">{{ id }}</td>
	
			<!-- 2nd column -->
			<td class="employee">{{ e }}</td>
				
			<!-- 3rd column -->
			<td class="action">
				<div v-if="states[e] === 'Pending'">
					<v-button id="decline" @click="changeState(id, e, 'Declined')">Decline</v-button>
					<v-button id="approve" @click="changeState(id, e, 'Approved')">Approve</v-button>
				</div>

				<p v-else> {{ states[e] }} </p>
			</td>



		</tr>
	</tbody>
</table>
</template>

<script>
import Button from '../Button/Button.vue'
import firebase from 'firebase'
import { ref, onUnmounted } from 'vue'

const db = firebase.firestore()

export default {
	setup() {
		const avails = ref([])
		const availCollection = db.collection("availabilities")
		const getAvail = availCollection.onSnapshot(
			snapshot => {
				avails.value = snapshot.docs.map(
					doc => ({
						id: doc.id,
						...doc.data()
					})
				)
			}
		)

		onUnmounted(getAvail)
		return {
			avails,
		} 

	},
	components: {
		'v-button': Button
	},
	methods: {
		changeState(id, e, newState) {
			
			const avails = db.collection("availabilities") 
			
			avails.doc(id).get()
			.then((docSnapshot) => {
				const currentStates = docSnapshot.data().states
				
				if (newState == 'Declined') {
					if (confirm("Decline the following shift allocation?\n" + "\nEmployee: "+ e + "\nShift: " + id + 
					"\n\nThis action cannot be undone.")) {
						
						currentStates[[e]] = newState
					
						return avails.doc(id).update({
							states: currentStates
						})
					}

				} else {
					if (confirm("Confirm the following shift allocation?\n" + "\nEmployee: "+ e + "\nShift: " + id + 
					"\n\nThis action cannot be undone and all other employees with this shift will be declined.")) {
					
						const approved = docSnapshot.data().approved

						if (approved == false) { // if slot has never been approved before

							// Decline all employees who indicated this slot
							for (const key of Object.keys(currentStates)) {
								currentStates[key] = 'Declined'
							}

							// Approve this employee
							currentStates[[e]] = newState
							
							db.collection("shifts").doc(id).set({
								employee_username: e,
								start: docSnapshot.data().start,
								end: docSnapshot.data().end,
								cancellationStatus: ''
							})
							.then((docRef) => {
								console.log("Successfully added document", docRef);
							})
							.catch((error) => {
								console.error("Error adding document: ", error);
							});
							
							return avails.doc(id).update({
								states: currentStates,
								approved: true,
								approvedEmp: e
							})	
						} 
					}
				}

			})
			.catch((e) => {
				console.log(e)
			})
		}
	}
}
</script>

<style>

.shift {
	width: 200px;
}

.employee {
	width: 140px;
}

.action {
	width: 160px;
}

.table {
	margin: auto;
	/* top right bottom left */
	padding: 80px;  
	background: #ffffff;  
	border-radius: 15px ;
}

th,td {
	text-align: center;
	padding: 15px;
	border: 1px solid white;
	border-collapse: collapse;
	margin-left: 200px;		
}

th {
	color: white;
	padding: 10px;
}

tr {
	background-color: aliceblue;	
}

#approve {
	background-color: rgb(94, 207, 94);
	width: 75px;
	margin: 5px;
	padding: 5px;
	height: 35px;
	font-size: 15px;
}

#decline {
	background-color: rgb(221, 98, 98);
	width: 75px;
	margin: 5px;
	padding: 5px;
	height: 35px;
	font-size: 15px;
}

</style>