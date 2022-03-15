<template>
    
    <div class = "mdeets">
        <h1>Employer Details</h1>
        <div class="header">
            <br/><br/>
            <h2>Employer Department</h2>
            <br/>
            <h5>-Employer Photo-</h5>
        </div>


        <div class="description">
            <h2 id="desc">Employer's Name</h2>
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
        background-color: #ffffff;
        text-align: center;
    }

    .mdeets{
        margin-top: -80px;
        text-align: center;
        font-size: 24px;
        width: 1000px;  
    }

    .header{
        float: left;
        width: 400;
        margin-left: 10px;
        margin-top: 10px;
        padding: 5px;
        /* border: 2px solid blue; */
    }

    .description{
        float: right;
        width: 400px;
        margin-left: 10px;
        margin-top: 10px;
        padding: 5px;
        /* border: 2px solid blue; */
    }
</style>

