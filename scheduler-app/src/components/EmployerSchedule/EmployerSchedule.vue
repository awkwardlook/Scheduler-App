<template>
<div v-if = "user">
    <EmployerHeader/>
    <br><br>
    <br>
    <div class="tbl">
        <h1>Employer Schedule Page</h1>
        <button id="btn" @click="toggleAvail()">{{availStatus}} add availability</button>
        <p><strong>Shifts for Current Week</strong></p>
        <AvailList/>
        <br>
        <p><strong>Cancellation Requests</strong></p>
        <CancelList/>
    </div>
    <br>
    <div class="calendar">
        <Availability/>
    </div> 
</div>
</template>

<script>
import EmployerHeader from '../Header/EmployerHeader.vue'
import AvailList from './AvailList.vue'
import CancelList from './CancelList.vue'
import Availability from '../EmployeeSchedule/Availability.vue'
import firebase from 'firebase'

const auth = firebase.auth();
const db = firebase.firestore();
const permissions = db.collection("permissions");

export default {
    components: {
        EmployerHeader,
        AvailList,
        CancelList,
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

<style scoped>
.tbl {
    text-align: center;
    font-size: 18px;
    width: 73%;  
    overflow: hidden;  
    margin: auto;
    /* top right bottom left */
    padding: 40px;  
    background: #ffffff;  
    border-radius: 15px ;
}

#btn {
        background-color: #0069e0; 
        border-radius: 8px;
        color: white;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 20px;
        width: 250px;
        height: 50px;
        margin: 6px;
        border-radius: 8px;
        transition-duration: 0.4s;
        cursor: pointer;
    }

#btn:hover {
    box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
    background-color: #25deff; /* Green */
    color: rgb(25, 27, 44);
}

.calendar {
    width: 73%; 
    height: 100%;
    display: flex;
    background: aliceblue;
    overflow: hidden; 
    margin: auto;
    /* top right bottom left */
    padding: 40px;  
    background: #ffffff;  
    border-radius: 15px ;
}
</style>