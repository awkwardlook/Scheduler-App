<template>
<<<<<<< HEAD
    <header :class="{ 'scrolled-nav': scrollPosition }">
        <nav class="flexbox">
            <div class="branding">
                <img src="@/assets/scheduler_logo2.png" alt=""/>
            </div>
            <div class="buttons">
                <button class="btn" @click="$router.push('/employeeschedule')">Schedule</button>
                <button class="btn" @click="$router.push('/mainschedule')">Main Schedule</button>
                <button class="btn" @click="$router.push('/employeetimesheet')">Timesheet</button>
                <button class="btn" @click="$router.push('/employeeprof')">Profile</button>
                <button class="btn" @click="logout">Sign Out</button>
            </div>
        </nav>
    </header>
=======
    <div class="header">
        <button @click="$router.push('/employeeschedule')">Schedule</button>
        <button @click="$router.push('/employeetimesheet')">Timesheet</button>
        <button @click="$router.push('/employeeprof')">Profile</button>
        <button @click="logout">Sign Out</button>
    </div>
>>>>>>> zhenghong-branch
</template>

<script>
    import firebase from 'firebase'

    const auth = firebase.auth()

    export default {
        mounted(){},
        methods: {
            logout() {
                auth.signOut()
                .then(() => {
                    this.$router.replace('/')
                    alert('Successfully logged out!')
                    console.log('Successfully logged out!')
                })
                .catch(error => {
                    alert(error.message)
                })
            }

        }
    }
    
</script>

<style scoped>
    header.scrolled-nav {
        z-index: 99;
        width: 100%;
        position: fixed;
        transition: 0.5 ease all;
        color: #fff;
    }

    nav.flexbox {
        position: relative;
        display: flex;
        flex-direction: row;
        align-items: center;
        width: 100%;
        margin: auto;
        background-color: #bebebe;
    }

    .buttons {
        display: flex;
        align-items: center;
        position: absolute;
        padding: 10px;
        right: 10px;
    }

    .btn {
        background-color: #0069e0;
        border-radius: 20px;
        border-color: white;
        color:white;
        padding: 5px 20px;
        margin-left: 5px;
    }

    .btn:hover {
        box-shadow: 0 3px 5px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
        background-color: #25deff; /* Green */
        color: #212121;
        cursor: pointer;
        transition-duration: 0.4s;
    }

    .branding {
        display: flex;
        align-items: center;
        padding: 10px 20px;
    }

    img {
        width: 30px;
    }

</style>