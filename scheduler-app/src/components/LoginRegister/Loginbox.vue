<template>
    <div class="header">
        <Header/>
    </div>
    <div class="loginbox">
        <div v-if = "emailEntered" class="backbuttondiv">
            <button class="bbutton" @click="editEmail()">Back</button>
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
                <button class = "emailbutton" type="button" @click="enterEmail()">Next</button> 
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
import { useRouter } from 'vue-router'
import firebase from 'firebase'
import Header from '../Header/Header.vue'

const auth = firebase.auth()
const db = firebase.firestore()
const employersCollection = db.collection('employers')
const employeesCollection = db.collection('employees')
const usersCollection = db.collection('users')

export default {
    data(){
        return{
            email: "",
            emailEntered: false,
            password: "",
            router: useRouter()
        }
    },
    components: {
        Header,
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
        editEmail() {
            this.emailEntered = !this.emailEntered;
        },
        loginEmployer() {
            if (this.password != "") {
                const employersRef = employersCollection.doc(this.email)
                employersRef.get()
                .then((docSnapshot) => {
                    if (docSnapshot.exists) {
                        auth.signInWithEmailAndPassword(this.email, this.password)
                        .then(() => {
                            window.localStorage.setItem('usertype', 'employer')
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
        loginEmployee() {
            if (this.password != "") {

                const employeesRef = employeesCollection.doc(this.email)
                
                employeesRef.get()
                .then((docSnapshot) => {
                    if (docSnapshot.exists) {
                        auth.signInWithEmailAndPassword(this.email, this.password)
                        .then(() => {
                            window.localStorage.setItem('usertype', 'employee')
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
        width: 382px;  
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
        background-color: #0069e0; 
        border-radius: 8px;
        color: white;
        padding: 10px 24px;
        text-align: center;
        text-decoration: none;
        margin-left: -300px;
        margin-top: -300px;
        display: inline-block;
        font-size: 14px;
        width: 100px;
    }

    .bbutton:hover {
        box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
        background-color: #25deff; /* Green */
        color: rgb(25, 27, 44);
        transition-duration: 0.4s;
        cursor: pointer;
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
    .emailbutton {
        background-color: #0069e0; 
        border-radius: 8px;
        color: white;
        padding: 10px 24px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        width: 120px;
    }

    .emailbutton:hover {
        box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
        background-color: #25deff; /* Green */
        color: rgb(25, 27, 44);
        transition-duration: 0.4s;
        cursor: pointer;
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
    .passwordbutton {
        background-color: #0069e0; 
        border-radius: 8px;
        color: white;
        padding: 10px 24px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 14px;
        width: 160px;
        margin: 0px 14px;
    }

    .passwordbutton:hover {
        box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
        background-color: #25deff; 
        color: rgb(25, 27, 44);
        transition-duration: 0.4s;
        cursor: pointer;
    }
</style>