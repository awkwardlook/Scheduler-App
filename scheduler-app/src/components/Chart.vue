<template>
    <div class="line">
        <h2>Current Week's Work Strength</h2>
        <button class="button" @click="updateMe2()">Update</button><br><br><br>
        <line-chart class = 'user' width =500px :data = "chartdata2"></line-chart >
    </div><br><br>

    <div class="pie">
        <h2>Work Strength</h2>
        <button class="button" @click="setup()">Update</button><br><br><br>
        <pie-chart width =500px :data= "chartdata"></pie-chart>
    </div>
</template>

<script>
import firebase from 'firebase'

const db = firebase.firestore()
const shifts = db.collection("availabilities")

export default {
    //import firebase dated data 
    //collect dates based on if statements into days of the week/collect by months
    
    name:'Charts',
    data(){

        return{
            
            chartdata2: {'Blueberry':44, 'Strawberry':23},

            chartdata: {},
            
            selected:""
        }
    },
    methods:{

        setup(){
            var data = {"morning": 0, "afternoon": 0};
            shifts.get().then((docSnapshot) => {
                if (docSnapshot.exists) {
                    const dates = docSnapshot.data();
                    if (dates.start.slice(11, 19) == "09:00:00") {
                        data["morning"] = data["morning"] + 1
                    }
                    if (dates.start.slice(11, 19) == "15:00:00") {
                        data["afternoon"] = data["afternoon"] + 1
                    }
                }
            })
            console.log("data")
            return data;   
        },

        updateMe: function (){
            this.chartdata = {'Monday': Math.random()*5, 'Tuesday': 5, 'Wednesday': Math.random()* 5, 'Thursday': 5, 'Friday':6}
        },
        updateMe2: function (){
            this.chartdata2 = {'Blueberry':Math.random()*30, 'Strawberry':23,'Balckberry':23}
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