<template>
    <div v-if = "usertype == 'employee'">
        <EmployeeProf/>
    </div>
    <div v-else-if = "usertype == 'employer'" >
        <EmployerProf/>
    </div>
    <div v-else>
        <ErrorPage/>
    </div>
</template>

<script>
import EmployeeProf from '../components/profile/EmployeeProf.vue'
import EmployerProf from '../components/profile/EmployerProf.vue'
import ErrorPage from '../components/ErrorPage.vue'

export default {
    name: 'Schedule',
    components: {
        EmployeeProf,
        EmployerProf,
        ErrorPage
    },
    data() {
        return {
            usertype: window.localStorage.getItem('usertype')
        }
    }
}
</script>