<template>
<Header/>
<br><br>
<LoginBox/>
</template>

<script>
import Header from '@/components/Header/Header.vue'
import LoginBox from '@/components/LoginRegister/Loginbox.vue'

export default {
  name: 'Login',
  components: {
    LoginBox,
    Header
  }
}
</script>

<style>

</style>