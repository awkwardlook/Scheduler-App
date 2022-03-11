<template>
    <div class="RegisterForm">
        <form id = "myform">
            <div class="header">
                <h1>Register your Account</h1>
            </div>
            <h3 id="desc">Create an Employer Profile, with your company details included.</h3>
            <div class = "input">
                <label for="email"> Email: </label>
                <input type = "text" id = "email" required="" placeholder="Email" v-model="email"> <br><br>
                
                <label for="username"> Username: </label>
                <input type = "text" id = "username" required="" placeholder="Given Username"> <br><br>
                
                <label for="companyUEN"> Company UEN: </label>
                <input type = "text" id = "companyUEN" required="" placeholder="Company UEN"> <br><br>
                
                <label for="companyname"> Company Name: </label>
                <input type = "text" id = "companyname" required="" placeholder="Company Name"> <br><br>

                <label for="password"> Password: </label>
                <input type = "text" id = "password" required="" placeholder="Min. 8 chars" v-model="password"> <br><br>

                <div class = "reg">
                    <button id = "regbutton" type="submit" v-on:click="register();" > Register </button><br><br>
                </div>
            </div>
        </form>
    </div>
</template>



<script>
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// const auth = getAuth();
// cb try the whole afternoon still can't connect to firebase for user authen
import firebaseApp from '../../firebase'
import 'firebase/compat/auth'

export default {
    // // mounted(){},
    name: 'Register',
    data() {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        // async savetofs(){
        //     console.log("savefnrun")
        //     var username = document.getElementById("username").value
        //     var password = document.getElementById("password").value
        //     alert("Creating account for : " + username + password)
        //     document.getElementById("myform").reset()
        // },

        register() {
            console.log("registering")
            firebaseApp
                .auth()
                .createUserWithEmailAndPassword(this.email, this.password)
                .then(() => {
                    alert('Successfully registered! Please login.');
                    this.$router.push('/login');
                })
                .catch(error => {
                    alert(error.message);
                });
        },
    }
    //             .then(document.getElementById("form").reset())
    //             // ((userCredential) => {
    //             //     // Signed in 
    //             //     const user = userCredential.user;
                    
    //             //     // ...
    //             // })
    //             .catch((error) => {
    //                 const errorCode = error.code;
    //                 alert(errorCode);
    //                 // const errorMessage = error.message;
    //                 // ..
    //             });
    //                     }
    // }
}
</script>