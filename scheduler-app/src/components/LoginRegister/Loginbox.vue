<template>
    <div class="loginbox">
        <div v-if = "usernameEntered" class="backbuttondiv">
            <button @click="editUsername()">Back</button>
        </div>
        <form>
            <div class="loginformheader">
                <h1>Log in to your Account</h1>
            </div>
            <br>

            <text id="loginformdesc">For both employees and employers, add your username and corresponding password to log in.</text>
            <br><br>

            <div v-if = "!usernameEntered">
                <div class="loginforminput">
                    <input type="text" v-model = "username" id="loginforminputbox" placeholder="Username" required> 
                </div>
                <br><br>
                <button class = "usernamebutton" type="button" @click="enterUsername()">Next</button> 
            </div>

            <div v-else>
                <div class="loginforminput">
                    <input type="password" v-model = "password" id="loginforminputbox" placeholder="Password" required> 
                </div>
                <br><br>
                <div style="text-align: center;">
                    <button class = "passwordbutton" type="button" @click="loginEmployer()">Login As Employer</button>
                    <button class = "passwordbutton" type="button" @click="loginEmployee()">Login As Employee</button>
                </div>
            </div>
        </form>
    </div>
</template>



<script>
import store from '../../store.js'
import { useRouter } from 'vue-router'
import firebase from 'firebase'

// const auth = firebase.auth()
const db = firebase.firestore()
//const employersCollection = db.collection('employers')
//const employeesCollection = db.collection('employees')
const usersCollection = db.collection('users')

export default {
    data(){
        return{
            username: "",
            usernameEntered: false,
            password: "",
            router: useRouter()
        }
    },
    methods: {
        enterUsername() {
            if (this.username != "") {

                // check if email exists
                const usersRef = usersCollection.doc(this.username)
                usersRef.get()
                .then((docSnapshot) => {

                    // only allowed to enter password if email exists
                    if (docSnapshot.exists) {
                        this.usernameEntered = !this.usernameEntered;
                    } else {
                        alert('Email does not exist. Create an account.')
                    }
                })

            } else {
                alert("Please ensure username is filled in!");
            }
        },
        editUsername() {
            this.usernameEntered = !this.usernameEntered;
        },
        loginEmployer() {
            if (this.password != "") {
                store.commit("loginAsEmployer");
                console.log(store.state.user);
                // firebase authentication code
                // if correct, route to /employerschedule page
                this.router.replace('/employerschedule')
                
            } else {
                alert("Please enter a valid password!");
            }
        },
        loginEmployee() {
            if (this.password != "") {
                store.commit("loginAsEmployee");
                console.log(store.state.user);
                // firebase authentication code
                // if correct, route to /employeeschedule page
                this.router.replace('/employeeschedule')
            } else {
                alert("Please enter a valid password!");
            }
        }
    }
}

</script>

<style scoped>
    .loginbox{  
        width: 382px;  
        height: 300px;
        overflow: hidden;  
        margin: auto;  
        margin: 20 0 0 450px;  
        padding: 80px;  
        background: #ffffff;  
        border-radius: 15px;
    }
    .backbuttondiv{
        position: absolute;
        top: 120px;
        left: 400px;
    }
    .loginformheader{
        height: 50px;
        text-align: center;
    }
    #loginformdesc{
        height: 50px;
        background-color: none;
        color: rgb(68, 68, 68);
        text-align: center;
    } 
    .usernamebutton {
        background-color: #0069e0; 
        border-radius: 30px;
        color: white;
        padding: 10px 24px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 14px;
        width: 120px;
    }
    .loginforminput{
        display: flex;
        flex-direction: row;
        font-size: 24px;
        margin-top: 12px;
    }
    #loginforminputbox{
        width: 100%;
    }
    .passwordbutton {
        background-color: #0069e0; 
        border-radius: 30px;
        color: white;
        padding: 10px 24px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 14px;
        width: 160px;
        margin: 0px 14px;
    }
</style>