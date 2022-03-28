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
	<tbody v-for="{ id, employees } in avails" :key="id">
		
		<!-- loop through all employees (e) in each doc -->
		<tr  v-for="e in employees" v-bind:key="e">
			
			<!-- 1st column -->
			<td class="shift">{{ id }}</td>
	
			<!-- 2nd column -->
			<td class="employee">{{ e }}</td>
				
			<!-- 3rd column -->
			<td class="action">
				<ApproveDeclineBtn/>
			</td>



		</tr>
	</tbody>
</table>
</template>

<script>
import firebase from 'firebase'
import { ref, onUnmounted } from 'vue'
import ApproveDeclineBtn from './ApproveDeclineBtn.vue'

const db = firebase.firestore()

export default {
	components: {
		ApproveDeclineBtn
	},
	
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

</style>