<template>
<!-- code from App.vue -->

<h1>Home</h1>
  <Header/>
  <img alt="Vue logo" src="@/assets/logo.png">
  
</template>

<script>
import Header from '@/components/NavBar.vue'

export default {
  name: 'Home',
  components: {
    Header,
  }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
