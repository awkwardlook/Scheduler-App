<template>
    <div class="loginbox">
        <form>
            <div class="loginformheader">
                <h1>Log in to your Account</h1>
            </div>
            <br>

            <text id="loginformdesc">For both employees and employers, just add your username and corresponding password to log in.</text>
            <br><br>

            <div class="loginforminput">
                <input type = "text" id = "username" required="" placeholder="Username"> 
            </div>
            <br><br>

            <div>
                <button class = "usernamebutton" type="button" @click="setUsername()">Next</button> 
            </div>
        </form>
    </div>
</template>



<script>
export default {
    methods: {
        setUsername() {
            var username = document.getElementById("username").value;
            alert("Username entered: " + username);
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
        border-radius: 15px ;
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