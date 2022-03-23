<template>
<!-- code from App.vue -->

  <Header/>
  <Landing-card/>
  
</template>

<script>
//import Header from '@/components/Header/Header.vue'
import LandingCard from '@/components/LandingPage/LandingCard.vue';

export default {
  name: 'Home',
  components: {
    //Header,
    LandingCard,
  }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
