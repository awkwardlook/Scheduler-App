<template>
<!-- check whether it is employee or employer account -->
    <div v-if = "usertype == 'employee'">
        <EmployeeSchedule/>
    </div>
    <div v-else-if = "usertype == 'employer'" >
        <EmployerSchedule/>
    </div>
    <div v-else>
        <ErrorPage/>
    </div>
</template>

<script>
import EmployeeSchedule from '../components/EmployeeSchedule/EmployeeSchedule.vue'
import EmployerSchedule from '../components/EmployerSchedule/EmployerSchedule.vue'
import ErrorPage from '../components/ErrorPage.vue'

export default {
    name: 'Schedule',
    components: {
        EmployeeSchedule,
        EmployerSchedule,
        ErrorPage
    },
    data() {
        return {
            usertype: window.localStorage.getItem('usertype')
        }
    }
}
</script>