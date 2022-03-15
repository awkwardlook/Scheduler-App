<template>
  <div id="headers">
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
font-family: Rosaria, Helvetica, Arial, sans-serif;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
text-align: center;
color: #2c3e50;
}
</style>
