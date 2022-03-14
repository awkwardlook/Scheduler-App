<template>
	<!-- add /Profile to reach this page -->
	<h1>Employer Profile</h1>
	<EmployerHeader/>
	<EmployerProfile/>
	<br><br><br><br><br><br><br><br>
	<br><br><br><br><br><br><br><br>
	<!-- they are supposed to be side by side -->
	<CompanyProfile/>
</template>

<script>
import EmployerProfile from '@/components/MplyrProfile/MplyrDeets.vue'
import CompanyProfile from '@/components/MplyrProfile/CoyDeets.vue'
import EmployerHeader from '@/components/Header/EmployerHeader.vue'

export default {
	name: 'Employer Profile',
	components: {
		EmployerProfile,
		CompanyProfile,
		EmployerHeader,
	}
}

</script>

<style>

</style>