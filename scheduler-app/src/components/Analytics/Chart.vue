<template>
    <div class="line">
        <h2>Daily Work Strength</h2>
        <button class="button" @click="updateLineChart()">Update</button><br><br><br>
        <line-chart class = 'user' width =500px :data = "linechartdata"></line-chart >
    </div><br><br>

    <div class="line2">
        <h2>Current Week's Work Strength</h2>
        <button class="button" @click="updateLineChart2()">Update</button><br><br><br>
        <line-chart class = 'user' width =500px :data = "linechartdata2"></line-chart >
    </div><br><br>

    <div class="pie">
        <h2>Morning/Afternoon Work Strength</h2>
        <button class="button" @click="updatePieChart()">Update</button><br><br><br>
        <pie-chart width =500px :data= "piechartdata" ></pie-chart>
    </div>
</template>

<script>
import firebase from 'firebase'

const db = firebase.firestore()

export default {
    //import firebase dated data 
    //collect dates based on if statements into days of the week/collect by months
    mounted() {
        this.updateLineChart();
        this.updatePieChart();
    },

    data(){

        return{
            linechartdata: {"Monday": 0, "Tuesday": 0, "Wednesday": 0, "Thursday": 0, "Friday": 0},
            linechartdata2: {"Monday": 0, "Tuesday": 0, "Wednesday": 0, "Thursday": 0, "Friday": 0},
            piechartdata: {"Morning": 0, "Afternoon": 0},
            selected:""
        }
    },
    
    methods:{
        updatePieChart() {
            var data = {"Morning": 0, "Afternoon": 0};
            
            const shifts = db.collection("shifts")

            shifts.get().then((querySnapshot) => {
                const temp = []
                querySnapshot.forEach((doc) => {
                    temp.push({ id: doc.id, ...doc.data() })

                    const time = doc.id.slice(11,16)

                    if (time == "09:00") {
                        data["Morning"] += 1

                    } else {
                        data["Afternoon"] += 1
                    }
                    
                })
                console.log(data)
                this.piechartdata = data
            }) 
        },

        updateLineChart() {
            var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
            var data = {"Monday": 0, "Tuesday": 0, "Wednesday": 0, "Thursday": 0, "Friday": 0};
            
            const shifts = db.collection("shifts")

            shifts.get().then((querySnapshot) => {
                const temp = []
                querySnapshot.forEach((doc) => {
                    temp.push({ id: doc.id, ...doc.data() })

                    const date = doc.id.slice(0,10)
                    const day = new Date(date).getDay()
                    const dayOfWeek = days[day]

                    data[dayOfWeek] += 1
           
                })

                console.log(data)
                this.linechartdata = data  
            }) 
        },

        
        getWeek() {
            var onejan = new Date(this.getFullYear(),0,1);
            return Math.ceil((((this - onejan) / 86400000) + onejan.getDay()+1)/7);
        },

        updateLineChart2() {
            var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
            var data = {"Monday": 0, "Tuesday": 0, "Wednesday": 0, "Thursday": 0, "Friday": 0};
            
            const shifts = db.collection("availabilities")

            shifts.get().then((querySnapshot) => {
                const temp = []
                querySnapshot.forEach((doc) => {
                    temp.push({ id: doc.id, ...doc.data() })

                    if (doc.data().approved) {
                        const today = new Date() 
                        const date = doc.id.slice(0,10)
                        if (new Date(date).getWeek() == new Date(today).getWeek()) {
                            const day = new Date(date).getDay()
                            const dayOfWeek = days[day]

                            data[dayOfWeek] += 1
                        }
                    }
                })
 
                console.log(data)
                this.linechartdata2 = data  
            }) 
        },

    },
}
</script>

<style> 

.button {
    border-radius: 15px;
    padding: 3px 10px;
    background-color: #0069e0; 
    color: white;
}

.button:hover {
    box-shadow: 0 5px 7px 0 rgba(0,0,0,0.24), 0 5px 10px 0 rgba(0,0,0,0.19);
    background-color: #25deff; /* Green */
    color: rgb(25, 27, 44);
    transition-duration: 0.4s;
    cursor: pointer;
}
</style>