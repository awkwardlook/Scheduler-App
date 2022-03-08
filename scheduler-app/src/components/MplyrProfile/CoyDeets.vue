<template>
    <div class="header">
        <h1>Company Details</h1>
        <h2>Company Name</h2>
        <h5>-Company Logo-</h5>
    </div>
    <br><br><br>
    <div class="description">
        <h1 id="desc">Company Description</h1>
            <table id = "table" class = "auto=index">
                <tr>
                    <th>Company Description, max 400 words</th>
                </tr>
            </table>
        
    </div>
</template>



<script>
// import firebaseApp from '../firebase.js';
// import { getFirestore } from "firebase/firestore"
// import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";

// const db = getFirestore(firebaseApp);

export default {
    mounted(){}
}

</script>

<style>
    .header{
        height: 50px;
        background-color: grey;
        text-align: center;
    }

    .description{
        height: 50px;
        background-color: none;
        text-align: center;
    }

    .table{
        text-align: center;
    }
</style>