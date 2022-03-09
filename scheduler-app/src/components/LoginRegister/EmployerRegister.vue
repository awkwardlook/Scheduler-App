<template>
    <div class="RegisterForm">
        <form id = "myform">
            <div class="header">
                <h1>Register your Account</h1>
            </div>
            <h3 id="desc">Create an Employer Profile</h3>
            <div class = "registration form">
                <label for="username"> Username: </label>
                <input type = "text" id = "username" required="" placeholder="given username"> <br><br>
                <label for="password"> Password: </label>
                <input type = "text" id = "password" required="" placeholder="min. 8 chars"> <br><br>

                <div class = "login">
                    <button id = "loginbutton" type="button" v-on:click="savetofs()" style="color: rgb(0, 0, 0);"> Register </button><br><br>
                </div>
            </div>
        </form>
    </div>
</template>



<script>
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// const auth = getAuth();
// cb try the whole afternoon still can't connect to firebase for user authen

export default {
    // // mounted(){},
    methods: {
        async savetofs(){
            console.log("savefnrun")
            var username = document.getElementById("username").value
            var password = document.getElementById("password").value
            alert("Creating account for : " + username + password)
            // createUserWithEmailAndPassword(auth, username, password)
            document.getElementById("myform").reset()
        }
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