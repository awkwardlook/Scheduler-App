<template>
<Header/>
<br><br>
<Loginbox/>
<br><br>
</template>

<script>
import Header from '../components/Header/Header.vue'
import Loginbox from '../components/LoginRegister/Loginbox.vue'

export default {
  name: 'Login',
  components: {
    Header,
    Loginbox
  }
}
</script>

<style>

</style>