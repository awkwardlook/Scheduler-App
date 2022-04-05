<template>
<div v-if = "user">
    <EmployerHeader/>
    <br><br>
    <div style="display: flex; flex-direction;">
        <h1>Employer Schedule Page</h1>
        <div style="width: 2.5%;"></div>
        <button class="btn" @click="toggleAvail()">{{availStatus}} add availability</button>
        <button class="btn" @click="confirmSchedule()">Confirm Schedule</button>
        <button class="btn" @click="resetWeek()">Reset Week</button>
    </div>

    <div class="tbl">
        <AvailList/>
    </div>
    <div class="tbl">
        <CancelList/>
    </div>
    <br>
    <div id='calendar' style="width: 80%; height:100%; display: inline-block;padding:15px; padding-bottom:20px">
        <Availability :key="availabilityKey"/>
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

.tbl {
    display: inline-block;
    vertical-align: top;
    padding-left: 30px;
}
</style>

<script>
import EmployerHeader from '../Header/EmployerHeader.vue'
import AvailList from './AvailList.vue'
import CancelList from './CancelList.vue'
import Availability from '../EmployeeSchedule/Availability.vue'
import firebase from 'firebase'

const auth = firebase.auth();
const db = firebase.firestore();
const permissions = db.collection("permissions");
const availabilities = db.collection("availabilities");
const cancellations = db.collection("cancellations");

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
                        if (!avail.approved) {
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
                        await availabilities.doc(doc.id).delete();
                    });
                });
                cancellations.get().then((querySnapshot) => {
                    querySnapshot.forEach(async (doc) => {
                        await cancellations.doc(doc.id).delete();
                    })
                })
                await permissions.doc("add availabilities").update({
                    granted: true
                });
                await permissions.doc("confirm schedule").update({
                    confirmed: false
                });
                this.availabilityKey += 1;
                alert("Week has been reset");
            }
        }
    }
}
</script>
