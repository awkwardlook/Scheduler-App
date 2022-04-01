<template>
    <div class="line">
        <h2>Current Week's Work Strength</h2>
        <button class="button" @click="updateBar()">Update</button><br><br><br>
        <line-chart class = 'user' width =500px :data = "barchartdata"></line-chart >
    </div><br><br>

    <div class="pie">
        <h2>Work Strength</h2>
        <button class="button" @click="updatePie()">Update</button><br><br><br>
        <pie-chart width =500px :data= "piechartdata"></pie-chart>
    </div>
</template>

<script>
import firebase from 'firebase'

const db = firebase.firestore()

export default {
    //import firebase dated data 
    //collect dates based on if statements into days of the week/collect by months
    
    name:'Charts',
    data(){

        return{
            barchartdata: {"Monday": 0, "Tuesday": 0, "Wednesday": 0, "Thursday": 0, "Friday": 0},
            piechartdata: {"Morning": 0, "Afternoon": 0},
            selected:""
        }
    },
    
    methods:{
        updatePie() {
            var data = {"Morning": 0, "Afternoon": 0};
            const shifts = db.collection("availabilities")

            shifts.get().then((querySnapshot) => {
                const temp = []
                querySnapshot.forEach((doc) => {
                    temp.push({ id: doc.id, ...doc.data() })

                    if (doc.data().approved) {
                        const time = doc.id.slice(11,16)

                        if (time == "09:00") {
                            data["Morning"] += 1

                        } else {
                            data["Afternoon"] += 1
                        }
                    }

                    console.log(data)
                    this.piechartdata = data
                })
                
            }) 
        },

        updateBar: function (){
            this.barchartdata = {'Monday': Math.random()*5, 'Tuesday': 5, 'Wednesday': Math.random()* 5, 'Thursday': 5, 'Friday':6}
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