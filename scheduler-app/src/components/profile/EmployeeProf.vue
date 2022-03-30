<template>
	<EmployeeHeader/>
	<br><br>
	<div class="deets">
		<!-- they are supposed to be side by side -->
		<Deets/>
	</div>
	<br><br>

</template>

<script>
import EmployeeHeader from '../Header/EmployeeHeader.vue'
import Deets from '@/components/profile/eedeets.vue'

export default {
	name: 'Employer Profile',
	components: {
		EmployeeHeader,
		Deets,
	}
}

</script>

<style>
.deets{
        text-align: center;
        font-size: 24px;
        width: 1000px;  
        overflow: hidden;  
        margin: auto;
		/* top right bottom left */
        padding: 80px;  
        background: #ffffff;  
        border-radius: 15px ;
		/* can we make more away from the bottom */
    }
</style>