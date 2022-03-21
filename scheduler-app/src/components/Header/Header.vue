<template>
    <header :class="{ 'scrolled-nav': scrollPosition }">
        <nav>
            <div class="branding">
                <img src="@/assets/scheduler_logo2.png" alt=""/>
            </div>
        </nav>  
        </header>
</template>

<style scoped>
    header {
        background-color: grey;
        z-index: 99;
        width: 100%;
        position: fixed;
    }

    nav {
        display: flex;
        flex-direction: row;
        padding: 12px 0;
        transition: .5s ease all;
        width: 90%;
        margin: 0 auto;
    }

    .branding {
        display: flex;
        align-items: center;
    }

    img {
        width: 50px;
        transition: 0.5 ease all;
    }
</style>

<script>
    export default {
        name: "header",
        
    }
    
</script>