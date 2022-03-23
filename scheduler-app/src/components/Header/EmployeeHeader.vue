<template>
    <div class="header">
        <button @click="$router.push('/employeeschedule')">Schedule</button>
        <button @click="$router.push('/employeetimesheet')">Timesheet</button>
        <button @click="$router.push('/employeeprof')">Profile</button>
        <button @click="logout">Sign Out</button>
    </div>
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

<style>
.header {
    align-content: center;
}
</style>