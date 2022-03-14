<template>
  <div id="headers">
    <!-- link home router to logo on log-in and signup page then delete this router -->
    <router-link to="/">Home</router-link> |
    <!-- adding all pages for our navigation -->
    <router-link to="/eregister">E Register</router-link> |
    <router-link to="/login">Login</router-link> |
    <router-link to="/employerprof">E Profile</router-link> |
    <router-link to="/addemployee">add E</router-link> |
    <router-link to="/employeeschedule">E Sched</router-link>
  </div>
  <router-view/>
</template>

<script>
export default {
  name: 'App',
}

</script>

<style>
body{  
  margin: 0;  
  padding: 0;  
  background-color:#6abadeba;  
  font-family: 'Arial';  
}  

#headers {
font-family: Avenir, Helvetica, Arial, sans-serif;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
text-align: center;
color: #2c3e50;
}
</style>
