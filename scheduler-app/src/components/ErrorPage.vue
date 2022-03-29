<template>
<div style="text-align: center;">
    <h1>Unable to load page</h1>
    <h3>Please sign in again</h3>
    <button class = "bbutton" @click="$router.push('/')">Sign in</button>
</div>
</template>

<script>
export default {}
</script>

<style scoped>
.bbutton{
        background-color: #0069e0; 
        border-radius: 8px;
        color: white;
        padding: 10px 24px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 14px;
        width: 100px;
    }
</style>