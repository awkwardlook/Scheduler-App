<template>
    <FullCalendar :options="calendarOptions" style="width:100%;" />
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
          default: 'standard',
          plugins: [ dayGridPlugin, timeGridPlugin, interactionPlugin ],
          initialView: 'timeGridWeek',
          headerToolbar: {
              center: 'title',
              left:'',
              right:'',
          },
          allDaySlot: false,
          scrollTime: "09:00:00",
          slotMaxTime: "21:00:00",
          slotMinTime: "09:00:00",
          events: [],
          eventColor: '',
          aspectRatio: 1.54,
        }
      }
    },

}
</script>

<style>
.fc-day-today
{
  background-color:inherit !important;
}

#calendar .fc-view {
    background-color: #EEEEEE;
}
#calendar  {
    --fc-page-bg-color: #EEEEEE;
}
</style>