<template>
    
    <div class = "mdeets">
        <h1>Employer Details</h1>
        <h2 id="ename">Employer's Name</h2>
        <div class="eleft">
            <br/><br/>
            <h2 id = "edept">Employer Department</h2>
            <br/>
            <h5 id = "dp">-Employer Photo-</h5>
        </div>


        <div class="eright">
            <h2>Email</h2>
            <h3 id="email"> Email </h3>
            <h2>Phone Number</h2>
            <h3 id = "pnum">Phone Number</h3>
            <h2> Gender </h2>
            <h3 id = "gender">Gender</h3>
        </div>
    </div>
</template>

<script>
// import firebaseApp from '../firebase.js';
// import { getFirestore } from "firebase/firestore"
// import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";
import firebase from 'firebase'

const db = firebase.firestore();
const employers = db.collection("employers");
const email = "employer1@gmail.com" ;
const edward = employers.doc(email);

export default {
    mounted(){
        edward.onSnapshot(function(doc) {
        let data = doc.data();
        // gets the value of a field called field1 from the doc
        // console.log(data)
        
        const ename = data.name
        const edept = data.department
        const dp = data.ephoto
        const email = data.email
        const pnum = data.pnum
        const gender = data.gender
        // const username = data.username

        document.getElementById("ename").innerText = ename
        document.getElementById("edept").innerText = edept
        document.getElementById("dp").innerText = dp
        document.getElementById("email").innerText = email
        document.getElementById("pnum").innerText = pnum
        document.getElementById("gender").innerText = gender
        })
    }
}
</script>

<style scoped>
    .header{
        background-color: #ffffff;
        text-align: center;
    }

    .mdeets{
        margin-top: -80px;
        text-align: center;
        font-size: 24px;
        width: 1000px;  
    }

    .eleft{
        float: left;
        width: 400;
        margin-left: 10px;
        margin-top: 10px;
        padding: 5px;
        /* border: 2px solid blue; */
    }

    .eright{
        float: right;
        width: 400px;
        margin-left: 10px;
        margin-top: 10px;
        padding: 5px;
        /* border: 2px solid blue; */
    }
</style>

