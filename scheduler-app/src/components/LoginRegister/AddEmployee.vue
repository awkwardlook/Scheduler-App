<template>
<!-- Form component for employer to add employees -->
<br>
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
        
    <label for="department"> Department: </label>
    <input type = "text" id = "department" required="" placeholder="Department" v-model="department" />     
    <br><br>
        
    <label for="company"> Company Name: </label> 
    <input type = "text" id = "company" required="" placeholder="Company Name" v-model="company" /> 
    <br><br>

    <label for="password"> Default Password: </label>
    <input type="password" id="password" required="" placeholder="Password" v-model="password" />
    <br><br>

    <v-layout row>
      <v-flex  md6 offset-sm3 >
       <div>
         <div >
           <v-button id="profilepic" @click="click1">Click here to upload Profile Picture</v-button>
           <input type="file" ref="input1"
            style="display: none" height="500px" width="200px"
            @change="previewImage" accept="image/*" >                
         </div>
 
       <div v-if="imageData!=null">                     
          <img class="preview"  :src="img1">
       <br>
       </div>   
      
       </div>
       </v-flex>
    </v-layout>


        
    <p><v-button type="submit" id="regbutton" @click="addEmployee()">Register Employee</v-button></p>

</div>
<br><br>
</template>

<script>
import firebase from 'firebase'
import { useRouter } from 'vue-router' // import router
import Button from '../Button/Button.vue'

const db = firebase.firestore()
const auth = firebase.auth()
const employeesCollection = db.collection('employees')
const usersCollection = db.collection('users')

export default {
    data() {
        return {
            user: false,
            email: "",
            name: "",
            gender: "",
            pnum: "",
            password: "",
            department: "",
            company: "",
            img1: '',
            imageData: null,
            router: useRouter()
        }
    },
    mounted() {
        auth.onAuthStateChanged((user) => {
            if (user) {
                this.user = user;
            }
        })
    },
    components: {
        'v-button': Button
    },
    methods: {
        async addEmployee() {
            try {
                // firebase authentication
                await auth.createUserWithEmailAndPassword(this.email, this.password);
                await auth.currentUser.updateProfile({
                    displayName: this.name
                    
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
                    password: this.password,
                    // profile pic can be added here
                    dp: this.img1
                });
                auth.signOut().then(() => {
                    auth.signInWithEmailAndPassword(window.localStorage.getItem('email'), window.localStorage.getItem('password')).then(() => {
                        alert('Successfully added employee')
                        this.router.push('/profile');                  
                    });
                });
            } catch (e) {
                alert(e.message);
            }
        },
        click1() {
        this.$refs.input1.click()   
        },

        previewImage(event) {
        this.uploadValue=0;
        this.img1=null;
        this.imageData = event.target.files[0];
        this.onUpload()
        },

        onUpload(){
        this.img1=null;
        const storageRef=firebase.storage().ref(`${this.imageData.name}`).put(this.imageData);
        storageRef.on(`state_changed`,snapshot=>{
        this.uploadValue = (snapshot.bytesTransferred/snapshot.totalBytes)*100;
            }, error=>{console.log(error.message)},
        ()=>{this.uploadValue=100;
            storageRef.snapshot.ref.getDownloadURL().then((url)=>{
                this.img1 = url;
                console.log(this.img1)
                });
            }      
            );
        },
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

    .AddEmployeeForm{
        text-align: center;
        font-size: 20px;
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
    
    #profilepic {
        background: white;
        color: black;
        border:1px grey solid;
    }

</style>>