<template>
<Header/>
<LoginBox/>
	<h1> mi at login page</h1>
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