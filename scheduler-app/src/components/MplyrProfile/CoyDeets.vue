<template>
    <div class= "coydeets">
        <h1>Company Details</h1>
        <div class="header">
            <h2>Company Name</h2>
            <h5>-Company Logo-</h5>
        </div>

        <div class="description">
            <h1>Company Description</h1>
            <h2 id="coydesc"> The quick brown fox jumps over the lazy dog</h2>            
        </div>
    </div>

</template>

<script>

import firebase from 'firebase'
// import { doc, getDoc } from "firebase/firestore";

const db = firebase.firestore()
const shopee = db.collection("companies").doc("shopee")

export default {
    mounted(){
    async function display(){

        // const docSnap = await getDoc(cdescription)
        document.getElementById("coydesc").innerHTML = (shopee.get("description"))
    }
    display()
    }
}

</script>

<style scoped>
    .header{
        height: 50px;
        background-color:  #ffffff;
        text-align: center;
    }

    .coydeets{
        text-align: center;
        font-size: 24px;
        width: 1000px;  
        overflow: hidden;  
    }

    .header{
        float: left;
        width: 500;
        margin-left: 10px;
        margin-top: 10px;
        padding: 5px;
        /* border: 2px solid blue; */
    }

    .description{
        float: right;
        width: 500px;
        margin-left: 10px;
        margin-top: 10px;
        padding: 5px;
        /* border: 2px solid blue; */
    }
</style>

