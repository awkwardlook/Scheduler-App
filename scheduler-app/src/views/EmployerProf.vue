<template>
	<EmployerHeader/>
	<br><br>
	<div class="deets">
		<!-- they are supposed to be side by side -->
		<Deets/>
	</div>
	<br><br>
	<AllEmployees/>
</template>

<script>
import EmployerHeader from '../components/Header/EmployerHeader.vue'
import Deets from '@/components/profile/erdeets.vue'
import AllEmployees from '@/components/profile/allEm.vue'

export default {
	name: 'Employer Profile',
	components: {
		EmployerHeader,
		Deets,
		AllEmployees,
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