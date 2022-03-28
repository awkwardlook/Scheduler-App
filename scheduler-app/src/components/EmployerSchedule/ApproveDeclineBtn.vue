<template>
	<div v-if="state === 'Pending'">
		<button class="btn" id="decline" @click="changeState('Declined')">Decline</button>
		<button class="btn" id="approve" @click="changeState('Approved')">Approve</button>
	</div>

	<p v-else> {{ this.state }} </p>

</template>

<script>
export default {
	data() {
		return {
			state: 'Pending'
		}
	},
	methods: {
		changeState(newState) {
			this.state = newState;
		}
	}

}
</script>

<style>
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