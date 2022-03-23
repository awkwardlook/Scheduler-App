<template>
<div v-if = "user">
    <EmployerHeader/>
    <br><br>
    <h1>Employer Schedule Page</h1>
    <AvailList/>
</div>
</template>

<style>
</style>

<script>
import EmployerHeader from '../Header/EmployerHeader.vue'
import AvailList from './AvailList.vue'
import firebase from 'firebase'

const auth = firebase.auth();

export default {
    components: {
        EmployerHeader,
        AvailList
    },
    data() {
        return {
            user: false
        }
    },
    mounted() {
        auth.onAuthStateChanged((user) => {
            if (user) {
                this.user = user;
            }
        });
    }
}
</script>
