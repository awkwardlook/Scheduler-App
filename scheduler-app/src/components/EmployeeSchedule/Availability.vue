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
      getEvents() {
        db.collection("availabilities").onSnapshot((querySnapshot) => {
          this.calendarOptions.events = [];
          querySnapshot.forEach((doc) => {
            const avail = doc.data();
            let availability;
            
            if (avail.approved) {
              availability = {
                'start': avail.start,
                'end': avail.end,
                'title': (avail.approvedEmp),
                'color': '#5ECF5E'
              }
            } else if (Object.keys(avail.states).length == 1) {
              availability = {
                'start': avail.start,
                'end': avail.end,
                'title': (Object.keys(avail.states)).toString().replace(/,/g, '\n'),
                'color': 	'#ffd700'
              }
            } else {
              availability = {
                'start': avail.start,
                'end': avail.end,
                'title': (Object.keys(avail.states)).toString().replace(/,/g, '\n'),
                'color': '#DD6262'
              }
            }
            console.log(availability);
            this.calendarOptions.events.push(availability);
          })
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
</style>