<template>
    <div v-if = "usertype == 'employee'">
        <EmployeeSchedule/>
    </div>
    <div v-else-if = "usertype == 'employer'" >
        <EmployerSchedule/>
    </div>
    <div v-else>
        Store error
    </div>
</template>

<script>
import EmployeeSchedule from '../components/EmployeeSchedule/EmployeeSchedule.vue'
import EmployerSchedule from '../components/EmployerSchedule/EmployerSchedule.vue'

export default {
    name: 'Schedule',
    components: {
        EmployeeSchedule,
        EmployerSchedule
    },
    data() {
        return {
            usertype: this.$store.state.usertype
        }
    },
    mounted() {
        if (!this.usertype) {
            this.usertype = window.localStorage.getItem('usertype');
        }       
    }
}
</script>