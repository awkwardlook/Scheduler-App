<template>
    <div class = "allEm">
        <h1 id="header">All Employees </h1>
        <br>
            <table id = "table" class = "auto=index">
                    <tr>
                        <th>No.</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone Number</th>
                        <th>Department</th>
                        <th>Delete</th>
                    </tr>
                </table>
        <br><br><br><br>
    </div>

    <br>
</template>

<script>
import firebase from 'firebase'

const auth = firebase.auth()
const db = firebase.firestore()
const users = db.collection("users")
const employees = db.collection("employees")

export default {
    data() {
        return {
            user: false
        }
    },
    mounted() {       
        auth.onAuthStateChanged((user) => {
            if (user) {
                this.user = user;
                this.display();
            }
        });
    },
    methods: {
        cleanTable(tb) {
            while (tb.rows.length > 1) {
                tb.deleteRow(1)
            }
            return tb;
        },
        display() {
            var ind = 1;
            var table = document.getElementById("table");
            table = this.cleanTable(table);
            employees.get().then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    const employee = doc.data();
                    var row = table.insertRow(ind);

                    var cell1 = row.insertCell(0);
                    var cell2 = row.insertCell(1);
                    var cell3 = row.insertCell(2);
                    var cell4 = row.insertCell(3);
                    var cell5 = row.insertCell(4);
                    var cell6 = row.insertCell(5);

                    cell1.innerHTML = ind;
                    cell2.innerHTML = employee.username;
                    cell3.innerHTML = employee.email;
                    cell4.innerHTML = employee.pnum;
                    cell5.innerHTML = employee.department;

                    var button = document.createElement("button");
                    button.innerHTML = "Delete";
                    button.onclick = () => this.deleteinstrument(employee.email, employee.username, employee.password);
                    cell6.appendChild(button);
                    ind += 1;
                });
            }).catch((e) => {
                alert(e.message);
            });
        },
        async deleteinstrument(email, username, password) {
            alert("You are going to delete " + username);
            try {
                await users.doc(email).delete();
                await employees.doc(email).delete();
                auth.signOut().then(() => {
                    auth.signInWithEmailAndPassword(email, password).then(() => {
                        auth.currentUser.delete().then(() => {
                            auth.signOut().then(() => {
                                auth.signInWithEmailAndPassword(window.localStorage.getItem('email'), window.localStorage.getItem('password')).then(() => {
                                    var tb = document.getElementById("table");
                                    while (tb.rows.length > 1) {
                                        tb.deleteRow(1)
                                    }
                                    this.display();
                                    alert("Sucessfully deleted " + username);
                                });
                            });
                        });
                    });
                });
            } catch (e) {
                alert(e.message);
            }
        }
    }
}
</script>

<style scoped>
#header {
    text-align: center;
    font-size: 60px;
    width: 1000px;  
    overflow: hidden;  
    margin: auto;
    margin-left: -50px;
}

.allEm {
    text-align: center;
    font-size: 24px;
    width: 900px;  
    overflow: hidden;  
    margin: auto;
    /* top right bottom left */
    padding: 80px;  
    background: #ffffff;  
    border-radius: 15px ;
    margin-bottom: -100px;
}

table {
    font-family: Arial, Helvetica, sans-serif;
    border-collapse: collapse;
    width: 55%;
    margin: auto;
}

tr:nth-child(even){
    background-color: rgb(255, 255, 255);
    text-align: center;
}

th, td {
    border: 1px solid #000000;
    text-align: center;
    padding: 8px;
}
</style>

