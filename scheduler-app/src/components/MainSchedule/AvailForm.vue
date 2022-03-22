<template>
	<div class="availform">
		
		<!-- Add availabilities button -->
		<button class="button" @click="showModal = true">Add Availabilities</button>

		<div class="modal-overlay" v-if="showModal" @click="showModal = false"></div>
		
			<!-- Content of popup availability form below-->
			<div class="modal" v-if="showModal">
				
				<h3>Select Availabilities for the Week</h3>
				
				<datepicker v-model="picked"/>
				
				<button class="button" @click="showModal = false">Cancel</button>
				<button class="button" @click="showModal = false">Submit</button>
			</div>
	</div>
</template>

<script>
import Datepicker from 'vue3-datepicker'
import { ref } from 'vue'

export default {
	name: 'AvailForm',
	
	components: {
		Datepicker 
	},
	
	data() {
		const picked = ref(new Date())
		
		return {
			showModal: false, 	// for rendering popup form
			picked: picked 		// for date picker
		}
	},
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
 cursor: pointer;
 
 display: inline-block;
 padding: 15px 25px;
 background-image: linear-gradient(to right, steelblue, lightblue);
 border-radius: 8px;
 margin: 10px;
 color: #FFF;
 font-size: 15px;
 font-weight: bold;
 transition: 0.4s ease-out;
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
 
 p {
  color: #666;
  font-size: 18px;
  font-weight: 400;
  margin-bottom: 15px;
 }
}

</style>