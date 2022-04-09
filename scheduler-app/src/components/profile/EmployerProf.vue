<template>
	<EmployerHeader/>
	<br><br>
	<div class="deets">
		<!-- they are supposed to be side by side -->
		<Deets/>
	</div>
	<br><br>
	<div class="allemployees">
		<AllEmployees/>
	</div>
	<br><br>
</template>

<script>
import EmployerHeader from '../Header/EmployerHeader.vue'
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
	height: 100%; 
        overflow: hidden;  
        margin: auto;
	/* top right bottom left */
        padding: 80px;  
        background: #ffffff;  
        border-radius: 15px ;
    }

.allemployees {
	text-align: center;
        font-size: 24px;
        width: 1000px;  
        margin: auto;
	/* top right bottom left */
        padding: 80px;  
        background: #ffffff;  
        border-radius: 15px ;	
}
</style>