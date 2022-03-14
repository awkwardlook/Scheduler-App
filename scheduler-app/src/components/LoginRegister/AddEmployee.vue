<template>
<div class="AddEmployeeForm">
    
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

    <label for="password"> Default Password: </label>
    <input type="password" id="password" required="" placeholder="Password" v-model="password" />
    <br><br>
        
    <p><button type="submit" id="regbutton" @click="addEmployee">Register Employee</button></p>

</div>
</template>

<script setup>
  import { ref } from 'vue'
  import firebase from 'firebase'
  import { useRouter } from 'vue-router' // import router
  
  const router = useRouter() // get reference to vue router
  
  // ref for all credentials
  const email = ref('')
  const password = ref('')
  const username = ref('')
  const companyUEN = ref('')
  const companyName = ref('')

  const db = firebase.firestore()
  const auth = firebase.auth()
  const employeesCollection = db.collection('employees')
  const usersCollection = db.collection('users')


const addEmployee = () => {
    
    auth.createUserWithEmailAndPassword(email.value, password.value)
	
    .then(() => {
        
        employeesCollection.doc(email.value).set({
            email: email.value,
            username: username.value,
            companyUEN: companyUEN.value,
            companyName: companyName.value,
            password: password.value	
        })

        usersCollection.doc(email.value).set({
		// email: email.value,
		// username: username.value,
		// companyUEN: companyUEN.value,
		// companyName: companyName.value	
        }) 

        alert('Successully added employee!')
		console.log('Successully added employee!')
		router.push('/employerprof')
    })
    
    .catch(error => {
		console.log(error.code)
		alert(error.message)
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

    .AddEmployeeForm{
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

</style>>