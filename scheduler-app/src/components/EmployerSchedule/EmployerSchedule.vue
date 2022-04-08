<template>
<div v-if = "user">
    <EmployerHeader/>
    <br><br>
    <br>
    <div class="tbl">
        <div>
            <h1>Employer Schedule Page</h1>
            <div style="width: 2.5%;"></div>
            <!-- enable/disable employees from adding new availabilities -->
            <v-button @click="toggleAvail()" :key="availabilityKey">{{availStatus}} add availability</v-button>
            <!-- automatically declined non-approved shifts -->
            <v-button @click="confirmSchedule()">Confirm Schedule</v-button>
            <!-- delete all shifts and cancellation requests for the week -->
            <v-button @click="resetWeek()">Reset Week</v-button>
        </div>

        <div class="tbl">
            <!-- show all indicated availabilities pending for approval/decline -->
            <AvailList/>
            <br>
            <p><strong>Cancellation Requests</strong></p>
            <!-- requests for cancellation of shifts -->
            <CancelList/>
        </div>
        <br>
        <div id='calendar' style="width: 80%; height:100%; display: inline-block;padding:15px; padding-bottom:20px">
            <!-- indicated availabilities by employees -->
            <Availability :key="availabilityKey"/>
        </div>
    </div> 
</div>
</template>

<script>
import EmployerHeader from '../Header/EmployerHeader.vue'
import AvailList from './AvailList.vue'
import CancelList from './CancelList.vue'
import Availability from '../EmployeeSchedule/Availability.vue'
import Button from '../Button/Button.vue'
import firebase from 'firebase'

const auth = firebase.auth();
const db = firebase.firestore();
const permissions = db.collection("permissions");
const availabilities = db.collection("availabilities");
const cancellations = db.collection("cancellations");
const shifts = db.collection("shifts");

export default {
    components: {
        EmployerHeader,
        AvailList,
        CancelList,
        Availability,
        'v-button': Button
    },
    data() {
        return {
            user: false,
            availStatus: "",
            availabilityKey: 0
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
        },
        confirmSchedule() {
            if (confirm("Confirm employees' schedule?\n"  + "All unapproved availabilities will be declined")) {
                availabilities.get().then((querySnapshot) => {
                    querySnapshot.forEach(async (doc) => {
                        const avail = doc.data();
                        if (!avail.approved) { // decline all non-approved availabilities
                            const currentStates = avail.states;
                            for (const key of Object.keys(currentStates)) {
                                currentStates[key] = "Declined"
                            }
                            await availabilities.doc(doc.id).update({
                                states: currentStates
                            });
                        }
                    });
                });
                permissions.doc("confirm schedule").set({
                    "confirmed": true
                }).then(() => {
                    this.availabilityKey += 1;
                    alert("Schedule has been confirmed");
                });
            }
        },
        async resetWeek() {
            if (confirm("Reset the week for employees?\n" + "This will remove all existing shifts and cancellation requests")) {
                availabilities.get().then((querySnapshot) => {
                    querySnapshot.forEach(async (doc) => {
                        await availabilities.doc(doc.id).delete(); // delete all availabilities
                    });
                });
                cancellations.get().then((querySnapshot) => {
                    querySnapshot.forEach(async (doc) => {
                        await cancellations.doc(doc.id).delete(); // delete all cancellation requests
                    })
                });
                shifts.get().then((querySnapshot) => {
                    querySnapshot.forEach(async (doc) => {
                        await shifts.doc(doc.id).delete(); // delete all current shifts
                    })
                })
                await permissions.doc("add availabilities").update({
                    granted: true // enable employees to add availabilities
                });
                await permissions.doc("confirm schedule").update({
                    confirmed: false // reset the schedule to be in unconfirmed state
                });
                this.availStatus = "Disable";
                this.availabilityKey += 1;
                alert("Week has been reset");
            }
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
    margin-bottom: auto;
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