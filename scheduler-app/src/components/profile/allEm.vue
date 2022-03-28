<template>
    <h1 id="header"> All Employees </h1>
        <div id="employees">
            <!-- loops through all employees in the system and shows them row by row -->
        </div>
    <br><br><br><br>

</template>

<script>

import firebase from 'firebase'
// import { doc, setDoc } from "firebase/firestore";

const db = firebase.firestore()
const employees = db.collection("employees");

employees.get().then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
    });
});

// console.log(shopee)

export default {
    methods: {
        mounted(){            
        },

    }
}

</script>

<style scoped>
#header {
    text-align: center;
    font-size: 80px;
    width: 1000px;  
    overflow: hidden;  
    margin: auto;
}
</style>

