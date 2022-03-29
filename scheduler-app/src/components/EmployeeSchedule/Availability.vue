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
        }
      }
    },
    created() {
      this.getEvents()
    },
    
    methods: {
      async getEvents() {
        const user = await db.collection('employees').doc(this.user.email).get()
				const username = user.data().username
        db.collection("availabilities").onSnapshot((querySnapshot) => {
           this.calendarOptions.events = [];
          querySnapshot.forEach((doc) => {
            console.log(doc.data());
            let availability 
            
            if (doc.data().states.includes(username)){
              availability = {
                'start': doc.data().start,
                'end': doc.data().end,
                'title': username,
                'color': '#7FFF00'
              }
            } else if (doc.data().employees.length == 1) {
              availability = {
                'start': doc.data().start,
                'end': doc.data().end,
                'title': (doc.data().employees).toString().replace(/,/g, '\n'),
                'color': 	'#ffd700'
              }
            } else {
              availability = {
                'start': doc.data().start,
                'end': doc.data().end,
                'title': (doc.data().employees).toString().replace(/,/g, '\n'),
                'color': '#FF0000'
              }
            }
            console.log(availability);
            this.calendarOptions.events.push(availability);
          });
        });
      },
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