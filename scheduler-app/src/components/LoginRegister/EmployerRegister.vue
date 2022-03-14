<template>
<div class="RegisterForm">
    
    <label for="email"> Email: </label>
    <input type="text" id = "email" required="" placeholder="Email" v-model="email" /> 
    <br><br>
        
    <label for="username"> Username: </label>
    <input type = "text" id = "username" required="" placeholder="Username" v-model="username" /> 
    <br><br>
        
    <label for="companyUEN"> Company UEN: </label>
    <input type = "text" id = "companyUEN" required="" placeholder="Company UEN" v-model="companyUEN" /> 
    <br><br>
        
    <label for="companyname"> Company Name: </label>
    <input type = "text" id = "companyname" required="" placeholder="Company Name" v-model="companyName" /> 
    <br><br>
        
    <label for="password"> Password: </label>
    <input type="password" id="password" required="" placeholder="Password" v-model="password" />
    <br><br>
        
    <p><button type="submit" id="regbutton" @click="register">Submit</button></p>

</div>
</template>

<script setup>
  import { ref } from 'vue'
  import firebase from 'firebase'
  import { useRouter } from 'vue-router' // import router
  
  const router = useRouter() // get reference to vue router
  
  // ref for all credentials
  const email = ref('')
  const username = ref('')
  const companyUEN = ref('')
  const companyName = ref('')
  const password = ref('')

  const auth = firebase.auth()
  const db = firebase.firestore()
  const employersCollection = db.collection('employers')

  const register = () => {
    auth
      .createUserWithEmailAndPassword(email.value, password.value) // create employer account
      
      .then(() => {
        console.log('Successfully registered!');
        alert('Successfully registered!');

        // add credentials to firestore upon successful registration
        // doc ID is email
        employersCollection.doc(email.value).set({
          email: email.value,
          username: username.value,
          companyUEN: companyUEN.value,
          companyName: companyName.value
        })

        router.push('/employerprof')
        console.log(auth.currentUser.uid.toString())
      })
      .catch(error => {
        console.log(error.code)
        alert(error.message);
      });
  }
</script>


<style>
    .header{
        height: 50px;
        background-color: grey;
        text-align: center;
        font-size: 17px;
    }

    #desc{
        height: 50px;
        background-color: none;
        text-align: center;
        font-size: 16px;
    }

    #regbutton{
        background-color: #0069e0; 
        border-radius: 30px;
        color: white;
        padding: 15px 32px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 24px;
    }

    .RegisterForm{
        text-align: center;
        font-size: 24px;
        width: 382px;  
        overflow: hidden;  
        margin: auto;  
        margin: 20 0 0 450px;  
        padding: 80px;  
        background: #ffffff;  
        border-radius: 15px ;
    }
    
    label{
			display: inline-block;
			width: 200px;
			text-align: right;
			margin-right: 5px;	
		}

</style>