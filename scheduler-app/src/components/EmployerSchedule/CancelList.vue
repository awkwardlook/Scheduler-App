<template>
<table class="table">
	<thead>
		<tr>
			<th class="shift">Shift</th>
			<th class="employee">Employee</th>
			<th class="employee">Remarks</th>
			<th class="action">Action</th>
		</tr>
	</thead>
	
	<!-- loop through all documents in cancellation collection -->
	<tbody v-for="{ id, employee, shift, remarks, status } in cancellations" :key="id">
		
		<!-- loop through all employees (e) in each doc -->
		<tr>
			
			<!-- 1st column -->
			<td class="shift">{{ shift }}</td>
	
			<!-- 2nd column -->
			<td class="employee">{{ employee }}</td>

			<!-- 3rd column -->
			<td class="remarks">{{ remarks }}</td>
				
			<!-- 4th column -->
			<td class="action">
				<div v-if="status === 'Pending'">
					<button class="btn" id="decline" @click="changeState(id, employee, shift, 'Declined')">Decline</button>
					<button class="btn" id="approve" @click="changeState(id, employee, shift, 'Approved')">Approve</button>
				</div>

				<p v-else> {{ status }} </p>
			</td>



		</tr>
	</tbody>
</table>
</template>

<script>

import firebase from 'firebase'
import { ref, onUnmounted } from 'vue'

const db = firebase.firestore()

export default {
	setup() {
		const cancellations = ref([])
		const cancellationCollection = db.collection("cancellations")
		const getCancellation = cancellationCollection.onSnapshot(
			snapshot => {
				cancellations.value = snapshot.docs.map(
					doc => ({
						id: doc.id,
						...doc.data()
					})
				)
			}
		)

		onUnmounted(getCancellation)
		return {
			cancellations,
		} 

	},
	methods: {
		changeState(id, employee, shift, newState) {
			
			const cancellations = db.collection("cancellations")
			

				
				if (newState == 'Declined') {
					if (confirm("Decline the following shift cancellation request?\n" + "\nEmployee: "+ employee + "\nShift: " + shift + 
					"\n\nThis action cannot be undone.")) {
					
						return cancellations.doc(id).update({
							status: newState
						})
					}

				} else {
					if (confirm("Confirm the following shift cancellation request?\n" + "\nEmployee: "+ employee + "\nShift: " + shift + 
					"\n\nThis action cannot be undone.")) {

						db.collection("shifts").doc(id).delete()
						
						.then((docRef) => {
							console.log("Successfully deleted document", docRef);
						})
							
						.catch((error) => {
							console.error("Error deleting document: ", error);
						});
							
						return cancellations.doc(id).update({
							status: newState
						})	
						
					}
				}

	
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

table,th,td {
	text-align: center;
	padding: 5px;
	border: 1px solid white;
	border-collapse: collapse;
	margin-left: 20px;		
}

th {
	color: white;
	padding: 10px;
	background-color: #2c3e50;
}

tr {
	background-color: aliceblue;	
}

.btn {
	width: 75px;
	margin: 5px;
	padding: 5px;
	color: white;
	font-weight: bold;
	border-radius: 3px;
}

#approve {
	background-color: rgb(94, 207, 94);
}

#decline {
	background-color: rgb(221, 98, 98);
}

</style>