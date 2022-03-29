<template>
<table class="table">
	<thead>
		<tr>
			<th class="shift">Shift</th>
			<th class="employee">Employee</th>
			<th class="action">Action</th>
		</tr>
	</thead>
	
	<!-- loop through all documents in availabilities collection -->
	<tbody v-for="{ id, states } in avails" :key="id">
		
		<!-- loop through all employees (e) in each doc -->
		<tr  v-for="e in Object.keys(states)" v-bind:key="e">
			
			<!-- 1st column -->
			<td class="shift">{{ id }}</td>
	
			<!-- 2nd column -->
			<td class="employee">{{ e }}</td>
				
			<!-- 3rd column -->
			<td class="action">
				<div v-if="states[e] === 'Pending'">
					<button class="btn" id="decline" @click="changeState(id, e, 'Declined')">Decline</button>
					<button class="btn" id="approve" @click="changeState(id, e, 'Approved')">Approve</button>
				</div>

				<p v-else> {{ states[e] }} </p>
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
	methods: {
		changeState(id, e, newState) {
			
			const avails = db.collection("availabilities") 
			
			avails.doc(id).get()
			.then((docSnapshot) => {
				const currentStates = docSnapshot.data().states
				currentStates[[e]] = newState

				return avails.doc(id).update({
					states: currentStates
				})
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