<template>
    <FullCalendar :options="calendarOptions" />
</template>

<script>
import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import timeGridPlugin from '@fullcalendar/timegrid'
import firebase from 'firebase'

const db = firebase.firestore()
const auth = firebase.auth()

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
          headerToolbar: {
              center: 'title',
              left:'',
              right:'',
          },
          height: "auto",
          allDaySlot: false,
          scrollTime: "09:00:00",
          slotMaxTime: "21:00:00",
          slotMinTime: "09:00:00",
          events: [],

          eventTimeFormat: {
            hour:'2-digit',
            minute:'2-digit',
            hour12: false
          },
        },
        user: false
      }
    },
    mounted() {
      auth.onAuthStateChanged((user) => {
        if (user) {
          this.user = user; 
          this.getEvents();
        }
      });
    },
    methods: {
      //Fetching all availabilities data into the schedule frame
      async getEvents() {
        const confirmedScheduleDoc = await db.collection("permissions").doc("confirm schedule").get();
        const confirmedSchedule = confirmedScheduleDoc.data().confirmed;
        db.collection("availabilities").onSnapshot((querySnapshot) => {
          this.calendarOptions.events = [];
          querySnapshot.forEach((doc) => {
            const avail = doc.data();
            let availability;
            if (confirmedSchedule) {
              // green if approved
              if (avail.approved) {
                availability = {
                  'start': avail.start,
                  'end': avail.end,
                  'title': (avail.approvedEmp),
                  'color': '#7FFF00'
                }
              // grey if declined or ignored
              } else {
                availability = {
                  'start': avail.start,
                  'end': avail.end,
                  'title': (Object.keys(avail.states)).toString().replace(/,/g, '\n'),
                  'color': '#97999C'
                }
              }
            } else {
              // green if approved
              if (avail.approved) { 
                availability = {
                  'start': avail.start,
                  'end': avail.end,
                  'title': (avail.approvedEmp),
                  'color': '#7FFF00'
                }
              // yellow if 1 person is pending
              } else if (Object.keys(avail.states).length == 1) {
                availability = {
                  'start': avail.start,
                  'end': avail.end,
                  'title': (Object.keys(avail.states)).toString().replace(/,/g, '\n'),
                  'color': 	'#ffd700'
                }
              // red if more than 1 person is pending
              } else {
                availability = {
                  'start': avail.start,
                  'end': avail.end,
                  'title': (Object.keys(avail.states)).toString().replace(/,/g, '\n'),
                  'color': '#FF0000'
                }
              }
            }
            console.log(availability);
            this.calendarOptions.events.push(availability);
          });
        });
      }
    }
}
</script>

<style>
#calendar  .fc-scrollgrid {
  border: none !important;
}

#calendar .fc-scrollgrid td:last-of-type {
  border-right: none !important;
}

#calendar .fc .fc-scroller-harness {
  overflow: visible;
}

</style>