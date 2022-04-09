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
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
  'Lucida Sans', Arial, sans-serif;
}  

#headers {
font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
  'Lucida Sans', Arial, sans-serif;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
text-align: center;
color: #2c3e50;
}
</style>
