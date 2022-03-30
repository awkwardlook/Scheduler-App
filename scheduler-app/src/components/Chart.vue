<template>
    <div class="line">
        <h2>Current Week's Work Strength</h2>
        <button class="button" @click="updateMe()">Update</button><br><br><br>
        <line-chart class = 'user' width =500px :data = "chartdata"></line-chart >
    </div><br><br>

    <div class="bar">
        <h2>Overall Weekly Work Strength</h2>
        <button class="button" @click="updateMe2()">Update</button><br><br><br>
        <column-chart class ="user" width=500px :data="chartdata2"></column-chart>
    </div>
</template>

<script>
 export default {
    name:'Charts',
    data(){
        return{
            chartdata: {'Monday': 2, 'Tuesday': 5, 'Wednesday': 2, 'Thursday': 5, 'Friday':6},
            chartdata2: {'Blueberry':44, 'Strawberry':23},
            
            selected:""
        }
    },
    methods:{
        updateMe: function (){
            this.chartdata = {'Monday': Math.random()*5, 'Tuesday': 5, 'Wednesday': Math.random()* 5, 'Thursday': 5, 'Friday':6}
        },
        updateMe2: function (){
            this.chartdata2 = {'Blueberry':Math.random()*30, 'Strawberry':23,'Balckberry':23}
        }
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