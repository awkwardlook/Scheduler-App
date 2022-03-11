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

            <text id="loginformdesc">For both employees and employers, just add your username and corresponding password to log in.</text>
            <br><br>

            <div v-if = "!usernameEntered">
                <div class="loginforminput">
                    <input type="text" v-model = "username" id="username" placeholder="Username" required> 
                </div>
                <br><br>
                <button class = "usernamebutton" type="button" @click="enterUsername()">Next</button> 
            </div>
        </form>
    </div>
</template>



<script>
export default {
    data(){
        return{
            username: "",
            usernameEntered: false
        }
    },
    methods: {
        enterUsername() {
            if (this.username != "") {
                alert("Username entered: " + this.username);
                this.usernameEntered = !this.usernameEntered;
            } else {
                alert("Please ensure username is filled in!");
            }
        },
        editUsername() {
            this.usernameEntered = !this.usernameEntered;
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
        background-color: red;
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
    #username{
        width: 100%;
    }
</style>