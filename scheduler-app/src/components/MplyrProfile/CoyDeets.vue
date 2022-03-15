<template>
    <div class= "coydeets">
        <h1>Company Details</h1>
        <div class="header">
            <h2>Company Name</h2>
            <h5>-Company Logo-</h5>
        </div>

        <div class="description">
            <h1 id="desc">Company Description</h1>
                <table id = "table" class = "auto=index">
                    <tr>
                        <th>The quick brown fox jumps oover the lazy dog</th>
                    </tr>
                </table>
            
        </div>
    </div>

</template>

<script>
//   const db = firebase.firestore()
//   const auth = firebase.auth()
//   const employeesCollection = db.collection('employees')
//   const usersCollection = db.collection('users')

export default {
    mounted(){}
}
</script>

<style scoped>
    .header{
        height: 50px;
        background-color:  #ffffff;
        text-align: center;
    }

    .coydeets{
        text-align: center;
        font-size: 24px;
        width: 1000px;  
        overflow: hidden;  
    }

    .header{
        float: left;
        width: 500;
        margin-left: 10px;
        margin-top: 10px;
        padding: 5px;
        /* border: 2px solid blue; */
    }

    .description{
        float: right;
        width: 500px;
        margin-left: 10px;
        margin-top: 10px;
        padding: 5px;
        /* border: 2px solid blue; */
    }
</style>

