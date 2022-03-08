<template>
<div id="headers">
  <!-- HEADERS ARE HERE -->
    <router-link to="/login">Login</router-link> |
    <router-link to="/register">Register</router-link> |
    <router-link to="/home">Home</router-link> |
    <router-link to="/mplyrprof">Profile</router-link>

  </div>
<router-view/>
</template>

<script>

export default {
  name: 'App',
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
