<template>
    <div v-if="user && this.$store.state.usertype == 'employee'">
        <EmployeeSchedule/>
    </div>
    <div v-else>
        <EmployerSchedule/>
    </div>
</template>

<script>
import firebase from 'firebase'
import EmployeeSchedule from '../components/EmployeeSchedule/EmployeeSchedule.vue'
import EmployerSchedule from '../components/EmployerSchedule/EmployerSchedule.vue'

const auth = firebase.auth();

export default {
    name: 'Schedule',
    components: {
        EmployeeSchedule,
        EmployerSchedule
    },
    data() {
        return {
            user: false
        }
    },
    mounted() {
        auth.onAuthStateChanged((user) => {
            this.user = user;
        });
    }
}
</script>