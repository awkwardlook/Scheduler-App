<template>
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
const companies = db.collection("companies")
const shopee = companies.doc("shopee")

// console.log(shopee)

export default {
    mounted(){

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

