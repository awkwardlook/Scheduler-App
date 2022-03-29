<template>
    <div class = "allEm">
        <h1 id="header">All Employees </h1>
        <br>
            <table id = "table" class = "auto=index">
                    <tr>
                        <img>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone Number</th>
                        <th>Department</th>
                    </tr>
                </table>
        <br><br><br><br>
    </div>
</template>

<script>

import firebase from 'firebase'
// import { doc, setDoc } from "firebase/firestore";
import {  doc, deleteDoc } from "firebase/firestore";

const db = firebase.firestore()
const employees = db.collection("employees");

// employees.get().then(function(querySnapshot) {
//     querySnapshot.forEach(function(doc) {
//         // doc.data() is never undefined for query doc snapshots
//         console.log(doc.id, " => ", doc.data());
//     });
// });

// console.log(shopee)

export default {
    mounted(){            
    
        async function display(){
            console.log("display() is running")
            let z = await employees.get()
            // let z = await db.collection("Portfolio").get()
            let ind = 1

            z.forEach((docs) => {
                let yy = docs.data()
                console.log(yy)
                var table = document.getElementById("table")
                var row = table.insertRow(ind)

                var name = (yy.name)
                var email = (yy.email)
                var pnum = (yy.pnum)
                var dept = (yy.department)

                console.log(dept)

                var cell1 = row.insertCell(0); var cell2 = row.insertCell(1); var cell3 = row.insertCell(2);
                var cell4 = row.insertCell(3); var cell5 = row.insertCell(4); var cell6 = row.insertCell(5); 

                cell1.innerHTML = ind; cell2.innerHTML = name; cell3.innerHTML = email; cell4.innerHTML = pnum; cell5.innerHTML = dept;


                var bu = document.createElement("button")
                bu.className = "bwt"
                bu.id = String(name)
                bu.innerHTML = "Delete"
                bu.onclick = function(){
                    deleteinstrument2(name)
                }
                cell6.appendChild(bu)
            ind+= 1
            })
        }
        display()

        async function deleteinstrument2(coin){
            var x = coin
            alert("You are going to delete " + x)
            await deleteDoc(doc(db, "Portfolio", x))
            console.log("Document successfully deleted!" , x);
            let tb = document.getElementById("table")
            while (tb.rows.length > 1){
                tb.deleteRow(1)
                }
            document.getElementById("totalProfit").innerHTML=""
            display()
        }
    }
}

</script>

<style scoped>
#header {
    text-align: center;
    font-size: 60px;
    width: 1000px;  
    overflow: hidden;  
    margin: auto;
    margin-left: -100px;
}

.allEm {
    text-align: center;
    font-size: 24px;
    width: 800px;  
    overflow: hidden;  
    margin: auto;
    /* top right bottom left */
    padding: 80px;  
    background: #ffffff;  
    border-radius: 15px ;
    margin-bottom: -100px;
}

table {
    font-family: Arial, Helvetica, sans-serif;
    border-collapse: collapse;
    width: 60%;
    margin: auto;
}

tr:nth-child(even){
    background-color: rgb(255, 255, 255);
    text-align: center;
}

th, td {
    border: 1px solid #000000;
    text-align: center;
    padding: 8px;
}
</style>

