<template>
	<!-- /addemployee to reach this page -->
	<EmployerHeader/>
	<br><br>
	<AddEmployeeForm/>
</template>

<script>
import EmployerHeader from '@/components/Header/EmployerHeader.vue'
import AddEmployeeForm from '@/components/LoginRegister/AddEmployee.vue'

export default {
	name: 'EmployerRegister',
	components: {
		AddEmployeeForm,
		EmployerHeader,
	}
}

</script>

<style>

</style>