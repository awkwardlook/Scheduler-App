<template>
    <form id="myform">
        <div class = "mdeets">
            <h1>Employer Details</h1>
            <h2 id="ename">{{user.email}}</h2>
            <div class="eleft">
                
                <h2 id = "edept">Department</h2>
                <input id="department" v-model="department" placeholder="Enter department">
                <br><br>
                <img id="profphoto" alt="profile photo"/>
            </div>

            <div class="eright">
                <h2>Username</h2>
                <input id="username" v-model="username" placeholder="Enter username">
                <h2>Phone Number</h2>
                <input type="text" id="pnum" v-model="pnum" placeholder="Enter phone number">
                <br><br>
                <h2>Gender</h2>
                <input type="radio" id="male" v-model="gender" value="Male">
                <label for="gender">Male</label>
                <br>
                <input type="radio" id="female" v-model="gender" value="Female">
                <label for="gender">Female</label>
                <br><br>
            </div>
            <!-- button id = "savebutton" type="button" v-on:click="savetofs()" style="color: rgb(0, 0, 0);"> SAVE </button><br><br> -->
        </div>

        <div class= "coydeets">
            <h1>Company Details</h1>
            <div class="left">
                <h2 id = "coyname">Company Name</h2>
                <input id="companyName" v-model="companyName" placeholder="Enter company name">
            </div>

            <div class="right">
                <h2>Company Description</h2>
                <input id="companyUEN" v-model="companyUEN" placeholder="Enter company UEN">            
            </div>
        </div>
    </form>

    <button class="button" @click="updatefs()"> Update </button>
</template>

<script>

import firebase from 'firebase'

const auth = firebase.auth();
const db = firebase.firestore();
const employers = db.collection("employers");
const users = db.collection("users");

export default {
    data() {
        return {
            user: false,
            department: "",
            username: "",
            pnum: "",
            gender: "",
            companyName: "",
            companyUEN: ""
        }
    },
    mounted() {
        auth.onAuthStateChanged((user) => {
            if (user) {
                this.user = user;
                this.username = user.displayName ? user.displayName : user.email;
                this.fetchProfile();
            }
        });
    },
    methods: {
        fetchProfile() {
            employers.doc(this.user.email).get().then((docSnapshot) => {
                if (docSnapshot.exists) {
                    const user = docSnapshot.data();
                    this.department = user.department;
                    this.pnum = user.pnum;
                    this.gender = user.gender;
                    this.companyName = user.companyName;
                    this.companyUEN = user.companyUEN;
                    document.getElementById("profphoto").src = user.ephoto;
                }
            })    
        },
        async updatefs() {
            try {
                await auth.currentUser.updateProfile({
                    displayName: this.username
                });
                const userDoc = await users.doc(this.user.email).get();
                if (userDoc.exists) {
                    await employers.doc(this.user.email).update({
                        username: this.username,
                        department: this.department,
                        pnum: this.pnum,
                        gender: this.gender,
                        companyName: this.companyName,
                        companyUEN: this.companyUEN
                    });
                } else {
                    await users.doc(this.user.email).set({});
                    await employers.doc(this.user.email).set({
                        email: this.user.email,
                        username: this.username,
                        department: this.department,
                        pnum: this.pnum,
                        gender: this.gender,
                        companyName: this.companyName,
                        companyUEN: this.companyUEN
                    });
                }
                alert("Profile info updated")
            } catch (e) {
                alert(e.message);
            }
        }
    }
}
</script>

<style scoped>
    .button {
        appearance: none;
        outline: none;
        border: none;
        background: none;
        
        display: inline-block;
        padding: 15px 25px;
        background-image: linear-gradient(to right, steelblue, lightblue);
        border-radius: 8px;
        margin: 10px;
        color: #FFF;
        font-size: 15px;
        font-weight: bold;
    }
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

