<template>
<h1>Main Schedule</h1>

<div class="mainschedule">
	<AvailForm/>
</div>
</template>

<script>
import AvailForm from '../components/MainSchedule/AvailForm.vue'

export default {
	name: 'MainSchedule',
	components: {
		AvailForm
	}

}
</script>

<style scoped>
h1 {
	text-align: center;	
}
.mainschedule {
	display: flex;
	align-items: center;
	justify-content: center;
}


</style>