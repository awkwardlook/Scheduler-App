<template>
    <FullCalendar :options="calendarOptions" style="width:100%;" />
</template>

<script>
import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import timeGridPlugin from '@fullcalendar/timegrid'
import firebase from 'firebase'

const db = firebase.firestore()
const auth = firebase.auth()
const shift = db.collection("Shift")

export default {
     components: {
        FullCalendar // make the <FullCalendar> tag available
    },

    data() {
      return {
        calendarOptions: {
          default: 'standard',
          plugins: [ dayGridPlugin, timeGridPlugin, interactionPlugin ],
          initialView: 'timeGridWeek',
          height: "auto",
          allDaySlot: false,
          scrollTime: "09:00:00",
          slotMaxTime: "21:00:00",
          slotMinTime: "09:00:00",
          events: [],
        },
        user: false
      }
    },

    mounted() {
      auth.onAuthStateChanged((user) => {
        if (user) {
          this.user = user;
          this.getShifts();
          console.log(this.calendarOptions.events);
        }
      });
    },


    methods: {
      async getShifts() {
        const user = await db.collection('employees').doc(this.user.email).get()
				const username = user.data().username
        console.log(username)
        shift.onSnapshot((querySnapshot) => {
          this.calendarOptions.events = [];
          querySnapshot.forEach((doc) => {
            const shifts = doc.data();
            console.log(shifts.employee_username)
            if (shifts.employee_username == username) {
              let emp_shift = {
                  'title': '',
                  'start': shifts.start,
                  'end': shifts.end,
              }
              console.log(emp_shift);
              this.calendarOptions.events.push(emp_shift);
            }
          }
          )
        });
      }
    }
}
</script>

<style>
.fc .fc-timegrid-col.fc-day-today 
{
  background-color:inherit !important;
}

#calendar  .fc-scrollgrid {
  border: none !important;
}

#calendar .fc-scrollgrid td:last-of-type {
  border-right: none !important;
}
</style>