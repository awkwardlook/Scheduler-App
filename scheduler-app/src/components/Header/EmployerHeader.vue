<template>
    <div class="header">
        <button @click="$router.push('/employerschedule')">Schedule</button>
        <button @click="$router.push('/employerprof')">Profiles</button>
        <button @click="$router.push('/analytics')">Analytics</button>
        <button @click="$router.push('/addemployee')">Add Employee</button>
        <button @click="logout">Sign Out</button>
    </div>
</template>

<style>
.header {
    align-content: center;
}
</style>

<script>

    import firebase from 'firebase'

    const auth = firebase.auth()

    export default {
        mounted(){},
        methods: {
            logout() {
                auth.signOut()
                .then(() => {
                    alert('Successfully logged out!')
                    console.log('Successfully logged out!')
                    this.$router.replace('/')
                })
                .catch(error => {
                    alert(error.message)
                })
            }

        }
    }
    
</script>