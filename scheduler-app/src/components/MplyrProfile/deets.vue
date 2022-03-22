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
    <br>
    <div class= "coydeets">
        <h1>Company Details</h1>
        <div class="left">
            <h2 id = "coyname">Company Name</h2>
            <h5 id = "coylogo">-Company Logo-</h5>
        </div>

        <div class="right">
            <h2>Company Description</h2>
            <h5 id="coydesc">Wanted company description</h5>            
        </div>
    </div>



</template>

<script>

import firebase from 'firebase'
// import { doc, getDoc } from "firebase/firestore";

const db = firebase.firestore()
const employers = db.collection("employers");
const email = "employer1@gmail.com" ;
const edward = employers.doc(email);
const companies = db.collection("companies")
const shopee = companies.doc("shopee")

// console.log(shopee)

export default {
    mounted(){
    // need to obtain the loggin in email first -> determine if employee or employer
    // then use the email to retrieve the respective info
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



    shopee.onSnapshot(function(doc) {
        let data = doc.data();
        // gets the value of a field called field1 from the doc
        console.log(data)
        const cname = data.name
        const desc = data.description
        const clogo = data.clogo
        document.getElementById("coyname").innerText = cname
        document.getElementById("coydesc").innerText = desc
        document.getElementById("coylogo").innerText = clogo
        

        // let value1 = data.description;

    })
    //     
    // }
    // display()
    }
}

</script>

<style scoped>

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

