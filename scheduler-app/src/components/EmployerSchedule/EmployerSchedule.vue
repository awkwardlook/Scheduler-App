<template>
<div v-if = "user">
    <EmployerHeader/>
    <br><br>
    <h1>Employer Schedule Page</h1>
    <AvailList/>
    <div id='calendar' style="width: 80%; height:100%; display: inline-block;padding:15px; padding-bottom:20px">
        <Availability/>
    </div> 
</div>
</template>

<style>
</style>

<script>
import EmployerHeader from '../Header/EmployerHeader.vue'
import AvailList from './AvailList.vue'
import Availability from '../EmployeeSchedule/Availability.vue'
import firebase from 'firebase'

const auth = firebase.auth();

export default {
    components: {
        EmployerHeader,
        AvailList,
        Availability
    },
    data() {
        return {
            user: false
        }
    },
    mounted() {
        auth.onAuthStateChanged((user) => {
            if (user) {
                this.user = user;
            }
        });
    }
}
</script>
