<template>
    <div class="header">
        <h1>Employer Details</h1>
        <h2>Employer Department</h2>
        <h5>-Employer Photo-</h5>
    </div>

    <br><br><br><br>

    <div class="description">
        <h1 id="desc">Employer's Name</h1>
            <h2> Gender</h2>
            <table id = "tGender" class = "auto=index">
                <tr>
                    <th>Gender</th>
                </tr>
            </table>
            <br>

            <h2>Phone Number</h2>
            <table id = "tPhone" class = "auto=index">
                <tr>
                    <th>Phone Number</th>
                </tr>
            </table>
            <br>

            <h2>Email</h2>
            <table id = "tEmail" class = "auto=index">
                <tr>
                    <th>Email</th>
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

<style scoped>
    .header{
        height: 50px;
        background-color: grey;
        text-align: center;
    }
</style>

