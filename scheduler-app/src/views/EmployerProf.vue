<template>
	<EmployerHeader/>
	<br><br>
	<div class="deets">
		<!-- they are supposed to be side by side -->
		<Deets/>
	</div>
</template>

<script>
import EmployerHeader from '../components/Header/EmployerHeader.vue'
import Deets from '@/components/MplyrProfile/deets.vue'

export default {
	name: 'Employer Profile',
	components: {
		EmployerHeader,
		Deets
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
        margin: 0 0 10 550px;  
		/* top right bottom left */
        padding: 80px;  
        background: #ffffff;  
        border-radius: 15px ;
    }
</style>