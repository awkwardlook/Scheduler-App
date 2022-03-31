<template>
<div v-if = "user">
    <EmployerHeader/>
    <br><br>
    <div style="display: flex; flex-direction;">
        <h1>Employer Schedule Page</h1>
        <div style="width: 2.5%;"></div>
        <button class="btn" @click="toggleAvail()">{{availStatus}} add availability</button>
    </div>
    <AvailList/>
    <div id='calendar' style="width: 80%; height:100%; display: inline-block;padding:15px; padding-bottom:20px">
        <Availability/>
    </div> 
</div>
</template>

<style scoped>
.btn {
        background-color: #0069e0; 
        border-radius: 8px;
        color: white;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 14px;
        width: 160px;
}
</style>

<script>
import EmployerHeader from '../Header/EmployerHeader.vue'
import AvailList from './AvailList.vue'
import Availability from '../EmployeeSchedule/Availability.vue'
import firebase from 'firebase'

const auth = firebase.auth();
const db = firebase.firestore();
const permissions = db.collection("permissions");

export default {
    components: {
        EmployerHeader,
        AvailList,
        Availability
    },
    data() {
        return {
            user: false,
            availStatus: ""
        }
    },
    mounted() {
        auth.onAuthStateChanged((user) => {
            if (user) {
                this.user = user;
                permissions.doc("add availabilities").get().then((doc) => {
                    this.availStatus = doc.data().granted ? "Disable" : "Enable";
                });
            }
        });
    },
    methods: {
        toggleAvail() {
            permissions.doc("add availabilities").get().then((doc) => {
                const newStatus = doc.data().granted ? false : true
                permissions.doc("add availabilities").update({
                    granted: newStatus
                }).then(() => {
                    this.availStatus = newStatus ? "Disable" : "Enable";
                    newStatus ? alert("Enabled add availabilities") : alert("Disabled add availabilities")
                });
            });
        }
    }
}
</script>
