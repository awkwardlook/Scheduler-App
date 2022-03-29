<template>
	<div class="availform">
		
		<!-- Add availabilities button -->
		<button class="button" @click="toggleModal()">Add Availabilities</button>

		<div class="modal-overlay" v-if="showModal" @click="toggleModal()"></div>
		
			<!-- Content of popup availability form below-->
			<div class="modal" v-if="showModal">
				
				<h3>Select Availabilities for the Week</h3>
				
				<div class="datetime">
					<label for="datepicker">Date</label>
					<datepicker v-model="picked" id="datepicker"/>
				</div>

				<div class="datetime">
					<label for="timeslot">Time</label>	
					<br>
					<select class="form-control" id="timeslot" v-model="timeslot">
						<option :value="null" disabled selected>Select Timeslot</option>
						<option v-for="option in timeslotOptions" :key="option.id" v-bind:value="option.text">{{option.text}}</option>
					</select>
				</div>

				<div class="datetime">
					<button class="button smallbutton" @click="addTiming()">Add</button>
				</div>
				
				<br>
				<p v-for = "timing in Array.from(addedTimings.values()).sort(this.myComparator)" :key = "timing" style="font-size: small;">
					{{timing.Date}} {{timing.Time}} <button class="button smallbutton" @click="deleteSelection(timing)">Delete</button>
				</p>
				<button class="button" @click="toggleModal()">Cancel</button>
				<button class="button" @click="submit()">Submit</button>
			</div>
	</div>
</template>

<script>
import Datepicker from 'vue3-datepicker'
import { ref } from 'vue'
import firebase from 'firebase'

const db = firebase.firestore()

export default {
	name: 'AvailForm',
	
	components: {
		Datepicker
	},
	
	data() {
		const picked = ref(new Date())
		
		return {
			showModal: false, 	// for rendering popup form
			picked: picked, 	// for date picker
			timeslot: null,
			addedTimings: new Set(),
			timeslotOptions: [
				{
					text: "09:00-15:00",
					id: 1
				},
				{
					text: "15:00-21:00",
					id: 2
				},
			]
		}
	},
	computed: {
		usertype() {
			return this.$store.state.usertype
		}
	},
	methods: {
		toggleModal() {
			this.showModal = !this.showModal;
		},
		async submit() {
			if (confirm("You will not be able to make any changes to your weekly availabilities after form is submitted. Confirm submission?") == false) {
				console.log("Submission cancelled")
				return;
				
			} else {
			
				const scheduleRef = db.collection('availabilities')
				const user = await db.collection('employees').doc(this.$store.state.email).get()
				const username = user.data().username
		
				Array.from(this.addedTimings.values()).forEach(timing => {
					scheduleRef.doc(timing.Date + " " + timing.Time).get()
					.then((docSnapshot) => {
						if (docSnapshot.exists) {
							const indicatedEmployees = docSnapshot.data().employees
							const indicatedStates = docSnapshot.data().states

							if (!indicatedEmployees.includes(username)) {
								indicatedEmployees.push(username)
								indicatedStates[username] = 'Pending'

								return scheduleRef.doc(timing.Date + " " + timing.Time).update({
									employees: indicatedEmployees,
									states: indicatedStates
								}).then(() => {
									console.log("Successfully added availability")
									this.addedTimings.clear()
									this.showModal = false
								
								}).catch((e) => {
									alert(e)
								})
							} 
						} else {
							scheduleRef.doc(timing.Date + " " + timing.Time).set({
								date: timing.Date,
								start: timing.Date + "T" + timing.Time.slice(0, 5) + ":00",
								end: timing.Date + "T" + timing.Time.slice(6, 11) + ":00",
								employees: [username],
								states: { [username] : 'Pending' }

							}).then(() => {
								console.log("Successfully added availability")	
								this.addedTimings.clear()
								this.showModal = false
							
							}).catch((e) => {
								alert(e)
							})
						}
					})
				})
			}
		},
		addTiming() {
			if (this.timeslot != null) {
				const newTiming = {
					'Date': this.formatDate(this.picked.getDate(), this.picked.getMonth() + 1, this.picked.getFullYear()),
					'Time': this.timeslot
				};
				this.addedTimings.add(newTiming);
				const newValues = [...new Set(Array.from(this.addedTimings.values()).map(JSON.stringify))].map(JSON.parse);
				this.addedTimings = new Set(newValues);
				this.timeslot = null;
			} else {
				alert("Please select a timing")
			}
		},
		formatDate(date, month, year) {
			return String(year) + '-' + String(month).padStart(2,'0') + '-' + String(date).padStart(2,'0');
		},
		myComparator(obj1, obj2) {
			if (obj1.Date < obj2.Date) {
				return -1;
			} else if (obj1.Date > obj2.Date) {
				return 1;
			} else if (obj1.Time < obj2.Time) {
				return -1;
			} else {
				return 1;
			}
		},
		deleteSelection(timing) {
			this.addedTimings.delete(timing);
		},
	
	}
}
</script>

<style scoped>
h2 {
	text-align: center;
}

.button {
 appearance: none;
 outline: none;
 border: none;
 background: none;
 
 display: inline-block;
 padding: 15px 25px;
 background-image: linear-gradient(to right, steelblue, lightblue);
 border-radius: 8px;
 margin: 10px;
 color: #FFF;
 font-size: 15px;
 font-weight: bold;
}

.smallbutton {
	padding: 3px 5px;
	margin: 2px;
	font-size: small;
}

.modal-overlay {
 position: absolute;
 top: 0;
 left: 0;
 right: 0;
 bottom: 0;
 z-index: 98;
 background-color: rgba(0, 0, 0, 0.3);
}

.modal {
 position: fixed;
 top: 50%;
 left: 50%;
 transform: translate(-50%, -50%);
 z-index: 99;
 
 width: 100%;
 max-width: 500px;
 background-color: #FFF;
 border-radius: 16px;
 
 padding: 25px;
 text-align: center;
 
 p {
  color: #666;
  font-size: 18px;
  font-weight: 400;
  margin-bottom: 15px;
 }

}

.datetime {
	display: inline-block;
	margin: 5px;
}

#timeslot {
	height: 22px;
}
</style>