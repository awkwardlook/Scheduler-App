<template>
  <div id="headers">
    <!-- link home router to logo on log-in and signup page then delete this router -->
    <router-link to="/home">Home</router-link> |
    <!-- set up registering page before deleting this router -->
    <router-link to="/employerprof">Profile</router-link>
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
