<template>
	<!-- add /register to reach this page -->
	<Header/>
	<h1>Register</h1>
	<EmployerRegisterForm/>
</template>

<script>
import Header from '@/components/Header/Header.vue'
import EmployerRegisterForm from '@/components/LoginRegister/EmployerRegister.vue'

export default {
	name: 'EmployerRegister',
	components: {
		EmployerRegisterForm,
		Header,
	}
}

</script>

<style>

</style>