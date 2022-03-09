<template>
	<!-- add /register to reach this page -->

	<h1>Register</h1>
	<EmployerRegisterForm/>
</template>

<script>
import EmployerRegisterForm from '@/components/LoginRegister/EmployerRegister.vue'

export default {
	name: 'EmployerRegister',
	components: {
		EmployerRegisterForm,
	}
}

</script>

<style>

</style>