<template>
	<!-- /addemployee to reach this page -->
	<Header/>
	<h1>Add Employee</h1>
	<AddEmployeeForm/>
</template>

<script>
import Header from '@/components/Header/Header.vue'
import AddEmployeeForm from '@/components/LoginRegister/AddEmployee.vue'

export default {
	name: 'EmployerRegister',
	components: {
		AddEmployeeForm,
		Header,
	}
}

</script>

<style>

</style>