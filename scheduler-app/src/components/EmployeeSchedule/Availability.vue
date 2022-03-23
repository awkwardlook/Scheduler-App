<template>
    <FullCalendar :options="calendarOptions"/>
</template>

<script>
import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import timeGridPlugin from '@fullcalendar/timegrid'
export default {
    components: {
        FullCalendar // make the <FullCalendar> tag available
  },
  data() {
    return {
      calendarOptions: {
        plugins: [ dayGridPlugin, timeGridPlugin, interactionPlugin ],
        initialView: 'timeGridWeek',
        headerToolbar: {
            center: 'title',
            left:'',
            right:'',
        },
        allDaySlot: false
      }
    }
  }
}
</script>

<style>
.fc-day-today
{
  background-color:inherit !important;
}
</style>