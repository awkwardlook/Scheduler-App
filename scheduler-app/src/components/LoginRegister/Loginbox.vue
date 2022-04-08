<template>
    <div class="header">
        <Header/>
    </div>
    <div class="loginbox">
        <!-- fill in email first -->
        <div v-if = "emailEntered" class="backbuttondiv">
            <v-button class="bbutton" type="button" @click="editEmail()">Back</v-button>
            <!-- <button class="bbutton" @click="editEmail()">Back</button> -->
        </div>
        <form>
            <div class="loginformheader">
                <h1>Log in to your Account</h1>
            </div>
            <br>

            <text id="loginformdesc">For both employees and employers, enter your email and corresponding password to log in.</text>
            <br><br>

            <div v-if = "!emailEntered">
                <div class="loginforminput">
                    <input type="text" v-model = "email" id="loginforminputbox" placeholder="Email" required> 
                </div>
                <br><br>

                <v-button type="button" @click="enterEmail()">Next</v-button>
            </div>

            <div v-else>
                <!-- enter password if email exists -->
                <div class="loginforminput">
                    <input type="password" v-model = "password" id="loginforminputbox" placeholder="Password" required> 
                </div>
                <br><br>
                <div style="text-align: center;">
                    <!-- either login as employer or employee -->
                    <v-button type="button" @click="loginEmployer()">Login As Employer</v-button>
                    <v-button type="button" @click="loginEmployee()">Login As Employee</v-button>
                    
                    <!-- <button class = "passwordbutton" type="button" @click="loginEmployer()">Login As Employer</button> -->
                    <!-- <button class = "passwordbutton" type="button" @click="loginEmployee()">Login As Employee</button> -->
                </div>
            </div>
        </form>
    </div>
</template>



<script>
import { useRouter } from 'vue-router'
import firebase from 'firebase'
import Header from '../Header/Header.vue'
import Button from '../Button/Button.vue'

const auth = firebase.auth()
const db = firebase.firestore()
const employersCollection = db.collection('employers')
const employeesCollection = db.collection('employees')
const usersCollection = db.collection('users')

export default {
    data(){
        return {
            email: "",
            emailEntered: false,
            password: "",
            router: useRouter(),
            
        }
    },
    components: {
        Header,
        'v-button': Button
    },
    methods: {
        enterEmail() {
            if (this.email != "") {
                // check if email exists
                const usersRef = usersCollection.doc(this.email)
                usersRef.get()
                .then((docSnapshot) => {
                    // only allowed to enter password if email exists
                    if (docSnapshot.exists) {
                        this.emailEntered = !this.emailEntered;
                    } else {
                        alert('Email does not exist. Create an account.')
                    }
                })

            } else {
                alert("Please ensure email is filled in!");
            }
        },
        // check which login box to display
        editEmail() {
            this.emailEntered = !this.emailEntered;
        },
        // login as employer
        loginEmployer() {
            if (this.password != "") {
                const employersRef = employersCollection.doc(this.email)
                employersRef.get()
                .then((docSnapshot) => {
                    if (docSnapshot.exists) {
                        auth.signInWithEmailAndPassword(this.email, this.password)
                        .then(() => {
                            window.localStorage.setItem('usertype', 'employer')
                            window.localStorage.setItem('email', this.email)
                            window.localStorage.setItem('password', this.password)
                            this.router.replace('/schedule')
                        })
                        .catch(error => alert(error.message))
                    } else {
                        alert('Log in as Employee instead.')
                    }
                })
            } else {
                alert("Please enter a valid password!");
            }
        },
        // login as employee
        loginEmployee() {
            if (this.password != "") {

                const employeesRef = employeesCollection.doc(this.email)
                
                employeesRef.get()
                .then((docSnapshot) => {
                    if (docSnapshot.exists) {
                        auth.signInWithEmailAndPassword(this.email, this.password)
                        .then(() => {
                            window.localStorage.setItem('usertype', 'employee')
                            window.localStorage.setItem('email', this.email)
                            window.localStorage.setItem('password', this.password)
                            this.router.replace('/schedule')
                        })
                        .catch(error => alert(error.message))
                    } else {
                        alert('Log in as Employer instead.')
                    }
                })

            } else {
                alert("Please enter a valid password!");
            }
        }
    }
}

</script>

<style scoped>
    .loginbox{  
        text-align: center;
        font-size: 14px;
        width: 450px;  
        overflow: hidden;   
        margin: auto;
        margin-top: 200px;
        /* margin: 180px 150px 150px 700px;   */
        /* top right bottom left */
        padding: 80px;  
        background: #ffffff;  
        border-radius: 15px ;
    }
    .bbutton{
        margin-left: -420px;
        margin-top: -300px;
        margin-bottom: 40px;
        display: inline-block;
        font-size: 14px;
        height: 40px;
    }

    /* to copy */
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

    /* email input  */
    .loginforminput{
        display: flex;
        flex-direction: row;
        font-size: 24px;
        margin-top: 12px;
        border-radius: 30px;
        height: 50px;
    }
    #loginforminputbox{
        width: 100%;
    }
</style>