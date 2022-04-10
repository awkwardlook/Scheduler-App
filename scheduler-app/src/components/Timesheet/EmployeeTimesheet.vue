<template>
<!-- Component to display employee's individual timesheet -->
<FullCalendar :options="calendarOptions" />
<div class="cancelshiftform">

    <div class="modal-overlay" v-if="showModal" @@event-click="toggleModal()"></div>
  
      <!-- Content of popup cancel shift form below-->
    <div class="modal" v-if="showModal">
      
      <h3>Request Shift Cancellation</h3>
      <p> Day: {{ this.calendarEvent['day'] }} </p>
      <p> Time: {{ this.calendarEvent['start'] }} - {{ this.calendarEvent['end'] }} </p>
      <br>
      
      <label for="cancelremarks" id="remarks"> Remarks: </label>
      <input type = "text" id = "remarksbox" required="" placeholder="Enter reason for shift cancellation" v-model="remarks" /> 
      
      <br><br>
      <button class="button" @click="toggleModal()">Back</button>
      <button class="button" @click="submit()">Submit</button>
    </div>
	</div>
</template>

<script>
import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import timeGridPlugin from '@fullcalendar/timegrid'
import firebase from 'firebase'

const db = firebase.firestore()
const auth = firebase.auth()
const shift = db.collection("shifts")

export default {
    components: {
      FullCalendar // make the <FullCalendar> tag available
  },

  data() {
    return {
      calendarOptions: {
        default: "standard",
        plugins: [ dayGridPlugin, timeGridPlugin, interactionPlugin ],
        initialView: 'timeGridWeek',
        height: "auto",
        headerToolbar:
        {
          start: '',
          center: 'title',
        },
        allDaySlot: false,
        scrollTime: "09:00:00",
        slotMaxTime: "21:00:00",
        slotMinTime: "09:00:00",
        events: [],
        firstDay: 1,
        eventTimeFormat: {
          hour:'2-digit',
          minute:'2-digit',
          hour12: false
        },
  
        eventClick: info => {
          this.showModal = !this.showModal;
          
          this.calendarEvent['id'] = info.event.id
          this.calendarEvent['employee'] = info.event.employee
          this.calendarEvent['day'] = info.event.start.toString().slice(0,16)
          this.calendarEvent['start'] = info.event.start.toString().slice(16,21)
          this.calendarEvent['end'] = info.event.end.toString().slice(16,21)
        }
      },
      employee: '',
      user: false,
      showModal: false,
      calendarEvent: {'id':'', 'day':'','start':'', 'end': ''},
      remarks:'',
    }
  },

  mounted() {
    auth.onAuthStateChanged((user) => {
      if (user) {
        this.user = user;
        this.getShifts();
      }
    });
  },

  methods: {
    //Fetch all the user's shifts to the timesheet frame
    async getShifts() {
      const user = await db.collection('employees').doc(this.user.email).get()
      const username = user.data().username
      shift.onSnapshot((querySnapshot) => {
        this.calendarOptions.events = [];
        querySnapshot.forEach((doc) => {
          const shifts = doc.data();
          if (shifts.employee_username == username) {
            let emp_shift = {
                'id': doc.id,
                'title': shifts.cancellationStatus,
                'start': shifts.start,
                'end': shifts.end,
            }
            this.employee = username;
            console.log(emp_shift);
            this.calendarOptions.events.push(emp_shift);
          }
        }
        )
      });
    },
    toggleModal() {
      this.showModal = !this.showModal;
    },
    async submit() {
      const shifts = db.collection('shifts')
      const selectedShift = await shifts.doc(this.calendarEvent['id']).get()
      const currentStatus = selectedShift.data().cancellationStatus
      console.log(currentStatus)

      if (this.remarks != '') {     
        if (currentStatus == '') {
          if (confirm("Submit shift cancellation request?\nThis action cannot be undone.")) {
          
            const cancellations = db.collection('cancellations')

            const shift = this.calendarEvent['day'] + ' '+ this.calendarEvent['start'] + ' - ' + this.calendarEvent['end']
      
            cancellations.doc(this.calendarEvent['id']).set({
              employee: this.employee,
              remarks: this.remarks,
              shift: shift,
              status: 'Pending'
            })

            shifts.doc(this.calendarEvent['id']).update({
              cancellationStatus: 'Pending Cancellation'
            })

            .then((doc) => {
              this.showModal = false
              this.remarks = ''
              console.log("Successfully added document ", doc)
            })
      
            .catch((e) => {
              console.log("Error added document: ", e)
            })
          }
        } else {
          alert("You have already requested to cancel this shift previously.")
          this.showModal = false
          this.remarks = ''
        }
      } else {
        alert("Please indicate your reason for shift cancellation.")
      }  
    }
    
  }
}
</script>

<style>
.fc .fc-timegrid-col.fc-day-today 
{
  background-color:inherit !important;
}

.fc .fc-button-primary {
  background-color: #5d5c5c;
}

.fc .fc-button-primary:disabled {
  background-color: #5d5c5c;
}

#calendar  .fc-scrollgrid {
  border: none !important;
}

#calendar .fc-scrollgrid td:last-of-type {
  border-right: none !important;
}


h2 {
	text-align: center;
}

.button {
 appearance: none;
 outline: none;
 border: none;
 background: none;
 display: inline-block;
 padding: 15px 25px;
 background-image: linear-gradient(to right, steelblue, lightblue);
 border-radius: 8px;
 margin: 10px;
 color: #FFF;
 font-size: 15px;
 font-weight: bold;
}

.smallbutton {
	padding: 3px 5px;
	margin: 2px;
	font-size: small;
}

.modal-overlay {
 position: absolute;
 top: 0;
 left: 0;
 right: 0;
 bottom: 0;
 z-index: 98;
 background-color: rgba(0, 0, 0, 0.3);
}

.modal {
 position: fixed;
 top: 50%;
 left: 50%;
 transform: translate(-50%, -50%);
 z-index: 99;
 
 width: 100%;
 max-width: 500px;
 background-color: #FFF;
 border-radius: 16px;
 
 padding: 25px;
 text-align: center;
 
 p {
  color: #666;
  font-size: 18px;
  font-weight: 400;
  margin-bottom: 15px;
 }

}

#remarksbox {
	height: 50px;
	width: 60%;
	margin-left: 5px;
	padding-left: 5px;
	border-radius: 10px;
	border: 1px solid steelblue;
}
</style>