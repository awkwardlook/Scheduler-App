<template>
  <div id="headers">
    <!-- <NavBar/> -->
    <!-- delete the router links once the navbar vue app works -->
    <router-link to="/login">Login</router-link> |
    <router-link to="/register">Register</router-link> |
    <router-link to="/home">Home</router-link> |
    <router-link to="/employerprof">Profile</router-link>
  </div>
  <router-view/>
</template>

<script>
// import NavBar from '@/components/NavBar.vue'
export default {
  name: 'App',
  // components: NavBar,
}

</script>

<style>
#headers {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
