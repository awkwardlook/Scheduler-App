<template>
	<div class="cancelshiftform">
		
		<button class="button" @click="toggleModal()">Cancel Shift</button>

		<div class="modal-overlay" v-if="showModal" @click="toggleModal()"></div>
		
			<!-- Content of popup cancel shift form below-->
			<div class="modal" v-if="showModal">
				
				<h3>Select shift to cancel</h3>
				<br><br>
				
				<label for="cancelremarks" id="remarks"> Remarks: </label>
				<input type = "text" id = "remarksbox" required="" placeholder="Enter reason for shift cancellation" v-model="remarks" /> 
				
				<br><br>
				<button class="button" @click="toggleModal()">Back</button>
				<button class="button" @click="toggleModal()">Request Cancellation</button>
			</div>
	</div>
</template>

<script>
// import firebase from 'firebase'
// const db = firebase.firestore()

export default {
	name: 'CancelShift',
	
	data() {
		
		return {
			showModal: false, 	// for rendering popup form

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
			if (confirm("Confirm submission?") == false) {
				console.log("Submission cancelled")
				return;
				
			} else {
				// request cancellation code here
				return;
			}
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

#remarksbox {
	height: 50px;
	width: 60%;
	margin-left: 5px;
	padding-left: 5px;
	border-radius: 10px;
	border: 1px solid steelblue;
}
</style>