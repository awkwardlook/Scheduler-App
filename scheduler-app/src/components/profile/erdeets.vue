<template>
    <form id="myform">
        <div class = "mdeets">
            <h1>Employer Details</h1>
            <h2 id="ename">Employer's Name</h2>
            <div class="eleft">
                
                <h2 id = "edept">Employer Department</h2>
                <br/>
                <img id="profphoto" alt="profile photo">
            </div>

            
            <div class="eright">
                <h2>Email</h2>
                <input id="email" >
                <h2>Phone Number</h2>
                <input id="pnum" >
                <br><br>
                <h3>Gender</h3>
                <input id="gender"><br><br>
            </div>
        

            
            <!-- button id = "savebutton" type="button" v-on:click="savetofs()" style="color: rgb(0, 0, 0);"> SAVE </button><br><br> -->
        </div>

        <div class= "coydeets">
            <h1>Company Details</h1>
            <div class="left">
                <h2 id = "coyname">Company Name</h2>
                <img id = "coylogo" alt="company photo">
            </div>

            <div class="right">
                <h2>Company Description</h2>
                <h5 id="coydesc">Wanted company description</h5>            
            </div>
        </div>
    </form>

    <button id="Update" type="button" v-on:click="updatefs()"> Update </button>


</template>

<script>

import firebase from 'firebase'
// import { doc, setDoc } from "firebase/firestore";

const db = firebase.firestore()
const employers = db.collection("employers");
const email = "employer1@gmail.com" ;
// to obtain from authentication
const edward = employers.doc(email);

// var storageRef = firebase.storage().ref();
// var photo = storageRef.child('Passport photo.jpg');
const companies = db.collection("companies")
const shopee = companies.doc("shopee")

edward.onSnapshot(function(doc) {
                let data = doc.data();
                // gets the value of a field called field1 from the doc
                // console.log(data)
                
                const ename = data.name
                const edept = data.department
                const dp = data.ephoto
                const pnum = data.pnum
                const gender = data.gender
                // const username = data.username

                document.getElementById("profphoto").src = dp
                document.getElementById("ename").innerText = ename
                document.getElementById("edept").innerText = edept
                document.getElementById("email").placeholder = email
                document.getElementById("pnum").placeholder = pnum
                document.getElementById("gender").placeholder = gender
                })

            shopee.onSnapshot(function(doc) {
                let data = doc.data();
                // gets the value of a field called field1 from the doc
                // console.log(data)
                const cname = data.name
                const desc = data.description
                const clogo = data.clogo
                document.getElementById("coyname").innerText = cname
                document.getElementById("coydesc").innerText = desc
                document.getElementById("coylogo").src = clogo
            })

// console.log(shopee)

export default {
    methods: {
        // mounted(){
        // need to obtain the loggin in email first -> determine if employee or employer
        // then use the email to retrieve the respective info
            
        // },

        async updatefs(){
                console.log("updating")
                const ename = document.getElementById("ename").innerText
                console.log(ename)
                var g = document.getElementById("gender").value
                console.log(g)
                var p = document.getElementById("pnum").value
                var e = document.getElementById("email").value
                alert("Updating details for : " + ename)
                try{
                    if (g != null) {
                        edward.update({gender: g})
                    }
                    if (e != null) {
                        edward.update({email:e})
                    }
                    if (p != null) {
                        edward.update({pnum:p})
                    }
                    
                    this.$emit("updated")
                    }
                catch(error) {
                    console.error("Error adding document: ", error);
                }
            }
    }
}

</script>

<style scoped>
    input {
        font-size: 30px;
        height: 36px;
        text-align: center;
    }
    .mdeets{
        margin-top: -0px;
        text-align: center;
        font-size: 24px;
        width: 1000px;  
    }

    .eleft{
        float: left;
        width: 400;
        margin-left: 80px;
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
    .coydeets{
        text-align: center;
        font-size: 24px;
        width: 1000px;  
        overflow: hidden;  
    }

    .left{
        float: left;
        width: 500;
        margin-left: 10px;
        margin-top: 10px;
        padding: 5px;
        /* border: 2px solid blue; */
    }

    .right{
        float: right;
        width: 500px;
        margin-right: 10px;
        margin-top: 10px;
        padding: 5px;
        /* border: 2px solid blue; */
    }
</style>

