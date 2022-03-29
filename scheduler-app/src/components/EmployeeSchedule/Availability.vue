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
      async getEvents() {
        db.collection('employees').doc(this.user.email).get().then((userdoc) => {
          const user = userdoc.data()
          db.collection("availabilities").onSnapshot((querySnapshot) => {
            this.calendarOptions.events = [];
            querySnapshot.forEach((availdoc) => {
              console.log(availdoc.data());
              let availability 
              
              if (user.username in availdoc.data().states) {
                availability = {
                  'start': availdoc.data().start,
                  'end': availdoc.data().end,
                  'title': (availdoc.data().employees).toString().replace(/,/g, '\n'),
                  'color': '#7FFF00'
                }
              } else if (availdoc.data().employees.length == 1) {
                availability = {
                  'start': availdoc.data().start,
                  'end': availdoc.data().end,
                  'title': (availdoc.data().employees).toString().replace(/,/g, '\n'),
                  'color': 	'#ffd700'
                }
              } else {
                availability = {
                  'start': availdoc.data().start,
                  'end': availdoc.data().end,
                  'title': (availdoc.data().employees).toString().replace(/,/g, '\n'),
                  'color': '#FF0000'
                }
              }
              console.log(availability);
              this.calendarOptions.events.push(availability);
            })
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