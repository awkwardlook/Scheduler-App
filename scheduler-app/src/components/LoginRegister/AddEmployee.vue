<template>
<div class="AddEmployeeForm">
    <h1> Add Employee </h1>
       <label for="name"> Name: </label>
    <input type = "text" id = "name" required="" placeholder="Name" v-model="name" /> 
    <br><br>

    <label for="email"> Email: </label>
    <input type="text" id = "email" required="" placeholder="Email" v-model="email" /> 
    <br><br>

    <label for="pnum"> Phone Number: </label>
    <input type = "text" id = "pnum" required="" placeholder="12345678" v-model="pnum" />     
    <br><br>

    <label for="gender"> Gender: </label>
    <input type = "text" id = "gender" required="" placeholder="Male/Female" v-model="gender" />     
    <br><br>
        
    <label for="companyUEN"> Department: </label>
    <input type = "text" id = "companyUEN" required="" placeholder="Department" v-model="companyUEN" />     
    <br><br>
        
    <label for="company"> Company Name: </label> 
    <input type = "text" id = "company" required="" placeholder="Company Name" v-model="company" /> 
    <br><br>

    <label for="password"> Default Password: </label>
    <input type="password" id="password" required="" placeholder="Password" v-model="password" />
    <br><br>


        
    <p><button type="submit" id="regbutton" @click="addEmployee()">Register Employee</button></p>

</div>
</template>

<script>
import firebase from 'firebase'
import { useRouter } from 'vue-router' // import router

const db = firebase.firestore()
const auth = firebase.auth()
const employeesCollection = db.collection('employees')
const usersCollection = db.collection('users')

export default {
    data() {
        return {
            email: "",
            name: "",
            gender: "",
            pnum: "",
            password: "",
            department: "",
            company: "",
            router: useRouter()
        }
    },
    methods: {
        async addEmployee() {
            try {
                // firebase authentication
                await auth.createUserWithEmailAndPassword(this.email, this.password);
                await auth.currentUser.updateProfile({
                    email: this.email,
                    username: this.name,
                    company: this.company,
                    gender: this.gender,
                    pnum: this.pnum,
                    department: this.department,
                    password: this.password
                });
                // user collection in  firestore
                await usersCollection.doc(this.email).set({});
                // employees collection in firestore
                await employeesCollection.doc(this.email).set({
                    email: this.email,
                    username: this.name,
                    company: this.company,
                    gender: this.gender,
                    pnum: this.pnum,
                    department: this.department,
                    password: this.password
                });
                alert('Sucessfully added employee!');
                this.router.push('/employerprof');
            } catch (e) {
                alert(e.message);
            }
        }
    }
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