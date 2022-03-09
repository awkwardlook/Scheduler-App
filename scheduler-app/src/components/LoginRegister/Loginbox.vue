<template>
    
    <br><br>
    <div class="login">
        <form id ="login">
            <div class="header">
                <h1>Log in to your Account</h1>
            </div>
            <h3 id="desc">For both employees and employers, just add your username and corresponding password to log in.</h3>
            
            <br>
            <div class="input">
            <label for="username"> Username: </label>
            <input type = "text" id = "username" required="" placeholder="given username"> 
            </div>
            <br>
            <div class = "button">
                <button id = "loginbutton" type="button" > Log In </button>
                <!-- v-on:click="savetofs()" -->
            </div>
        </form>
    </div>
</template>



<script>
export default {
}

</script>

<style>

    body{  
    margin: 0;  
    padding: 0;  
    background-color:#6abadeba;  
    font-family: 'Arial';  
    }  

    .login{  
        width: 382px;  
        overflow: hidden;  
        margin: auto;  
        margin: 20 0 0 450px;  
        padding: 80px;  
        background: #ffffff;  
        border-radius: 15px ;
    }

    .header{
        height: 50px;
        background-color: none;
        text-align: center;
    }

    #desc{
        height: 50px;
        background-color: none;
        color: rgb(68, 68, 68);
        text-align: center;
    } 

    #loginbutton {
        background-color: #0069e0; 
        border-radius: 30px;
        color: white;
        padding: 15px 32px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 24px;
    }
    .button, .input{
        text-align: center;
    }
</style>