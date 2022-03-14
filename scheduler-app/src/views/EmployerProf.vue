<template>
	<EmployerHeader/>
	<div class="deets">
		<EmployerProfile/>
		<br/><br/>
		<CompanyProfile/>
	</div>
	<br/><br/><br/>
</template>

<script>
import EmployerHeader from '@/components/Header/EmployerHeader.vue'
import EmployerProfile from '@/components/MplyrProfile/MplyrDeets.vue'
import CompanyProfile from '@/components/MplyrProfile/CoyDeets.vue'

export default {
	name: 'Employer Profile',
	components: {
		EmployerHeader,
		EmployerProfile,
		CompanyProfile,
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