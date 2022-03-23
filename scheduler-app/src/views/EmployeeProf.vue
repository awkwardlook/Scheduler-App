<template>
    <EmployeeHeader/>
    <br><br>
    <h1>Employee Profile Page</h1>
    <CompanyProfile/>
</template>

<script>
import EmployeeHeader from '../components/Header/EmployeeHeader.vue'
import CompanyProfile from '@/components/profile/eedeets.vue'

export default {
	name: 'Employee Profile',
	components: {
		EmployeeHeader,
		CompanyProfile,
    }
}
</script>
